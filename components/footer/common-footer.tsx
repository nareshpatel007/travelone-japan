'use client'

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CommonFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#fcefdf] text-black">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div
                    className="
                        grid grid-cols-1 gap-12
                        md:grid-cols-3
                        mb-12
                    "
                >
                    {/* MENU 1 — FIRST ON MOBILE */}
                    <div className="order-1 text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-6">Company Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/terms-service" className="hover:underline underline-offset-4">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:underline underline-offset-4">Privacy & Data Asset Policy</Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="hover:underline underline-offset-4">Refund & Cancellation Policy</Link>
                            </li>
                            <li>
                                <Link href="/ai-transparency-disclosure" className="hover:underline underline-offset-4">
                                Ethical AI & Algorithm Transparency Disclosure</Link>
                            </li>
                        </ul>
                    </div>

                    {/* CENTER FORM — SECOND ON MOBILE */}
                    <div className="order-2 flex flex-col items-center text-center">
                        <Image
                            alt="Logo"
                            width={220}
                            height={100}
                            draggable={false}
                            src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                        />

                        <div className="w-full max-w-xs my-8">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    className="flex-1 px-4 py-3 bg-white text-black text-sm focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                                >
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MENU 2 — THIRD ON MOBILE */}
                    <div className="order-3 text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-6">Tip & Tricks</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/impact-statement" className="hover:underline underline-offset-4">Modern Slavery & Local Impact Statement</Link>
                            </li>
                            <li>
                                <Link href="/accessibility-statement" className="hover:underline underline-offset-4">Accessibility Statement</Link>
                            </li>
                            <li>
                                <Link href="/mors-security" className="hover:underline underline-offset-4">
                                Merchant of Record (MoR) Security</Link>
                            </li>
                            <li>
                                <Link href="/manage-my-persona" className="hover:underline underline-offset-4">Manage My Persona</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="text-center text-gray-900 text-sm md:text-base border-t border-gray-400 pt-8">
                    © Copyright {new Date().getFullYear()} TravelOne Technologies Inc. | All Rights Reserved.
                </div>
            </div>

            {/* SCROLL TO TOP */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-900 transition z-50 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </footer>
    );
}