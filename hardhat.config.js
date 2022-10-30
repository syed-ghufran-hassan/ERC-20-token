/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
 

const API_URL = "https://eth-goerli.g.alchemy.com/v2/DhDj6Oo5ukfTV8O0exflEyOLr2WZMF5k";
const PUBLIC_KEY = "0x1DaF2A0FFD97B1844c5d839e523cF862E9A6c7FF";
const PRIVATE_KEY = "e37ce51a9e680de5059de783411469aed857a044d089a73bbb69d848d0487e3f";

module.exports = {
  solidity: "0.5.0",
  //defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]  
    }
  }
};