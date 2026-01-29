"use client"

import { formatDate, formatPrice } from "@/lib/utils";

// Define props
interface Props {
    orderData: any;
    paymentData: any;
    walletAmount: any;
    stripeHandlingFee: number;
}

export default function RepaymentOrderSummary({ orderData, paymentData, walletAmount, stripeHandlingFee }: Props) {
    return (
        <div className="rounded-sm border border-border bg-card p-6 space-y-4">
            <span className="block text-xl font-semibold text-foreground">Order Summary</span>
            <div className="space-y-4">
                <div className="space-y-2 border-b border-border pb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground text-base">Payment No.</span>
                        <span className="font-medium text-foreground text-base">
                            {paymentData?.payment_no == 1 && "1st Payment"}
                            {paymentData?.payment_no == 2 && "2nd Payment"}
                            {paymentData?.payment_no == 3 && "3rd Payment"}
                            {paymentData?.payment_no > 3 && `${paymentData?.payment_no}th Payment`}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <span className="text-base font-semibold text-foreground">Due Date</span>
                    <span className="text-xl font-bold text-black">
                        {formatDate(paymentData?.next_pay_date)}
                    </span>
                </div>
                
                <div className="flex justify-between">
                    <span className="text-base font-semibold text-foreground">Due Amount</span>
                    <span className="text-xl font-bold text-black">
                        ${formatPrice(paymentData?.amount, 0)}
                    </span>
                </div>

                {walletAmount != '' && <div className="flex justify-between">
                    <span className="text-base font-semibold text-foreground">Wallet Amount</span>
                    <span className="text-xl font-bold text-black">
                        ${formatPrice(walletAmount, 0)}
                    </span>
                </div>}

                <p className="text-base">✓ All taxes and fees included</p>
            </div>
        </div>
    )
}
