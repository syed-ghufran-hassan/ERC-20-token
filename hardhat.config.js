/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require("dotenv").config(); 

 
const PUBLIC_KEY = "0x1DaF2A0FFD97B1844c5d839e523cF862E9A6c7FF";
 

module.exports = {
  solidity: "0.5.0",
  //defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: process.env.API_URL,
      accounts: process.env.[`0x${PRIVATE_KEY}`]  
    }
  }
};