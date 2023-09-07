/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from "hardhat/config";
dotenv.config({ path: __dirname + "/.env" });

const { API_URL, PRIVATE_KEY } = process.env;
console.log(API_URL, PRIVATE_KEY);
const config: HardhatUserConfig = {
  solidity: "0.8.1",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      timeout: 400000,
    },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      timeout: 400000,
    },
  },
};

export default config;
