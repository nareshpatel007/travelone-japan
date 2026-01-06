"use client";

import CommonHeader from "@/components/header/common-header";
import CommonMobileHeader from "@/components/header/common-mobile-header";
import CommonFooter from "@/components/footer/common-footer";
import CommonTopHeader from "@/components/header/common-top-header";
import IncludeJs from "@/components/includes/common-js";
import IncludeCss from "@/components/includes/css";
import Script from "next/script";

export default function ContactUsPage() {
    return (
        <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
            <CommonTopHeader />
            <CommonHeader />
            <CommonMobileHeader />

            <section className="!pb-10 !mb:pb-20 bg-white">
                <div className="!max-w-7xl !mx-auto !px-8">
                    <div className="flex items-center justify-center bg-[#d9eed8] px-4">
                        <div className="bg-white p-8 rounded-md text-center w-full">
                            <h1 className="!text-4xl md:!text-5xl font-semibold mb-2">
                                Your Private Journey is Now in Design.
                            </h1>
                            <p className="text-gray-600 !mb-8">
                                Thank you for sharing your vision. We’ve received your preferences, and our team is already reviewing your "vibe" and "flow" requirements.
                            </p>
                            <p className="text-gray-600">
                                At TravelOne, we believe luxury is found in the details that AI cannot see. Unlike automated platforms, we are a Design & Delivery House. This means we don’t just plan your route; we own the execution on the ground.
                            </p>
                            <p className="text-gray-600">✓ We secure your Private 7-seat Luxury Van.</p>
                            <p className="text-gray-600">✓ We vet your English-speaking Chauffeur.</p>
                            <p className="text-gray-600 !mb-8">✓ We hand-pick your Elite Local Guides.</p>
                            <p className="text-gray-600">The next step is to move from a concept to a signature plan. Because 2026 availability for top-tier Ryokans and private drivers is already tightening, we recommend a brief 15-minute Vision Consultation.</p>
                            <p className="text-gray-600 !mb-8">On this call, we will:</p>
                            <p className="text-gray-600">1. Review your "Design Wizard" inputs.</p>
                            <p className="text-gray-600">2. Share 2–3 exclusive route concepts tailored to your pace.</p>
                            <p className="text-gray-600 !mb-8">3. Discuss the "Signature Touches" that will make your trip unique.</p>
                            <p className="text-gray-600">Select a time for your Complimentary Vision Consultation:</p>
                        </div>
                    </div>
                </div>
            </section>
            <CommonFooter />
        </body>
    );
}
