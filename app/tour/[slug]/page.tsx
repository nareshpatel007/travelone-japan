"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import FAQsList from "@/components/tour_details/faqs";
import RelatedTours from "@/components/tour_details/related-tours";
import { useParams } from "next/navigation";
import HeroTour from "@/components/tour_details/hero-tour";
import TabContent from "@/components/tour_details/tab-content";
import BestValueGuarantee from "@/components/tour_details/best-value-guarantee";
import Reviews from "@/components/tour_details/reviews";
import WhyTravelOne from "@/components/tour_details/why-travelone";
import TrustedBy from "@/components/tour_details/trusted-by";
import TravelExpert from "@/components/tour_details/travel-experts";
import PageHelpful from "@/components/common/helpful";
import { CustomizeTrip } from "@/components/tour_details/popup/customize-trip";
import { DownloadBrochure } from "@/components/tour_details/popup/download-brochure";
import { EmailBrochure } from "@/components/tour_details/popup/email-brochure";
import { BookingCart } from "@/components/tour_details/popup/booking-cart";

export default function TourDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params?.slug;

    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [tourData, setTourData] = useState<any>({});
    const [selectedPackage, setSelectedPackage] = useState(2);
    const [showStickyFooter, setShowStickyFooter] = useState(false);
    const [openCustomizeTripPopup, setOpenCustomizeTripPopup] = useState(false);
    const [openDownloadBrochurePopup, setOpenDownloadBrochurePopup] = useState(false);
    const [openEmailBrochurePopup, setOpenEmailBrochurePopup] = useState(false);
    const [openBookingCartPopup, setOpenBookingCartPopup] = useState(false);
    const pageRef = useRef(null);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });

        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setShowStickyFooter(scrollPercentage > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchTours = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/tours/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ slug })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Fetch packages
                if (data?.data?.tour_packages?.length > 0) {
                    setSelectedPackage(data?.data?.tour_packages[0]?.no ?? 1);
                }

                // Update the state
                setTourData(data?.data ?? []);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch single tour:", error);
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

                {isLoading ? (
                    <div className="flex justify-center items-center min-h-screen bg-white">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                ) : <div ref={pageRef} className="min-h-screen bg-white">
                    <HeroTour
                        isLoading={isLoading}
                        tour={tourData?.tour ?? {}}
                        city_nights={tourData?.city_nights ?? {}}
                        packages={tourData?.tour_packages ?? []}
                        selectedPackage={selectedPackage}
                        setSelectedPackage={setSelectedPackage}
                        setOpenCustomizeTripPopup={setOpenCustomizeTripPopup}
                        setOpenDownloadBrochurePopup={setOpenDownloadBrochurePopup}
                        setOpenEmailBrochurePopup={setOpenEmailBrochurePopup}
                        setOpenBookingCartPopup={setOpenBookingCartPopup}
                    />

                    <TabContent
                        tour={tourData?.tour ?? {}}
                        city_nights={tourData?.city_nights ?? {}}
                        tour_packages={tourData?.tour_packages ?? []}
                        tour_terms={tourData?.tour_terms ?? {}}
                        attractions={tourData?.attractions || {}}
                        payment_schedule={tourData?.payment_schedule ?? []}
                        cancellation_payment={tourData?.cancellation_payment ?? []}
                    />

                    <BestValueGuarantee />
                    <Reviews reviews={tourData?.tour_reviews ?? []} />
                    <WhyTravelOne />
                    <TrustedBy />
                    <FAQsList data={tourData?.tour_terms ?? []} />
                    <RelatedTours tours={tourData?.related_tours || []} />
                    <TravelExpert />
                    <PageHelpful />

                    {showStickyFooter && (
                        <div className="hidden md:block fixed bottom-0 left-0 right-0 !bg-gray-100 !shadow-lg !border-t !border-gray-300 !z-[9999]">
                            <div className="!max-w-7xl !mx-auto !py-3 flex !items-center !justify-between">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={tourData?.tour?.featured_image || "/placeholder-500x500.svg"}
                                        alt={tourData?.tour?.name}
                                        width={70}
                                        height={50}
                                        className="!object-cover !rounded"
                                    />
                                    <span className="text-gray-700 text-md font-medium">Call us now on +1 437 966 9023</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="bg-[#ef2853] hover:bg-white text-white hover:text-[#ef2853] border border-[#ef2853] px-6 py-2 rounded font-semibold cursor-pointer transition">
                                        Book {tourData?.tour_packages && tourData?.tour_packages.find((p: any) => p.no === selectedPackage)?.name}
                                    </button>
                                    <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-6 py-2 rounded font-semibold cursor-pointer transition" onClick={() => setOpenCustomizeTripPopup(true)}>
                                        Customize Trip
                                    </button>
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        className="ml-2 p-2 bg-[#1E1E1E] text-white rounded-full shadow hover:shadow-lg cursor-pointer transition"
                                    >
                                        <ArrowUp size={20} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>}

                {/* Popup modals */}
                <BookingCart tour={tourData?.tour ?? {}} open={openBookingCartPopup} onOpenChange={setOpenBookingCartPopup} />
                <CustomizeTrip tour={tourData?.tour ?? {}} open={openCustomizeTripPopup} onOpenChange={setOpenCustomizeTripPopup} />
                <DownloadBrochure tour={tourData?.tour ?? {}} open={openDownloadBrochurePopup} onOpenChange={setOpenDownloadBrochurePopup} />
                <EmailBrochure open={openEmailBrochurePopup} onOpenChange={setOpenEmailBrochurePopup} />

                <CommonFooter />
            </>}
        </body>
    );
}