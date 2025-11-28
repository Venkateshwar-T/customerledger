# Customer Ledger — Prototype dApp
## 📌 Project Title

# Customer Ledger (Prototype dApp on Flare Coston2 Testnet)
## 📍 Contract Address

0xd739900ACbC55c4f052af03b505e36dAcf08Df99

# 🔗 Explorer:
https://coston2-explorer.flare.network/address/0xd739900ACbC55c4f052af03b505e36dAcf08Df99

# 📘 Description

Customer Ledger is a simple Solidity-based prototype that stores customer records on-chain.
It allows adding customers, updating balances, and fetching stored information from the contract.

# 🧩 Features

Add new customer entries

Update existing customer balances

Retrieve customer details

On-chain storage

Gas-efficient structure

# 🛠 Tech Stack

Solidity

Flare Coston2 Testnet

Remix + MetaMask

Flare Explorer

# 🚀 How to Use

Deploy the contract (no constructor inputs required).

Use addCustomer() to create a record.

Call getCustomer() to fetch details.

Use updateBalance() to modify balances.

# 📄 Example
addCustomer(1, "Alice", 5000);
getCustomer(1); // ("Alice", 5000)

updateBalance(1, 6500);
getCustomer(1); // ("Alice", 6500)

# 📦 Future Enhancements

Event logs for changes

Owner-only access control

Transaction history per customer

UI dashboard