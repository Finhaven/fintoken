const MyToken = artifacts.require("Finhaven");
require("dotenv").config();

module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(MyToken, "FINToken", "FIN", process.env.TOKEN_OWNER);
  const myToken = await MyToken.deployed();
};
