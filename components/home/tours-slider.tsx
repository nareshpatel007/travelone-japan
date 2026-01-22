"use client";

import Image from "next/image";
import Heading from "../common/heading";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Define props
interface Props {
    toursList: any[];
}

export default function ToursSlider({ toursList }: Props) {
    // Check if toursList is empty
    if (toursList.length === 0) {
        return null;
    }

    return (
        <section className="py-6 px-5 md:px-10 py-10 md:py-10 space-y-10 bg-[#FFF9EE]">
            <div className="text-black space-y-2 text-center">
                <h1 className="text-3xl md:text-6xl leading-tight font-normal">
                    Japan: The Precision of Tradition
                </h1>
                <span className="text-md">
                    Immerse yourself in Omotenashi reimagined through intricate logistics.
                </span>
            </div>
            <div className="relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".tour-next",
                        prevEl: ".tour-prev",
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    allowTouchMove={true}
                    grabCursor={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    className="!pb-4"
                >
                    {toursList.length > 0 && toursList.map((tour: any) => (
                        <SwiperSlide key={tour.id}>
                            <Link href={`/tour/${tour.slug}`}>
                                <div className="flex flex-col">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={tour.featured_image || "/placeholder.svg"}
                                            alt={tour.name}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="py-6 space-y-3 text-center">
                                        <span className="text-md md:text-xl font-medium text-gray-900 block">{tour.name}</span>
                                        <div className="flex justify-center">
                                            <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-5 py-1.5 rounded">
                                                Start from USD ${formatPrice(tour.starting_price, 0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}