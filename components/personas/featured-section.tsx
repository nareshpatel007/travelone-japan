"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    headline: string;
    paragraph: string;
    climateFilter: string;
    serviceStyle: string;
}

export default function FeaturedSection({
    headline,
    paragraph,
    climateFilter,
    serviceStyle,
}: Props) {
    return (
        <div className="p-5 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-[660px] overflow-hidden">
                    <Image
                        src="/common/home2-banner-1.jpg"
                        alt="TravelOne"
                        fill
                        priority
                        loading="eager"
                        sizes="100vw"
                        className="object-cover"
                    />

                    {/* Top Heading */}
                    <h1 className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-white uppercase text-4xl md:text-8xl font-light tracking-[0.1em] text-center w-full">
                        Your Travel DNA
                    </h1>
                </div>
                <div className="relative min-h-[300px] md:min-h-[660px] py-5 md:py-32 px-6 md:px-10 flex items-center justify-center text-center">
                    <div className="max-w-5xl mx-auto space-y-5">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight text-black">
                            {headline}
                        </h2>

                        {/* Paragraph */}
                        <p className="max-w-3xl mx-auto text-sm md:text-lg text-black leading-relaxed">
                            {paragraph}
                        </p>

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <span className="px-5 py-2 rounded-full bg-black/10 text-black font-medium text-sm">
                                Climate: {climateFilter}
                            </span>

                            <span className="px-5 py-2 rounded-full bg-black/10 text-black font-medium text-sm">
                                Service Style: {serviceStyle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
