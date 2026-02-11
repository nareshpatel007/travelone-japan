"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import PageHeading from "@/components/common/page-heading";
import FullBannerSection from "@/components/about/full-banner";
import StartWithWho from "@/components/about/start-with-who";
import StickyHomeHeader from "@/components/header/sticky-home-header";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ContactPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        reference_no: "",
        message: "",
    });

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Handle form submit
    const handleSubmit = async () => {
        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setErrors("Please fill in all the required fields.");
            return;
        }

        // Update state
        setIsFormLoading(true);
        setErrors("");

        try {
            // API call
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Update state
            const data = await res.json();

            // Handle response
            if (data.status) {
                // Update state
                setIsSubmitted(true);
            } else {
                // Set error
                setErrors(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            // Set error
            setErrors("Something went wrong. Please try again.");
        } finally {
            // Update state
            setIsFormLoading(false);
        }
    }

    return (
        <>
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
                                                setIsSubmitted(false);
                                                setFormData({
                                                    name: "",
                                                    email: "",
                                                    phone: "",
                                                    subject: "",
                                                    reference_no: "",
                                                    message: ""
                                                });
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
                                                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Contact Number *</label>
                                                <PhoneInput
                                                    defaultCountry="us"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e })}
                                                    placeholder="Enter your phone number"
                                                    className="w-full rounded-sm py-0.5 px-3 text-sm md:text-md text-black font-medium bg-white border border-gray-300"
                                                    inputClassName="w-full !border-0 !border-white"
                                                />
                                            </div>
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
                                        </div>

                                        <div>
                                            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Booking Reference Number (Optional)</label>
                                            <input
                                                type="text"
                                                value={formData.reference_no}
                                                onChange={(e) => setFormData({ ...formData, reference_no: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                                                placeholder="Booking Number"
                                            />
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

                                        {errors && <div className="text-red-500 text-sm md:text-base mt-2">{errors}</div>}

                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={isFormLoading}
                                            className="w-full md:w-auto px-8 py-2.5 bg-black text-white font-medium rounded-sm hover:bg-black/90 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isFormLoading ? (
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
                <CommonFooter isStickyShow={true} />
                <StickyHomeHeader />
            </>}
        </>
    );
}
