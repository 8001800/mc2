export default {
  "contract_name": "Migrations",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "new_address",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
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
      "constant": false,
      "inputs": [
        {
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6101e58061003c6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630900f010811461005e578063445df0ac1461007f5780638da5cb5b146100a4578063fdacd576146100d3575b600080fd5b341561006957600080fd5b61007d600160a060020a03600435166100eb565b005b341561008a57600080fd5b610092610182565b60405190815260200160405180910390f35b34156100af57600080fd5b6100b7610188565b604051600160a060020a03909116815260200160405180910390f35b34156100de57600080fd5b61007d600435610197565b005b6000805433600160a060020a039081169116141561017c5781905080600160a060020a031663fdacd5766001546040517c010000000000000000000000000000000000000000000000000000000063ffffffff84160281526004810191909152602401600060405180830381600087803b151561016757600080fd5b6102c65a03f1151561017857600080fd5b5050505b5b5b5050565b60015481565b600054600160a060020a031681565b60005433600160a060020a03908116911614156101b45760018190555b5b5b505600a165627a7a72305820a90084b8d5c5b483aa1902e4a1f98877b473d98b43828bc80d167bd06205e70e0029",
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xfffb486dd4aa65b1a163368d2222dcdff1e882c3",
      "updated_at": 1507209985051
    },
    "999": {
      "events": {},
      "links": {},
      "address": "0x67ad362c9054ecac4e84b9e45ba3267527b6c829",
      "updated_at": 1507021129454
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1507209985051
}