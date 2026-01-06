import { Button } from "@/components/ui/button"

interface CartSummaryProps {
    subtotal: number
    tax: number
    total: number
}

export function CartSummary({ subtotal, tax, total }: CartSummaryProps) {
    return (
        <div className="!top-8 !space-y-4">
            <div className="!rounded-lg !border !border-border !bg-card !p-6">
                <span className="block text-xl font-semibold text-foreground !mb-4">Order Summary</span>
                <div className="space-y-3 !border-b !border-border !pb-4 !mb-4">
                    <div className="!flex !justify-between !text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium text-foreground">
                            ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (10%)</span>
                        <span className="font-medium text-foreground">
                            ${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>
                <div className="!mb-4 !flex !justify-between">
                    <span className="!text-base !font-semibold !text-foreground">Total</span>
                    <span className="!text-xl !font-bold !text-black">
                        ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                </div>
                <p className="!text-sm !mb-6">✓ All taxes and fees included</p>
                <div className="space-y-2">
                    <button type="button" className="!w-full bg-black text-white hover:bg-black/80 !font-medium !cursor-pointer">
                        Proceed to Payment
                    </button>
                    <button
                        type="button"
                        className="w-full border-border text-foreground hover:bg-black/10 bg-transparent !cursor-pointer"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
            <div className="!rounded-lg !border !border-border !bg-card !p-6">
                <span className="!mb-4 text-lg font-semibold block">Payment Schedule</span>
                <div className="!mb-6 !rounded-lg !bg-black/10 !p-4">
                    <p className="!text-sm !text-muted-foreground !mb-1">Next Payment</p>
                    <div className="flex justify-between items-baseline">
                        <span className="text-lg font-semibold text-foreground">Jan 30, 2026</span>
                        <span className="text-xl font-bold text-primary">$4,900.00</span>
                    </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Your payment will be processed securely. We accept all major credit and debit cards. Your transaction is
                    protected with industry-standard encryption.
                </p>
            </div>
            <div className="!rounded-lg !border !border-border !bg-card !p-6">
                <span className="block !mb-4 text-xl font-semibold text-foreground">Have a coupon code?</span>
                <div className="!flex !items-center !gap-2">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="!rounded-lg border !m-0 border-border bg-background !px-4 !py-1.5 !text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                    <button type="button" className="!bg-black !text-white !hover:bg-black/90 !cursor-pointer">Apply</button>
                </div>
            </div>
        </div>
    )
}
