Here's a well-structured and descriptive README file for your First Dapp project: **A Counter Dapp**.

# First Dapp - A Counter Dapp 🚀

Welcome and create your **First Dapp - A Counter Dapp**! This decentralized application demonstrates the use of the Ethereum blockchain for simple state management through a counter that can be incremented. Follow this guide to set up, deploy, and run the Dapp.

---

## Prerequisites 📋

Before you begin, make sure you have the following ready:

1. **Install MetaMask**  
   - Download the [MetaMask Chrome Extension](https://metamask.io/download.html).  
   - Set up your wallet by creating an account or importing an existing one.

2. **Add Sepolia Testnet Chain to MetaMask**  
   - Open MetaMask and go to **Settings > Networks > Add a Network**.  
   - Use the following details:  
     - **Network Name**: Sepolia Testnet  
     - **New RPC URL**: `https://rpc.sepolia.org/`  
     - **Chain ID**: `11155111`  
     - **Currency Symbol**: `ETH`  
   - Save and select the Sepolia Testnet network in your wallet.

3. **Get Sepolia Testnet ETH**  
   - Visit a [Sepolia faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) and enter your wallet address for free test ETH.  
   - Ensure your wallet reflects the balance after claiming.

---

## Main Requirements 🛠️

1. **Run Solidity Code on Remix**  
   - Open [Remix IDE](https://remix.ethereum.org/).  
   - Create a new file and paste your Solidity smart contract code.  
   - Compile the contract using the **Solidity Compiler**.

2. **Deploy the Contract**  
   - Connect your MetaMask wallet to Remix by selecting **Injected Provider - MetaMask** in the environment dropdown under the **Deploy & Run Transactions** tab.  
   - Deploy the compiled contract to the Sepolia Testnet.

---

## Setting Up the Dapp 🖥️

1. **Clone the Repository**  
   - Clone this repository to your local machine:  
     ```bash
     git clone https://github.com/GDG-HETC/FIRST_DAPP.git
     ```

2. **Include ABI and Contract Address**  
   - After deploying your contract on Remix, copy the **ABI code** from Solidity Compiler (down).
   - Copy **Contract Address** from Deployed Contracts at Deploy and Tranactions tab in remix.org.  
   - Open `main.js` in your cloned repository and replace the placeholders with your ABI and contract address:  
     ```javascript
     const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
     const contractABI = [/* Your contract ABI here */];
     ```

3. **Run the Counter Dapp**  
   - Open `index.html` in a browser that supports MetaMask.  
   - Interact with the Dapp to increment the counter, which updates the state on the blockchain.

---
And you have successfully created your first decentralized app.
