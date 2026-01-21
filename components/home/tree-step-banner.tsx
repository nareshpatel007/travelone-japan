"use client";

import Image from "next/image";
import Heading from "../common/heading";

interface Props {
    onOpenChange: (open: boolean) => void;
}

interface DestinationCard {
    id: number;
    title: string;
    location: string;
    image: string;
}

const destinations: DestinationCard[] = [
    {
        id: 1,
        title: 'The Mapping. Complete your Traveler Persona. Tell us about your "Local Soul" preferences and your logistical non-negotiables.',
        location: "Mexico, Mexico",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-7.jpg",
    },
    {
        id: 2,
        title: "The Match. Our Agentic AI scans our Global Strategic Zones to find the experiences that match your travel DNA with 99.9% accuracy.",
        location: "Giza, Egypt",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-8.jpg",
    },
    {
        id: 3,
        title: "The Orchestration. Once you select your collection, we handle everything. As your Merchant of Record, we manage the money, the logistics, and the real-time recovery.",
        location: "Bali, Indonesia",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-9.jpg",
    },
];

export default function ThreeStepBanner({ onOpenChange }: Props) {
    return (
        <div className="py-6 px-5 md:px-10 py-10 space-y-10">
            <div className="space-y-2 text-center">
                <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    Start with Who, Not Where.
                </h1>
                <span className="text-black text-md">
                    Initialize your travel DNA and let Agentic AI match your soul to the world.
                </span>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-10 gap-4">
                <div className="relative col-span-1 lg:col-span-7 overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[380px]">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/japan/cherry-blossoms-fuji-mountain-spring-sunrise-shizuoka-japan_335224-110.jpg"
                        alt="Featured travel destination"
                        fill
                        priority
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/5 hover:bg-black/30 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => onOpenChange(true)}
                            className="px-5 py-2 bg-white text-md text-black cursor-pointer hover:bg-black hover:text-white transition"
                        >
                            Initialize Your Persona Now
                        </button>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="flex items-center lg:flex-col lg:text-center bg-[#fcefdf] border border-gray-200 hover:bg-white cursor-pointer hover:border-[#fcefdf] p-5 lg:p-8 rounded-sm"
                        >
                            <div className="text-base md:text-lg mb-2">
                                <span className="font-semibold">
                                    {`Step: 0${destination.id}`}
                                </span>
                                &nbsp;- {destination.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
