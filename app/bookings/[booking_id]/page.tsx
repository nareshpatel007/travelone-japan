"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer"
import NotFoundError from "@/components/common/not-found-error";
import HeroTour from "@/components/booking/hero-tour";
import TabContent from "@/components/booking/tab-content";

export default function Page() {
    // Get slug
    const params = useParams();
    const booking_id = params?.booking_id;

    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [bookingData, setBookingData] = useState<any>({});

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const loadInitData = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/bookings/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        booking_id
                    }),
                });

                // Parse the JSON response
                const data = await response.json();

                // Check response
                if (data.status) {
                    setBookingData(data?.data ?? []);
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch single order:", error);
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
                <CommonHeader />

                {/* Not Found Error Page */}
                {!booking_id && <NotFoundError />}

                {/* Single Booking Page */}
                {!isLoading && booking_id && <div className="min-h-screen bg-white">
                    <HeroTour
                        tour={bookingData?.cart_data?.tour_info}
                        roomData={bookingData?.cart_data?.room_data}
                    />

                    <TabContent
                        itineraryData={bookingData?.tour_itinerary || []}
                        walletNotes={bookingData?.wallet_notes || []}
                        termsData={bookingData?.tour_terms || []}
                        paymentSchedule={bookingData?.payment_schedule || []}
                        cancellationPolicy={bookingData?.cancellation_policy || []}
                    />
                </div>}

                <CommonFooter />
            </>}
        </body>
    );
}
