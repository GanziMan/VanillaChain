// deposit.js
import { web3 } from "./web3Provider.js";

async function depositEther(amount, fromAddress) {
  try {
    const receipt = await web3.eth.sendTransaction({
      from: fromAddress,
      to: "0xYourContractAddressHere", // 스마트 컨트랙트 주소
      value: web3.utils.toWei(amount, "ether"),
    });
    console.log("Deposit successful:", receipt);
    document.getElementById("status").textContent = "Deposit successful!";
  } catch (error) {
    console.error("Deposit failed:", error);
    document.getElementById("status").textContent = "Deposit failed.";
  }
}

document.getElementById("depositBtn").addEventListener("click", async () => {
  const amount = document.getElementById("depositAmount").value;
  const accounts = await web3.eth.getAccounts();
  const fromAddress = accounts[0];
  await depositEther(amount, fromAddress);
});

export { depositEther };
