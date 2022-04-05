//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
  address payable public immutable feeAcount; //the account that receive fees
  uint public immutable feePercent; // the fee percentage on sales
  uint public itemCount;

  constructor(uint _feePercent) {
    feeAcount = payable(msg.sender);
    feePercent = _feePercent;
  }
}
