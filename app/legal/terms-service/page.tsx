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
                    <PageHeading main="Terms of Service" />
                    <div className="space-y-12 mb-10">
                        {/* Header */}
                        <section className="space-y-2">
                            <p className="text-base font-normal text-black">
                                Last Updated: January 15, 2026
                            </p>
                            <p className="text-base font-normal text-black">
                                Version: 2.0
                            </p>
                        </section>

                        {/* 1 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Contractual Relationship
                            </h2>
                            <p className="text-base font-normal text-black">
                                These Terms of Service ("Terms") govern the access or use by you, an individual, from within any country in the world of applications, websites, content, products, and services (the “Services”) made available by <b>TravelOne USA</b> and its parent or affiliated entities, including <b>TravelOne Canada</b> (collectively, “TravelOne”).
                            </p>
                            <p className="text-base font-normal text-black font-semibold">
                                PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES.
                            </p>
                            <p className="text-base font-normal text-black">
                                By accessing the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                            </p>
                        </section>

                        {/* 2 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. TravelOne as Merchant of Record (MoR)
                            </h2>
                            <p className="text-base font-normal text-black">
                                Unlike traditional travel meta-search engines, <b>TravelOne USA</b> acts as the <b>Merchant of Record</b> for all transactions processed through <span className="text-amber-600">travelone.io</span>.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Financial Responsibility:</b> TravelOne USA is the entity held liable by financial institutions for all processed transactions.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Transaction Accountability:</b> When you purchase travel through our platform, the transaction is between you and TravelOne USA. We take full responsibility for the transmission of funds to third-party service providers (Airlines, Hotels, Ground Operators).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Customer Recourse:</b> All billing inquiries, chargebacks, and refund requests must be directed to TravelOne USA.
                                </li>
                            </ul>
                        </section>

                        {/* 3 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Agentic AI & Orchestration Layer
                            </h2>
                            <p className="text-base font-normal text-black">
                                Our Services utilize a proprietary <b>Agentic AI Orchestration Layer</b> developed by <b>TravelOne Canada</b>.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>AI Decision Making:</b> You acknowledge that TravelOne’s AI synthesizes real-time data from global APIs to curate itineraries. While the AI is Human-in-the-Loop verified, TravelOne does not guarantee 100% real-time availability of third-party inventory until the final booking is confirmed.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Non-Reliance:</b> Itineraries generated are predictive suggestions based on your <b>Traveler Persona</b>. TravelOne is not liable for minor discrepancies in AI-generated descriptions provided by third-party data sources.
                                </li>
                            </ul>
                        </section>

                        {/* 4 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. The Traveler Persona & Data Assets
                            </h2>
                            <p className="text-base font-normal text-black">
                                By using our Services, you consent to the creation of a <b>Traveler Persona</b>.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Proprietary Mapping:</b> We record travel behaviors, preferences, and feedback to refine our AI orchestration.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Ownership:</b> While you own your personal identifiable information (PII), the synthesized Persona Map and the metadata associated with your travel patterns are the intellectual property of TravelOne.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Usage:</b> We use this data strictly to enhance your experience and provide anticipatory servicing. We do not sell this data to third-party marketing brokers.
                                </li>
                            </ul>
                        </section>

                        {/* 5 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Third-Party Providers & Ground Specialists
                            </h2>
                            <p className="text-base font-normal text-black">
                                TravelOne orchestrates travel through a network of third-party providers (e.g., Viator, Amadeus, and local Ground Specialists).
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Independent Contractors:</b> These providers are independent contractors and are not employees of TravelOne.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Service Standards:</b> TravelOne maintains a Local Intelligence Network to vet these partners, but each provider is governed by its own terms and conditions regarding safety, carriage, and stay.
                                </li>
                            </ul>
                        </section>

                        {/* 6 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Payments, Cancellations, and Refunds
                            </h2>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Currency:</b> All transactions are processed in the currency displayed at checkout (typically USD for TravelOne USA).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Refund Processing:</b> As MoR, TravelOne USA will process refunds according to the specific cancellation policy of the travel product purchased.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Service Fees:</b> TravelOne may charge an orchestration fee for the use of AI tools and 24/7 servicing. This fee is non-refundable once the travel orchestration is completed.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Real-Time Recovery:</b> In the event of a provider failure, TravelOne’s AI will attempt to provide re-accommodation options. If no suitable option is found, the MoR refund policy applies.
                                </li>
                            </ul>
                        </section>

                        {/* 7 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-base font-normal text-black">
                                TravelOne shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including lost profits, lost data, personal injury, or property damage related to or resulting from any use of the Services.
                            </p>
                        </section>

                        {/* 8 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                8. Governing Law & Jurisdiction
                            </h2>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>USA Transactions:</b> Governed by the laws of the State of New York.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Canada Transactions:</b> Governed by the laws of the Province of Ontario and the federal laws of Canada.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Arbitration:</b> Disputes shall be resolved through binding arbitration in the respective jurisdiction.
                                </li>
                            </ul>
                        </section>

                        {/* 9 */}
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                9. Intellectual Property
                            </h2>
                            <p className="text-base font-normal text-black">
                                The Services and all rights therein, including the <b>Agentic AI architecture</b>, <b>Persona Mapping logic</b>, and all content on <span className="text-amber-600">travelone.io</span>, <span className="text-amber-600">tech.travelone.io</span>, and <span className="text-amber-600">agent.travelone.io</span>, are and shall remain TravelOne’s property or the property of TravelOne’s licensors.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </body>
    );
}
