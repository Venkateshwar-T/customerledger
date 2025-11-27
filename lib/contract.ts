export const contractAddress = "0xd739900ACbC55c4f052af03b505e36dAcf08Df99";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "addCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddr",
        "type": "address"
      }
    ],
    "name": "getCustomer",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
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
    "inputs": [
      {
        "internalType": "address",
        "name": "_customerAddr",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "amount",
        "type": "int256"
      }
    ],
    "name": "updateBalance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;