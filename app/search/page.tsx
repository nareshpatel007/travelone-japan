"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { TourFilters } from "@/components/tours/tour-filters";
import { TourListingGrid } from "@/components/tours/tour-listing-grid";
import { Pagination } from "@/components/tours/pagination";
import PageHeading from "@/components/common/page-heading";
import { useSearchParams } from "next/navigation";
import NotFoundError from "@/components/common/not-found-error";

export default function Page() {
    // Get query parms
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword") ?? '';

    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tourList, setTourList] = useState<any[]>([]);

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchInitData = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/tours/search", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        keyword
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                setTourList(data?.data ?? []);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitData();
        return () => controller.abort();
    }, [keyword]);

    return (
        <body>
            {ready && <>
                <CommonHeader />

                {/* For non login */}
                {!keyword && <NotFoundError
                    heading="Keyword is not valid"
                    subHeading="Enter proper keyword to search tours."
                />}

                {keyword && <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                    <PageHeading
                        main={`Search for: "${keyword}"`}
                        sub="Find the perfect tour for your next adventure."
                    />
                    <TourListingGrid tourList={tourList} />
                </div>}

                <CommonFooter />
            </>}
        </body>
    );
}