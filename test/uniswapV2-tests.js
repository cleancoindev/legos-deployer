const { web3 } = require("../src/config/web3").getWeb3();

const { deployUniswapV2 } = require("../src/uniswapV2");

contract("init test", function (accounts) {
  beforeEach(async function () {
    let uniswapV2Factory = await deployUniswapV2(accounts[0]);
    console.log(uniswapV2Factory);
  });
  it("should print truffle contract correctly", async function () {
    // console.log(UniswapV2Factory);
  });
});
