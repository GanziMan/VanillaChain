// withdraw.js
import { web3 } from "./web3Provider.js";
import { contractInstance } from "./contract.js";

async function withdrawEther(amount, fromAddress) {
  try {
    const receipt = await contractInstance.methods
      .withdraw(web3.utils.toWei(amount, "ether"))
      .send({
        from: fromAddress,
      });
    console.log("Withdraw successful:", receipt);
    document.getElementById("status").textContent = "Withdraw successful!";
  } catch (error) {
    console.error("Withdraw failed:", error);
    document.getElementById("status").textContent = "Withdraw failed.";
  }
}

document.getElementById("withdrawBtn").addEventListener("click", async () => {
  const amount = document.getElementById("withdrawAmount").value;
  const accounts = await web3.eth.getAccounts();
  const fromAddress = accounts[0];
  await withdrawEther(amount, fromAddress);
});

export { withdrawEther };
