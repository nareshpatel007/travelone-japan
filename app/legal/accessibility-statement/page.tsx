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
                    <PageHeading main="Accessibility Statement" />
                    <div className="space-y-10 mb-10">
                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                1. Our Commitment to Inclusion
                            </h2>
                            <p className="text-base font-normal text-black">
                                At <b>TravelOne</b>, we believe that the wonders of global travel should be accessible to everyone.
                            </p>
                            <p className="text-base font-normal text-black">
                                We are committed to ensuring digital accessibility for people of all abilities.
                            </p>
                            <p className="text-base font-normal text-black">
                                We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our Agentic AI and travel orchestration tools are inclusive, intuitive, and usable.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                2. Standards & Conformance
                            </h2>
                            <p className="text-base font-normal text-black">
                                We strive to conform to the <b>Web Content Accessibility Guidelines (WCAG) 2.1</b> level <b>AA</b>.
                            </p>
                            <p className="text-base font-normal text-black">
                                These guidelines, established by the <b>World Wide Web Consortium (W3C)</b>, explain how to make web content more accessible for people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                3. Accessibility Features within the TravelOne Ecosystem
                            </h2>
                            <p className="text-base font-normal text-black">
                                To provide a seamless experience, we have integrated the following features across our subdomains (travelone.io, tech.travelone.io, and agent.travelone.io):
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Keyboard Navigation:</b> All interactive elements are accessible via keyboard for users with motor impairments.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Screen Reader Compatibility:</b> We use <b>WAI-ARIA</b> (Web Accessibility Initiative – Accessible Rich Internet Applications) attributes to ensure our AI-generated itineraries are clearly interpreted by screen-reading software.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>High Contrast & Scalability:</b> Our interface supports high-contrast modes and text scaling without loss of functionality or overlapping content.
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Alt-Text for Imagery:</b> Every destination image and data visualization includes descriptive alternative text.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                4. Technical Specifications
                            </h2>
                            <p className="text-base font-normal text-black">
                                The accessibility of the TravelOne ecosystem relies on the following technologies to work with the particular combination of web browsers and any assistive technologies or plugins installed on your device:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    HTML5
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    WAI-ARIA
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    CSS3
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    JavaScript
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                5. Continuous Improvement & Audit
                            </h2>
                            <p className="text-base font-normal text-black">
                                As an AI-first company, we recognize that automated content must be monitored.
                            </p>
                            <p className="text-base font-normal text-black">
                                Our engineering team at <b>TravelOne Canada</b> conducts bi-annual accessibility audits.
                            </p>
                            <p className="text-base font-normal text-black">
                                We use a combination of automated testing tools and manual reviews by users with lived experience of disabilities to ensure our Agentic AI does not create barriers during real-time orchestration.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-lg md:text-xl font-medium text-black">
                                6. Feedback & Contact Information
                            </h2>
                            <p className="text-base font-normal text-black">
                                We welcome your feedback on the accessibility of <b>TravelOne</b>.
                            </p>
                            <p className="text-base font-normal text-black">
                                If you encounter any accessibility barriers while using our platform, please let us know so we can rectify the issue immediately:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Email:</b> accessibility@travelone.io
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Postal Address (USA):</b> [Your US Office Address]
                                </li>
                                <li className="text-base font-normal text-black list-disc">
                                    <b>Postal Address (Canada):</b> [Your Toronto Office Address]
                                </li>
                            </ul>
                            <p className="text-base font-normal text-black">
                                We aim to respond to accessibility inquiries and resolve reported issues within two business days.
                            </p>
                            <p className="text-base font-normal text-black">
                                The Help Center serves a dual purpose: it reduces the volume of manual support tickets and acts as a "<b>Proof of Concept</b>" for your Agentic AI's logic. For your O-1 visa, this page demonstrates that your tech is solving real-world, high-complexity problems that traditional travel agencies cannot handle.
                            </p>
                        </section>
                    </div>
                </div>

                <CommonFooter />
            </>}
        </body>
    );
}
