const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", () => {
  let deployer, addr1, addr2, nft, marketplace;
  const feePercent = 1;
  beforeEach(async () => {
    const NFT = await ethers.getContractFactory("NFT");
    const Marketplace = await ethers.getContractFactory("Marketplace");
    [deployer, addr1, addr2] = await ethers.getSigners();

    nft = await NFT.deploy();
    marketplace = await Marketplace.deploy(feePercent);
  });

  describe("Deployment", () => {
    it("should track name and symbol of nft collection", async () => {
      expect(await nft.name()).to.equal("DApp NFT");
      expect(await nft.symbol()).to.equal("DAPP");
    });
  });
});
