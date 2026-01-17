"use client"

import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";

// Define props
type Props = {
    itineraryLoading?: boolean;
    itineraryData: any;
}

export function ItineraryTab({ itineraryLoading, itineraryData }: Props) {
    // If loading
    if (itineraryLoading) {
        return (
            <div className="py-7">
                <div className="text-center text-gray-500">
                    <Loader2 className="w-6 h-6 mx-auto mb-3 animate-spin" />
                    Loading itinerary...
                </div>
            </div>
        )
    }

    return (
        <div className="py-7">
            <div className="relative">
                <div className="absolute left-4.5 top-5 bottom-0 w-1 bg-gray-300"></div>
                <div className="space-y-6">
                    {itineraryData.map((dayData: any) => (
                        <div className="flex gap-3 md:gap-6">
                            <div className="flex-shrink-0 relative">
                                <div className="w-10 h-10 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center font-bold text-md">{dayData.day_no}</div>
                            </div>
                            <div className="flex-1 bg-white border-2 border-gray-300 rounded-lg p-5 md:p-6">
                                <span className="text-lg font-bold text-[#1E1E1E] mb-3 block uppercase">{dayData.title}</span>

                                {dayData.itinerary && dayData.itinerary.map((activity: any, actIdx: number) => (
                                    <div key={actIdx} className="mb-3">
                                        {activity.type === 'attraction' ? (
                                            <div className="!mb-6">
                                                <span className="!text-[#C46A3A] !font-bold !block !mb-4">Activities:</span>
                                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                                                    {activity.attractions.map((attraction: any, idx: number) => (
                                                        <div key={idx} className="flex flex-col">
                                                            <div className="relative w-full overflow-hidden rounded mb-4 aspect-square lg:aspect-[16/9]">
                                                                <Image
                                                                    src={attraction.featured_image || "/placeholder.svg"}
                                                                    alt={attraction.attraction_name}
                                                                    fill
                                                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                                                    className="object-cover object-center"
                                                                />
                                                            </div>
                                                            <span className="font-bold text-gray-900 text-md mb-2 block">
                                                                {attraction.attraction_name}
                                                            </span>
                                                            <p className="text-gray-600 text-md leading-relaxed">
                                                                {attraction.description}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <p className={`flex inline-block text-gray-700 text-md whitespace-pre-line`}>
                                                <ArrowRight className="w-4 h-4 mr-2 text-amber-700 inline-block" />
                                                {activity.title}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
