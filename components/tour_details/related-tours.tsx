"use client"

import { TourCard } from "../tours/tour-card";

// Define props
interface Props {
    tours: any[]
}

export default function RelatedTours({ tours }: Props) {
    return (
        <div className="bg-white py-10 md:py-16 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        You May Also Like
                    </h3>
                    <span className="text-sm md:text-lg text-[#C46A3A] font-medium">
                        We are committed to providing you with the best possible experience
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tours.map((tour) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            </div>
        </div>
    )
}
