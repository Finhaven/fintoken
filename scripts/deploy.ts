import hre from "hardhat";
import "@nomiclabs/hardhat-ethers";

const deploy = async () => {
  const Fintoken = await hre.ethers.getContractFactory("Finhaven");
  const name = "Fintoken";
  const symbol = "FIN";
  const initialSupply = 1000000000;
  const owner = "0x18b7f0D7641EaD9D2F9675A2573A816eCF7f7679";

  const fintoken = await Fintoken.deploy(name, symbol, initialSupply, owner);

  await fintoken.deployed();
  console.log("Contract deployed to address:", fintoken.address);
};

export { deploy };
