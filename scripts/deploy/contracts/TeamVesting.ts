import { deployContract, verifyOnEtherscan } from "../utils";
import contracts from "../../../contracts.json";
import {
  vestingSeed20,
  vestingSeed40,
  vestingSeed51
} from "../../teamVestingSeed.prod";
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
  console.log("deploying TeamVesting");
  const teamVesting = await deployContract(
    "TeamVesting",
    constructorArguments(),
    deployer,
    1
  );
  console.log(`deployed SaleVesting to address ${teamVesting.address}`);
  setAddresses({ teamVesting: teamVesting.address });

  await verifyOnEtherscan(teamVesting.address, constructorArguments());

  //TODO: need this guy to set the vesting seeds
  // const teamVesting = new ethers.Contract(
  //   contracts.binancetest.teamVesting,
  //   teamVestingABI.abi,
  //   deployer
  // );

  // await teamVesting.setTeamVesting(vestingSeed20, {
  //   gasLimit: 10000000
  // });
  // await teamVesting.setTeamVesting(vestingSeed40, {
  //   gasLimit: 10000000
  // });
  // await teamVesting.setTeamVesting(vestingSeed51, {
  //   gasLimit: 10000000
  // });

  return teamVesting;
};
