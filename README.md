# Customer Ledger DApp (Flare Network)

## 📌 Contract Address  
**0xd739900ACbC55c4f052af03b505e36dAcf08Df99**  
Explorer: https://coston2-explorer.flare.network/address/0xd739900ACbC55c4f052af03b505e36dAcf08Df99
<img width="1886" height="875" alt="image" src="https://github.com/user-attachments/assets/b9619eb8-ca3a-425b-af1f-caa5eccff224" />


---

## 📝 Project Overview  
The **Customer Ledger DApp** is a lightweight decentralized application built on the **Flare Coston2 Testnet**.  
It provides a simple and trustless way to **store customer records** directly on-chain.  
Each customer is identified by their wallet address and mapped to:

- Their **name**
- Their **current balance**

This ledger system enables fast, transparent, and tamper-proof customer management suitable for both personal and business applications.

---

## 🎯 Purpose  
Traditional databases require centralized control, making them vulnerable to manipulation, loss, or unauthorized access.  
This project solves that by placing customer information on-chain, ensuring:

- **Immutability**  
- **Transparency**  
- **High availability**  
- **Owner-controlled interaction via wallet**  

It’s ideal for learning how to integrate smart contracts with a frontend using wagmi/viem + Next.js.

---

## 🚀 Key Features

### ✅ **Add Customers**
- Register any address with a customer name.
- Automatically initializes their balance to 0.

### ✅ **Retrieve Customer Info**
- Fetch a customer's registered name and balance in real time.
- Responses are returned in a simple, predictable tuple:  
  `name: string`, `balance: uint256`.

### ✅ **Update Customer Balance**
- Increase or decrease a customer's balance using positive or negative values.
- Perfect for implementing:
  - Credit/debit systems  
  - Reward systems  
  - Trackers for expenses, payments, or dues  

### ✅ **Fully On-Chain Data**
- No backend or database needed.
- All records read/write directly to the blockchain.

### ✅ **Frontend Integration (Next.js + wagmi + viem)**
Includes ready-to-use:
- Contract hook  
- Sample UI  
- Wallet connection gating  
- Error handling  
- Loading state display  

---

## 🧩 How It Works (Architecture)

### 1. **Smart Contract**
Manages a mapping:  
```solidity
mapping(address => Customer)
