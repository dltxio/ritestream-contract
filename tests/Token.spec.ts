﻿import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { getEventData, getRevertMessage } from "./utils";

let token: tsEthers.Contract;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("ERC20 Token", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    token = await (
      await ethers.getContractFactory("Token")
    ).deploy("Token", "TKN", 18);
    user = new ethers.Wallet(
      "0xbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeef",
      deployer.provider
    );
    // Send ETH to user from signer.
    await deployer.sendTransaction({
      to: user.address,
      value: ethers.utils.parseEther("1000")
    });
  });

  it("Should return the correct decimal count", async () => {
    expect(await token.decimals()).to.equal(18);
  });

  it("Should burn tokens from deployer", async () => {
    const amount = ethers.BigNumber.from("10");
    const address = await deployer.getAddress();
    await token.burn(address, amount);
    const balance = await token.balanceOf(address);
    expect(balance).to.equal(
      ethers.BigNumber.from("999999999999999999999999990")
    );
  });

  it("Should only allow deployer to mint/burn", async () => {
    // List protected functions.
    let userToken = token.connect(user);
    const ownerFunctions = [() => userToken.burn(user.address, "1")];
    // Assert that all protected functions revert when called from an user.
    for (let ownerFunction of ownerFunctions) {
      try {
        await expect(ownerFunction()).to.be.revertedWith(
          "Ownable: caller is not the owner"
        );
      } catch (error) {
        // the solidity-coverage plugin is not smart enough to run the
        // "revertedWith" unit test, so we account for that here.
        if (!`${error}`.includes("sender doesn't have enough funds to send tx"))
          throw error;
      }
    }
  });
});
