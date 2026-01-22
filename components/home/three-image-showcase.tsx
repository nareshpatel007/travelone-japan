"use client";

import Image from "next/image";
import Heading from "../common/heading";
import Link from "next/link";

// Define props
interface Props {
    destinationList: any[];
}

export default function ThreeImageSplitSection({ destinationList }: Props) {
    return (
        <section className="py-6 px-5 md:px-10 py-10 md:py-10 space-y-8 bg-[#FFF9EE]">
            <div className="space-y-2 text-center">
                <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    The Signature Collection
                </h1>
                <span className="text-black text-md">
                    Hand-vetted master destinations curated for the ultra-luxury explorer.
                </span>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                    {destinationList && destinationList.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden h-[420px] sm:h-[480px] lg:h-[520px] cursor-pointer"
                        >
                            <Link href={`/country/${item.slug}`}>
                                <Image
                                    src={item?.featured_image || "/placeholder.svg"}
                                    alt={item?.name || "Destination"}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={index === 0}
                                />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <p className="text-white text-md sm:text-2xl font-medium leading-snug">
                                        {item.name}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {destinationList && destinationList.slice().reverse().slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden h-[420px] sm:h-[480px] lg:h-[520px] cursor-pointer"
                        >
                            <Link href={`/country/${item.slug}`}>
                                <Image
                                    src={item?.featured_image || "/placeholder.svg"}
                                    alt={item?.name || "Destination"}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={index === 0}
                                />

                                <div className="absolute bottom-5 left-5 right-5">
                                    <p className="text-white text-md sm:text-2xl font-medium leading-snug">
                                        {item.name}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}