import { HardhatUserConfig } from "hardhat/config";
const { task } = require("hardhat/config");
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

task("accounts","Prints list",async(taskArgs:any,hre:any)=>{
  const accs = await hre.ethers.getSigners()


  accs.forEach(async(acc:any) => {
    const address = await acc.getAddress()
    
    console.log(address)
  });
})


const config: HardhatUserConfig = {
  solidity: "0.8.8",
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{},
    rinkeby:{
      url:process.env.RINKEBY_API_HTTP!,
      accounts: [process.env.METAMASK_PVT_KEY!]  
    }
  }
};

export default config;
