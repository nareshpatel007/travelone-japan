export default function OrderSummary() {
    return (
        <div className="!border !border-border !rounded-lg !p-6 !bg-card !top-6 !mb-4">
            <span className="block text-xl font-semibold text-foreground !mb-4">Order Summary</span>
            <div className="!space-y-1 !mb-6">
                <div className="space-y-3 !border-b !border-border !pb-4 !mb-4">
                    <div className="!flex !justify-between !text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium text-foreground">
                            $9000.00
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (10%)</span>
                        <span className="font-medium text-foreground">
                            $1000.00
                        </span>
                    </div>
                </div>
                <div className="!mb-4 !flex !justify-between">
                    <span className="!text-base !font-semibold !text-foreground">Total</span>
                    <span className="!text-xl !font-bold !text-black">
                        $10,000.00
                    </span>
                </div>
                <p className="!text-sm !mb-6">✓ All taxes and fees included</p>
            </div>

            <div className="!bg-green-50 !border !border-green-200 !rounded-lg !p-2 !text-center">
                <p className="text-sm text-muted-foreground mb-1">1st Payment of</p>
                <p className="text-2xl font-bold text-green-600">$4,900.00</p>
            </div>
        </div>
    )
}
