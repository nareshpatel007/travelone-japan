"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import Heading from "@/components/common/heading";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const sections = [
    {
        id: "introduction",
        title: "Introduction",
        content: `
      <p>Welcome to Viator ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
      <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
    `,
    },
    {
        id: "information-we-collect",
        title: "Information We Collect",
        content: `
      <p>We collect information that you provide directly to us, including:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment information when you make a booking.</li>
        <li><strong>Account Information:</strong> Username, password, and profile details when you create an account.</li>
        <li><strong>Booking Information:</strong> Travel dates, destination preferences, traveler details, and special requests.</li>
        <li><strong>Communication Data:</strong> Messages, reviews, and feedback you provide through our platform.</li>
      </ul>
      <p>We also automatically collect certain information when you visit our website:</p>
      <ul>
        <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and navigation patterns.</li>
        <li><strong>Location Data:</strong> General location based on IP address or precise location with your consent.</li>
        <li><strong>Cookies and Tracking:</strong> Information collected through cookies, pixels, and similar technologies.</li>
      </ul>
    `,
    },
    {
        id: "how-we-use",
        title: "How We Use Your Information",
        content: `
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>Processing and fulfilling your bookings and transactions</li>
        <li>Creating and managing your account</li>
        <li>Providing customer support and responding to inquiries</li>
        <li>Sending booking confirmations, updates, and important notices</li>
        <li>Personalizing your experience and providing tailored recommendations</li>
        <li>Improving our website, services, and user experience</li>
        <li>Sending marketing communications (with your consent)</li>
        <li>Detecting and preventing fraud and security threats</li>
        <li>Complying with legal obligations</li>
      </ul>
    `,
    },
    {
        id: "information-sharing",
        title: "Information Sharing and Disclosure",
        content: `
      <p>We may share your information with:</p>
      <ul>
        <li><strong>Tour Operators and Partners:</strong> To fulfill your bookings and provide the experiences you've purchased.</li>
        <li><strong>Service Providers:</strong> Third-party vendors who assist us with payment processing, email delivery, analytics, and customer support.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
        <li><strong>With Your Consent:</strong> In any other circumstances where you have given us explicit permission.</li>
      </ul>
      <p>We do not sell your personal information to third parties for their marketing purposes.</p>
    `,
    },
    {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        content: `
      <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
        <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
      </ul>
      <p>You can manage your cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
    `,
    },
    {
        id: "data-security",
        title: "Data Security",
        content: `
      <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
      <ul>
        <li>Encryption of data in transit and at rest</li>
        <li>Secure payment processing through PCI-compliant providers</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Access controls and employee training</li>
        <li>Incident response procedures</li>
      </ul>
      <p>While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>
    `,
    },
    {
        id: "your-rights",
        title: "Your Rights and Choices",
        content: `
      <p>Depending on your location, you may have certain rights regarding your personal information:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal information.</li>
        <li><strong>Correction:</strong> Request correction of inaccurate information.</li>
        <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
        <li><strong>Portability:</strong> Receive your data in a portable format.</li>
        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications.</li>
        <li><strong>Withdraw Consent:</strong> Withdraw previously given consent.</li>
      </ul>
      <p>To exercise these rights, please contact us using the information provided below.</p>
    `,
    },
    {
        id: "international-transfers",
        title: "International Data Transfers",
        content: `
      <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.</p>
      <p>When we transfer your information internationally, we implement appropriate safeguards such as Standard Contractual Clauses to ensure your data remains protected.</p>
    `,
    },
    {
        id: "children",
        title: "Children's Privacy",
        content: `
      <p>Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.</p>
    `,
    },
    {
        id: "changes",
        title: "Changes to This Policy",
        content: `
      <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.</p>
      <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
    `,
    },
    {
        id: "contact",
        title: "Contact Us",
        content: `
      <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> privacy@viator.com</li>
        <li><strong>Address:</strong> 123 Travel Street, San Francisco, CA 94102, United States</li>
        <li><strong>Phone:</strong> +1 (800) 123-4567</li>
      </ul>
      <p>For EU residents, you also have the right to lodge a complaint with your local data protection authority.</p>
    `,
    },
];

export default function Page() {
    // Define state
    const [ready, setReady] = useState(false);
    const [expandedSections, setExpandedSections] = useState<string[]>(sections.map((s) => s.id))

    const toggleSection = (id: string) => {
        setExpandedSections((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
    }

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonHeader />

                    <div className="!pb-10 !max-w-7xl !mx-auto">
                        <Heading main="Privacy Policy" sub="Last Updated: December 1, 2024" />
                        <main className="!mx-auto !max-w-7xl !px-4 sm:px-6 !mb-10 lg:px-8">
                            <div className="!bg-white !rounded-xl !p-6 !border !border-gray-200 !mb-8">
                                <span className="font-semibold text-gray-900 !block !mb-4">Table of Contents</span>
                                <nav className="!grid md:grid-cols-2 !gap-2">
                                    {sections.map((section, index) => (
                                        <a key={section.id} href={`#${section.id}`} className="!text-sm text-[#f53] hover:underline">
                                            {index + 1}. {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            {/* Content Sections */}
                            <div className="!space-y-4">
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className="!bg-white !rounded-xl !border !border-gray-200 !overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleSection(section.id)}
                                            className="w-full flex items-center justify-between !p-5 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 !block">{section.title}</span>
                                            <ChevronDown
                                                className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.includes(section.id) ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {expandedSections.includes(section.id) && (
                                            <div
                                                className="!px-5 !pb-5 prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-ul:mt-2 prose-li:mt-1"
                                                dangerouslySetInnerHTML={{ __html: section.content }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 bg-[#f53] text-white font-medium rounded-full transition-colors text-center"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/"
                                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors text-center"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </main>
                    </div>

                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
