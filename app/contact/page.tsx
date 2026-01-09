"use client";

import CommonHeader from "@/components/header/common-header";
import CommonMobileHeader from "@/components/header/common-mobile-header";
import CommonFooter from "@/components/footer/common-footer";
import CommonTopHeader from "@/components/header/common-top-header";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details: ["123 Travel Street", "San Francisco, CA 94102", "United States"],
    },
    {
        icon: Phone,
        title: "Phone",
        details: ["+1 (800) 123-4567", "+1 (415) 555-0100"],
    },
    {
        icon: Mail,
        title: "Email",
        details: ["support@viator.com", "bookings@viator.com"],
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: ["Monday - Friday: 9AM - 8PM", "Saturday - Sunday: 10AM - 6PM"],
    },
];

const quickLinks = [
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Chat with our support team in real-time",
        link: "#",
        linkText: "Start Chat",
    },
    {
        icon: HelpCircle,
        title: "Help Center",
        description: "Find answers to frequently asked questions",
        link: "#",
        linkText: "Visit Help Center",
    },
    {
        icon: FileText,
        title: "Manage Booking",
        description: "View, modify or cancel your bookings",
        link: "/bookings",
        linkText: "Go to Bookings",
    },
];

export default function ContactUsPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        bookingNumber: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    }

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonTopHeader />
                    <CommonHeader />
                    <CommonMobileHeader />

                    <div className="!py-12 !px-8">
                        <div className="!max-w-7xl !mx-auto">
                            <div className="!text-center !mb-10">
                                <span className="text-3xl md:text-4xl font-bold text-gray-900 !block !mb-4">Contact Us</span>
                                <p className="text-gray-600 !max-w-2xl !mx-auto">
                                    Have questions about your booking or need assistance? We're here to help. Reach out to us through any of the
                                    channels below.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 !mb-10">
                                {quickLinks.map((item) => (
                                    <div
                                        key={item.title}
                                        className="!bg-white !rounded-xl !p-6 !border !border-gray-200 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="!p-3 !bg-[#ffc765]/10 !rounded-lg">
                                                <item.icon className="!h-6 !w-6 !text-[#ffa200]" />
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-900 !block !mb-1">{item.title}</span>
                                                <span className="text-sm text-gray-600 !block !mb-3">{item.description}</span>
                                                <Link href={item.link} className="text-sm font-medium !hover:underline">
                                                    {item.linkText} →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="!bg-white !rounded-xl !p-8 !border !border-gray-200">
                                        <span className="text-xl font-bold text-gray-900 !block !mb-6">Send us a Message</span>

                                        {isSubmitted ? (
                                            <div className="!text-center !py-12">
                                                <div className="!w-16 !h-16 !bg-[#ffc765]/20 !rounded-full !flex !items-center !justify-center !mx-auto !mb-4">
                                                    <Send className="h-8 w-8 text-[#ffa200]" />
                                                </div>
                                                <span className="text-xl font-semibold text-gray-900 !block !mb-2">Message Sent!</span>
                                                <span className="text-gray-600 !block !mb-6">
                                                    Thank you for contacting us. We'll get back to you within 24 hours.
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        setIsSubmitted(false)
                                                        setFormData({ name: "", email: "", subject: "", bookingNumber: "", message: "" })
                                                    }}
                                                    className="!text-black font-medium hover:underline"
                                                >
                                                    Send another message
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="!space-y-2">
                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                                                            placeholder="Your Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                                        <select
                                                            required
                                                            value={formData.subject}
                                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                            className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                                                        >
                                                            <option value="">Select a subject</option>
                                                            <option value="booking">Booking Inquiry</option>
                                                            <option value="cancellation">Cancellation Request</option>
                                                            <option value="refund">Refund Request</option>
                                                            <option value="complaint">Complaint</option>
                                                            <option value="feedback">Feedback</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Booking Number (Optional)</label>
                                                        <input
                                                            type="text"
                                                            value={formData.bookingNumber}
                                                            onChange={(e) => setFormData({ ...formData, bookingNumber: e.target.value })}
                                                            className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                                                            placeholder="Booking Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                                                    <textarea
                                                        required
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition-all resize-none"
                                                        placeholder="Your Message"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full md:w-auto !px-8 !py-3 !text-white !font-medium rounded-full hover:bg-[#333] cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="!w-5 !h-5 !border-2 !border-white/30 !border-t-white !rounded-full !animate-spin" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="h-5 w-5" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                <div className="lg:w-80 !space-y-4">
                                    {contactInfo.map((item) => (
                                        <div key={item.title} className="!bg-white !rounded-xl !p-5 !border !border-gray-200">
                                            <div className="!flex !items-start !gap-4">
                                                <div className="!p-2 !bg-[#ffc765]/10 !rounded-lg">
                                                    <item.icon className="h-5 w-5 text-[#ffa200]" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-gray-900 !block !mb-2">{item.title}</span>
                                                    {item.details.map((detail, idx) => (
                                                        <p key={idx} className="text-sm text-gray-600">
                                                            {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
