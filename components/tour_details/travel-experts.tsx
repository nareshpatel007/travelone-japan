"use client"

import Image from "next/image"
import Link from "next/link"

export default function TravelExpert() {
    return (
        <div className="!bg-amber-50 py-16 px-5 md:px-0">
            <div className="!max-w-7xl !mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg"
                            alt="Travel Expert"
                            width={500}
                            height={500}
                            className="!w-full !h-full !object-cover !rounded-lg !shadow-lg"
                        />
                    </div>
                    <div className="py-0 md:py-12 space-y-5">
                        <span className="text-sm md:text-lg text-[#C46A3A] font-medium">
                            Travel Experts
                        </span>

                        <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                            Not sure where to start? Speak to a Travel Expert
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our dedicated Travel Expert will take the time to understand your personal preferences and curate a
                            custom travel itinerary that's perfectly suited to you.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="bg-black hover:bg-[#1E1E1E] cursor-pointer text-white px-8 py-3 rounded-sm font-medium transition-colors">
                                Customize Your Trip
                            </button>
                            <span className="text-gray-700 font-medium text-base">
                                OR CALL <Link href="tel:1-437-966-9023">+1 437 966 9023</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
