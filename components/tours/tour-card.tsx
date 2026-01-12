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
        <div className="group !border !border-border !rounded-xl !border !border-[#C46A3A] !bg-amber-50 !transition-all !duration-300 !overflow-hidden">
            <Link href="/tours/tour-details">
                <div className="relative h-60 overflow-hidden">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="!p-6">
                    <div className="flex justify-between items-start !mb-3">
                        <span className="text-md md:text-xl font-semibold text-gray-900 !block !flex-1">{title}</span>
                        <span className="text-md md:text-xl font-bold text-[#C46A3A] !block !ml-4">{price}</span>
                    </div>
                    <div className="!flex items-center gap-2 !mb-3">
                        <div className="flex items-center gap-1">
                            <Footprints size={16} className="text-[#C46A3A]" />
                            <span className="font-bold text-sm text-gray-900">16 Places</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Compass size={16} className="text-[#C46A3A]" />
                            <span className="font-bold text-sm text-gray-900">8 Cities</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Kyoto (3 Nights) <MoveRight className="h-4 w-4 inline-flex items-center" /> Nara (1 Night) <MoveRight className="h-4 w-4 inline-flex items-center" /> Osaka (1 Night)
                    </p>
                </div>
            </Link>
        </div>
    )
}
