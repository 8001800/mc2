export default {
  "contract_name": "BasicToken",
  "abi": [
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
  "unlinked_binary": "0x6060604052341561000c57fe5b5b6101fc8061001c6000396000f300606060405263ffffffff60e060020a60003504166318160ddd811461003757806370a0823114610059578063a9059cbb14610087575bfe5b341561003f57fe5b6100476100ba565b60408051918252519081900360200190f35b341561006157fe5b610047600160a060020a03600435166100c0565b60408051918252519081900360200190f35b341561008f57fe5b6100a6600160a060020a03600435166024356100df565b604080519115158252519081900360200190f35b60005481565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a033316600090815260016020526040812054610108908363ffffffff61019f16565b600160a060020a03338116600090815260016020526040808220939093559085168152205461013d908363ffffffff6101b616565b600160a060020a038085166000818152600160209081526040918290209490945580518681529051919333909316927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060015b92915050565b6000828211156101ab57fe5b508082035b92915050565b6000828201838110156101c557fe5b8091505b50929150505600a165627a7a72305820dda8c95ba965df7564bfadea19564dec89ee7cb2f2f35822c4e632be4eeceb680029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1506328459415
}