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
        <section className="w-full px-4 md:px-6 py-10 md:py-12 bg-[#FFF9EE]">
            <Heading
                main="Top Destinations"
            />
            <div className="pt-5 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
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
        </section>
    );
}