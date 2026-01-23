'use client'

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FooterCurveSection from '../home/footer-curve-section';

// Define props
type Props = {
    isStickyShow?: boolean
};

export default function CommonFooter({ isStickyShow = false }: Props) {
    // Define state
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
        <>
            <FooterCurveSection />

            {/* LOGOS */}
            <div className="flex flex-wrap items-center justify-center gap-6 bg-[#FFF9EE] py-10">
                <Image
                    src="https://ik.imagekit.io/288weifiq/nextjs/81-814150_acta-logo-clipart.png"
                    alt="ACTA"
                    width={160}
                    height={80}
                    draggable="false"
                    className="object-contain h-auto w-20 md:w-26"
                />

                <Image
                    src="https://ik.imagekit.io/288weifiq/nextjs/tico-logo_final.c6b6399c5942.jpg"
                    alt="TICO"
                    width={160}
                    height={80}
                    draggable="false"
                    className="object-contain h-auto w-20 md:w-26"
                />
            </div>

            <footer className="bg-[#FFF9EE] text-black">
                <div className={`max-w-7xl mx-auto px-6 space-y-12 ${isStickyShow ? 'pb-12' : 'pb-5'}`}>
                    <div className="order-2 flex flex-col items-center space-y-6 text-center">
                        <div>
                            <Image
                                alt="Logo"
                                width={220}
                                height={100}
                                draggable={false}
                                src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                            />
                            <span className="text-base">Subscribe for trending deals.</span>
                        </div>
                        <div className="w-full max-w-md">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    className="flex-1 px-4 py-3 border border-gray-500 bg-white text-black text-sm focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="px-6 py-3 uppercase bg-black text-white text-sm font-semibold hover:bg-black/90 cursor-pointer transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 mb-0 md:mb-12 space-y-12 md:space-y-0">
                        {/* MENU 1 */}
                        <div className='space-y-6'>
                            <h3 className="font-semibold text-lg">Company</h3>
                            <ul className="space-y-3 text-base">
                                <li>
                                    <Link href="/about" className="hover:underline underline-offset-4">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/country" className="hover:underline underline-offset-4">Global Destinations</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="hover:underline underline-offset-4">Careers</Link>
                                </li>
                            </ul>
                        </div>

                        {/* MENU 2 */}
                        <div className='space-y-6'>
                            <h3 className="font-semibold text-lg">The Ecosystem</h3>
                            <ul className="space-y-3 text-base">
                                <li>
                                    <Link href="https://travelone.io" target="_blank" className="hover:underline underline-offset-4">Traveler Portal</Link>
                                </li>
                                <li>
                                    <Link href="https://tech.travelone.io" target="_blank" className="hover:underline underline-offset-4">Tech Hub</Link>
                                </li>
                                <li>
                                    <Link href="https://agent.travelone.io" target="_blank" className="hover:underline underline-offset-4">Travel Agent</Link>
                                </li>
                                <li>
                                    <Link href="/legal/manage-my-persona" className="hover:underline underline-offset-4">Manage My Persona</Link>
                                </li>
                                <li>
                                    <Link href="https://agent.travelone.io/login" target="_blank" className="hover:underline underline-offset-4">Partner Login</Link>
                                </li>
                            </ul>
                        </div>

                        {/* MENU 3 */}
                        <div className='space-y-6'>
                            <h3 className="font-semibold text-lg">Support</h3>
                            <ul className="space-y-3 text-base">
                                <li>
                                    <Link href="/contact" className="hover:underline underline-offset-4">Help Center</Link>
                                </li>
                                <li>
                                    <Link href="/faqs" className="hover:underline underline-offset-4">FAQs</Link>
                                </li>
                                <li>
                                    <Link href="/legal/mors-security" className="hover:underline underline-offset-4">Merchant of Record Security</Link>
                                </li>
                                <li>
                                    <Link href="/legal/travel-advisory" className="hover:underline underline-offset-4">Travel Advisory</Link>
                                </li>
                                <li>
                                    <Link href="/legal/accessibility-statement" className="hover:underline underline-offset-4">Accessibility Statement</Link>
                                </li>
                            </ul>
                        </div>

                        {/* MENU 4 */}
                        <div className='space-y-6'>
                            <h3 className="font-semibold text-lg">Legal & Compliance</h3>
                            <ul className="space-y-3 text-base">
                                <li>
                                    <Link href="/legal/terms-service" className="hover:underline underline-offset-4">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link href="/legal/privacy-policy" className="hover:underline underline-offset-4">Privacy & Data Asset Policy</Link>
                                </li>
                                <li>
                                    <Link href="/legal/refund-policy" className="hover:underline underline-offset-4">Refund & Cancellation Policy</Link>
                                </li>
                                <li>
                                    <Link href="/legal/ai-transparency-disclosure" className="hover:underline underline-offset-4">Ethical AI Disclosure</Link>
                                </li>
                                <li>
                                    <Link href="/legal/impact-statement" className="hover:underline underline-offset-4">Modern Slavery Statement</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className={`text-center text-gray-900 text-sm md:text-base pt-5 md:pt-0 ${isStickyShow ? 'mb-0 sm:mb-10' : ''}`}>
                        © Copyright {new Date().getFullYear()} TravelOne Technologies Inc. | All Rights Reserved.
                    </div>
                </div>

                {/* SCROLL TO TOP */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className={`fixed ${isStickyShow ? 'bottom-20' : 'bottom-4 md:bottom-8'} right-8 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-900 transition z-50 cursor-pointer`}
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={24} />
                    </button>
                )}
            </footer>
        </>
    );
}