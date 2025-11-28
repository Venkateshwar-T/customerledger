// hooks/useContract.ts
"use client"

import { useState } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface Customer {
  name: string
  balance: number
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export const useCustomerLedger = () => {
  const { address } = useAccount()

  const { data: customerData, refetch } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getCustomer",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  const [isLoading, setIsLoading] = useState(false)

  const addCustomer = async (customerAddr: string, name: string) => {
    setIsLoading(true)
    try {
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addCustomer",
        args: [customerAddr as `0x${string}`, name],
      })
      await refetch()
    } finally {
      setIsLoading(false)
    }
  }

  const updateBalance = async (customerAddr: string, amount: number) => {
    setIsLoading(true)
    try {
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "updateBalance",
        args: [customerAddr as `0x${string}`, BigInt(amount)],
      })
      await refetch()
    } finally {
      setIsLoading(false)
    }
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    customer: customerData
      ? { name: customerData[0], balance: Number(customerData[1]) }
      : null,
    actions: { addCustomer, updateBalance },
    state,
  }
}
