/*-
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const { ethers } = require("hardhat");

module.exports = async (address) => {
  //Assign the first signer, which comes from the first privateKey from our configuration in hardhat.config.js, to a wallet variable.
  const wallet = (await ethers.getSigners())[0];

  //Assign the greeter contract object in a variable, this is used for already deployed contract, which we have the address for. ethers.getContractAt accepts:
  //name of contract as first parameter
  //address of our contract
  //wallet/signer used for signing the contract calls/transactions with this contract
  const greeter = await hre.ethers.getContractAt("Greeter", address, wallet);
  //using the greeter object(which is our contract) we can call functions from the contract. In this case we call greet which returns our greeting msg
  const callRes = await greeter.greet();

  console.log(`Contract call result: ${callRes}`);

  return callRes;
};
