pragma solidity ^0.5.1;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "openzeppelin-solidity/contracts/drafts/Counters.sol";


contract CCT is ERC721Full, ERC721MetadataMintable {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	constructor() public ERC721Full("CompletionCertificate", "CCT"){
	}

	function awardCCT(address to, string memory nameWithDate) public onlyMinter {
		_tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, nameWithDate);
	}
}