"use client";

import { CreditCard, Banknote, CheckCircle } from "lucide-react";


export default function PaymentsTab() {
    return (
        <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* PAYMENT SUMMARY */}
                <div className="bg-white rounded-sm shadow-sm border border-[#d9cec1]">
                    <div className="bg-black text-white px-4 py-3 font-medium text-sm md:text-base">
                        Payment Summary
                    </div>
                    <div className="p-5 text-sm md:text-base space-y-3">
                        <div className="flex justify-between">
                            <span>Total Booking Amount</span>
                            <span className="font-medium">$9,800.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Paid Amount</span>
                            <span className="font-medium text-green-600">$4,900.00</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                            <span>Outstanding</span>
                            <span className="font-semibold text-red-600">$4,900.00</span>
                        </div>
                    </div>
                </div>

                {/* PAYMENT METHOD */}
                <div className="bg-white rounded-sm shadow-sm border border-[#d9cec1]">
                    <div className="bg-black text-white px-4 py-3 font-medium text-sm md:text-base">
                        Payment Method
                    </div>
                    <div className="p-5 text-sm md:text-base space-y-3">
                        <div className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-gray-50">
                            <CreditCard className="h-5 w-5 text-gray-600" />
                            <span>Credit / Debit Card</span>
                        </div>

                        <div className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-gray-50">
                            <Banknote className="h-5 w-5 text-gray-600" />
                            <span>Bank Transfer</span>
                        </div>

                    </div>
                </div>

                {/* PAYMENT STATUS */}
                <div className="bg-white rounded-sm shadow-sm border border-[#d9cec1]">
                    <div className="bg-black text-white px-4 py-3 font-medium text-sm md:text-base">
                        Payment Status
                    </div>
                    <div className="p-5 text-sm md:text-base space-y-3">
                        <div className="flex items-center gap-2 text-green-700 font-medium">
                            <CheckCircle className="h-5 w-5" />
                            Partial Payment Received
                        </div>

                        <button className="w-full bg-black text-white py-2 rounded-sm text-sm md:text-base hover:bg-black/90">
                            Make Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
