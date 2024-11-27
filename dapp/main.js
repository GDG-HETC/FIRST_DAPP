// let web3;
let counterContract;
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your deployed contract address from deploy tab under tranactions - Remix
const contractABI = [
	{
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];//Add your ABI code from Compile section (down) - Remix

// Wait for the window to load
window.addEventListener("load", async () => {
    const connectButton = document.getElementById("connect-btn");
    const incrementButton = document.getElementById("increment-btn");
    // Check if MetaMask is installed
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        // Event listener for the Connect Wallet button
        connectButton.addEventListener("click", async () => {
            try {
                // Request account access
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                console.log("Connected account:", accounts[0]);
                connectButton.textContent = "Connected: " + accounts[0].slice(0, 6) + "..." + accounts[0].slice(-4);
                connectButton.disabled = true;
                // Initialize the contract
                counterContract = new web3.eth.Contract(contractABI, contractAddress);
                // Load the initial counter value
                loadCounter();
            } catch (error) {
                console.error("User rejected connection request:", error);
            }
        });
        // Add event listener for the increment button
        incrementButton.addEventListener("click", incrementCounter);
    } else {
        alert("Please install MetaMask to use this dApp.");
        connectButton.disabled = true;
        connectButton.textContent = "MetaMask Not Found";
    }
});
// Load the counter value from the blockchain
async function loadCounter() {
    const count = await counterContract.methods.getCount().call();
    document.getElementById("count").textContent = count;
}
// Increment the counter value
async function incrementCounter() {
    const accounts = await web3.eth.getAccounts();
    await counterContract.methods.increment().send({ from: accounts[0] });
    loadCounter();
}
