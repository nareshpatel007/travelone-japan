'use client'

import { Heart, Menu, ShoppingCartIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LoginModal } from '../common/login-modal';
import { CommonPlanTripModal } from '../plan_your_trip/common-popup';
import { LandingPlanTripModal } from '../plan_your_trip/landing-popup';

export default function StickyHomeHeader() {
    // Define state
    const [showStickyFooter, setShowStickyFooter] = useState(false);
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setShowStickyFooter(scrollPercentage > 2);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {showStickyFooter && (
                <div className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg border-t border-gray-300 z-50">
                    <div className="hidden md:flex max-w-7xl mx-auto py-3 items-center justify-between">
                        {/* LEFT SIDE */}
                        <div className="flex items-center gap-8">
                            <Link href="/">
                                <Image
                                    src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                                    alt="Logo"
                                    width={160}
                                    height={100}
                                />
                            </Link>

                            <nav className="flex items-center gap-8 font-medium text-gray-900">
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/">Home</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/country">Destinations</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/tour">Tours</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/about">About</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/contact">Contact</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/blog">Blog</Link>
                                <Link className="hover:underline underline-offset-5 cursor-pointer" href="/booking">Booking</Link>
                            </nav>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex items-center gap-6">
                            <Link href="/wishlist" className="relative">
                                <Heart className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-400 rounded-full text-xs font-bold flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                            <Link href="/cart" className="relative">
                                <ShoppingCartIcon className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-400 rounded-full text-xs font-bold flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                            <User className="h-6 w-6 cursor-pointer" onClick={() => setOpenLogin(true)} />

                            <button
                                className="hidden lg:block border px-4 py-2 rounded font-semibold hover:bg-black hover:text-white cursor-pointer"
                                onClick={() => setOpenPlanYourTripModel(true)}
                            >
                                Plan Your Trip
                            </button>

                            <button className="lg:hidden" onClick={() => setOpenMobileMenu(true)}>
                                <Menu />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MODALS ================= */}
            <LoginModal open={openLogin} onOpenChange={setOpenLogin} />
            <LandingPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />
        </>
    );
}