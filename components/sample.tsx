// components/sample.tsx
"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useCustomerLedger } from "@/hooks/useContract"
import { isAddress } from "viem"

const SampleIntegration = () => {
  const { isConnected } = useAccount()

  const [customerAddr, setCustomerAddr] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [updateAddr, setUpdateAddr] = useState("")
  const [updateAmount, setUpdateAmount] = useState("")

  const { customer, actions, state } = useCustomerLedger()

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please connect your wallet.</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Customer Ledger</h1>

      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Your Customer Info</h2>
        {customer ? (
          <>
            <p><b>Name:</b> {customer.name}</p>
            <p><b>Balance:</b> {customer.balance}</p>
          </>
        ) : (
          <p>No customer info found.</p>
        )}
      </div>

      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Add Customer</h2>
        <input
          type="text"
          placeholder="Customer Address"
          value={customerAddr}
          onChange={(e) => setCustomerAddr(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          disabled={
            !isAddress(customerAddr) ||
            !customerName ||
            state.isLoading
          }
          onClick={() => actions.addCustomer(customerAddr, customerName)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {state.isLoading ? "Processing..." : "Add Customer"}
        </button>
      </div>

      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Update Balance</h2>
        <input
          type="text"
          placeholder="Customer Address"
          value={updateAddr}
          onChange={(e) => setUpdateAddr(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount (+/-)"
          value={updateAmount}
          onChange={(e) => setUpdateAmount(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          disabled={
            !isAddress(updateAddr) ||
            updateAmount === "" ||
            state.isLoading
          }
          onClick={() =>
            actions.updateBalance(updateAddr, Number(updateAmount))
          }
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {state.isLoading ? "Processing..." : "Update Balance"}
        </button>
      </div>

      {state.hash && (
        <div className="p-4 border rounded">
          <p><b>Tx Hash:</b> {state.hash}</p>
          {state.isConfirming && <p>Waiting for confirmation...</p>}
          {state.isConfirmed && <p className="text-green-600">Confirmed!</p>}
        </div>
      )}

      {state.error && (
        <div className="p-4 border border-red-600 rounded text-red-600">
          {state.error.message}
        </div>
      )}
    </div>
  )
}

export default SampleIntegration
