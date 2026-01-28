"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
    reviews: any[];
};

export default function Reviews({ reviews }: Props) {
    return (
        <div className="bg-white py-12 px-5 md:px-0 max-w-7xl mx-auto">
            {/* HEADING */}
            <div className="text-center space-y-1 mb-12">
                <h3 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    Recent Reviews
                </h3>
                <span className="text-sm md:text-lg text-black">
                    To receive our best monthly deals and travel inspiration.
                </span>
            </div>

            {/* ✅ MOBILE SLIDER */}
            <div className="relative block md:hidden">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".review-prev",
                        nextEl: ".review-next",
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="h-full">
                                <ReviewCard review={review} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* MOBILE NAVIGATION */}
                <div className="absolute inset-x-0 bottom-30 flex justify-between px-2 z-10">
                    <button className="review-prev bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="review-next bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* ✅ DESKTOP GRID */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {reviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                ))}
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* REUSABLE REVIEW CARD (Equal Height) */
/* ---------------------------------- */

function ReviewCard({ review }: { review: any }) {
    return (
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-black hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            
            {/* Avatar */}
            <div className="mb-6">
                <div className="w-24 h-24 rounded-full border border-black overflow-hidden shadow-md mx-auto">
                    <Image
                        src={
                            typeof review.images === "string"
                                ? JSON.parse(review.images)[0]
                                : review.images?.[0]
                        }
                        alt={review.full_name || "User"}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <span className="text-md md:text-lg font-medium text-black mb-3">
                {review.full_name}
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={
                            i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-300 text-gray-300"
                        }
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-black text-sm md:text-base leading-relaxed flex-grow">
                {review.review}
            </p>
        </div>
    );
}