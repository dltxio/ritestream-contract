pragma solidity ^0.8.3;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RitestreamNFT is ERC721Enumerable, Ownable {
    address public immutable _self;
    string private baseURI;

    //Start blue pass IDs from 0
    uint256 public blueTokenCount = 0;

    //Start red pass IDs from 4000
    uint256 public redTokenCount = 4000;

    //Start green pass IDs from 7000
    uint256 public greenTokenCount = 7000;

    uint256 private immutable blueMax = 4000;
    uint256 private immutable redMax = 7000;
    uint256 private immutable greenMax = 8000;
    bool public isSaleActive;

    constructor(string memory name_, string memory symbol_)
        ERC721(name_, symbol_)
    {
        _self = address(this);
    }

    //MODIFIERS
    modifier saleActive() {
        require(isSaleActive, "Sale is not active");
        _;
    }

    // PUBLIC READ-ONLY FUNCTIONS
    function getBaseURI() external view returns (string memory) {
        return baseURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Nonexistent token");

        return string(abi.encodePacked(baseURI, "/", tokenId, ".json"));
    }

    //ONLY OWNER FUNCTIONS
    function setBaseURI(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    function toggleSaleStatus() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    //SUPPORTING FUNCTIONS
    function nextBlueTokenId() internal view returns (uint256) {
        uint256 blueTokenId = blueTokenCount + 1;
        return blueTokenId;
    }

    function nextRedTokenId() internal view returns (uint256) {
        uint256 redTokenId = redTokenCount + 1;
        return redTokenId;
    }

    function nextGreenTokenId() internal view returns (uint256) {
        uint256 greenTokenId = greenTokenCount + 1;
        return greenTokenId;
    }

    //FUNCTION FOR MINTING
    function mintBlueTokens(address userAddress) external saleActive onlyOwner {
        require(
            blueTokenCount < blueMax,
            "Not enough blue passes remaining to mint"
        );
        _safeMint(userAddress, nextBlueTokenId());
        blueTokenCount += 1;
    }

    function mintGreenTokens(address userAddress)
        external
        saleActive
        onlyOwner
    {
        require(
            greenTokenCount < greenMax,
            "Not enough green passes remaining to mint"
        );
        _safeMint(userAddress, nextGreenTokenId());
        greenTokenCount += 1;
    }

    function mintRedTokens(address userAddress) external saleActive onlyOwner {
        require(
            redTokenCount < redMax,
            "Not enough red passes remaining to mint"
        );
        _safeMint(userAddress, nextRedTokenId());
        redTokenCount += 1;
    }
}
