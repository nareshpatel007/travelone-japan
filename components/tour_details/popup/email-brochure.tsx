"use client"

import type React from "react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import QuestionHeading from "@/components/plan_your_trip/landing/questionHeading";
import Link from "next/link";

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function EmailBrochure({ open, onOpenChange }: Props) {
    // Define state
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Password reset requested for:", email)
        setIsSubmitted(true)
    }

    return (
        <>
            {open && <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
                <div
                    className="relative w-full max-w-[380px] bg-[#d9eed8] shadow-xl overflow-visible"
                    style={{
                        borderTopLeftRadius: "180px",
                        borderTopRightRadius: "180px",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                    }}
                >
                    <div className="absolute top-16 right-10 translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer">
                        <svg
                            className="absolute inset-0 w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 110 110"
                            fill="#a6c5a9"
                        >
                            <path d="M109.2,72.8c-1.9,5.2-11.5,6.4-14.7,10.6c-3.4,4.3-2,13.5-6.5,16.6c-4.6,3.1-13.1-1.3-18.4,0.3c-5.3,1.6-9.7,9.8-15.4,9.7c-5.5-0.1-9.6-8.4-15.1-10.2C33.6,98,25,102.1,20.6,99c-4.5-3.3-2.8-12.4-5.9-16.8c-3.2-4.4-12.8-5.9-14.4-11.1c-1.6-5.1,5.3-11.5,5.4-16.9C5.8,49-1.1,42.4,0.8,37.2s11.5-6.4,14.7-10.6c3.4-4.3,2-13.5,6.5-16.6c4.6-3.1,13.1,1.3,18.4-0.3c5.3-1.6,9.7-9.8,15.4-9.7c5.5,0.1,9.6,8.4,15.1,10.2C76.4,12,85,7.9,89.4,11c4.5,3.3,2.8,12.4,5.9,16.8c3.2,4.4,12.8,5.9,14.4,11.1c1.6,5.1-5.3,11.5-5.4,16.9C104.2,61,111.1,67.6,109.2,72.8z" />
                        </svg>

                        <button
                            aria-label="Close"
                            className="relative w-10 h-10 flex items-center justify-center text-white text-sm font-semibold cursor-pointer"
                            onClick={() => {
                                onOpenChange(false);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-8 md:p-10">
                        <QuestionHeading
                            title="Email Brochure"
                            subtitle="Get detailed information about our tours in your inbox."
                        />
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-md text-black">Email address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full rounded-sm px-4 py-2 bg-white border border-gray-900"
                                        required
                                    />
                                </div>

                                <div className="flex items-start gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        className="mt-1 cursor-pointer"
                                    />
                                    <label className="text-xs md:text-sm text-gray-700">
                                        I agree to the <Link href="https://travelone.io/terms-conditions" target="_blank" className="underline">T&Cs</Link> and <Link href="https://travelone.io/privacy-policy" target="_blank" className="underline">Privacy Policy</Link>, and consent to receive communications from TravelOne, including follow-up call and text messages for quotes, scheduling, and call reminders, regarding my inquiry. Std msg & data rates apply. Text STOP to cancel, HELP for info.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center bg-black text-white font-semibold mt-3 py-2.5 rounded-md hover:bg-[#333] transition-colors cursor-pointer"
                                >
                                    Submit
                                </button>
                            </form>
                        ) : (
                            <div className="space-y-4 text-center py-4">
                                <div className="flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-[#2F5D50]/10 flex items-center justify-center">
                                        <CheckCircle className="h-8 w-8 text-[#2F5D50]" />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xl font-semibold text-black block mb-2">Check your email</span>
                                    <span className="text-sm text-gray-700 block mb-1">We've sent a password reset link to</span>
                                    <span className="text-sm font-medium text-gray-900">{email}</span>
                                </div>
                                <div className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                                    <span className="text-sm text-gray-700 leading-relaxed">
                                        Didn't receive the email?&nbsp;
                                        <button
                                            type="button"
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-[#2F5D50] hover:underline font-medium"
                                        >
                                            Try again?
                                        </button>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>}
        </>
    )
}
