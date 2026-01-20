"use client";

import Image from "next/image";
import Heading from "../common/heading";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
    "home-5-img-4.jpg",
    "home-5-img-6.jpg",
    "home-5-img-1.jpg",
    "home-5-img-3.jpg",
    "home-5-img-5.jpg",
    "home-5-img-2.jpg",
    "home-5-img-4.jpg",
    "home-5-img-6.jpg",
    "home-5-img-1.jpg",
    "home-5-img-3.jpg",
    "home-5-img-5.jpg",
    "home-5-img-2.jpg",
];

export default function ToursSlider() {
    return (
        <section className="py-6 px-5 md:px-10">
            <Heading main="Popular Tours" />

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
                            slidesPerView: 6,
                        },
                    }}
                    className="!pb-4"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Link href="/tour">
                                <div className="flex flex-col">
                                    {/* Image */}
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={`https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/${img}`}
                                            alt="Tour"
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="py-6 space-y-3 text-center">
                                        <span className="text-lg md:text-2xl font-medium text-gray-900 block">
                                            Culinary journeys reveal the heart of a destination’s culture.
                                        </span>

                                        <div className="flex justify-center">
                                            <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-5 py-1.5 rounded">
                                                USD ${formatPrice(5452, 0)}
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