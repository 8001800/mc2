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
  "unlinked_binary": "0x6060604052341561000c57fe5b5b6104a68061001c6000396000f3006060604052361561005c5763ffffffff60e060020a600035041663095ea7b3811461005e57806318160ddd1461009157806323b872dd146100b357806370a08231146100ec578063a9059cbb1461011a578063dd62ed3e1461014d575bfe5b341561006657fe5b61007d600160a060020a0360043516602435610181565b604080519115158252519081900360200190f35b341561009957fe5b6100a1610226565b60408051918252519081900360200190f35b34156100bb57fe5b61007d600160a060020a036004358116906024351660443561022c565b604080519115158252519081900360200190f35b34156100f457fe5b6100a1600160a060020a036004351661032f565b60408051918252519081900360200190f35b341561012257fe5b61007d600160a060020a036004351660243561034e565b604080519115158252519081900360200190f35b341561015557fe5b6100a1600160a060020a03600435811690602435166103fc565b60408051918252519081900360200190f35b60008115806101b35750600160a060020a03338116600090815260026020908152604080832093871683529290522054155b15156101bf5760006000fd5b600160a060020a03338116600081815260026020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60005481565b600160a060020a038084166000908152600260209081526040808320338516845282528083205493861683526001909152812054909190610273908463ffffffff61042916565b600160a060020a0380861660009081526001602052604080822093909355908716815220546102a8908463ffffffff61044316565b600160a060020a0386166000908152600160205260409020556102d1818463ffffffff61044316565b600160a060020a0380871660008181526002602090815260408083203386168452825291829020949094558051878152905192881693919260008051602061045b833981519152929181900390910190a3600191505b509392505050565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a033316600090815260016020526040812054610377908363ffffffff61044316565b600160a060020a0333811660009081526001602052604080822093909355908516815220546103ac908363ffffffff61042916565b600160a060020a0380851660008181526001602090815260409182902094909455805186815290519193339093169260008051602061045b83398151915292918290030190a35060015b92915050565b600160a060020a038083166000908152600260209081526040808320938516835292905220545b92915050565b60008282018381101561043857fe5b8091505b5092915050565b60008282111561044f57fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820b33ad34e783d21d3c336826fd2d67e5e2ad9396ae09a57f7f023532cb080cff50029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1506328459416
}