pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DaiTest is ERC20 {
    string name;
    string symbol;
    constructor() ERC20(name,symbol){
        name = "Example DAI";
        symbol = "DAI";
        _mint(msg.sender, 100 * 10**uint(decimals()));
    }
}