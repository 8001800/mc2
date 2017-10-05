export default {
  "contract_name": "StandardToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
      "inputs": [],
      "name": "totalSupply",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b6104da8061001f6000396000f300606060405236156100755763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461007a57806318160ddd146100b057806323b872dd146100d557806370a0823114610111578063a9059cbb14610142578063dd62ed3e14610178575b600080fd5b341561008557600080fd5b61009c600160a060020a03600435166024356101af565b604051901515815260200160405180910390f35b34156100bb57600080fd5b6100c3610256565b60405190815260200160405180910390f35b34156100e057600080fd5b61009c600160a060020a036004358116906024351660443561025c565b604051901515815260200160405180910390f35b341561011c57600080fd5b6100c3600160a060020a0360043516610371565b60405190815260200160405180910390f35b341561014d57600080fd5b61009c600160a060020a0360043516602435610390565b604051901515815260200160405180910390f35b341561018357600080fd5b6100c3600160a060020a0360043581169060243516610450565b60405190815260200160405180910390f35b60008115806101e15750600160a060020a03338116600090815260026020908152604080832093871683529290522054155b15156101ec57600080fd5b600160a060020a03338116600081815260026020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b60005481565b600160a060020a0380841660009081526002602090815260408083203385168452825280832054938616835260019091528120549091906102a3908463ffffffff61047d16565b600160a060020a0380861660009081526001602052604080822093909355908716815220546102d8908463ffffffff61049716565b600160a060020a038616600090815260016020526040902055610301818463ffffffff61049716565b600160a060020a03808716600081815260026020908152604080832033861684529091529081902093909355908616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9086905190815260200160405180910390a3600191505b509392505050565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a0333166000908152600160205260408120546103b9908363ffffffff61049716565b600160a060020a0333811660009081526001602052604080822093909355908516815220546103ee908363ffffffff61047d16565b600160a060020a0380851660008181526001602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600260209081526040808320938516835292905220545b92915050565b60008282018381101561048c57fe5b8091505b5092915050565b6000828211156104a357fe5b508082035b929150505600a165627a7a7230582027babed258a349e3c292f63567124eea9078f85ee5423c6e149e5a7da991558c0029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1507209586740
}