"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { CustomizeTrip } from "../tour_details/popup/customize-trip";

export default function AdsLandingHeader() {
    // Define state
    const [openCustomizeTrip, setOpenCustomizeTrip] = useState(false);

    return (
        <>
            <div className="hidden md:block bg-[#FBF2E3] text-sm">
                <div className="px-4 h-10 flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                        TravelOne — A Global Platform Synchronizing Your Journey to Your Persona.
                    </span>

                    <div className="flex items-center">
                        <div className="flex items-center gap-5 text-xs font-semibold tracking-wide uppercase text-black">
                            <Link
                                href="https://www.youtube.com/@traveloneio"
                                target="_blank"
                                className="flex items-center gap-1.5 hover:underline underline-offset-4"
                            >
                                <Youtube className="w-4 h-4 text-red-600" />
                                Youtube
                            </Link>

                            <Link
                                href="https://www.facebook.com/travelone.technologies.inc/"
                                target="_blank"
                                className="flex items-center gap-1.5 hover:underline underline-offset-4"
                            >
                                <Facebook className="w-3.5 h-3.5 text-blue-600" />
                                Facebook
                            </Link>

                            <Link
                                href="https://www.instagram.com/travelone.io/"
                                target="_blank"
                                className="flex items-center gap-1.5 hover:underline underline-offset-4"
                            >
                                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                                Instagram
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/travelone-technologies-inc/"
                                target="_blank"
                                className="flex items-center gap-1.5 hover:underline underline-offset-4"
                            >
                                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <header className="top-0 z-50 bg-white border-b border-[#d9cec1]">
                <div className="px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
                    <Image
                        src="/common/logo.webp"
                        alt="Logo"
                        width={160}
                        height={100}
                        className="w-32 md:w-40"
                        draggable="false"
                    />

                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                        <a className="hover:underline underline-offset-5 cursor-pointer" href="#packageDetails">Package Details</a>
                        <a className="hover:underline underline-offset-5 cursor-pointer" href="#RecentReviews">Reviews</a>
                        <a className="hover:underline underline-offset-5 cursor-pointer" href="#WhyTravelone">Why TravelOne?</a>
                        <a className="hover:underline underline-offset-5 cursor-pointer" href="#FAQ">FAQs</a>
                        <a className="hover:underline underline-offset-5 cursor-pointer" href="#Video">Video</a>
                    </nav>

                    {/* Only for Desktop */}
                    <button
                        className="hidden lg:block border border-black px-4 py-2 rounded font-medium hover:bg-black hover:text-white cursor-pointer"
                        onClick={() => setOpenCustomizeTrip(true)}
                    >
                        Inquire Now
                    </button>

                    {/* Only for Mobile */}
                    <div className="md:hidden flex items-center gap-5 md:gap-6">
                        <span className="inline-block bg-[#ef2853] px-3 py-0.5 md:py-1 rounded text-sm font-semibold text-white">
                            Based in USA, Canada
                        </span>
                    </div>
                </div>
            </header>

            {/* Modal Popup */}
            <CustomizeTrip
                open={openCustomizeTrip}
                onOpenChange={setOpenCustomizeTrip}
                mainTitle="Register Your Interest"
            />
        </>
    );
}