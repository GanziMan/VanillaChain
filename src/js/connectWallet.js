// 지갑 연결 로직
export async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected:", accounts[0]);
    } catch (e) {
      console.log(e);
    }
  }
}
