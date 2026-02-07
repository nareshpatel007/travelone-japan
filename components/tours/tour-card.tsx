"use client";

import { findTourInWishlist, updateHeaderWishlistCount } from "@/lib/auth";
import { formatPrice } from "@/lib/utils";
import { Heart, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// Define types
interface CityNight {
    city_name: string;
    night: number;
}

// Define props
interface Props {
    id: number;
    name: string;
    slug: string;
    featured_image: string;
    tour_type: number;
    tour_sub_title: string;
    is_refundable: number;
    starting_price: string;
    city_nights: string;
}

// Define functions
const safeJsonParse = <T,>(value?: string, fallback: T = [] as T): T => {
    try {
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
};

export function TourCard({
    id,
    name,
    slug,
    featured_image,
    tour_type,
    tour_sub_title,
    is_refundable,
    starting_price,
    city_nights,
}: Props) {
    // Get tour summary
    const tourSummary = useMemo<string[]>(
        () => safeJsonParse<string[]>(tour_sub_title),
        [tour_sub_title]
    );

    // Get city nights
    const cityNights = useMemo<CityNight[]>(
        () => safeJsonParse<CityNight[]>(city_nights),
        [city_nights]
    );

    // Define State
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Check if tour is wishlisted
    useEffect(() => {
        setIsWishlisted(findTourInWishlist(id));
    }, [id]);

    // Handle wishlist
    const handleWishlist = () => {
        try {
            // Get wishlist
            const stored = localStorage.getItem("wishlist");
            const wishlist: number[] = stored ? JSON.parse(stored) : [];

            // Update wishlist
            const updatedWishlist = isWishlisted ? wishlist.filter((tourId) => tourId !== id) : [...wishlist, id];

            // Set wishlist
            localStorage.setItem("wishlist", JSON.stringify([...new Set(updatedWishlist)]));

            // Update state
            setIsWishlisted((prev) => !prev);
            updateHeaderWishlistCount();
        } catch (error) {
            console.error("Wishlist error:", error);
        }
    };

    return (
        <div className="group h-full">
            <div className="flex h-full flex-col border border-gray-200 transition-all hover:shadow-md">
                <div className="relative h-52 md:h-80 overflow-hidden">
                    <Link href={`/tour/${slug}`}>
                        <Image
                            src={featured_image || "/placeholder.svg"}
                            alt={name}
                            fill
                            draggable={false}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    <button
                        onClick={handleWishlist}
                        className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow-lg transition cursor-pointer hover:bg-white"
                    >
                        <Heart
                            size={24}
                            className={
                                isWishlisted
                                    ? "fill-[#ef2853] text-[#ef2853]"
                                    : "text-gray-600 hover:fill-[#ef2853] hover:text-[#ef2853]"
                            }
                        />
                    </button>

                    <div className="absolute top-3 left-3 flex overflow-hidden rounded-full bg-black text-white">
                        {tour_type && (
                            <span className={`px-3 py-1 text-xs ${is_refundable && "border-r border-gray-200"}`}>
                                {tour_type}
                            </span>
                        )}
                        {is_refundable === 1 && (
                            <span className="px-3 py-1 text-xs">Free Cancellation</span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col space-y-4 p-6 text-center">
                    {/* Title */}
                    <Link target="_blank" href={`/tour/${slug}`}>
                        <h2 className="line-clamp-2 text-lg font-medium text-gray-900 md:text-xl">
                            {name}
                        </h2>
                    </Link>

                    {/* Summary */}
                    {tourSummary.length > 0 && (
                        <div className="text-sm text-black">
                            {tourSummary[0]} /{" "}
                            {tourSummary[3]?.replace("Places", "Locations")} /{" "}
                            {tourSummary[1]}
                        </div>
                    )}

                    {/* City nights */}
                    {cityNights.length > 0 && (
                        <div className="text-sm text-black">
                            {cityNights.map((item, index) => (
                                <span key={index} className="inline-flex items-center">
                                    {item.city_name}
                                    {item.night > 0 && (
                                        <span className="ml-1">
                                            ({item.night}{" "}
                                            {item.night > 1 ? "Nights" : "Night"})
                                        </span>
                                    )}
                                    {index < cityNights.length - 1 && (
                                        <MoveRight className="mx-1 h-4 w-4" />
                                    )}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Price */}
                    <div className="mt-auto pt-4">
                        <span className="rounded-sm bg-amber-300 px-5 py-1.5 text-xs font-semibold text-black md:text-sm">
                            Start from USD ${formatPrice(starting_price, 0)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}