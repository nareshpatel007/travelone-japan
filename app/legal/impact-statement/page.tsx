"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";

export default function Page() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <body>
            {ready && <>
                <CommonHeader />

                <div className="max-w-4xl mx-auto px-5 md:px-0 md:p-6 py-5 md:py-6">
                    <PageHeading main="Modern Slavery & Local Impact Statement" />

                    <div className="space-y-10 mb-10">

                        {/* META */}
                        <section className="space-y-2">
                            <p className="text-base font-normal text-black">
                                <b>Last Updated:</b> January 15, 2026
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Version:</b> 1.0
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Our Commitment to Ethical Exploration
                            </h2>
                            <p className="text-base font-normal text-black">
                                <b>TravelOne</b> recognizes that our global footprint carries a profound responsibility.
                            </p>
                            <p className="text-base font-normal text-black">
                                We are committed to ensuring that the "<b>Local Soul</b>" of our destinations is protected.
                            </p>
                            <p className="text-base font-normal text-black">
                                This statement outlines our zero-tolerance approach to modern slavery and our proactive strategy for positive local impact across our Strategic Intelligence Zones.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. Zero Tolerance for Modern Slavery
                            </h2>
                            <p className="text-base font-normal text-black">
                                <b>TravelOne</b> strictly prohibits any form of forced labor, human trafficking, or child exploitation within our operations and our supply chain.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Partner Vetting:</b> As part of our "<b>Human-in-the-Loop</b>" orchestration, we vet our local ground specialists in regions such as Kenya, Vietnam, India, and Indonesia to ensure they adhere to international fair labor standards.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Contractual Accountability:</b> Our agreements with local providers include mandatory compliance with the Modern Slavery Act (UK/Australia standards) and similar North American human rights protections.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. The "Local Soul" Economic Impact
                            </h2>
                            <p className="text-base font-normal text-black">
                                We believe that travel technology should empower local communities, not just global corporations.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Direct Revenue:</b> By acting as the <b>Merchant of Record (MoR)</b> and working directly with local experts, we ensure that a greater share of the traveler’s spend stays within the local economy.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Preference for Local:</b> Our Agentic AI is programmed to prioritize "<b>Authentic Local Assets</b>"—family-owned boutiques, community-led tours, and indigenous experiences—over generic international chains where a "<b>Persona Match</b>" exists.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Environmental Stewardship
                            </h2>
                            <p className="text-base font-normal text-black">
                                While our AI focuses on logistics, it also calculates the footprint of your journey.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Sustainable Orchestration:</b> TravelOne’s AI provides "<b>Lower-Impact</b>" alternatives for transit and lodging.
                            </p>
                            <p className="text-base font-normal text-black">
                                <b>Preservation Support:</b> In sensitive areas like the Nordic Circle and the Kenyan Wild, we prioritize partners who contribute a portion of their revenue to local conservation and environmental restoration.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Continuous Monitoring
                            </h2>
                            <p className="text-base font-normal text-black">
                                Ethical travel is not a static goal but a continuous process.
                            </p>
                            <p className="text-base font-normal text-black">
                                Our leadership team, led by <b>Bhavin Vora</b>, regularly reviews our partner network to ensure that our technology continues to support the dignity of workers and the health of the planet.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <p className="text-base font-normal text-black">
                                I understand.
                            </p>
                            <p className="text-base font-normal text-black">
                                To ensure each page is substantial enough to act as a standalone legal and professional document, I will provide them one by one.
                            </p>
                            <p className="text-base font-normal text-black">
                                Let’s start with the Accessibility Statement.
                            </p>
                            <p className="text-base font-normal text-black">
                                This page is a legal requirement in many jurisdictions (like Ontario under AODA and the US under the ADA) and signals that your technology is inclusive.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </body>
    );
}
