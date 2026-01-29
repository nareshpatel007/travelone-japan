"use client";

import { formatDate, formatPrice } from "@/lib/utils";
import { Trash2, ArrowRight, CalendarCheck, Building } from "lucide-react";
import Image from "next/image";

interface Props {
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

export function CartItem({ cartData }: Props) {
    // Parse tour summary
    const tourSummary = JSON.parse(
        cartData?.cart?.tour_info?.tour_sub_title || "[]"
    );

    return (
        <div className="rounded-md border border-black bg-white overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr]">
                <div className="p-2 sm:p-3">
                    <div className="relative h-48 sm:h-full min-h-[160px] rounded-sm overflow-hidden bg-gray-200">
                        <Image
                            src={cartData?.cart?.tour_info?.featured_image || "/placeholder.svg"}
                            alt={cartData?.cart?.tour_info?.tour_name || "Image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-between space-y-5">
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg sm:text-xl font-semibold text-black">
                            {cartData?.cart?.tour_info?.tour_name}
                        </h2>

                        {/* <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition cursor-pointer"
                            aria-label="Remove item"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button> */}
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
                            <span>Travel date: {formatDate(cartData?.cart?.booking_date)}</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-blue-600 text-base text-black">
                            <thead>
                                <tr className="border-b border-blue-600 text-center font-medium">
                                    <th className="px-3 py-2 text-base border-r border-blue-600"></th>
                                    <th className="px-3 py-2 text-base border-r border-blue-600">Count</th>
                                    <th className="px-3 py-2 text-base border-r border-blue-600">Per Person</th>
                                    <th className="px-3 py-2 text-base">Total ($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData?.travelers && Object.entries(cartData.travelers).filter(([_, value]: any) => value.count > 0).map(([key, value]: any) => (
                                    <tr
                                        key={key}
                                        className="text-center border-b border-blue-600"
                                    >
                                        <td className="px-3 py-2 text-sm border-r border-blue-600 text-left font-medium">
                                            {travelerLabels[key] ?? key}
                                        </td>

                                        <td className="px-3 py-2 text-sm border-r border-blue-600">
                                            {value.count}
                                        </td>

                                        <td className="px-3 py-2 text-sm border-r border-blue-600">
                                            ${value.per_price.toLocaleString()}
                                        </td>

                                        <td className="px-3 py-2 text-sm font-semibold">
                                            ${value.total_price.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-3 py-2 text-sm text-right font-medium border-r border-blue-600"
                                    >
                                        Total Amount
                                    </td>
                                    <td className="px-3 py-2 text-sm text-red-600 font-semibold text-center">
                                        ${formatPrice(cartData?.sub_total, 0)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}