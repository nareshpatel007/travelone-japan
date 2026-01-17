"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import Heading from "@/components/common/heading";
import PassengerForm from "@/components/checkout/passenger-form";
import PaymentMethod from "@/components/checkout/payment-method";
import OrderSummary from "@/components/checkout/order-summary";
import FAQSection from "@/components/checkout/faq-section";

export default function CheckoutPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonHeader />

                    <section className="!pb-10 !max-w-7xl !mx-auto">
                        <Heading main="Complete Your Booking" marginBottom="0" />
                        <main className="!mx-auto !max-w-7xl !px-4 !py-8 sm:px-6 lg:px-8">
                            <div className="grid gap-4 lg:grid-cols-3">
                                <div className="lg:col-span-2 space-y-4">
                                    <PassengerForm />
                                    <PaymentMethod />
                                </div>
                                <div className="lg:col-span-1">
                                    <OrderSummary />
                                    <div className="!rounded-lg !border !border-border !bg-card !p-6 !mb-4">
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
                                    <FAQSection expandedFAQ={expandedFAQ} setExpandedFAQ={setExpandedFAQ} />
                                </div>
                            </div>
                        </main>
                    </section>
                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
