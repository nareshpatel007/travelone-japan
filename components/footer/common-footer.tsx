'use client'

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function CommonFooter() {
    // Define state
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="bg-[#fcefdf] text-black">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-lg mb-6">Destination</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Digital Nomad</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Lifestyle</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Traveler</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Adventure</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Culture</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Digital Nomad</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Lifestyle</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Traveler</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Adventure</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Culture</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            alt="Logo"
                            width={220}
                            height={100}
                            src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                        />
                        <form className="w-full max-w-xs my-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete='off'
                                    className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none text-sm"
                                />
                                <button
                                    type="button"
                                    className="px-6 py-3 text-white bg-black hover:bg-gray-800 font-semibold text-sm cursor-pointer transition-colors"
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-lg mb-6">Tip & Tricks</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Digital Nomad</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Lifestyle</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Traveler</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Adventure</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Culture</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-6">Tip & Tricks</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Digital Nomad</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Lifestyle</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Traveler</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Adventure</a></li>
                                <li><a href="#" className="text-gray-900 hover:text-black hover:underline underline-offset-4 transition-colors">Culture</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-900 text-sm md:text-base border-t border-gray-400 pt-8">
                    <p>Copyright © {new Date().getFullYear()} by TravelOne Technologies Inc. All Rights Reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-black hover:bg-gray-900 cursor-pointer text-white rounded-full p-3 shadow-lg transition-colors z-50"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </footer>
    )
}
