"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";

export default function RefundPolicyPage() {
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
                    <PageHeading main="Refund & Cancellation Policy" />
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
                                1. The TravelOne Assurance
                            </h2>
                            <p className="text-base font-normal text-black">
                                As the <b>Merchant of Record (MoR)</b>, TravelOne USA takes full responsibility for the financial lifecycle of your booking.
                            </p>
                            <p className="text-base font-normal text-black">
                                Unlike traditional platforms that refer you to third-party airlines or hotels, TravelOne is your single point of accountability for all refund and re-accommodation requests.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. Cancellation Procedures
                            </h2>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Self-Service Cancellations:</b> Travelers may request cancellations via the <span className="text-amber-600">travelone.io</span> dashboard.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Variable Terms:</b> Because we orchestrate inventory from multiple global providers (Airlines, Hotels, and Local Ground Specialists), the specific refundability of your trip depends on the "Rate Rules" selected at the time of booking.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Orchestration Fees:</b> TravelOne may charge a non-refundable "<b>AI Orchestration Fee</b>." This fee covers the proprietary computational resources used to curate and manage your personalized persona-matched itinerary.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Agentic AI Re-accommodation (Real-Time Recovery)
                            </h2>
                            <p className="text-base font-normal text-black">
                                This is the core of the TravelOne advantage. In the event of a significant travel disruption (flight cancellation, hotel overbooking, or local strike):
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Autonomous Sensing:</b> Our <b>Agentic AI</b> monitors your journey in real-time. If a disruption is detected, the AI immediately searches for the best alternative based on your <b>Traveler Persona</b>.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Proactive Solutions:</b> We aim to present you with a re-accommodation solution (e.g., a new flight or alternative hotel) before you even contact support.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Acceptance:</b> If you accept the AI-generated alternative, TravelOne USA handles the financial transfer to the new provider seamlessly.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Refund Processing
                            </h2>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Direct Disbursement:</b> Approved refunds are credited back to the original form of payment within 5–10 business days.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>No "Pass-the-Blame":</b> You do not need to wait for the airline or hotel to pay TravelOne before we process your eligible refund. As the MoR, we manage the liquidity and the dispute on your behalf.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Partial Refunds:</b> If a portion of an orchestrated trip is canceled (e.g., one specific tour in a 10-day itinerary), TravelOne will calculate and issue a pro-rated refund for that specific segment.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Force Majeure & Local Disruptions
                            </h2>
                            <p className="text-base font-normal text-black">
                                In cases of "Acts of God" (natural disasters, pandemics, or civil unrest) in our <b>Strategic Intelligence Zones</b> (e.g., Japan, Kenya, or Iceland):
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Local Insight:</b> Our on-ground specialists provide the AI with live safety updates.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Safety-First Cancellation:</b> TravelOne reserves the right to cancel or reroute trips if our local intelligence suggests a safety risk, in which case a "Credit for Future Travel" or full/partial refund will be facilitated based on provider flexibility.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Chargebacks & Disputes
                            </h2>
                            <p className="text-base font-normal text-black">
                                We encourage travelers to contact <b>support@travelone.io</b> before initiating a bank dispute. As the Merchant of Record, we are often able to resolve refund issues faster than a traditional bank investigation.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </>
    );
}
