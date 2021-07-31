import { waffle, ethers } from 'hardhat'
import { expect } from 'chai'

describe("Finhaven", function() {
 
  let Token;
  let FINToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    let Token = await ethers.getContractFactory("Finhaven");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    FINToken = await Token.deploy('Finhaven', 'FIN', '1000000000000000000000000000', owner.address)
  	await FINToken.deployed();
  });
 
  describe("Deployment", function () {
  	it("Should have supply of 1 billion", async function() {
    	expect(await FINToken.totalSupply()).to.equal('1000000000000000000000000000');
  	});

  	it("Deployer should own all tokens", async function() {
  		expect(await FINToken.balanceOf(owner.address)).to.equal('1000000000000000000000000000');
  	});
   });

  describe("Transfers", function (){
  	it("Should not be able to transfer tokens that an address does not own", async function(){
  		await expect(FINToken.connect(addr1).transfer(owner.address, 100)).to.be.revertedWith('transfer amount exceeds balance');
  	});

  	it("Should be able to transfer tokens successfully", async function(){
  		const balanceBefore = await FINToken.balanceOf(addr1.address);
  		await FINToken.connect(owner).transfer(addr1.address, 100);
  		const balanceAfter = await FINToken.balanceOf(addr1.address);

  		expect(balanceBefore == balanceAfter - 100)
  	});
  });

  describe("Locking", function(){
  	it("Should NOT be able to send locked tokens", async function(){
  		await FINToken.connect(owner).transfer(addr1.address, 100);
  		await FINToken.lock(addr1.address, 100, 1000000000000);
  		await expect(FINToken.connect(addr1).transfer(owner.address, 100)).to.be.revertedWith('transfer amount exceeds the non-locked balance');
  	});

  	it("Should NOT lock if the timestamp is in the past", async function(){
  		await FINToken.connect(owner).transfer(addr1.address, 100);
  		await FINToken.lock(addr1.address, 100, 1);
  		await expect(FINToken.connect(addr1).transfer(owner.address, 100)).to.emit(FINToken, 'Transfer');
  	});
  });

  describe("Pausing", function(){
	it("Should be able to pause smart contract", async function(){
		await FINToken.pause();
  		await expect(FINToken.connect(owner).transfer(addr1.address, 100)).to.be.revertedWith('token transfer while paused');
	});

	it("Should be able to unpause smart contract", async function(){
		await FINToken.pause();
  		await expect(FINToken.connect(owner).transfer(addr1.address, 100)).to.be.revertedWith('token transfer while paused');
  		await FINToken.unpause();
  		await expect(FINToken.connect(owner).transfer(addr1.address, 100)).to.emit(FINToken, 'Transfer');
	});
  });
});
