pragma solidity ^0.8.0;

import './extensions/ERC20Burnable.sol';

contract Finhaven is ERC20Burnable{
	/**
     * Minting FIN Token with a specified initial supply of 1 billion
     * Owner is the deployer address
     */
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20(name, symbol) {
        _mint(owner, initialSupply);
    }
}