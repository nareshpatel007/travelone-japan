"use client";

import { formatDate, formatPrice } from "@/lib/utils";
import { Trash2, ArrowRight, CalendarCheck, Building, HashIcon } from "lucide-react";
import Image from "next/image";

interface Props {
    bookingRefNo: string;
    cartData: any;
}

// Define traveler labels
const travelerLabels: Record<string, string> = {
    adults: "Adults",
    child_8_12: "Child (Age 8–12)",
    child_3_7: "Child (Age 3–7)",
    infant: "Infant",
    extra_adult: "Extra Adult",
    extra_child: "Extra Child",
    single_supplement: "Single Supplement",
};

export function RepaymentCartItem({ bookingRefNo, cartData }: Props) {
    // Parse tour summary
    const tourSummary = JSON.parse(
        cartData?.tour_info?.tour_sub_title || "[]"
    );

    return (
        <div className="rounded-md border border-black bg-white overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr]">
                <div className="p-2 sm:p-3">
                    <div className="relative h-48 sm:h-full min-h-[160px] rounded-sm overflow-hidden bg-gray-200">
                        <Image
                            src={cartData?.tour_info?.featured_image || "/placeholder.svg"}
                            alt={cartData?.tour_info?.tour_name || "Image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-between space-y-5">
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg sm:text-xl font-semibold text-black">
                            {cartData?.tour_info?.tour_name}
                        </h2>
                    </div>

                    <div className="space-y-2 text-sm text-black">
                        <p className="flex flex-wrap items-center gap-1">
                            {tourSummary.map((item: string, index: number) => (
                                <span key={index} className="flex items-center gap-1">
                                    {item.replace("Places", "Locations")}
                                    {index < tourSummary.length - 1 && (
                                        <ArrowRight className="h-4 w-4" />
                                    )}
                                </span>
                            ))}
                        </p>

                        <div className="flex items-center gap-2">
                            <span>
                                <CalendarCheck className="h-4 w-4" />
                            </span>
                            <span>Travel date: {formatDate(cartData?.booking_date)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span>
                                <HashIcon className="h-4 w-4" />
                            </span>
                            <span>Booking Reference No: {bookingRefNo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}