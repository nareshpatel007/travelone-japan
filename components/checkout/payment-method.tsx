"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Lock } from "lucide-react"

export default function PaymentMethod() {
    // Define state
    const [paymentMethod, setPaymentMethod] = useState("credit-card")
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <div className="!border !border-border !rounded-lg !overflow-hidden !bg-card !mb-4">
            <div className="!p-6 !space-y-6">
                <div className="!grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                        onClick={() => setPaymentMethod("credit-card")}
                        className={`!py-3 !px-4 !border-1 rounded-lg font-semibold transition-all ${paymentMethod === "credit-card"
                            ? "border-[#d64a3a] bg-[#fef5f3] text-[#d64a3a]"
                            : "border-border text-foreground hover:border-accent"
                            }`}
                    >
                        Credit Card
                    </button>
                    <button
                        onClick={() => setPaymentMethod("bank-transfer")}
                        className={`py-3 px-4 border-1 rounded-lg font-semibold transition-all ${paymentMethod === "bank-transfer"
                            ? "border-[#1e5a7a] bg-blue-50 text-[#1e5a7a]"
                            : "border-border text-foreground hover:border-accent"
                            }`}
                    >
                        Bank Transfer
                    </button>
                </div>

                {/* Credit Card Notice */}
                {paymentMethod === "credit-card" && (
                    <>
                        <div className="!bg-yellow-50 !border !border-yellow-200 !rounded-lg !p-4 !space-y-3">
                            <span className="!block !font-semibold !text-yellow-900">Credit Card Payment Notice</span>
                            <div className="!space-y-2 !text-sm !text-yellow-800">
                                <p>
                                    Please note that a 4% credit card processing fee will be applied to all payments made by credit or
                                    debit card. This fee is charged by the payment processor and is non-refundable.
                                </p>
                                <p>To avoid this fee, you may choose to pay via bank transfer, which incurs no additional charges.</p>
                                <p className="!font-semibold">USD 196.00 will be charged extra for this transaction.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2 tracking-wide">
                                    Card Holder Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Card Holder Name"
                                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Card number"
                                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                                />
                            </div>
                        </div>
                    </>
                )}

                <button className="!w-full bg-black hover:bg-black/90 !cursor-pointer text-white font-semibold py-3 px-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Lock size={20} /> Pay & Book Now
                </button>
            </div>
        </div>
    )
}
