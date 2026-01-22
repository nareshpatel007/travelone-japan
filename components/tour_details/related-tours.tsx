"use client"

import { TourCard } from "../tours/tour-card";

// Define props
interface Props {
    title?: string;
    column?: number;
    tours: any[]
}

export default function RelatedTours({ title, column = 2, tours }: Props) {
    return (
        <div className="bg-white py-10 md:py-12 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        {title || "You May Also Like"}
                    </h3>
                    <span className="text-sm md:text-lg text-black">
                        We are committed to providing you with the best possible experience
                    </span>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-${column} gap-4`}>
                    {tours.map((tour) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            </div>
        </div>
    )
}
