"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";
import Link from "next/link";

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
                                1. The TravelOne Planning Commitment
                            </h2>
                            <p className="text-base font-normal text-black">
                                Every journey orchestrated by TravelOne Global Travel Services LLC involves meticulous planning and the upfront commitment of resources to our global partners. To maintain the exclusivity and quality of our services, the following cancellation schedule applies to all bookings.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. Standard Cancellation Schedule
                            </h2>
                            <p className="text-base font-normal text-black">
                                Cancellation fees are calculated based on the date written notice is received by TravelOne:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    90+ Days Prior to Departure: Full refund of the trip price, minus the initial non-refundable planning deposit.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    60 to 89 Days Prior to Departure: 50% of the total trip price is non-refundable.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    30 to 59 Days Prior to Departure: 75% of the total trip price is non-refundable.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    Less than 30 Days Prior to Departure: 100% of the total trip price is non-refundable.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. The "Non-Refundable" Planning Deposit
                            </h2>
                            <p className="text-base font-normal text-black">
                                In recognition of the proprietary technology and expert time used to build your custom Traveler Persona and itinerary, an initial planning deposit is required for all bespoke journeys. This deposit is 100% non-refundable but may be applied as a credit toward a future journey within 12 months, subject to TravelOne’s discretion.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Individual Package & Supplier-Specific Policies
                            </h2>
                            <p className="text-base font-normal text-black">
                                Please note that the terms outlined in this document serve as our Standard Policy. Certain individual travel packages, custom itineraries, or premium service components (such as private charters, luxury villa rentals, or peak-season "Special Events") may be subject to Specific Cancellation Terms that override this general policy.
                            </p>
                            <p className="text-base font-normal text-black">
                                Any such specific terms will be clearly disclosed to you in your Package Confirmation or Service Agreement at the time of booking.
                            </p>
                            <p className="text-base font-normal text-black">
                                By finalizing your booking, you acknowledge that the specific terms for your individual package take precedence over the general schedule.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Third-Party Supplier Terms
                            </h2>
                            <p className="text-base font-normal text-black">
                                While TravelOne acts as your Merchant of Record, certain components of your journey (such as non-refundable "Special Event" tickets, luxury villa rentals, or specific airline fares) are subject to the strict cancellation policies of our suppliers. These "Direct Costs" will be identified at the time of booking and are non-refundable regardless of the cancellation date.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Contact & Dispute Resolution
                            </h2>
                            <p className="text-base font-normal text-black">
                                At TravelOne, we are committed to transparency and the highest level of client service. If you have any questions regarding your cancellation rights, or if you encounter any problems with your booking, please reach out to our team immediately.
                            </p>
                            <p className="text-base font-normal text-black">
                                Email: <Link className="text-amber-600 hover:underline" href="mailto:connect@travelone.io">connect@travelone.io</Link>
                            </p>
                            <p className="text-base font-normal text-black">
                                We aim to acknowledge all inquiries within 24 business hours and work diligently to resolve any concerns to your satisfaction.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                7. Flight Cancellations & Significant Changes
                            </h2>
                            <p className="text-base font-normal text-black">
                                In compliance with U.S. Department of Transportation (DOT) regulations, if TravelOne is the Merchant of Record for your airfare and the airline cancels or significantly changes your flight, you are entitled to a prompt refund to your original form of payment if you choose not to accept the alternative offered.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                8. Travel Insurance Recommendation
                            </h2>
                            <p className="text-base font-normal text-black">
                                Because TravelOne must adhere to the strict financial commitments made to our global partners, we highly recommend the purchase of comprehensive travel insurance. This protects your investment against unforeseen circumstances such as medical emergencies or trip interruptions.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </>
    );
}
