"use client";

import Image from "next/image";
import Heading from "../common/heading";

const cards = [
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-8.jpg",
        text: "Cultural festivals immerse me in vibrant traditions and celebrations",
    },
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-25.jpg",
        text: "Get yourself at road of eternal uncertainty",
    },
    {
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-24.jpg",
        text: "Living for wanderlust and world exploration",
    },
];

export default function ThreeImageSplitSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <Heading
                main="Top Destinations"
            />
            <div className="pt-5 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden h-[420px] sm:h-[480px] lg:h-[520px] cursor-pointer"
                    >
                        <Image
                            src={card.image}
                            alt="Travel"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                        />

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />

                        <div className="absolute bottom-5 left-5 right-5">
                            <p className="text-white text-md sm:text-2xl font-medium leading-snug">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}