"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";

export default function EthicalAIDisclosurePage() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            {ready && <>
                <CommonHeader />

                <div className="max-w-4xl mx-auto px-5 md:px-0 md:p-6 py-5 md:py-6">
                    <PageHeading main="Ethical AI & Algorithm Transparency Disclosure" />

                    <div className="space-y-10 mb-10">

                        {/* META */}
                        <section className="space-y-2">
                            <p className="text-base font-normal text-black">
                                Last Updated: January 15, 2026
                            </p>
                            <p className="text-base font-normal text-black">
                                Version: 1.0
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Our Commitment to Algorithmic Integrity
                            </h2>
                            <p className="text-base font-normal text-black">
                                At TravelOne, we believe that AI should be a tool for human empowerment, not manipulation.
                            </p>
                            <p className="text-base font-normal text-black">
                                As the architects of the <b>Agentic AI Orchestration Layer</b>, we are committed to radical transparency in how our systems process data, curate experiences, and influence traveler decisions.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. The "Human-in-the-Loop" Philosophy
                            </h2>
                            <p className="text-base font-normal text-black">
                                While our AI, engineered at <b>TravelOne Canada</b>, possesses the computational power to synthesize millions of data points, it does not operate in a vacuum.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Expert Audit:</b> Every core logic update in our AI is audited by travel operations veterans to ensure cultural nuance and safety.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Final Authority:</b> The traveler always maintains final authority. Our AI provides "<b>Orchestrated Options</b>," but it never forces a selection or conceals alternatives.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Bias Mitigation & Objective Curation
                            </h2>
                            <p className="text-base font-normal text-black">
                                Traditional travel platforms often prioritize results based on the highest commission rates (the "Pay-to-Play" model). TravelOne’s AI is programmed with different priorities:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>The Persona Match:</b> Results are weighted primarily by how well they align with your Traveler Persona(e.g., sustainability values, logistical needs, and past feedback).
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Zero Commission Bias:</b> Our algorithms are designed to find the most efficient and high-sentiment logistical path, regardless of our underlying commission structure.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Safety & Impact:</b> We prioritize local partners in our Strategic Zones who meet our internal "Local Soul" standards for safety and ethical labor practices.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. No "Dark Patterns" Guarantee
                            </h2>
                            <p className="text-base font-normal text-black">
                                TravelOne strictly prohibits the use of "Dark Patterns"—deceptive design elements meant to trick users into making unintended purchases.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>No Artificial Urgency:</b> We do not use fake "Only 1 room left!" timers or false scarcity tactics.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Transparent Pricing:</b> As the Merchant of Record, the price you see at the start of the orchestration is the price you pay, inclusive of all known taxes and fees.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Explanability: Why am I seeing this?
                            </h2>
                            <p className="text-base font-normal text-black">
                                We believe you have a right to know how our AI thinks.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>The "Reasoning" Feature:</b> Whenever our AI suggests a specific route or hotel, it provides a brief "Reasoning" note (e.g., "Suggested because this hotel matches your 'Quiet Sanctuary' persona and is within 5 minutes of your meeting location").
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Feedback Integration:</b> If you reject a suggestion, our AI records the reason, immediately refining your Persona to prevent future misalignment.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Data Sovereignty & The Persona Asset
                            </h2>
                            <p className="text-base font-normal text-black">
                                Our AI is designed with <b>Privacy-by-Design</b>. Your Traveler Persona is an encrypted asset used only within the TravelOne ecosystem. We do not use your data to feed public LLMs or share your behavioral patterns with third-party advertising networks.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                7. Continuous Ethical Oversight
                            </h2>
                            <p className="text-base font-normal text-black">
                                The field of Agentic AI is evolving rapidly. Our leadership team, headed by <b>Bhavin Vora</b>, conducts quarterly "Ethical Impact Assessments" to ensure our technology continues to serve the best interests of the North American traveler and the global communities we visit.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </>
    );
}
