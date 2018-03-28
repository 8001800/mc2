pragma solidity ^0.4.19;


library LibLineup {
    struct State {
        uint256 nonce;
        bytes32 merkleRoot;
        uint256 updatePeriod;
        uint256 lastUpdate;
    }

    function update(State storage _self, uint256 _nonce, bytes32 _merkleRoot) internal {
        // require(msg.sender == state.owner); FIXME Ownership vs signatures
        // require(_nonce > state.nonce);
        // require(block.number <= state.lastUpdate + state.updatePeriod);

        _self.merkleRoot = _merkleRoot;
        _self.nonce = _nonce;
        _self.lastUpdate = block.number;
    }

    function isContained(State storage _self, bytes _proof, bytes32 _hashlock) internal view returns (bool) {
        bytes32 proofElement;
        bytes32 cursor = _hashlock;
        bool result = false;

        if (block.number > _self.lastUpdate + _self.updatePeriod) {
            for (uint256 i = 32; i <= _proof.length; i += 32) {
                assembly { proofElement := mload(add(_proof, i)) } // solium-disable-line security/no-inline-assembly

                if (cursor < proofElement) {
                    cursor = keccak256(cursor, proofElement);
                } else {
                    cursor = keccak256(proofElement, cursor);
                }
            }
            result = cursor == _self.merkleRoot;
        }
        return result;
    }
}

