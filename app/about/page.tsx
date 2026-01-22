"use client";

import { useEffect, useState } from "react";
import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import HeroSection from "@/components/about/hero-section";
import OurVision from "@/components/about/our-vision";
import TravelOneJourney from "@/components/about/timeline-journey";
import LeadershipTeam from "@/components/about/leadership-team";
import FullBannerSection from "@/components/about/full-banner";
import StartWithWho from "@/components/about/start-with-who";
import LocalExpertise from "@/components/about/local-expertise";

export default function AboutPage() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <body>
            {ready && <>
                <CommonHeader />
                <HeroSection />
                <OurVision />
                <TravelOneJourney />
                <StartWithWho />
                <LeadershipTeam />
                <LocalExpertise />
                <FullBannerSection />
                <CommonFooter />
            </>}
        </body>
    );
}
