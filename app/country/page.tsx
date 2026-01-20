"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import Heading from "@/components/common/heading";
import Image from "next/image";
import Link from "next/link";

export default function DestinationPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [destinationList, setDestinationList] = useState<any[]>([]);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchTours = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/destination/list", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                setDestinationList(data?.data ?? []);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchTours();
        return () => controller.abort();
    }, []);

    return (
        <body>
            {ready && <>
                <CommonHeader />

                <div className="max-w-7xl mx-auto px-5 md:px-0 md:p-6">
                    <Heading main="Top Destinations" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-8">
                        {!isLoading ? (
                            <>
                                {destinationList && destinationList.map((item, index) => (
                                    <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
                                        <Link href={`/country/${item.slug}`}>
                                            <Image
                                                src={item?.featured_image || "/placeholder.svg"}
                                                alt={item?.name || "Destination"}
                                                fill
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/30 to-transparent"></div>

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <h3 className="text-lg md:text-2xl font-semibold text-white">{item.name}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-48 md:h-64"></div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <CommonFooter />
            </>}
        </body>
    );
}