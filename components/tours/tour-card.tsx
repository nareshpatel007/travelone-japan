import { formatPrice } from "@/lib/utils"
import { Compass, Footprints, Heart, MoveRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TourCardProps {
    name: string
    slug: string
    featured_image: string
    tour_type: number
    is_refundable: number
    starting_price: string
}

export function TourCard({
    name,
    slug,
    featured_image,
    tour_type,
    is_refundable,
    starting_price,
}: TourCardProps) {
    return (
        <div className="group !transition-all !duration-300 !overflow-hidden">
            <Link href={`/tours/${slug}`}>
                <div className="relative h-50 md:h-80 overflow-hidden">
                    <Image
                        src={featured_image || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {(tour_type || is_refundable === 1) && (
                        <div className="absolute top-2 md:top-3 left-2 md:left-3 flex overflow-hidden rounded-full bg-white">
                            {tour_type && (
                                <span className="px-4 py-1 text-xs text-gray-700 font-medium border-r border-gray-200">{tour_type}</span>
                            )}

                            {is_refundable === 1 && (
                                <span className="px-4 py-1 text-xs text-gray-700 font-medium">Free Cancellation</span>
                            )}
                        </div>
                    )}
                </div>
                <div className="!py-6 !space-y-3 !text-center">
                    <span className="text-gray-900 text-xs !block">
                        Kyoto (3 Nights) <MoveRight className="h-4 w-4 inline-flex items-center" /> Nara (1 Night) <MoveRight className="h-4 w-4 inline-flex items-center" /> Osaka (1 Night)
                    </span>
                    <span className="text-lg md:text-2xl font-strong text-gray-900 block flex-1">{name}</span>
                    <div className="flex items-center !justify-center mb-3">
                        <span className="text-xs md:text-sm font-semibold rounded-xs text-[#385b21] bg-[#d4e9e7] px-5 py-1.5 block">
                            USD ${formatPrice(starting_price, 0)}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
