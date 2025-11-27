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
    useWaitForTransactionReceipt(
