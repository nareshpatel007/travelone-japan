import { formatPrice } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
    name: string;
    slug: string;
    featured_image: string;
    tour_type: number;
    tour_sub_title: string;
    is_refundable: number;
    starting_price: string;
    city_nights: string;
}

export function TourCard({
    name,
    slug,
    featured_image,
    tour_type,
    tour_sub_title,
    is_refundable,
    starting_price,
    city_nights
}: TourCardProps) {
    // Parse json
    const tourSummary = JSON.parse(tour_sub_title as any);
    const cityNights = JSON.parse(city_nights as any);

    return (
        <div className="group h-full">
            <Link href={`/tour/${slug}`} className="h-full block">
                <div className="flex flex-col h-full border border-gray-200 transition-all duration-300">
                    <div className="relative h-52 md:h-80 overflow-hidden">
                        <Image
                            src={featured_image || "/placeholder.svg"}
                            alt={name}
                            fill
                            draggable={false}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {(tour_type || is_refundable === 1) && (
                            <div className="absolute top-3 left-3 flex rounded-full bg-black overflow-hidden text-white">
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
                    <div className="flex flex-col flex-1 p-6 text-center space-y-4">
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-medium text-gray-900 line-clamp-2">
                            {name}
                        </h3>

                        {/* Tour Summary */}
                        {tourSummary && tourSummary.length > 0 && <div className="text-sm text-black">
                            <span className="inline-flex items-center">
                                {tourSummary[0]} / {tourSummary[3].replace("Places", "Locations")} / {tourSummary[1]}
                            </span>
                        </div>}

                        {/* City nights */}
                        {cityNights && cityNights.length > 0 && <div className="text-sm text-black">
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
                        </div>}

                        {/* Start Price */}
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