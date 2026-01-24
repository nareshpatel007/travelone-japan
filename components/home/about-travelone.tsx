"use client";

import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutTravelone() {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-0 py-16 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden">
                        <Image
                            src="/about/img_team_674b22f265e656-43103817-70883790.webp"
                            alt="About TravelOne"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left max-w-xl mx-auto space-y-6">
                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                        A Vision for the $9T Industry.
                    </h2>

                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        Hi, I’m Bhavin Vora. Founder & CEO.
                    </p>

                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        After spending two decades leading global strategy for travel industry icons, I realized that true luxury was missing a soul. I created TravelOne to change that. We use intelligence to orchestrate the world, but we use your persona to make it feel like home. Welcome to the future of travel.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-4 pt-4">
                        <Link href="https://www.linkedin.com/in/bhavinofficial/" target="_blank">
                            <span className="w-10 h-10 rounded-full text-black border hover:bg-black hover:text-white flex items-center justify-center cursor-pointer">
                                <Linkedin className="h-5 w-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
