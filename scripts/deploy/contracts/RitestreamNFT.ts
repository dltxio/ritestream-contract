import { deployContract } from "../utils";

export const contractNames = () => ["ritestreamNft"];

export const constructorArguments = () => [
  process.env.CONSTRUCTOR_NFT_NAME,
  process.env.CONSTRUCTOR_NFT_SYMBOL
];

export const deploy = async (deployer, setAddresses) => {
  console.log("deploying NFT");
  const token = await deployContract(
    "RitestreamNFT",
    constructorArguments(),
    deployer,
    1
  );
  console.log(`deployed NFT to address ${token.address}`);
  setAddresses({ ritestreamNft: token.address });
  return token;
};
