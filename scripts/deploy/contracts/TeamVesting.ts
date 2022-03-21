import { deployContract, verifyOnEtherscan } from "../utils";
import contracts from "../../../contracts.json";
import {
  vestingSeed1,
  vestingSeed2,
  vestingSeed3
} from "../../teamVestingSeed.test";
import { ethers } from "ethers";
import teamVestingABI from "../../../build/contracts/TeamVesting.sol/TeamVesting.json";
import { Provider } from "@ethersproject/abstract-provider";

export const contractNames = () => ["teamVesting"];

const tgeDate = process.env.TGE_DATE; //Set the initial date of TGE. It can be changed once the contract is deployed.
export const constructorArguments = () => [
  contracts.binancetest.token,
  tgeDate
];

export const deploy = async (deployer, setAddresses) => {
  // console.log("deploying SaleVesting");
  // const teamVesting = await deployContract(
  //   "TeamVesting",
  //   constructorArguments(),
  //   deployer,
  //   1
  // );
  // console.log(`deployed SaleVesting to address ${teamVesting.address}`);
  // setAddresses({ teamVesting: teamVesting.address });

  // await verifyOnEtherscan(teamVesting.address, constructorArguments());

  const teamVesting = new ethers.Contract(
    contracts.binancetest.teamVesting,
    teamVestingABI.abi,
    deployer
  );

  await teamVesting.setTeamVesting(vestingSeed1, {
    gasLimit: 10000000
  });
  await teamVesting.setTeamVesting(vestingSeed2, {
    gasLimit: 10000000
  });
  await teamVesting.setTeamVesting(vestingSeed3, {
    gasLimit: 10000000
  });
  // for (const seed2 of vestingSeed2) {
  //   await contract.setTeamVesting(seed2);
  // }
  // for (const seed3 of vestingSeed3) {
  //   await contract.setTeamVesting(seed3);
  // }

  // const block = await deployer.provider.getBlock("latest");
  // console.log(block.timestamp);

  return teamVesting;
};
