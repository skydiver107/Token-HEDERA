require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//import dotenv library to access environment variables stored in .env file
require("dotenv").config();

//define hardhat task here, which can be accessed in our test file (test/rpc.js) by using hre.run('taskName')
task("show-balance", async () => {
  const showBalance = require("./scripts/showBalance");
  return showBalance();
});

task("deploy-contract", async () => {
  const deployContract = require("./scripts/deployContract");
  return deployContract();
});

task("contract-view-call", async (taskArgs) => {
  const contractViewCall = require("./scripts/contractViewCall");
  return contractViewCall(taskArgs.contractAddress);
});

task("contract-call", async (taskArgs) => {
  const contractCall = require("./scripts/contractCall");
  return contractCall(taskArgs.contractAddress, taskArgs.msg);
});

function getMnemonic(networkName) {
  if (networkName) {
    const mnemonic = process.env["MNEMONIC_" + networkName.toUpperCase()];
    if (mnemonic && mnemonic !== "") {
      return mnemonic;
    }
  }

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic === "") {
    return "october slam canyon amused horror basic genius crash find stand glimpse build";
  }

  return mnemonic;
}

function accounts(chainKey) {
  return { mnemonic: getMnemonic(chainKey) };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  //this specifies which network should be used when running Hardhat tasks
  defaultNetwork: "relay",
  networks: {
    relay: {
      url: "https://testnet.hashio.io/api", //deployed on Gitpod, should be changed in the future
      accounts: [
        "0x0af3f93851b33cb850e6e25eb1b8deeb8cc7e05ec82ef66a4b2f1babe6a002b5",
        "0x0af3f93851b33cb850e6e25eb1b8deeb8cc7e05ec82ef66a4b2f1babe6a002b5",
      ],
      chainId: 296,
    },
  },
};
