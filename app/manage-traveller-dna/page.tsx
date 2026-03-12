"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { getLoginCookie, isLoggedIn } from "@/lib/auth";
import NotFoundError from "@/components/common/not-found-error";
import { Heart, Search, Video } from "lucide-react";
import FeaturedSection from "@/components/personas/featured-section";
import EthosSection from "@/components/personas/ethos";
import Link from "next/link";
import Image from "next/image";
import FeedbackForm from "@/components/personas/feedback-rating";
import { ConnectTravelone } from "@/components/common/connect-travelone";
import TravelExpert from "@/components/tour_details/travel-experts";
import PageHelpful from "@/components/common/helpful";

export default function Page() {
    // Define state
    const [ready, setReady] = useState<boolean>(false);
    const [isValidAuth, setIsValidAuth] = useState<boolean>(false);
    const [openConnectTravelone, setOpenConnectTravelone] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [resultData, rowResultData] = useState<any>(null);
    const [countriesList, setCountriesList] = useState<any[]>([]);

    useEffect(() => {
        requestAnimationFrame(() => { setReady(true); });
    }, []);

    // Check auth
    useEffect(() => {
        // Get auth data
        const isAuth = isLoggedIn();
        const authData = getLoginCookie();

        // Update state
        if (isAuth) {
            setIsValidAuth(true);
        }

        // Fetch personas
        fetchPersonasResult(authData?.user_id);
    }, [ready]);

    // Fetch personas result
    const fetchPersonasResult = async (userId: string) => {
        // Validation
        if (!userId) {
            setIsLoading(false);
            return;
        }

        try {
            // Update state
            setIsLoading(true);

            // API Call
            const response = await fetch(`/api/plan_your_trip/manage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: userId
                })
            });

            // Convert into JSON
            const data = await response.json();

            // Check response
            if (data?.status) {
                rowResultData(data?.data);
                setCountriesList(data?.data?.data?.inventory ?? []);
            }
        } finally {
            // Update state
            setIsLoading(false);
        }
    };

    // Handle wishlist
    const handleWishlist = () => {

    };

    return (
        <>
            {ready && <>
                <div className="min-h-screen bg-white">
                    <CommonHeader />

                    {/* Loading */}
                    {isLoading && <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                        <div className="grid grid-cols-1 space-y-4">
                            <div className="animate-pulse bg-gray-200 rounded h-20 md:h-30"></div>
                            <div className="animate-pulse bg-gray-200 rounded h-40 md:h-50"></div>
                            <div className="animate-pulse bg-gray-200 rounded h-40 md:h-50"></div>
                        </div>
                    </div>}

                    {/* Found Result */}
                    {!isLoading && isValidAuth && resultData && <>
                        
                    </>}

                    {/* Not logged in */}
                    {!isLoading && !isValidAuth && !resultData && <NotFoundError
                        needCode={false}
                        heading="You are not logged in"
                        subHeading="Please login to access this page."
                        showLogin={true}
                        needButton={false}
                    />}

                    {/* Result not found */}
                    {!isLoading && isValidAuth && !resultData && <div className="mx-auto max-w-4xl py-20 text-center space-y-5">
                        <Search
                            size={120}
                            className="mx-auto text-[#ef2853] opacity-15"
                        />
                        <h2 className="text-3xl font-medium text-black">
                            Result not found
                        </h2>
                        <p className="text-base text-black max-w-2xl mx-auto">
                            Your personas could not be found. Please give it another try.
                        </p>
                    </div>}

                    <CommonFooter />
                </div>

                <ConnectTravelone
                    open={openConnectTravelone}
                    onOpenChange={setOpenConnectTravelone}
                />
            </>}
        </>
    );
}