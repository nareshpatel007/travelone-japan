"use client";

import Image from "next/image";
import Link from "next/link";

// Define interface
interface Props {
    cities: any;
    country: string;
}

export default function TopCities({ cities, country }: Props) {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-0 space-y-8 py-10 md:py-12">
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-black">
                Top Cities in {country}
            </h2>
            <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-2">
                {cities.map((city: any) => (
                    <div
                        key={city.id}
                        className="group relative min-w-[220px] md:min-w-0 h-[130px] rounded-xl overflow-hidden"
                    >
                        {/* city.featured_image */}
                        <Image
                            src={"/placeholder.svg"}
                            alt={city.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/25" />

                        {/* Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold drop-shadow-md">
                                {city.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
