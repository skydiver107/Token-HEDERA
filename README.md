# NBBL Tokenization on Hedera

## Project Files and Folders

- `hardhat.config` - The Hardhat project configuration file reqiured for the project. This includes the Hedera testnet account private key, community JSON-RPC relay URL, and defines the Hardhat tasks.

- `/contracts` - The folder that contains the Greeter smart contract.

- `/test` - The folder that contains the test file that tests the Greeter.sol smart contract.

- `/scripts` - The folder that contains the Hardhat project scripts.

- `.env` - The file that stores the environment variables like the testnet account private key and community JSON-RPC url

## Setup

1. Open your IDE terminal and navigate to the root directory of the project. Run the following command to install all the necessary dependencies:

```shell
npm install
```

2. Install the dotenv package used to manage environment variables in a separate `.env` file, which is loaded at runtime

```shell
npm install dotenv
```

3. Get your Hedera testnet account hex encoded private key from the [Hedera Developer Portal](https://portal.hedera.com/register) and update the `.env.example` `TESTNET_OPERATOR_PRIVATE_KEY`

4. Rename `.env.example` to `.env`

5. Run the test script from the root directory of the project. The default network is set to "testnet."

```shell
npx hardhat test
```

6. Deploy the smart contract

```shell
npx hardhat deploy-contract
```

# License

[Apache License 2.0](LICENSE)
