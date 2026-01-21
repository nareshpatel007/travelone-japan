import { formatPrice } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
    name: string
    slug: string
    featured_image: string
    tour_type: number
    is_refundable: number
    starting_price: string,
    city_nights: any
}

export function TourCard({
    name,
    slug,
    featured_image,
    tour_type,
    is_refundable,
    starting_price,
    city_nights
}: TourCardProps) {
    const cityNights = JSON.parse(city_nights as any);

    return (
        <div className="group h-full">
            <Link href={`/tour/${slug}`} className="h-full block">
                <div className="flex flex-col h-full border border-gray-200 transition-all duration-300">

                    {/* IMAGE (same height always) */}
                    <div className="relative h-52 md:h-80 overflow-hidden">
                        <Image
                            src={featured_image || "/placeholder.svg"}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {(tour_type || is_refundable === 1) && (
                            <div className="absolute top-3 left-3 flex rounded-full bg-amber-400 overflow-hidden text-black">
                                {tour_type && (
                                    <span className="px-3 py-1 text-xs font-medium border-r border-gray-200">
                                        {tour_type}
                                    </span>
                                )}
                                {is_refundable === 1 && (
                                    <span className="px-3 py-1 text-xs font-medium">
                                        Free Cancellation
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 p-6 text-center space-y-3">

                        {/* TITLE (fixed spacing) */}
                        <h3 className="text-lg md:text-xl font-medium text-gray-900 line-clamp-2">
                            {name}
                        </h3>

                        {/* ROUTE */}
                        <div className="text-sm text-gray-800">
                            {cityNights.map((item: any, index: number) => (
                                <span key={index} className="inline-flex items-center">
                                    {item.city_name}
                                    {item.night > 0 && (
                                        <span>&nbsp;({item.night} {item.night > 1 ? "Nights" : "Night"})</span>
                                    )}
                                    {index < cityNights.length - 1 && (
                                        <MoveRight className="h-4 w-4 mx-1" />
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* PRICE — STICKS TO BOTTOM */}
                        <div className="mt-auto flex justify-center pt-4">
                            <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-5 py-1.5 rounded-sm">
                                Start from USD ${formatPrice(starting_price, 0)}
                            </span>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
}