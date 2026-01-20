"use client";

import Image from "next/image";
import Heading from "../common/heading";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
        <section className="py-6 px-5 md:px-10 py-10 md:py-12 bg-[#FFF9EE]">
            <Heading main="Popular Japan Tours" />

            <div className="relative mt-6">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".tour-next",
                        prevEl: ".tour-prev",
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    slidesPerGroup={1}
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
                                    <div className="relative aspect-[3/4] overflow-hidden">
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
                                                USD ${formatPrice(tour.starting_price, 0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* CUSTOM ARROWS */}
                <button className="tour-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black border shadow rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white">
                    ‹
                </button>

                <button className="tour-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black border shadow rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white">
                    ›
                </button>
            </div>
        </section>
    );
}