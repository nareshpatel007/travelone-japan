"use client"

import { TourCard } from "../tours/tour-card";

// Define props
interface Props {
    tours: any[]
}

export default function RelatedTours({ tours }: Props) {
    return (
        <div className="!bg-white py-16 px-5 md:px-0">
            <div className="!max-w-7xl !mx-auto">
                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-[#1E1E1E]">You May Also Like</span>
                <p className="text-center text-[#C46A3A] !mb-12 font-semibold">
                    We are committed to providing you with the best possible experience
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tours.map((tour) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            </div>
        </div>
    )
}
