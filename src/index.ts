const truffleContract = require('truffle-contract')
const util = require('ethereumjs-util')
import Web3 = require('web3')
const abi = require('ethereumjs-abi')
const BN = require('bn.js')
import BigNumber from 'bignumber.js'
import Broker from './Broker'
import TokenBroker from './TokenBroker'

const ERC20Json = require('../build/contracts/ERC20.json')

export {
  Broker,
  TokenBroker
}

export interface Signature {
  v: number
  r: Buffer
  s: Buffer
}

export function sign (web3: Web3, sender: string, digest: string): Promise<Signature> {
  return new Promise<Signature>((resolve, reject) => {
    web3.eth.sign(sender, digest, (error, signature) => {
      if (error) {
        reject(error)
      } else {
        resolve(util.fromRpcSig(signature))
      }
    })
  })
}

export function paymentDigest (channelId: string, value: BigNumber, contractAddress: string, chainId: number): string {
  let digest = abi.soliditySHA3(
    ['bytes32', 'uint256', 'address', 'uint32'],
    [channelId.toString(), new BigNumber(value).toString(), new BN(contractAddress, 16), chainId]
  )
  return util.bufferToHex(digest)
}

export let buildERC20Contract = (address: string, web3: Web3): Promise<any> => {
  return new Promise((resolve, reject) => {
    web3.version.getNetwork((error, result) => {
      if (error) {
        return reject(error)
      }
      let networks: any = {}
      networks[result] = { address }
      Object.assign(ERC20Json, { networks } )
      const ERC20Contract = truffleContract(ERC20Json)
      ERC20Contract.setProvider(web3.currentProvider)
      resolve(ERC20Contract)
    })
  })
}