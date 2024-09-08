// Web3.js 초기화 및 상태관리

import Web3 from "web3";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}
{
  alert("이 앱을 사용하기 위해서는 Metamask 설치해주세요.");
}

export { web3 };
