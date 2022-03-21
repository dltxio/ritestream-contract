import { deployContract, verifyOnEtherscan } from "../utils";
import contracts from "../../../contracts.json";
import {
  vestingSeed1,
  vestingSeed2,
  vestingSeed3
} from "../../teamVestingSeed.test";
import { ethers } from "ethers";
import teamVestingABI from "../../../build/contracts/TeamVesting.sol/TeamVesting.json";

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

  const contract = new ethers.Contract(
    contracts.binancetest.teamVesting,
    teamVestingABI.abi,
    deployer
  );

  const result = await contract.getBeneficiaryVesting(
    "0xA61D1f138df1E04DEe8E8A092ca20C206d88d063"
  );
  console.log(result);
  // await contract.setTeamVesting(vestingSeed1);
  // await contract.setTeamVesting(vestingSeed2);
  // await contract.setTeamVesting(vestingSeed3);
  // for (const seed2 of vestingSeed2) {
  //   await contract.setTeamVesting(seed2);
  // }
  // for (const seed3 of vestingSeed3) {
  //   await contract.setTeamVesting(seed3);
  // }

  return contract;
};
