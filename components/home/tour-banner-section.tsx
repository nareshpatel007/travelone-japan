"use client";

import Image from "next/image";
import Link from "next/link";

const leftPosts = [
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-6-1.jpg",
        date: "08.08.2023",
        author: "Marina Lorena",
        title: "20 Reasons why you should visit Japan",
    },
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-8.jpg",
        date: "09.08.2023",
        author: "Marina Lorena",
        title: "Visit animal sanctuaries",
    },
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-new-10.jpg",
        date: "09.08.2023",
        author: "Marina Lorena",
        title: "Wandering through ancient world streets",
    },
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-7.jpg",
        date: "09.08.2023",
        author: "Marina Lorena",
        title: "Uncover hidden gems of islands",
    },
];

const rightImages = [
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-3.jpg",
        text: "Lost Cities and Rediscovered Journeys",
    },
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-3.jpg",
        text: "Tropical Bliss: Sun, Sand and Serenity Await",
    },
    {
        img: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/main-home-img-3.jpg",
        text: "Witnessing Africa’s Majestic Wildlife",
    },
];

export default function TourBannerSection() {
    return (
        <section className="w-full bg-[#f3f7f1] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-10">
                <div className="flex flex-col gap-6">
                    {leftPosts.map((post, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="flex items-center gap-4"
                        >
                            {/* IMAGE */}
                            <div className="relative aspect-[4/3] w-24 sm:w-28 md:w-32 flex-shrink-0 overflow-hidden rounded-sm">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="flex flex-col justify-center space-y-1">
                                <p className="text-xs sm:text-sm text-gray-500">
                                    {post.date} by{" "}
                                    <span className="underline">{post.author}</span>
                                </p>
                                <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-snug">
                                    {post.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rightImages.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden h-full"
                        >
                            <Image
                                src={item.img}
                                alt={item.text}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute bottom-5 left-5 right-5">
                                <h3 className="text-white text-sm sm:text-base md:text-lg font-medium leading-snug">
                                    {item.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}