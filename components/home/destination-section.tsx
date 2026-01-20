"use client";

import Image from "next/image";
import Link from "next/link";
import Heading from "../common/heading";

const cards = [
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-21.jpg",
        text: "Cultural festivals immerse me in vibrant traditions and celebrations",
    },
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-20.jpg",
        text: "Get yourself at road of eternal uncertainty",
    },
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-22.jpg",
        text: "Living for wanderlust and world exploration",
    },
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-23.jpg",
        text: "Living for wanderlust and world exploration",
    },
];

// Define props
interface Props {
    destinationList: any[];
}

export default function DestinationSection({ destinationList }: Props) {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <Heading
                main="Trending Destinations"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {destinationList && destinationList.map((item, index) => (
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