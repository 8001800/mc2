pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/lifecycle/Destructible.sol";
import "zeppelin-solidity/contracts/token/StandardToken.sol";


contract TokenBroker is Destructible {
    enum ChannelState { Open, Settling, Settled }
    struct PaymentChannel {
        address sender;
        address receiver;
        address erc20Contract;
        uint256 value;
        uint settlementPeriod;
        ChannelState state;
        /* until state is invalid */
        uint until;
        uint256 payment;
    }

    mapping(bytes32 => PaymentChannel) channels;
    uint32 chainId;
    uint32 id;

    event DidCreateChannel(bytes32 channelId, address indexed sender, address indexed receiver, uint256 value, uint settlementPeriod, uint until);
    event DidDeposit(bytes32 indexed channelId, uint256 value);
    event DidStartSettle(bytes32 indexed channelId, uint256 payment);
    event DidSettle(bytes32 indexed channelId, uint256 payment, uint256 oddValue);

    function TokenBroker(uint32 _chainId) public {
        chainId = _chainId;
        id = 0;
    }

    /* Create payment channel */
    function createChannel(address erc20Contract, address receiver, uint duration, uint settlementPeriod, uint256 value) public returns(bytes32) {
        var channelId = keccak256(now + id++); // solium-disable-line
        var sender = msg.sender;
        var c = StandardToken(erc20Contract);
        require(c.transferFrom(sender, address(this), value));

        channels[channelId] = PaymentChannel(
            sender,
            receiver,
            erc20Contract, 
            value,
            settlementPeriod,
            ChannelState.Open,
            block.timestamp + duration, // solium-disable-line
            0);
        DidCreateChannel(channelId, sender, receiver, value, settlementPeriod, block.timestamp + duration); // solium-disable-line

        return channelId;
    }

    /* Add funds to the channel */
    // function deposit(bytes32 channelId, uint256 value) public {
    function deposit(bytes32 channelId, uint value) public {
        require(canDeposit(msg.sender, channelId));

        var channel = channels[channelId];
        var c = StandardToken(channel.erc20Contract);
        require(c.transferFrom(channel.sender, address(this), value));

        channel.value += value;

        DidDeposit(channelId, value);
    }

    function claim(bytes32 channelId, uint256 payment, uint8 v, bytes32 r, bytes32 s) public {
        if (!canClaim(channelId, payment, v, r, s)) {
            return;
        }

        settle(channelId, payment);
    }

    /* Sender starts settling */
    function startSettle(bytes32 channelId, uint256 payment) public {
        require(canStartSettle(msg.sender, channelId));
        var channel = channels[channelId];
        channel.state = ChannelState.Settling;
        channel.until = now + channel.settlementPeriod; // solium-disable-line
        channel.payment = payment;
        DidStartSettle(channelId, payment);
    }

    /* Sender settles the channel, if receiver have not done that */
    function finishSettle(bytes32 channelId) public {
        require(canFinishSettle(msg.sender, channelId));
        settle(channelId, channels[channelId].payment);
    }

    function close(bytes32 channelId)  public {
        var channel = channels[channelId];
        if (channel.state == ChannelState.Settled && (msg.sender == owner || msg.sender == channel.sender || msg.sender == channel.receiver)) {
            if (channel.value > 0) {
                require(channel.sender.send(channel.value));
            }
            delete channels[channelId];
        }
    }

    /******** BEHIND THE SCENES ********/

    function settle(bytes32 channelId, uint256 payment) public {
        var channel = channels[channelId];
        uint256 paid = payment;
        uint256 oddMoney = 0;
        var c = StandardToken(channel.erc20Contract);

        if (payment > channel.value) {
            paid = channel.value;
            require(c.transfer(channel.receiver, paid));
        } else {
            require(c.transfer(channel.receiver, paid));
            oddMoney = channel.value - paid;

            require(c.transfer(channel.sender, oddMoney));
            channel.value = 0;
        }

        channels[channelId].state = ChannelState.Settled;
        DidSettle(channelId, payment, oddMoney);
    }

    /******** CAN CHECKS ********/

    function canDeposit(address sender, bytes32 channelId) public constant returns(bool) {
        var channel = channels[channelId];
        // DW: Do we really need to check that only the sender is allowed to
        //     deposit?
        return channel.state == ChannelState.Open &&
            channel.sender == sender;
    }

    function canClaim(bytes32 channelId, uint256 value, uint8 v, bytes32 r, bytes32 s) public constant returns(bool) {
        var channel = channels[channelId];
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 hh = keccak256(channelId, value, address(this), chainId);
        bytes32 prefixedHash = keccak256(prefix, hh);
        return (channel.state == ChannelState.Open || channel.state == ChannelState.Settling) &&
        channel.sender == ecrecover(prefixedHash, v, r, s);
    }

    function isStateUpdateSigValid(
        address sender,
        uint32 _chainId, address contractId, bytes32 channelId,
        uint256 payment,
        uint8 sigV, bytes32 sigR, bytes32 sigS
    ) 
    public 
    returns(bool) 
    {
        var actualHash = sha256(
            _chainId, contractId, channelId,
            payment
        );

        return (sender == ecrecover(actualHash, sigV, sigR, sigS));
    }

    function canStartSettle(address sender, bytes32 channelId) public constant returns(bool) {
        var channel = channels[channelId];
        return channel.state == ChannelState.Open &&
        channel.sender == sender;
    }

    function canFinishSettle(address sender, bytes32 channelId) public constant returns(bool) {
        var channel = channels[channelId];
        return channel.state == ChannelState.Settling && (sender == channel.sender || sender == owner) && channel.until <= now; // solium-disable-line
    }

    /******** READERS ********/

    function getState(bytes32 channelId) public constant returns(ChannelState) {
        return channels[channelId].state;
    }

    function getUntil(bytes32 channelId) public constant returns(uint) {
        return channels[channelId].until;
    }

    function getPayment(bytes32 channelId) public constant returns(uint) {
        return channels[channelId].payment;
    }

    function isOpenChannel(bytes32 channelId) public constant returns(bool) {
        var channel = channels[channelId];
        return channel.state == ChannelState.Open && channel.until >= now; // solium-disable-line
    }
}
