"use client"

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle, X } from "lucide-react";
import { TourCard } from "../tours/tour-card";
import Image from "next/image";

interface PlanTripModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

// Define the destinations
const destinations = [
    { id: 1, name: "Europe", image: "https://goonetravel.vercel.app/colosseum-rome.png" },
    { id: 2, name: "US & Canada", image: "https://goonetravel.vercel.app/empire-state-building-new-york.jpg" },
    { id: 3, name: "Latin America", image: "https://goonetravel.vercel.app/machu-picchu-mountains.png" },
    { id: 4, name: "Mexico & The Caribbean", image: "https://goonetravel.vercel.app/mayan-pyramid-chichen-itza.jpg" },
    { id: 5, name: "Asia", image: "https://goonetravel.vercel.app/marina-bay-sands.png" },
    { id: 6, name: "Australia & Pacific", image: "https://goonetravel.vercel.app/sydney-harbour-bridge-kayak.jpg" },
    { id: 7, name: "Middle East", image: "https://goonetravel.vercel.app/burj-al-arab-dubai.png" },
    { id: 8, name: "Africa", image: "https://goonetravel.vercel.app/cape-town-stadium-south-africa.jpg" },
]

// Define the countries
const countriesByDestination: Record<string, string[]> = {
    Europe: [
        "Denmark",
        "France",
        "Germany",
        "Greece",
        "Iceland",
        "Italy",
        "Norway",
        "Portugal",
        "Spain",
        "Sweden",
        "Switzerland",
        "Netherlands",
    ],
    "US & Canada": ["United States", "Canada", "Alaska", "Hawaii"],
    "Latin America": ["Brazil", "Argentina", "Chile", "Peru", "Colombia", "Ecuador"],
    "Mexico & The Caribbean": ["Mexico", "Jamaica", "Cuba", "Dominican Republic", "Bahamas", "Puerto Rico"],
    Asia: ["Japan", "Thailand", "Vietnam", "Indonesia", "Singapore", "South Korea", "India", "China"],
    "Australia & Pacific": ["Australia", "New Zealand", "Fiji", "Tahiti", "Hawaii"],
    "Middle East": ["UAE", "Israel", "Jordan", "Egypt", "Turkey", "Qatar"],
    Africa: ["South Africa", "Morocco", "Kenya", "Tanzania", "Egypt", "Botswana"],
}

const attractions = [
    { id: 1, name: "Visit Most Popular Places" },
    { id: 2, name: "Visit Quiet Places" },
    { id: 3, name: "Visit Offbeat Places" },
    { id: 4, name: "Fast-Paced Exploration" },
    { id: 5, name: "Slow & Immersive Travel" },
    { id: 6, name: "Classic First-Time Itinerary" },
    { id: 7, name: "Multi-Country Travel" },
    { id: 8, name: "Multi-City Exploration" },
    { id: 9, name: "Single-Destination Deep Dive" },
    { id: 10, name: "Scenic & Relaxed Travel" },
    { id: 11, name: "Structured & Planned Travel" },
    { id: 12, name: "Flexible & Spontaneous Travel" },
    { id: 13, name: "Seasonal Exploration" },
    { id: 14, name: "Return & Explore More" },
    { id: 15, name: "Balanced Mix of Everything" },
]

const sampleTours = [
    {
        id: 1,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        badge: "Likely to sell out",
        tourType: "DAY TRIP",
        rating: 4.4,
        reviews: 899,
        title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 2,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 390,
        title: "Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point",
        duration: "3 hours",
        price: "$6,005",
    },
    {
        id: 3,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-7.jpg",
        tourType: "WATER ACTIVITY",
        rating: 4.5,
        reviews: 99,
        title: "Stingray Sandbar, Snorkeling, and Starfish Point",
        duration: "3 hours 45 minutes",
        price: "$5,005",
    },
    {
        id: 4,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-8.jpg",
        tourType: "DAY TRIP",
        badge: "Likely to sell out",
        rating: 4.6,
        reviews: 988,
        title: "Stingray City, Snorkeling, & Starfish Adventure",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    }
]

export function CommonPlanTripModal({ open, onOpenChange }: PlanTripModalProps) {
    // Define state
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<string>("")
    const [selectedAttractions, setSelectedAttractions] = useState<string[]>([])
    const [showResults, setShowResults] = useState(false)

    const handleReset = () => {
        setCurrentStep(1);
        setSelectedDestination(null);
        setSelectedCountry(null);
        setSelectedDate("");
        setSelectedAttractions([]);
        setShowResults(false);
    }

    const handleClose = () => {
        onOpenChange(false)
        handleReset()
    }

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        } else {
            setShowResults(true)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const toggleAttraction = (name: string) => {
        setSelectedAttractions((prev) => (prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]))
    }

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return selectedDestination !== null
            case 2:
                return selectedCountry !== null
            case 3:
                return selectedDate !== ""
            case 4:
                return selectedAttractions.length > 0
            default:
                return false
        }
    }

    if (!open) return null

    if (showResults) {
        return (
            <div className="!fixed inset-0 !z-[99999] !flex !items-center !justify-center">
                <div className="!absolute !inset-0 !bg-black/40" onClick={handleClose} />
                <div className="!relative !w-full !h-full !bg-white !overflow-auto">
                    <div className="!sticky !top-0 !bg-white !border-b !border-gray-200 !z-10">
                        <div className="!max-w-6xl !mx-auto !px-4 !md:px-8 !py-4 !flex !items-center !justify-between">
                            <div>
                                <span className="text-xl md:text-2xl font-bold text-[#333]">
                                    Tours in {selectedCountry}, {selectedDestination}
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    {sampleTours.length} experiences found for {selectedDate} •{" "}
                                    {selectedAttractions.slice(0, 2).join(", ")}
                                    {selectedAttractions.length > 2 && ` +${selectedAttractions.length - 2} more`}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleReset}
                                    className="px-4 py-2 text-[#333] font-medium hover:bg-[#333]/10 rounded-lg transition-colors cursor-pointer"
                                >
                                    Modify Search
                                </button>
                                <button onClick={handleClose} className="p-2 bg-[#ffc765] hover:bg-[#333] hover:text-white rounded-full transition-colors cursor-pointer">
                                    <X className="h-5 w-5 text-black hover:text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="!max-w-6xl !mx-auto !px-4 !md:px-8 !py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                            {/* {sampleTours.map((tour) => (
                                <TourCard
                                    key={tour.id}
                                    image={tour.image}
                                    title={tour.title}
                                    rating={tour.rating}
                                    reviews={tour.reviews}
                                    duration={tour.duration}
                                    price={tour.price}
                                    tourType={tour.tourType}
                                    badge={tour.badge}
                                />
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
            <div className="absolute inset-0 !bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full !bg-[#fef4e4] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 !bg-[#ffc765] !hover:bg-black rounded-full transition-colors cursor-pointer"
                >
                    <X className="h-5 w-5 text-black" />
                </button>
                <div className="!absolute !top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {[1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`w-3 h-3 rounded-full transition-colors ${step === currentStep ? "!bg-[#ffc765]" : step < currentStep ? "!bg-[#ffc765]" : "!bg-gray-300"}`}
                        />
                    ))}
                </div>
                <div className="min-h-full flex flex-col !items-center !justify-center !px-8 !py-20">
                    {currentStep === 1 && (
                        <div className="w-full max-w-5xl !text-center">
                            <span className="text-3xl md:text-4xl font-bold !text-black !text-center !block !mb-10">
                                Where do you want to go next?
                            </span>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {destinations.map((dest) => (
                                    <button
                                        key={dest.id}
                                        onClick={() => setSelectedDestination(dest.name)}
                                        className={`group relative rounded-lg overflow-hidden transition-all border border-[#1a2b49] cursor-pointer ${selectedDestination === dest.name ? "ring-1 ring-[#333] border-[#333] scale-[1.02]" : "hover:scale-[1.02]"
                                            }`}
                                    >
                                        <div className="aspect-[4/3]">
                                            <Image
                                                src={dest.image || "/placeholder.svg"}
                                                alt={dest.name}
                                                width={500}
                                                height={500}
                                                className="!w-full !h-full !object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 !bg-white/95 !p-3 flex items-center gap-2">
                                            <span className="flex items-center justify-center w-6 h-6 !bg-[#333]/10 text-[#333] text-xs font-medium !rounded !border !border-[#333]/30">
                                                {dest.id}
                                            </span>
                                            <span className="text-sm font-medium !text-gray-800">{dest.name}</span>
                                        </div>
                                        {selectedDestination === dest.name && (
                                            <div className="absolute top-2 right-2 w-6 h-6 !bg-[#ffc765] rounded-full flex items-center justify-center">
                                                <Check className="h-4 w-4 !text-black" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="w-full max-w-4xl">
                            <span className="text-3xl md:text-4xl font-bold !text-black !text-center !block !mb-10">
                                Which country in {selectedDestination} are you interested in exploring?
                            </span>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {(countriesByDestination[selectedDestination || ""] || []).map((country, index) => (
                                    <button
                                        key={country}
                                        onClick={() => setSelectedCountry(country)}
                                        className={`flex items-center gap-3 px-4 py-3 !rounded-lg !border-2 transition-all cursor-pointer ${selectedCountry === country
                                            ? "!border-[#333] !bg-[#333]/10"
                                            : "!border-[#1a2b49]/30 !bg-white !hover:border-[#333]/50"
                                            }`}
                                    >
                                        <span className="flex items-center justify-center w-7 h-7 !bg-[#333]/10 !text-[#333] text-sm font-medium !rounded !border !border-[#333]/30">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">{country}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="w-full max-w-2xl">
                            <span className="text-3xl md:text-4xl font-bold !text-black !text-center !block !mb-10">
                                When are you planning to travel?
                            </span>
                            <div className="!bg-white !rounded-2xl !p-8 !shadow-sm">
                                <div className="flex flex-col items-center">
                                    <label className="block text-md font-medium text-gray-700 !mb-2">Travel Date</label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        min={new Date().toISOString().split("T")[0]}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full max-w-xs px-4 py-3 border-2 border-[#1a2b49]/30 rounded-lg focus:border-[#1a2b49] focus:ring-0 outline-none text-gray-800"
                                    />
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm text-gray-500 text-center">
                                        Select your travel date to help us find the best experiences for you
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentStep === 4 && (
                        <div className="w-full max-w-4xl">
                            <span className="text-3xl md:text-4xl font-bold !text-black !text-center !block !mb-10">
                                Select the general vibe you're looking for on this trip
                            </span>
                            <div className="grid md:grid-cols-2 gap-3">
                                {attractions.map((attraction) => (
                                    <button
                                        key={attraction.id}
                                        onClick={() => toggleAttraction(attraction.name)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${selectedAttractions.includes(attraction.name)
                                            ? "!border-[#333] !bg-[#333]/10"
                                            : "!border-[#1a2b49]/30 !bg-white !hover:border-[#333]/50"
                                            }`}
                                    >
                                        <span className="flex items-center justify-center w-7 h-7 !bg-[#333]/10 !text-[#333] text-sm font-medium !rounded !border !border-[#333]/30">
                                            {attraction.id}
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">{attraction.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex items-center gap-3 !mt-12">
                        {currentStep > 1 && (
                            <button
                                onClick={handlePrevious}
                                className="flex items-center gap-2 px-8 py-3 bg-white text-[#1a2b49] rounded-lg font-medium border border-[#1a2b49] hover:bg-[#333] hover:border-[#333] transition-colors hover:text-white cursor-pointer"
                            >
                                <ArrowLeft className="h-5 w-5" /> Previous
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border cursor-pointer ${canProceed()
                                ? "bg-[#ffc765] text-[#333] hover:border-[#333] hover:text-white hover:bg-[#333]"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {currentStep === 4 ? (
                                <>
                                    <CheckCircle className="h-5 w-5" /> Submit
                                </>
                            ) : (
                                <>
                                    Next <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                        {/* <button
                            onClick={handleReset}
                            className="px-8 py-3 cursor-pointer bg-white text-[#333] border border-[#333] rounded-lg font-medium hover:bg-[#333] hover:text-white transition-colors"
                        >
                            Reset
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
