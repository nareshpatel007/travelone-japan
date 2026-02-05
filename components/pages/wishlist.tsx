"use client";

import { useEffect, useState } from "react";
import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { getLoginCookie, isLoggedIn } from "@/lib/auth";
import PageHeading from "@/components/common/page-heading";
import { TourListingGrid } from "@/components/tours/tour-listing-grid";
import { HeartOff } from "lucide-react";

export default function WishlistPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [toursData, setToursData] = useState<any[]>([]);

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const fetchInitData = async () => {
            try {
                setIsLoading(true);

                // Get wishlist
                const stored = localStorage.getItem("wishlist");
                const wishlist: number[] = stored ? JSON.parse(stored) : [];

                // Call API request
                const response = await fetch("/api/wishlist/list", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        tour_ids: wishlist
                    }),
                    signal: controller.signal,
                });

                // Parse the JSON response
                const data = await response.json();

                // Update state
                if (data.status) {
                    setToursData(data?.data ?? []);
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch wishlist:", error);
                }
            } finally {
                // Update state
                setIsLoading(false);
            }
        };

        fetchInitData();
        return () => controller.abort();
    }, []);

    return (
        <body>
            {ready && (
                <>
                    <CommonHeader />

                    <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                        <PageHeading
                            main="Wishlist"
                            sub="View and manage all your wishlist in one place."
                        />

                        {/* SKELETON */}
                        {isLoading && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="animate-pulse bg-gray-200 rounded-lg h-48 md:h-64"
                                    />
                                ))}
                            </div>
                        )}

                        {/* DATA */}
                        {!isLoading && toursData.length > 0 && (
                            <TourListingGrid tourList={toursData} />
                        )}

                        {/* EMPTY STATE (AFTER LOAD ONLY) */}
                        {!isLoading && toursData.length === 0 && (
                            <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center space-y-5">
                                <div className="flex items-center justify-center">
                                    <HeartOff
                                        className="text-[#ef2853] opacity-15"
                                        size={120}
                                    />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-medium text-black">
                                    Your wishlist is empty
                                </h2>

                                <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
                                    Add tours to your wishlist to start planning your perfect trip.
                                </p>
                            </div>
                        )}
                    </div>

                    <CommonFooter />
                </>
            )}
        </body>
    );
}