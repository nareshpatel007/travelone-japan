"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import PageHeading from "@/components/common/page-heading";

export default function ContactUsPage() {
    return (
        <body>
            <CommonHeader />

            <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                <PageHeading
                    main="Your Private Journey is Now in Design."
                />
                <div className="text-center space-y-12">
                    <p className="text-black text-sm md:text-base">
                        Thank you for sharing your vision. We’ve received your preferences, and our team is already reviewing your "vibe" and "flow" requirements.
                    </p>

                    <div className="space-y-3">
                        <p className="text-black text-sm md:text-base">
                            At TravelOne, we believe luxury is found in the details that AI cannot see. Unlike automated platforms, we are a Design & Delivery House. This means we don’t just plan your route; we own the execution on the ground.
                        </p>
                        <p className="text-black text-sm md:text-base">✓ We secure your Private 7-seat Luxury Van.</p>
                        <p className="text-black text-sm md:text-base">✓ We vet your English-speaking Chauffeur.</p>
                        <p className="text-black text-sm md:text-base">✓ We hand-pick your Elite Local Guides.</p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-black text-sm md:text-base">The next step is to move from a concept to a signature plan. Because 2026 availability for top-tier Ryokans and private drivers is already tightening, we recommend a brief 15-minute Vision Consultation.</p>
                        <p className="text-black text-sm md:text-base">On this call, we will:</p>
                        <p className="text-black text-sm md:text-base">1. Review your "Design Wizard" inputs.</p>
                        <p className="text-black text-sm md:text-base">2. Share 2–3 exclusive route concepts tailored to your pace.</p>
                        <p className="text-black text-sm md:text-base">3. Discuss the "Signature Touches" that will make your trip unique.</p>
                    </div>

                    <p className="text-black text-sm md:text-base">Select a time for your Complimentary Vision Consultation:</p>
                </div>
            </div>

            <CommonFooter />
        </body>
    );
}
