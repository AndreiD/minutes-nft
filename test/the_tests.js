const { expect, assert } = require("chai")
const { web3, ethers } = require("hardhat")
const { BN, time, balance, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")
const ether = require("@openzeppelin/test-helpers/src/ether")

let nft
let owner, acc1, acc2

describe("NFT", function () {
	beforeEach(async function () {
		let TContract = await ethers.getContractFactory("Minutes")

		nft = await TContract.deploy()
		await nft.deployed()

		signers = await ethers.getSigners()
		owner = signers[0]
		acc1 = signers[1]
		acc2 = signers[2]
	})

	it("simple test...", async function () {
		expect(await nft.totalSupply()).to.equal(0)
	})

	// it("purchasing a token works", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")
	// })

	// it("purchasing 3 tokens works", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(3, { value: web3.utils.toWei("0.21", "ether") })
	// 	).to.emit(nft, "Transfer")
	// })

	// it("burning a token works", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

	// 	await nft.connect(acc1).burn(1)
	// 	expect(await nft.balanceOf(acc1.address)).to.equal(0)
	// })

	// it("can't burn other tokens than your own", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")
	// 	await expect(
	// 		nft.connect(acc2).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

	// 	await expect(nft.connect(acc1).burn(2)).to.be.revertedWith(
	// 		"revert caller is not owner nor approved"
	// 	)
	// })

	// it("custom thing emits", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	await expect(
	// 		nft.connect(acc1).customThing(1, 100, "hello", { value: web3.utils.toWei("0.1", "ether") })
	// 	).to.emit(nft, "CustomThing")
	// })

	// it("withdraw money works", async function () {
	// 	const tracker = await balance.tracker(owner.address)
	// 	let ownerInitialBalance = Number(await tracker.get("wei"))
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	await nft.withdrawEarnings()

	// 	let ownerFinalBalance = Number(await tracker.get("wei"))
	// 	expect(ownerFinalBalance - ownerInitialBalance).to.be.greaterThan(
	// 		Number(web3.utils.toWei("0.06", "ether")) //some gas costs are lost
	// 	)
	// })

	// it("should transfer accidentally sent ERC20 tokens to this contract", async function () {
	// 	//deploy an erc20 token for
	// 	let ERC20MockContract = await ethers.getContractFactory("ERC20Mock")
	// 	erc20 = await ERC20MockContract.connect(acc1).deploy("ERCToken", "ERC", "10000")
	// 	await erc20.deployed()

	// 	// Transfer some tokens to this contract
	// 	await erc20.connect(acc1).transfer(nft.address, 100)
	// 	expect(await erc20.balanceOf(nft.address)).to.equal(100)

	// 	// get them
	// 	await nft.reclaimERC20(erc20.address)
	// 	expect(await erc20.balanceOf(owner.address)).to.equal(100)
	// })
})
