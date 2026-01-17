"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import Heading from "@/components/common/heading";

const cartItems = [
    {
        id: 1,
        title: "Crafted in Japan: Tokyo to Kyoto Traditions",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-2.jpg",
        price: 4900,
        quantity: 2,
        details: "10 Days • 1 Country • 4 Cities • 35 Places",
        travelDate: "Mar, 01 2026 (Sunday)",
        roomInfo: "Room 1 [Double] - 2 Adults",
    }
]

export default function CartPage() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonHeader />

                    <section className="!pb-10 !max-w-7xl !mx-auto">
                        <Heading main="Your Cart" marginBottom="0" />
                        <main className="!mx-auto !max-w-7xl !px-4 !py-8 sm:px-6 lg:px-8">
                            <div className="grid gap-4 lg:grid-cols-3">
                                <div className="lg:col-span-2 space-y-4">
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                    <div className="grid grid-cols-3 gap-3 !mb-4">
                                        {[
                                            { icon: "⭐", text: "Based on 5M+ traveler reviews" },
                                            { icon: "💰", text: "Lowest price guarantee" },
                                            { icon: "🌍", text: "24/7 global support" },
                                        ].map((benefit, idx) => (
                                            <div key={idx} className="!rounded-lg !border !border-border/50 !bg-secondary/20 !p-4 !text-center">
                                                <p className="text-2xl mb-2">{benefit.icon}</p>
                                                <p className="text-sm font-medium text-foreground">{benefit.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="!rounded-lg !border !border-border !bg-card !p-6">
                                        <span className="!mb-4 text-lg font-semibold block">Frequently Asked Questions</span>
                                        <div className="!space-y-3">
                                            {[
                                                "What is your cancellation policy?",
                                                "How long does shipping take?",
                                                "Can I modify my booking?",
                                                "What payment methods do you accept?",
                                                "Is my payment information secure?",
                                            ].map((question, idx) => (
                                                <details key={idx} className="!group cursor-pointer !border !rounded-lg">
                                                    <summary className="flex items-center !justify-between !bg-secondary/30 !px-4 !py-3 !text-sm !font-medium !text-foreground !hover:bg-secondary/50 !transition-colors">
                                                        {question}
                                                        {/* <span className="!transition !group-open:rotate-180">▼</span> */}
                                                    </summary>
                                                    <p className="!mt-2 !px-4 !text-sm !text-muted-foreground !leading-relaxed">
                                                        Our customer service team is here to help. Contact us for specific details about your booking.
                                                    </p>
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1">
                                    <CartSummary subtotal={subtotal} tax={tax} total={total} />
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
