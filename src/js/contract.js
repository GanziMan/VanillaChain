// contract.js
import { web3 } from "./web3Provider.js";

// 스마트 컨트랙트 ABI와 주소
const contractABI = [
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0xYourContractAddressHere";

// 스마트 컨트랙트 인스턴스 생성
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

export { contractInstance };
