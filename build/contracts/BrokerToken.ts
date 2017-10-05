export default {
  "contract_name": "BrokerToken",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getState",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "duration",
          "type": "uint256"
        },
        {
          "name": "settlementPeriod",
          "type": "uint256"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "createChannel",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "settle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "close",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canFinishSettle",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canStartSettle",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        },
        {
          "name": "h",
          "type": "bytes32"
        },
        {
          "name": "v",
          "type": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "claim",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "h",
          "type": "bytes32"
        },
        {
          "name": "v",
          "type": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "canClaim",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "_chainId",
          "type": "uint32"
        },
        {
          "name": "contractId",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        },
        {
          "name": "sigV",
          "type": "uint8"
        },
        {
          "name": "sigR",
          "type": "bytes32"
        },
        {
          "name": "sigS",
          "type": "bytes32"
        }
      ],
      "name": "isStateUpdateSigValid",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "startSettle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "isOpenChannel",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canDeposit",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getPayment",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getUntil",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "finishSettle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "destroyAndSend",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_chainId",
          "type": "uint32"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "settlementPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "until",
          "type": "uint256"
        }
      ],
      "name": "DidCreateChannel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "DidDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "DidStartSettle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payment",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "oddValue",
          "type": "uint256"
        }
      ],
      "name": "DidSettle",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b604051602080611116833981016040528080519150505b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6002805463ffffffff191663ffffffff83161767ffffffff00000000191690555b505b61109f806100776000396000f300606060405236156100f65763ffffffff60e060020a60003504166309648a9d81146100fb5780632b0109be146101355780632d219b761461017557806339c79e0c1461019c5780633c46f72f146101b457806368b45a2c146101ea57806383197ef01461022057806383d36a6a146102355780638da5cb5b1461026b57806398c321281461029a5780639a851616146102d3578063ab40428e14610328578063d0fa96ba14610343578063e20bff5c146101ea578063e66eefc8146103a3578063eb2243f8146103cb578063f03cd5ca146103f2578063f29f7d551461041a578063f2fde38b1461043e578063f5074f411461045f575b600080fd5b341561010657600080fd5b610111600435610480565b6040518082600281111561012157fe5b60ff16815260200191505060405180910390f35b341561014057600080fd5b610163600160a060020a036004358116906024351660443560643560843561049b565b60405190815260200160405180910390f35b341561018057600080fd5b61019a600160a060020a0360043516602435604435610701565b005b34156101a757600080fd5b61019a60043561094b565b005b34156101bf57600080fd5b6101d6600160a060020a0360043516602435610a6d565b604051901515815260200160405180910390f35b34156101f557600080fd5b6101d6600160a060020a0360043516602435610add565b604051901515815260200160405180910390f35b341561022b57600080fd5b61019a610b23565b005b341561024057600080fd5b61019a600160a060020a036004351660243560443560643560ff6084351660a43560c435610b4f565b005b341561027657600080fd5b61027e610b7c565b604051600160a060020a03909116815260200160405180910390f35b34156102a557600080fd5b6101d660043560243560ff60443516606435608435610b8b565b604051901515815260200160405180910390f35b34156102de57600080fd5b6101d6600160a060020a0360043581169063ffffffff60243516906044351660643560843560ff60a4351660c43560e435610c60565b604051901515815260200160405180910390f35b341561033357600080fd5b61019a600435602435610d6d565b005b341561034e57600080fd5b6101d6600435610df8565b604051901515815260200160405180910390f35b34156101f557600080fd5b6101d6600160a060020a0360043516602435610add565b604051901515815260200160405180910390f35b34156103ae57600080fd5b610163600435610e7f565b60405190815260200160405180910390f35b34156103d657600080fd5b61019a600160a060020a0360043516602435604435610e97565b005b34156103fd57600080fd5b610163600435610f9f565b60405190815260200160405180910390f35b341561042557600080fd5b61019a600160a060020a0360043516602435610fb7565b005b341561044957600080fd5b61019a600160a060020a0360043516610ff0565b005b341561046a57600080fd5b61019a600160a060020a0360043516611048565b005b60008181526001602052604090206004015460ff165b919050565b6002805467ffffffff000000001981166401000000009182900463ffffffff908116600181019091169092021790915560009081908190819060405163ffffffff9190911660e060020a0281526004016040518091039020925033915088905080600160a060020a03166323b872dd83308860006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561056557600080fd5b6102c65a03f1151561057657600080fd5b50505060405180519050151561058b57600080fd5b60e06040519081016040908152600160a060020a0380851683528a1660208301528101869052606081018790526080810160005b8152428901602080830191909152600060409283018190528681526001909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0391909116178155602082015160018201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556040820151816002015560608201518160030155608082015160048201805460ff1916600183600281111561066f57fe5b021790555060a0820151816005015560c0820151816006015590505087600160a060020a031682600160a060020a03167f2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a466285888a8c4201604051938452602084019290925260408084019190915260608301919091526080909101905180910390a38293505b50505095945050505050565b600082815260016020526040812060028101549091839186908311156107b95760028401546001850154909350600160a060020a038083169163a9059cbb91168560006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561078e57600080fd5b6102c65a03f1151561079f57600080fd5b5050506040518051905015156107b457600080fd5b6108df565b6001840154600160a060020a038083169163a9059cbb91168560006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561081e57600080fd5b6102c65a03f1151561082f57600080fd5b50505060405180519050151561084457600080fd5b60028401548454908490039250600160a060020a038083169163a9059cbb91168460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156108b157600080fd5b6102c65a03f115156108c257600080fd5b5050506040518051905015156108d757600080fd5b600060028501555b6000868152600160208190526040909120600401805460029260ff1990911690835b0217905550857fabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125868460405191825260208201526040908101905180910390a25b50505050505050565b600081815260016020526040902060025b600482015460ff16600281111561096f57fe5b1480156109bc575060005433600160a060020a03908116911614806109a15750805433600160a060020a039081169116145b806109bc5750600181015433600160a060020a039081169116145b5b15610a6857600081600201541115610a095780546002820154600160a060020a039091169080156108fc0290604051600060405180830381858888f193505050501515610a0957600080fd5b5b60008281526001602081905260408220805473ffffffffffffffffffffffffffffffffffffffff1990811682559181018054909216909155600281018290556003810182905560048101805460ff1916905560058101829055600601555b5b5050565b60008181526001602081905260408220905b600482015460ff166002811115610a9257fe5b148015610ac257508054600160a060020a0385811691161480610ac25750600054600160a060020a038581169116145b5b8015610ad3575042816005015410155b91505b5092915050565b6000818152600160205260408120815b600482015460ff166002811115610b0057fe5b148015610ad357508054600160a060020a038581169116145b91505b5092915050565b60005433600160a060020a03908116911614610b3e57600080fd5b600054600160a060020a0316ff5b5b565b610b5c8685858585610b8b565b1515610b6757610942565b610942878787610701565b5b50505050505050565b600054600160a060020a031681565b6000858152600160205260408120815b600482015460ff166002811115610bae57fe5b1480610bcd575060015b600482015460ff166002811115610bcb57fe5b145b8015610c5357506001868686866040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610c3957600080fd5b5050602060405103518154600160a060020a039081169116145b91505b5095945050505050565b60008060028989898960006040516020015260405163ffffffff9490941660e060020a028452600160a060020a03929092166c010000000000000000000000000260048401526018830152603882015260580160206040518083038160008661646e5a03f11515610cd057600080fd5b50506040518051905090506001818686866040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610d4057600080fd5b505060206040510351600160a060020a03168a600160a060020a03161491505b5098975050505050505050565b6000610d793384610add565b1515610d8457600080fd5b50600082815260016020819052604090912060048101805491929160ff191682805b021790555060038101544201600582015560068101829055827f673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d5008360405190815260200160405180910390a25b505050565b6000818152600160205260408120815b600482015460ff166002811115610e1b57fe5b148015610e2c575042816005015410155b91505b50919050565b600081815260016020526040812081610aed565b600482015460ff166002811115610b0057fe5b148015610ad357508054600160a060020a038581169116145b91505b5092915050565b6000818152600160205260409020600601545b919050565b600080610ea43385610add565b1515610eaf57600080fd5b5050600082815260016020526040808220805490928692600160a060020a03808516936323b872dd9391169130918891516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b1515610f3357600080fd5b6102c65a03f11515610f4457600080fd5b505050604051805190501515610f5957600080fd5b60028201805484019055837f6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe3984248460405190815260200160405180910390a25b5050505050565b6000818152600160205260409020600501545b919050565b610fc13382610a6d565b1515610fcc57600080fd5b600081815260016020526040902060060154610a689083908390610701565b5b5050565b60005433600160a060020a0390811691161461100b57600080fd5b600160a060020a03811615611043576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b60005433600160a060020a0390811691161461106357600080fd5b80600160a060020a0316ff5b5b505600a165627a7a723058206b357cc1ed2e86468652d9cc5a1104afa47cf7802c26d78fe1ac88a4c1fb7bf20029",
  "networks": {
    "3": {
      "events": {
        "0x2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a4662": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "settlementPeriod",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "until",
              "type": "uint256"
            }
          ],
          "name": "DidCreateChannel",
          "type": "event"
        },
        "0x6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe398424": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "DidDeposit",
          "type": "event"
        },
        "0x673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d500": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "payment",
              "type": "uint256"
            }
          ],
          "name": "DidStartSettle",
          "type": "event"
        },
        "0xabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "payment",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "oddValue",
              "type": "uint256"
            }
          ],
          "name": "DidSettle",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x710f743116415519779ba229717ee74766907eea",
      "updated_at": 1507209985048
    },
    "999": {
      "events": {
        "0x2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a4662": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "settlementPeriod",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "until",
              "type": "uint256"
            }
          ],
          "name": "DidCreateChannel",
          "type": "event"
        },
        "0x6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe398424": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "DidDeposit",
          "type": "event"
        },
        "0x673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d500": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "payment",
              "type": "uint256"
            }
          ],
          "name": "DidStartSettle",
          "type": "event"
        },
        "0xabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "channelId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "payment",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "oddValue",
              "type": "uint256"
            }
          ],
          "name": "DidSettle",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8782a714fa24e789c8eb3aa1d17e774a74ebff67",
      "updated_at": 1507021129450
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1507209985048
}