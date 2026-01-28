"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { CommonPlanTripModal } from "../plan_your_trip/common-popup";

export default function TravelExpert() {
    // Define state
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState(false);

    return (
        <>
            <div className="bg-[#FFF9EE] py-12 px-5 md:px-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="https://ik.imagekit.io/288weifiq/nextjs/tourist-carrying-luggage_23-2151747328.avif"
                                alt="Travel Expert"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                        <div className="py-0 md:py-12 space-y-4">
                            <p className="text-sm md:text-lg text-black font-medium text-center md:text-left">
                                Travel Experts
                            </p>

                            <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal text-center md:text-left">
                                Not sure where to start? Speak to a Travel Expert
                            </h3>

                            <p className="text-black text-lg leading-relaxed text-center md:text-left">
                                Our dedicated Travel Expert will take the time to understand your personal preferences and curate a
                                custom travel itinerary that's perfectly suited to you.
                            </p>

                            <div>
                                <div className="hidden md:flex items-center gap-4">
                                    <button
                                        onClick={() => setOpenPlanYourTripModel(true)}
                                        className="px-6 md:px-8 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-black/90 transition uppercase cursor-pointer"
                                    >
                                        Customize Your Trip
                                    </button>
                                    <span className="text-black font-normal text-base">
                                        OR CALL <Link href="tel:1-437-966-9023" className="hover:underline">+1 437 966 9023</Link>
                                    </span>
                                </div>

                                <div className="block md:hidden space-y-5 text-center">
                                    <button
                                        onClick={() => setOpenPlanYourTripModel(true)}
                                        className="px-6 md:px-8 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-black/90 transition uppercase cursor-pointer"
                                    >
                                        Customize Your Trip
                                    </button>
                                    <span className="text-black font-normal text-base block">
                                        OR CALL <Link href="tel:1-437-966-9023" className="hover:underline">+1 437 966 9023</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <CommonPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />
        </>
    )
}