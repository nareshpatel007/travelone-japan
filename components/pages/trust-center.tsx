"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import PageHeading from "@/components/common/page-heading";

export default function TrustCenterPage() {
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
                    <PageHeading main="Trust Center" />
                    <div className="space-y-12 mb-10">
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                Financial Integrity & Consumer Protection
                            </h2>
                            <p className="text-base font-normal text-black">
                                At TravelOne, we prioritize the security of your journey from the first deposit to your return home. As a North American travel orchestrator, we operate under a rigorous financial framework designed for transparency and peace of mind.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Secure Funds Safeguarding
                            </h2>
                            <p className="text-base font-normal text-black">
                                Every payment made to TravelOne Global Travel Services LLC is held in dedicated, FDIC-insured accounts. We utilize a "Safeguarding Model" where client funds for future travel are managed independently from our company’s operational capital. This ensures your investment is protected and reserved exclusively for your specific travel arrangements.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. Global Merchant of Record (MoR)
                            </h2>
                            <p className="text-base font-normal text-black">
                                TravelOne acts as the official Merchant of Record for your booking. This means we take full legal and financial responsibility for your transaction. You will never be asked to share sensitive card details with third-party local vendors; all payments are processed through our secure, PCI-compliant US infrastructure.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Regulatory Excellence
                            </h2>
                            <p className="text-base font-normal text-black">
                                Our leadership maintains active TICO certification and ACTA membership. These credentials signify our commitment to the highest standards of consumer protection and ethical conduct in the North American travel industry.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Advanced Encryption
                            </h2>
                            <p className="text-base font-normal text-black">
                                We utilize bank-grade SSL encryption and two-factor authentication (2FA) for all financial workflows. By partnering with leading financial technology platforms like Mercury and Wise, we ensure that cross-border payments to our global partners are executed with speed, accuracy, and maximum security.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </>
    );
}
