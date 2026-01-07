"use client"

import { useState } from "react";
import { Heart, Trash2, Share2 } from "lucide-react";
import Link from "next/link";
import { TourCard } from "../tours/tour-card";

const initialWishlistTours = [
    {
        id: 1,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        badge: "Likely to sell out",
        tourType: "DAY TRIP",
        rating: 4.4,
        reviews: 899,
        title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 2,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 390,
        title: "Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point",
        duration: "3 hours",
        price: "$6,005",
    },
    {
        id: 3,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-7.jpg",
        tourType: "WATER ACTIVITY",
        rating: 4.5,
        reviews: 99,
        title: "Stingray Sandbar, Snorkeling, and Starfish Point",
        duration: "3 hours 45 minutes",
        price: "$5,005",
    },
    {
        id: 4,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-8.jpg",
        tourType: "DAY TRIP",
        badge: "Likely to sell out",
        rating: 4.6,
        reviews: 988,
        title: "Stingray City, Snorkeling, & Starfish Adventure",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 5,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-9.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.8,
        reviews: 2447,
        title: "Stingray City Experience Plus Two Snorkeling Stops on Grand Cayman",
        duration: "3 hours",
        price: "$7,260",
        originalPrice: "$8,500",
    },
    {
        id: 6,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-5.jpg",
        tourType: "ADVENTURE",
        rating: 5.0,
        reviews: 85,
        title: "Grand Cayman Exotic Jet Car Experience in 7 Mile Beach",
        duration: "40 minutes",
        price: "$23,714",
    },
]

export function WishlistGrid() {
    // Define state
    const [wishlistTours, setWishlistTours] = useState(initialWishlistTours)

    const handleRemove = (id: number) => {
        setWishlistTours(wishlistTours.filter((tour) => tour.id !== id))
    }

    const handleClearAll = () => {
        setWishlistTours([])
    }

    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8 !mb-5">
                <div></div>
                {wishlistTours.length > 0 && (
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Share List</span>
                        </button>
                        <button
                            onClick={handleClearAll}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Clear All</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Tours Grid or Empty State */}
            {wishlistTours.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 !mb-10">
                    {wishlistTours.map((tour) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center !mb-10">
                    <span className="block text-xl md:text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</span>
                    <p className="text-gray-500 mb-6 max-w-md px-4">
                        Start exploring and save your favorite tours and experiences to plan your perfect trip.
                    </p>
                    <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 !px-6 !py-3 !bg-black !text-white !font-medium !rounded-lg !hover:bg-[#333] transition-colors"
                    >
                        Explore Tours
                    </Link>
                </div>
            )}

            {/* Recommendations Section */}
            {wishlistTours.length > 0 && (
                <div className="mt-12 md:mt-16">
                    <span className="block text-xl md:text-2xl font-bold text-gray-900 !mb-6">You might also like</span>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                id: 1,
                                image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
                                badge: "Likely to sell out",
                                tourType: "DAY TRIP",
                                rating: 4.4,
                                reviews: 899,
                                title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
                                duration: "3 hours 30 minutes",
                                price: "$6,005",
                            },
                            {
                                id: 2,
                                image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
                                tourType: "GUIDED TOUR",
                                rating: 4.6,
                                reviews: 390,
                                title: "Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point",
                                duration: "3 hours",
                                price: "$6,005",
                            },
                            {
                                id: 3,
                                image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-7.jpg",
                                tourType: "WATER ACTIVITY",
                                rating: 4.5,
                                reviews: 99,
                                title: "Stingray Sandbar, Snorkeling, and Starfish Point",
                                duration: "3 hours 45 minutes",
                                price: "$5,005",
                            },
                            {
                                id: 4,
                                image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-8.jpg",
                                tourType: "DAY TRIP",
                                badge: "Likely to sell out",
                                rating: 4.6,
                                reviews: 988,
                                title: "Stingray City, Snorkeling, & Starfish Adventure",
                                duration: "3 hours 30 minutes",
                                price: "$6,005",
                            }
                        ].map((tour) => (
                            <TourCard key={tour.id} {...tour} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
