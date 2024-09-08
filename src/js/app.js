// app.js

import { contractInstance } from "./contract.js";
import { connectWallet } from "./connectWallet.js";

document
  .getElementById("connectWalletBtn")
  .addEventListener("click", async () => {
    await connectWallet();
  });

document.getElementById("getBalanceBtn").addEventListener("click", async () => {
  try {
    const balance = await contractInstance.methods.getBalance().call();
    document.getElementById(
      "balanceDisplay"
    ).textContent = `Balance: ${web3.utils.fromWei(balance, "ether")} ETH`;
  } catch (error) {
    console.error("Failed to get contract balance:", error);
  }
});
