"use client";

import Image from "next/image";
import Link from "next/link";
import { CommonPlanTripModal } from "../plan_your_trip/common-popup";
import { useEffect, useState } from "react";
import { FacebookIcon, Instagram, Linkedin, Menu, Search, ShoppingCartIcon, User, X } from "lucide-react";
import { LoginModal } from "../common/login-modal";

// components/Header.tsx
export default function CommonHeader() {
    const [isOpenPlanYourTrip, setIsOpenPlanYourTrip] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [open, setOpen] = useState(false);

    const cartCount = 0;

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            {/* ================= TOP BAR (Tablet + Desktop only) ================= */}
            <div className="hidden md:block bg-[#FBF2E3] text-sm">
                <div className="px-5 h-10 flex items-center justify-between">
                    <span className="text-gray-800 !text-md font-medium">
                        Welcome to TravelOne - Your Gateway to Unforgettable Journeys!
                    </span>
                    <div className="flex items-center gap-4 text-gray-700">
                        <span className="flex items-center gap-3 font-semibold">
                            <Instagram className="h-4 w-4 text-grap-900" />
                            <FacebookIcon className="h-4 w-4 text-grap-900" />
                            <Linkedin className="h-4 w-4 text-grap-900" />
                        </span>
                        <div className="hidden sm:flex items-center gap-2 border-l pl-4">
                            <input
                                type="text"
                                placeholder="Search tour here..."
                                className="outline-none bg-transparent text-md"
                            />
                            <Search className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN HEADER ================= */}
            <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
                <div className="px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            alt="Logo"
                            width={160}
                            height={100}
                            src="https://stage.travelone.io/html/home/assets/images/logo.png"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center text-gray-900 gap-8 font-medium">
                        <Link className="hover:underline underline-offset-5" href="/">Home</Link>
                        <Link className="hover:underline underline-offset-5" href="/tour">Tours</Link>
                        <Link className="hover:underline underline-offset-5" href="/about-us">About Us</Link>
                        <Link className="hover:underline underline-offset-5" href="/contact-us">Contact Us</Link>
                        <Link className="hover:underline underline-offset-5" href="/blog">Blog</Link>
                        <Link className="hover:underline underline-offset-5" href="/booking">Booking</Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 md:gap-6">

                        {/* Cart */}
                        <Link href="/cart" className="relative">
                            <ShoppingCartIcon className="w-6 h-6 text-[#333]" />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#333] text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        {/* User */}
                        <User
                            className="h-6 w-6 text-[#333] cursor-pointer"
                            onClick={() => setIsOpenLogin(true)}
                        />

                        {/* CTA Desktop */}
                        <button
                            className="hidden lg:block border border-black text-black px-4 py-2 rounded font-semibold text-sm hover:bg-black hover:text-white cursor-pointer transition"
                            onClick={() => setIsOpenPlanYourTrip(true)}
                        >
                            Plan Your Trip
                        </button>

                        {/* Mobile / Tablet Menu Toggle */}
                        <button className="lg:hidden" onClick={() => setOpen(true)}>
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= MOBILE / TABLET FIXED MENU ================= */}
            {open && (
                <div className="fixed inset-0 z-[999] bg-white">

                    {/* Menu Header */}
                    <div className="flex items-center justify-between px-4 h-16 border-b">
                        <span className="text-xl font-bold">Menu</span>
                        <button onClick={() => setOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    {/* Menu Links */}
                    <nav className="flex flex-col px-6 py-6 gap-5 text-lg font-medium text-gray-800">
                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/tour" onClick={() => setOpen(false)}>Tours</Link>
                        <Link href="/about-us" onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/contact-us" onClick={() => setOpen(false)}>Contact Us</Link>
                        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                        <Link href="/booking" onClick={() => setOpen(false)}>Booking</Link>

                        <button
                            className="mt-6 border border-black px-6 py-2 rounded font-semibold"
                            onClick={() => {
                                setOpen(false);
                                setIsOpenPlanYourTrip(true);
                            }}
                        >
                            Plan Your Trip
                        </button>
                    </nav>
                </div>
            )}

            {/* ================= MODALS ================= */}
            <LoginModal open={isOpenLogin} onOpenChange={setIsOpenLogin} />
            <CommonPlanTripModal open={isOpenPlanYourTrip} onOpenChange={setIsOpenPlanYourTrip} />
        </>
    );
}
