import { Compass, Footprints, Heart, MoveRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TourCardProps {
    image: string
    badge?: string
    tourType?: string
    rating: number
    reviews: number
    title: string
    duration?: string
    price: string
    originalPrice?: string
    extraInfo?: string
    location?: string
    priceNote?: string
}

export function TourCard({
    image,
    badge,
    tourType,
    rating,
    reviews,
    title,
    duration,
    price,
    originalPrice,
    extraInfo,
}: TourCardProps) {
    return (
        <div className="group !transition-all !duration-300 !overflow-hidden">
            <Link href="/tours/tour-details">
                <div className="relative h-80 overflow-hidden">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 flex items-center gap-1 md:gap-1.5 !bg-white !px-4 !py-1 !rounded-full">
                        <span className="text-sm md:text-xs text-gray-700 font-medium hidden inline">Free Cancellation</span>
                    </div>
                </div>
                <div className="!py-6 !space-y-3 !text-center">
                    <span className="text-gray-900 text-xs !block">
                        Kyoto (3 Nights) <MoveRight className="h-4 w-4 inline-flex items-center" /> Nara (1 Night) <MoveRight className="h-4 w-4 inline-flex items-center" /> Osaka (1 Night)
                    </span>
                    <span className="text-xl md:text-2xl font-strong text-gray-900 !block !flex-1">{title}</span>
                    <div className="!flex !items-center !justify-center !mb-3">
                        <span className="text-xs md:text-sm font-semibold text-[#385b21] !bg-[#d4e9e7] !px-5 !py-1.5 !block">{price}</span>
                    </div>
                    {/* <div className="!flex !items-center !justify-center gap-2 !mb-3">
                        <div className="flex items-center gap-1">
                            <Footprints size={16} className="text-amber-600" />
                            <span className="font-normal text-sm text-gray-900">16 Places</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Compass size={16} className="text-amber-600" />
                            <span className="font-normal text-sm text-gray-900">8 Cities</span>
                        </div>
                    </div> */}
                </div>
            </Link>
        </div>
    )
}
