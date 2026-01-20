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

export default function HomePage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState<boolean>(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <body>
            {ready && <>
                <HomeMobileHeader />

                <LandingMarqueeSection setOpenPlanYourTripModel={setOpenPlanYourTripModel} />
                <TravelPresetSection />
                <ThreeImageShowcase />
                <DestinationSection />
                <ToursSlider />
                <TourBannerSection />
                <GlobalFinancialSection />
                <ThreeStepBanner onOpenChange={setOpenPlanYourTripModel} />
                <AboutTravelone />
                <FeatureCard />
                <FooterCurveSection onOpenChange={setOpenPlanYourTripModel} />

                <LandingPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />
                <CommonFooter />
            </>}
        </body>
    );
}
