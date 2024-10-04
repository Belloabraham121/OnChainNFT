const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("ChainNFTModule", (m) => {


  const ChainNFT = m.contract("ChainNFT");

  return { ChainNFT };
});
