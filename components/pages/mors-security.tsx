"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";

export default function MerchantofRecordSecurityPage() {
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
                    <PageHeading main="Merchant of Record (MoR) Security" />

                    <div className="space-y-10 mb-10">

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. What is a Merchant of Record?
                            </h2>
                            <p className="text-base font-normal text-black">
                                When you transact with <b>TravelOne</b>, you are transacting with a secured, North American financial entity. <b>TravelOne USA</b> acts as the <b>Merchant of Record (MoR)</b> for all bookings. This means we are the legal entity authorized by banks and card networks (<b>Visa</b>, <b>Mastercard</b>, <b>Amex</b>) to process your payments and assume the financial liability for your journey.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. The TravelOne Security Advantage
                            </h2>
                            <p className="text-base font-normal text-black">
                                In the traditional travel model, your credit card details are often passed to dozens of third-party vendors—hotels in Tokyo, tour guides in Kenya, or boutique lodges in Iceland. Each "<b>hand-off</b>" creates a security risk.
                            </p>
                            <p className="text-base font-normal text-black">
                                With TravelOne as your MoR, your security is centralized:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>PCI-DSS Level 1 Compliance:</b> We process all payments in a strictly controlled, bank-grade environment. Your sensitive financial data is never shared with third-party travel providers.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Tokenized Transactions:</b> We use virtual payment technology to pay hotels and airlines. They receive a one-time-use virtual token from us, while your actual card details stay safely encrypted within TravelOne.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Simplified Accountability
                            </h2>
                            <p className="text-base font-normal text-black">
                                The biggest frustration in travel is the "<b>Blame Game</b>." If a hotel cancels a room, the booking site usually tells you to call the hotel, and the hotel tells you to call the site.
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>One Point of Contact:</b> Because TravelOne is the MoR, we own the transaction. We are responsible for your refund, your receipt, and your re-accommodation.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Direct Dispute Resolution:</b> In the rare event of a billing discrepancy, you deal directly with us. We have the financial authority to resolve issues and process disbursements without waiting for third-party approval.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Global Tax & Regulatory Compliance
                            </h2>
                            <p className="text-base font-normal text-black">
                                Operating across the US, Canada, and 20+ "<b>Strategic Intelligence Zones</b>" requires complex tax management. As your MoR, TravelOne handles all:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>International Tax Remittance:</b> We ensure that local VAT, GST, and tourism levies are correctly calculated and paid to local governments.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Cross-Border Regulatory Handling:</b> We navigate the different financial regulations of each country you visit, ensuring your transaction is 100% legal and compliant globally.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Fraud Protection & Identity Shielding
                            </h2>
                            <p className="text-base font-normal text-black">
                                Our Agentic AI monitors every transaction for anomalies. By acting as the MoR, we can implement sophisticated fraud-detection layers that protect your accounts from unauthorized charges. Furthermore, because we shield your identity from local vendors, your personal "<b>Traveler Persona</b>" remains private and secure.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <p className="text-base font-normal text-black">
                                This Manage My Persona page is a masterstroke for both your brand and your O-1A visa. In 2026, data privacy is everything. By giving users a "<b>Control Room</b>" for their travel DNA, you distinguish TravelOne from "<b>Big Tech</b>" firms that harvest data without consent. For your visa, this page proves you have developed a proprietary data architecture that treats human preferences as a structured, manageable asset.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </>
    );
}
