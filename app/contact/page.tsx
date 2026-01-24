"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";
import PageHeading from "@/components/common/page-heading";
import FullBannerSection from "@/components/about/full-banner";
import StartWithWho from "@/components/about/start-with-who";

export default function ContactUsPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        bookingNumber: "",
        message: "",
    });

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    }

    return (
        <body>
            {ready && <>
                <CommonHeader />

                <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                    <PageHeading
                        main="Contact"
                        sub="We're here to help. Reach out to us through any of the channels below."
                    />
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="rounded-xl p-5 md:p-8 border border-gray-200 space-y-7">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-[#FFF9EE] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="h-8 w-8 text-[#ffa200]" />
                                        </div>
                                        <span className="text-xl font-semibold text-gray-900 block mb-2">Message Sent!</span>
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
                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Subject *</label>
                                                <select
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="Support">Support</option>
                                                    <option value="Register Complaint">Register Complaint</option>
                                                    <option value="Feedback">Feedback</option>
                                                    <option value="Report a Dispute">Report a Dispute</option>
                                                    <option value="Other Issue">Other Issue</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Booking Reference Number (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={formData.bookingNumber}
                                                    onChange={(e) => setFormData({ ...formData, bookingNumber: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                    placeholder="Booking Number"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Your Message *</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                placeholder="Your Message"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-black/90 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="lg:w-80 space-y-4">
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FFF9EE] rounded-lg">
                                        <MapPin className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900 block mb-2">
                                            Address
                                        </span>
                                        <p className="text-sm text-gray-600">
                                            19 Grand Trunk Crescent, Toronto, ON M5J 3A3
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FFF9EE] rounded-lg">
                                        <Phone className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900 block mb-2">
                                            Phone
                                        </span>
                                        <Link href="tel:+1-437-966-9023" className="hover:underline">
                                            <p className="text-sm text-gray-600">
                                                +1 437 966 9023
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FFF9EE] rounded-lg">
                                        <Mail className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900 block mb-2">
                                            Email
                                        </span>
                                        <Link href="mailto:connect@travelone.io" className="hover:underline">
                                            <p className="text-sm text-gray-600">
                                                connect@travelone.io
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StartWithWho />
                <FullBannerSection />
                <CommonFooter />
            </>}
        </body>
    );
}
