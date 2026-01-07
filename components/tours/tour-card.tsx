import { Compass, Footprints, Heart, MoveRight, Star } from "lucide-react"

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
        <div className="group !border !border-border !rounded-lg">
            <div className="relative rounded-xl overflow-hidden mb-2 md:mb-3 !p-2">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-36 sm:h-44 md:h-60 !rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6F4A]" />
                <button className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                </button>
            </div>
            <div className="space-y-1 md:space-y-1.5 !p-2">
                <span className="!block !w-full text-sm md:text-base !font-semibold !text-black !line-clamp-2 !leading-snug">{title}</span>

                <div className="!flex gap-3">
                    <p className="flex gap-1 items-center text-xs md:text-sm text-gray-500">
                        <Footprints className="h-4 w-4" /> 16 Places
                    </p>
                    <p className="flex gap-1 items-center text-xs md:text-sm text-gray-500">|</p>
                    <p className="flex gap-1 items-center text-xs md:text-sm text-gray-500">
                        <Compass className="h-4 w-4" /> 6 Cities
                    </p>
                </div>

                <div className="!flex gap-3">
                    <p className="items-center text-xs md:text-sm text-gray-500">
                        Kyoto (3 Nights) <MoveRight className="h-4 w-4 inline-flex items-center" /> Nara (1 Night) <MoveRight className="h-4 w-4 inline-flex items-center" /> Osaka (1 Night)
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between !border-t !p-2">
                <div className="flex items-center gap-1"></div>
                <div className="text-center sm:text-right">
                    <span className="text-[10px] md:text-sm text-gray-500 !mr-1">From </span>
                    <span className="font-bold text-sm md:text-lg text-gray-900">{price}</span>
                    <span className="text-[10px] md:text-sm text-gray-500 !mr-1"> / person</span>
                </div>
            </div>
        </div>
    )
}
