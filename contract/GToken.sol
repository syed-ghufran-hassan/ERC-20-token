pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GToken is ERC20 {
    uint constant _initial_supply = 50 * (10**18);
    constructor() ERC20("GToken", "GT") public {
    _mint(msg.sender, _initial_supply);
}
}