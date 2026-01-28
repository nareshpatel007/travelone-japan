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
        <div className="py-5 md:py-7">
            <div className="overflow-x-auto">
            <table className="w-full border border-blue-600 text-base text-black">
                <thead>
                    <tr className="bg-white border-b">
                        <th className="!px-5 !py-3 font-semibold text-base">Type</th>
                        <th className="!px-5 !py-3 font-semibold text-base">Amount (USD)</th>
                        <th className="!px-5 !py-3 font-semibold text-base">Description</th>
                        <th className="!px-5 !py-3 font-semibold text-base">Created At</th>
                        <th className="!px-5 !py-3 font-semibold text-base">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {walletNotes && Object.entries(walletNotes).map(([key, value]: any) => ( */}
                    <tr className="bg-white text-center">
                        <td className="!px-5 !py-3 text-base">
                            Credit
                        </td>
                        <td className="!px-5 !py-3 text-base">
                            $100
                        </td>
                        <td className="!px-5 !py-3 text-base">
                            This is demo comment.
                        </td>
                        <td className="!px-5 !py-3 text-base">
                            12 Sep 2023
                        </td>
                        <td className="!px-5 !py-3 text-base"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}
