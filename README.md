# Ritestream Contracts

Owner `0xfa0b65413e3e81faf7321f85b2afdd0efff13ef5`   

```text
[BscScan.com 17/03/2022 05:09:53] I, hereby verify that I am the owner/creator of the address [0x0F5D54b27bDb556823F96f2536496550f8816dC5]  
0xca500a5b8f2f28f55da7381244e29afffae5fcb9d07f224bdd677b8959d1fcf0738573e0b981d55b8276338844d9d0b9d18a86f9136e28ba5fa8128ce2893c6700
```   

## Scripts

### hh:compile
Compiles the contracts with Hardhat

### hh:deploy
Runs the deployment script with the network set in `process.env.NETWORK`.

### hh:node
Starts a local hardhat node with the `localhost` network.

## Contracts
Contracts are located in the `/contracts` folder.

***There is an example ERC20 contract in `/contracts/Token.sol`***

## Configuration
See `/hardhat.config.ts` for hardhat configuration. Some values are fetched from environment variables, see `dev.env` for local development environment variables and copy it into `.env` before changing the values.

## Deployment
The deployment script is located in the `/scripts/deploy` folder. Each contract to be deployed should have its own deployment module.


***See `/scripts/deploy/contracts/Token.ts` for an example with an ERC20.***

### Contract addresses
Deployed addresses are saved in `/contracts.json` for each network. This file should be committed so that addresses are managed by git.

## Hardhat Tasks
Tasks are located in the `/scripts/tasks` folder.
A hardhat task allows for easy contract interaction from the command line. To run a contract task, run a command with the following structure:
```
npx hardhat <taskName>
  --network <networkName>
  [--argName <argValue>]
```
For the local hardhat network, use the default `localhost` value for `networkName`. 

### Example template tasks
#### accounts
```
npx hardhat accounts --network localhost
```
Output:
```
0xA39560b08FAF6d8Cd2aAC286479D25E0ea70f510: 10.0 ETH
```
#### mint
Minting the deployed example `Token.sol` as an ERC20 with 0 decimals.
```
npx hardhat mint --amount 1 --address 0xA39560b08FAF6d8Cd2aAC286479D25E0ea70f510 --network localhost
```
Output:
```
network is localhost
token address is 0x47A78de7a881CCa1a0f510efA2E520b447F707Bb
waiting for confirmation...
minted 1 for address 0xA39560b08FAF6d8Cd2aAC286479D25E0ea70f510
```
#### read-balance
Reading balance for the deployed example `Token.sol` as an ERC20 with 0 decimals.
```
npx hardhat read-balance --address 0xA39560b08FAF6d8Cd2aAC286479D25E0ea70f510 --network localhost
```
Output:
```
network is localhost
token address is 0x47A78de7a881CCa1a0f510efA2E520b447F707Bb
balance is 1 wei for address 0xA39560b08FAF6d8Cd2aAC286479D25E0ea70f510
```
