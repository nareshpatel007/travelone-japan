"use client"

import { Star } from "lucide-react";
import Image from "next/image";

// Define props
type Props = {
    reviews: any[];
};

export default function Reviews({ reviews }: Props) {
    return (
        <div className="bg-white py-10 md:py-12 px-5 md:px-0">
            <div className="pb-10 max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        Recent Reviews
                    </h3>
                    <span className="text-sm md:text-lg text-black">
                        To receive our best monthly deals and travel inspiration.
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FFF9EE] rounded-2xl p-8 border-2 border-dashed border-black hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 relative">
                                <div className="w-28 h-28 rounded-full border-1 border-black overflow-hidden shadow-md">
                                    <Image
                                        src={typeof review.images === "string" ? JSON.parse(review.images)[0] : review.images?.[0]}
                                        alt={review.full_name || "User"}
                                        width={500}
                                        height={500}
                                        className="!w-full !h-full !object-cover"
                                    />
                                </div>
                            </div>
                            <span className="text-md md:text-lg font-medium text-black block mb-3">{review.full_name}</span>
                            <div className="flex gap-1 mb-4 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className={i < review.rating ? "!fill-amber-400 !text-amber-400" : "!fill-gray-300 !text-gray-300"}
                                    />
                                ))}
                            </div>
                            <p className="text-black mb-4 text-sm md:text-base leading-relaxed">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
