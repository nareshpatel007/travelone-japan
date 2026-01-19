"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import Heading from "@/components/common/heading";
import { TourFilters } from "@/components/tours/tour-filters";
import { TourListingGrid } from "@/components/tours/tour-listing-grid";
import { Pagination } from "@/components/tours/pagination";

export default function Page() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tourList, setTourList] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);

    // Filter state
    const [isSidebarFilterOpen, setIsSidebarFilterOpen] = useState(false);
    const [sortFilter, setSortFilter] = useState<string>('traveler_rating');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    const [selectedDurations, setSelectedDurations] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [appliedFilter, setAppliedFilter] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);

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
                const response = await fetch("/api/tours/list", {
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
                setTourList(data?.data?.result ?? []);
                setTotalPages(data?.data?.last_page ?? 0);
                setCurrentPage(data?.data?.current_page ?? 1);
                setTotalCount(data?.data?.total ?? 0);
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
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonHeader />
                    <div className="max-w-7xl mx-auto px-5 md:p-6">
                        <Heading main="All Tours Listing" />
                        <TourFilters
                            isLoading={isLoading}
                            setAppliedFilter={setAppliedFilter}
                            setResetFilter={setResetFilter}
                            setIsSidebarFilterOpen={setIsSidebarFilterOpen}
                            isSidebarFilterOpen={isSidebarFilterOpen}
                            totalCount={totalCount}
                            sortFilter={sortFilter}
                            setSortFilter={setSortFilter}
                            setCurrentPage={setCurrentPage}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            setSelectedCountry={setSelectedCountry}
                            selectedCountry={selectedCountry}
                            filterOptions={filterOptions}
                        />
                        <TourListingGrid
                            tourList={tourList}
                        />
                        <Pagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPages={totalPages}
                        />
                    </div>
                    <CommonFooter />
                </>}
            </body>
        </>
    );
}