const web3 = require("./config/web3").getWeb3();
const TruffleContract = require("@truffle/contract");

const UniswapV2FactoryJson = require("./contracts/uniswapV2/UniswapV2Factory.json");
const UniswapV2PairJson = require("./contracts/uniswapV2/UniswapV2Pair.json");
const UniswapV2ERC20Json = require("./contracts/uniswapV2/UniswapV2ERC20.json");

const UniswapV2Factory = TruffleContract(UniswapV2FactoryJson);
const UniswapV2Pair = TruffleContract(UniswapV2PairJson);
const UniswapV2ERC20 = TruffleContract(UniswapV2ERC20Json);

const setProvider = function () {
  UniswapV2Factory.setProvider(web3.currentProvider);
  UniswapV2Pair.setProvider(web3.currentProvider);
  UniswapV2ERC20.setProvider(web3.currentProvider);
};
// const UniswapV2Factory = artifacts.require("UniswapV2Factory");

const deployUniswapV2 = async function (feeToSetter) {
  setProvider();
  const accounts = await web3.eth.getAccounts();
  const uniswapV2Factory = await UniswapV2Factory.new(feeToSetter, {
    from: feeToSetter,
  });
  return uniswapV2Factory;
};

module.exports = {
  deployUniswapV2,
};
