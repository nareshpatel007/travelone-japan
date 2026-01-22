"use client";

import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutTravelone() {
    return (
        <div className="py-18 max-w-7xl mx-auto px-5 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-[520px] aspect-[4/3]">
                        <Image
                            src="https://ik.imagekit.io/288weifiq/nextjs/indonesia/bali-pagoda-indonesia_1150-11015.avif"
                            alt="About TravelOne"
                            fill
                            priority
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left max-w-xl mx-auto space-y-6">
                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                        A Vision for the $9T Industry.
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Hi, I’m Bhavin Vora. Founder & CEO.
                    </p>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        After spending two decades leading global strategy for travel industry icons, I realized that true luxury was missing a soul. I created TravelOne to change that. We use intelligence to orchestrate the world, but we use your persona to make it feel like home. Welcome to the future of travel.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start gap-4 pt-4">
                        <Link href="https://www.linkedin.com/company/travelone-technologies-inc/" target="_blank">
                            <span className="w-10 h-10 rounded-full bg-amber-50 text-black border hover:bg-black hover:text-white flex items-center justify-center cursor-pointer">
                                <Linkedin className="h-5 w-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
