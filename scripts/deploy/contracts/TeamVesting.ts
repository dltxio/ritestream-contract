import { deployContract, verifyOnEtherscan } from "../../utils";
import contracts from "../../../contracts.json";
import {
  vestingSeed1,
  vestingSeed2,
  vestingSeed3
} from "../../teamVestingSeed.test";
import { ethers } from "ethers";

export const contractNames = () => ["teamVesting"];

const tgeDate = process.env.TGE_DATE; //Set the initial date of TGE. It can be changed once the contract is deployed.
export const constructorArguments = () => [
  contracts.binancetest.token,
  tgeDate
];

export const deploy = async (deployer, setAddresses) => {
  console.log("deploying SaleVesting");
  const teamVesting = await deployContract(
    "TeamVesting",
    constructorArguments(),
    deployer,
    1
  );
  console.log(`deployed SaleVesting to address ${teamVesting.address}`);
  setAddresses({ teamVesting: teamVesting.address });

  await verifyOnEtherscan(teamVesting.address, constructorArguments());

  return teamVesting;
};
