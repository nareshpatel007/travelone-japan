"use client"

import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";

// Define props
type Props = {
    walletNotes: any;
}

export function WalletNotesTab({ walletNotes }: Props) {
    // If data empty, return null
    if (!walletNotes) return null;

    return (
        <div className="py-10">
            <div className="overflow-x-auto">
            <table className="w-full border border-blue-600 text-base text-black">
                <thead>
                    <tr className="border-b border-blue-600 text-center font-medium">
                        <th className="px-3 py-4 text-base bg-gray-100 border-r border-blue-600"></th>
                        <th className="px-3 py-4 text-base bg-gray-100 border-r border-blue-600">Type</th>
                        <th className="px-3 py-4 text-base bg-gray-100 border-r border-blue-600">Amount (USD)</th>
                        <th className="px-3 py-4 text-base bg-gray-100 border-r border-blue-600">Description</th>
                        <th className="px-3 py-4 text-base bg-gray-100 border-r border-blue-600">Created At</th>
                        <th className="px-3 py-4 text-base bg-gray-100">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {walletNotes && Object.entries(walletNotes).map(([key, value]: any) => ( */}
                    <tr className="text-center border-b border-blue-600">
                        <td className="px-3 py-4 text-sm border-r border-blue-600 text-left font-medium">
                            Credit
                        </td>

                        <td className="px-3 py-4 text-sm border-r border-blue-600">
                            $100
                        </td>

                        <td className="px-3 py-4 text-sm border-r border-blue-600">
                            This is demo comment.
                        </td>

                        <td className="px-3 py-4 text-sm font-semibold">
                            12 Sep 2023
                        </td>
                        
                        <td className="px-3 py-4 text-sm font-semibold">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}
