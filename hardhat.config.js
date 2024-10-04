require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
    defaultNetwork: "lisk-sepolia",
    networks: {
      'lisk-sepolia': {
        url: process.env.LISK_RPC_URL,
        accounts: process.env.WALLET_KEY ? [process.env.WALLET_KEY] : [],
      },
    },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "lisk-sepolia": "123",
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com/",
        },
      },
    ],
  },
    sourcify: {
      enabled: false
      },
};


// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";

// dotenv.config();

// const config: HardhatUserConfig = {
//   solidity: "0.8.24",
//   defaultNetwork: "sepolia",
//   networks: {
//     'sepolia': {
//       url: 'https://eth-sepolia.g.alchemy.com/v2/5O6POr5-pOcMrepBJuGTKocNI4dysw_A',
//       accounts: process.env.WALLET_KEY ? [process.env.WALLET_KEY] : [],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.API_KEY,
//   },
//   sourcify: {
//     enabled: false
//     },
// };

// export default config;
