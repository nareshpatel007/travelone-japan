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
                    <PageHeading main="Privacy & Data Asset Policy" />

                    <div className="space-y-10 mb-10">

                        {/* META */}
                        <section className="space-y-2">
                            <p className="text-base font-normal text-black">
                                Last Updated: January 15, 2026
                            </p>
                            <p className="text-base font-normal text-black">
                                Version: 2.0
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Introduction & The "Persona" Philosophy
                            </h2>
                            <p className="text-base font-normal text-black">
                                At TravelOne, we believe your data should work for you, not against you. Unlike traditional platforms that sell user behavior to advertisers, we use your data to build a proprietary <b>Traveler Persona</b>. This policy explains how we collect, orchestrate, and protect this asset to provide the most personalized travel experience in the world.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. The TravelOne Data Ecosystem
                            </h2>
                            <p className="text-base font-normal text-black">
                                We distinguish between two types of data:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Personally Identifiable Information (PII):</b> Your name, passport details, and payment information required for legal travel fulfillment by <b>TravelOne USA</b> (Merchant of Record).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>The Traveler Persona (The Asset):</b> Synthesized metadata regarding your travel DNA—including behavioral patterns, logistical non-negotiables, "vibe" preferences, and spiritual or environmental values.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Data Collection & Agentic AI Mapping
                            </h2>
                            <p className="text-base font-normal text-black">
                                Our <b>Agentic AI</b>, headquartered at <b>TravelOne Canada</b>, collects data through:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Direct Input:</b> Information you provide during onboarding or through our "Persona Quiz."
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Behavioral Synthesis:</b> How you interact with itineraries and local experiences.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Feedback Loops:</b> Post-travel debriefs that refine your "Persona" for future journeys.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. How We Use Your Persona Asset
                            </h2>
                            <p className="text-base font-normal text-black">
                                Your data is utilized for the following core purposes:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Predictive Orchestration:</b> Anticipating your needs (e.g., automatically suggesting a quiet floor because your persona indicates a preference for silence).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Automated Servicing:</b> Using your persona to make real-time decisions during travel disruptions (e.g., rebooking you on a specific airline you prefer without needing to ask).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Merchant of Record Integrity:</b> Ensuring your financial data is used solely for the fulfillment of the specific travel contracts you authorize.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Data Sovereignty & Security
                            </h2>
                            <p className="text-base font-normal text-black">
                                We employ bank-grade security protocols to ensure your travel DNA remains private:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Encryption:</b> All Persona Data is encrypted using <b>AES-256</b> standards during transit and at rest.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Siloed Architecture:</b> Your payment data (handled by the US MoR) is siloed from your behavioral data (handled by the Canadian R&D hub) to ensure maximum security.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>No Third-Party Sales:</b> TravelOne does <b>not</b> sell, rent, or trade your Traveler Persona to third-party marketing brokers. Your data is used exclusively within the TravelOne ecosystem.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Global Regulatory Compliance
                            </h2>
                            <p className="text-base font-normal text-black">
                                TravelOne operates under the highest global standards for data protection:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>GDPR (Europe):</b> We uphold the rights of "Data Portability" and "The Right to be Forgotten" for all global users.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>CCPA (California):</b> We provide California residents with the specific disclosures required by the California Consumer Privacy Act.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>PIPEDA (Canada):</b> Our R&D operations in Toronto comply with the Personal Information Protection and Electronic Documents Act.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                7. Retention & Deletion
                            </h2>
                            <p className="text-base font-normal text-black">
                                We retain your <b>Traveler Persona</b> as long as your account is active to ensure trip-to-trip continuity. Upon request, TravelOne will "de-identify" or permanently delete your Persona Asset within 30 days, except where financial records must be kept for legal/audit purposes by the Merchant of Record.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                8. Cookies & Tracking
                            </h2>
                            <p className="text-base font-normal text-black">
                                We use "functional cookies" to remember your Persona during a session. We do not use "tracking pixels" designed to follow you across the internet for advertising purposes.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </body>
    );
}
