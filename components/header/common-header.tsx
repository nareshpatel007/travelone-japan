"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    FacebookIcon,
    Instagram,
    Linkedin,
    Menu,
    Search,
    ShoppingCartIcon,
    User,
    X,
} from "lucide-react";

import { CommonPlanTripModal } from "../plan_your_trip/common-popup";
import { LoginModal } from "../common/login-modal";
import { LandingPlanTripModal } from "../plan_your_trip/landing-popup";

/* ===== MOCK DATA ===== */

const DESTINATION_LINKS = [
    "Destination Single",
    "Destination List",
    "Destination Map",
    "Destination Categories",
    "Destination Showcase",
];

const DESTINATIONS = [
    {
        title: "Ha Long Bay",
        subtitle: "Magic Places",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        link: "/country/ha-long-bay",
    },
    {
        title: "San Francisco",
        subtitle: "Magic Places",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        link: "/country/san-francisco",
    },
    {
        title: "Zanzibar",
        subtitle: "Magic Places",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        link: "/country/zanzibar",
    },
    {
        title: "Acropolis",
        subtitle: "Magic Places",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        link: "/country/acropolis",
    },
];

export default function CommonHeader() {
    // Define state
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [openPlanTrip, setOpenPlanTrip] = useState(false);
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    // Define cart count
    const cartCount = 0;

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    // Mega Menu Show and Hide
    const openMegaMenu = () => setShowMegaMenu(true);
    const closeMegaMenu = () => setShowMegaMenu(false);

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="hidden md:block bg-[#FBF2E3] text-sm">
                <div className="px-4 h-10 flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                        Welcome to TravelOne – Your Gateway to Unforgettable Journeys!
                    </span>

                    <div className="flex items-center gap-4">
                        <Instagram className="h-4 w-4" />
                        <FacebookIcon className="h-4 w-4" />
                        <Linkedin className="h-4 w-4" />

                        <div className="ml-4 flex items-center gap-2 border-l pl-4">
                            <input
                                placeholder="Search tour here..."
                                className="bg-transparent outline-none text-sm"
                            />
                            <Search className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= HEADER (UNCHANGED) ================= */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/">
                        <Image
                            src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                            alt="Logo"
                            width={160}
                            height={100}
                        />
                    </Link>

                    {/* DESKTOP NAV (UNCHANGED) */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/">Home</Link>
                        <button
                            className="hover:underline underline-offset-5 cursor-pointer"
                            onMouseEnter={openMegaMenu}
                        >
                            Destination
                        </button>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/tour">Tours</Link>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/about">About Us</Link>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/contact">Contact Us</Link>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/blog">Blog</Link>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/booking">Booking</Link>
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-5">
                        <Link href="/cart" className="relative">
                            <ShoppingCartIcon className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-400 rounded-full text-xs font-bold flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        <User
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => setOpenLogin(true)}
                        />

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
            </header>

            {/* ================= MEGA MENU (ONLY PART THAT IS FIXED & CENTERED) ================= */}
            {showMegaMenu && (
                <div
                    className="fixed left-1/2 top-[80px] md:top-[136px] z-[100] w-full max-w-7xl -translate-x-1/2 bg-white border border-gray-200 shadow-xl"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                >
                    <div className="grid grid-cols-12 gap-8 px-10 py-10">

                        {/* LEFT LINKS */}
                        <div className="col-span-3">
                            <h4 className="text-xs uppercase font-semibold text-gray-500 mb-4">
                                Plan a Trip
                            </h4>
                            <ul className="space-y-3">
                                {DESTINATION_LINKS.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="/country"
                                            className="font-medium hover:text-black"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT IMAGE GRID */}
                        <div className="col-span-9 grid grid-cols-4 gap-6">
                            {DESTINATIONS.map((place) => (
                                <Link
                                    key={place.title}
                                    href={place.link}
                                    className="relative group overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                                        <span className="text-white font-semibold">
                                            {place.title}
                                        </span>
                                        <span className="text-white/80 text-sm">
                                            {place.subtitle}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            )}

            {/* ================= MOBILE MENU ================= */}
            {openMobileMenu && (
                <div className="fixed inset-0 z-[999] bg-white">
                    <div className="h-16 flex justify-between items-center px-4 border-b">
                        <span className="text-xl font-bold">Menu</span>
                        <button onClick={() => setOpenMobileMenu(false)}>
                            <X />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/country">Destination</Link>
                        <Link href="/tour">Tours</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/booking">Booking</Link>
                    </nav>
                </div>
            )}

            {/* ================= MODALS ================= */}
            <LoginModal open={openLogin} onOpenChange={setOpenLogin} />
            <CommonPlanTripModal open={openPlanTrip} onOpenChange={setOpenPlanTrip} />
            <LandingPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />
        </>
    );
}
