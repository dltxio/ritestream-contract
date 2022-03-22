import { deployContract, verifyOnEtherscan } from "../utils";
import contracts from "../../../contracts.json";
import { ethers } from "ethers";
import {
  saleSeed1,
  saleSeed2,
  saleSeed3,
  saleSeed4,
  saleSeed5,
  saleSeed6,
  saleSeed7,
  saleSeed8,
  saleSeed9
} from "./../../saleVesting.prod";
import saleVestingABI from "../../../build/contracts/SaleVesting.sol/SaleVesting.json";

export const contractNames = () => ["saleVesting"];

const tgeDate = process.env.TGE_DATE; //Set the initial date of TGE. It can be changed once the contract is deployed.
export const constructorArguments = () => [
  contracts.binancetest.token,
  tgeDate
];

export const deploy = async (deployer, setAddresses) => {
  console.log("deploying SaleVesting");
  const saleVesting = await deployContract(
    "SaleVesting",
    constructorArguments(),
    deployer,
    1
  );
  console.log(`deployed SaleVesting to address ${saleVesting.address}`);
  setAddresses({ saleVesting: saleVesting.address });

  await verifyOnEtherscan(saleVesting.address, constructorArguments());

  //TODO: need this guy to set the vesting seeds
  // const saleVesting = new ethers.Contract(
  //   contracts.binancetest.saleVesting,
  //   saleVestingABI.abi,
  //   deployer
  // );

  // await saleVesting.setVesting(saleSeed1, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed2, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed3, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed4, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed5, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed6, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed7, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed8, {
  //   gasLimit: 10000000
  // });
  // await saleVesting.setVesting(saleSeed9, {
  //   gasLimit: 10000000
  // });
  return saleVesting;
};
