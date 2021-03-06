import PublicRegistry from '../build/wrappers/PublicRegistry'
import Multisig from '../build/wrappers/Multisig'
import Proxy from '../build/wrappers/Proxy'
import ECRecovery from '../build/wrappers/ECRecovery'
import TransferToken from '../build/wrappers/TransferToken'
import DistributeEth from '../build/wrappers/DistributeEth'
import DistributeToken from '../build/wrappers/DistributeToken'
import Lineup from '../build/wrappers/Lineup'
import Conditional from '../build/wrappers/Conditional'
import Bidirectional from '../build/wrappers/Bidirectional'
import TestContract from '../build/wrappers/TestContract'
import TestToken from '../build/wrappers/TestToken'
import * as ethUtil from 'ethereumjs-util'

export {
  PublicRegistry,
  Multisig,
  Proxy,
  ECRecovery,
  TransferToken,
  DistributeEth,
  DistributeToken,
  Conditional,
  Lineup,
  Bidirectional,
  TestContract,
  TestToken
}

export function randomId (digits: number = 3) {
  const datePart = new Date().getTime() * Math.pow(10, digits)
  const extraPart = Math.floor(Math.random() * Math.pow(10, digits)) // 3 random digits
  return datePart + extraPart // 16 digits
}

export function channelId (sender: string, receiver: string): string {
  let random = randomId()
  let buffer = ethUtil.sha3(sender + receiver + random)
  return ethUtil.bufferToHex(buffer)
}
