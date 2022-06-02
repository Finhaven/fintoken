const MyToken = artifacts.require("Finhaven");

module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(
    MyToken,
    "FINToken",
    "FIN",
    "0x18b7f0D7641EaD9D2F9675A2573A816eCF7f7679"
  );
  const myToken = await MyToken.deployed();
};
