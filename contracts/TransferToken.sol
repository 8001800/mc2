pragma solidity ^0.4.19;

import "./IRegistry.sol";
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


// @title Proxy call via counterfactual address.
contract TransferToken {
    function execute(address _registry, address _token, bytes32 _destination, uint256 amount) public {
        IRegistry registry = IRegistry(_registry);
        address destination = registry.resolve(_destination);
        require(destination != address(0x0));

        StandardToken token = StandardToken(_token);
        require(token.transfer(destination, amount));
    }
}