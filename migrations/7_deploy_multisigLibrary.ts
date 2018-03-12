import * as Deployer from 'truffle-deployer'

const ECRecovery = artifacts.require('ECRecovery.sol')
const MultisigLibrary = artifacts.require('MultisigLibrary.sol')

module.exports = function (deployer: Deployer) {
  return deployer.deploy(ECRecovery).then(() => {
    return deployer.link(ECRecovery, MultisigLibrary)
  }).then(() => {
    return deployer.deploy(MultisigLibrary)
  })
}