"use client";

import CommonFooter from "@/components/footer/common-footer";
import HomeMobileHeader from "@/components/header/home-mobile-header";
import LandingMarqueeSection from "@/components/LandingMarqueeSection";
import FeatureCard from "@/components/FeatureCard";
import { useEffect, useState } from "react";
import { LandingPlanTripModal } from "@/components/plan_your_trip/landing-popup";
import TravelPresetSection from "@/components/home/travel-preset-section";
import ThreeImageShowcase from "@/components/home/three-image-showcase";
import DestinationSection from "@/components/home/destination-section";
import GlobalFinancialSection from "@/components/home/global-financial";
import FooterCurveSection from "@/components/home/footer-curve-section";
import AboutTravelone from "@/components/home/about-travelone";
import ThreeStepBanner from "@/components/home/tree-step-banner";
import ToursSlider from "@/components/home/tours-slider";
import TourBannerSection from "@/components/home/tour-banner-section";
import FullBannerSection from "@/components/home/full-banner";
import BlogSlider from "@/components/home/blog-slider";
import StickyHomeHeader from "@/components/header/sticky-home-header";
import WhyTravelOne from "@/components/home/why-travelone";

export default function HomePage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [destinationList, setDestinationList] = useState<any[]>([]);
    const [toursList, setToursList] = useState<any[]>([]);
    const [blogList, setBlogList] = useState<any[]>([]);
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState<boolean>(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const loadInitData = async () => {
            try {
                setIsLoading(true);

                const [destResponse, toursResponse, blogResponse] = await Promise.all([
                    fetch("/api/destination/list", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal: controller.signal,
                    }),
                    fetch("/api/tours/list", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal: controller.signal,
                    }),
                    fetch("/api/blog/list", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal: controller.signal,
                    }),
                ]);

                if (!destResponse.ok || !toursResponse.ok || !blogResponse.ok) {
                    throw new Error("Failed to fetch initial data");
                }

                const [destData, toursData, blogData] = await Promise.all([
                    destResponse.json(),
                    toursResponse.json(),
                    blogResponse.json(),
                ]);

                // Update state
                setDestinationList(destData?.data ?? []);
                setToursList(toursData?.data?.result ?? []);
                setBlogList(blogData?.data?.result ?? []);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Init data fetch failed:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadInitData();

        return () => controller.abort();
    }, []);

    return (
        <body>
            {ready && <>
                <HomeMobileHeader />
                <LandingMarqueeSection setOpenPlanYourTripModel={setOpenPlanYourTripModel} />
                <ThreeStepBanner onOpenChange={setOpenPlanYourTripModel} />
                <ThreeImageShowcase destinationList={destinationList} />
                <WhyTravelOne />
                <ToursSlider toursList={toursList} />
                <GlobalFinancialSection />
                <AboutTravelone />
                <FullBannerSection onOpenChange={setOpenPlanYourTripModel} />
                <BlogSlider blogList={blogList} />
                <CommonFooter isStickyShow={true} />
                <StickyHomeHeader />
                <LandingPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />
            </>}
        </body>
    );
}
