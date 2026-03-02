'use client'

import { useState, useEffect } from 'react';
import { ChevronUp, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FooterCurveSection from '../home/footer-curve-section';
import NewsletterSubscribe from './newsletter';
import CookieConsent from './cookie-consent';

export default function AdsLandingFooter() {
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
            {/* TOP FOOTER */}
            <FooterCurveSection isAdsLanding={true} />

            {/* LOGOS */}
            <div className="flex flex-wrap items-center justify-center gap-6 bg-[#FFF9EE] py-10">
                <Image
                    src="/common/acta-logo.webp"
                    alt="ACTA"
                    width={160}
                    height={80}
                    draggable="false"
                    className="object-contain h-auto w-20 md:w-26"
                />

                <Image
                    src="/common/tico-logo.webp"
                    alt="TICO"
                    width={160}
                    height={80}
                    draggable="false"
                    className="object-contain h-auto w-20 md:w-26"
                />
            </div>
            <footer className="bg-[#FFF9EE] text-black">
                <div className="max-w-7xl mx-auto px-6 space-y-12 pb-23">
                    {/* SOCIAL MEDIA */}
                    <div className="flex justify-center text-center gap-3">
                        <Link href="https://www.linkedin.com/company/travelone-technologies-inc/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="flex items-center justify-center bg-[#007aff] hover:bg-[#007aff]/90 text-white p-2 rounded-full transition-colors cursor-pointer">
                                <Linkedin className="h-4 w-4" />
                            </button>
                        </Link>

                        <Link href="https://www.instagram.com/travelone.io/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="flex items-center justify-center bg-[#f78da7] hover:bg-[#f78da7]/90 text-white p-2 rounded-full transition-colors cursor-pointer">
                                <Instagram className="h-4 w-4" />
                            </button>
                        </Link>

                        <Link href="https://www.facebook.com/travelone.technologies.inc/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="flex items-center justify-center bg-[#0165E1] hover:bg-[#0165E1]/90 text-white p-2 rounded-full transition-colors cursor-pointer">
                                <Facebook className="h-4 w-4" />
                            </button>
                        </Link>

                        <Link href="https://www.youtube.com/@traveloneio" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="flex items-center justify-center bg-[#ee2852] hover:bg-[#ee2852]/90 text-white p-2 rounded-full transition-colors cursor-pointer">
                                <Youtube className="h-4 w-4" />
                            </button>
                        </Link>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="text-center text-gray-900 text-sm md:text-base space-y-4">
                        <div className='w-full md:max-w-[1000px] mx-auto space-y-2'>
                            <p className='text-xs md:text-sm'>
                                Regulatory & Corporate Structure
                            </p>
                            <p className='text-xs md:text-sm'>
                                TravelOne is a global orchestration platform. Technology and IP development are managed by TravelOne Technologies Inc. (Canada).
                            </p>
                            <p className='text-xs md:text-sm'>
                                All travel services and financial transactions are executed by TravelOne Global Travel Services LLC (USA). For residents of Ontario, travel services are coordinated through Bhavin Vora (TICO #T1515202), a registered advisor hosted by Century Travel Services (TICO #2856798).
                            </p>
                        </div>
                        <p>
                            © {new Date().getFullYear()} TravelOne Technologies Inc. | All Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* SCROLL TO TOP */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-22 right-4 md:right-8 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-900 transition z-50 cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={24} />
                    </button>
                )}
            </footer>
        </>
    );
}