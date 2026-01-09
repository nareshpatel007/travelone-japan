"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Clock, Utensils, Hotel, AlertCircle, Heart } from "lucide-react"

interface ItineraryDay {
    day: number
    title: string
    location: string
    description: string
    activities: Array<{
        name: string
        description: string
        image: string
        duration: string
    }>
    meals: {
        breakfast: string
        lunch: string
        dinner: string
    }
    accommodation: {
        name: string
        type: string
    }
    highlights: string[]
}

const itineraryDays: ItineraryDay[] = [
    {
        day: 1,
        title: "Arrival in Tokyo",
        location: "Tokyo",
        description: "Pick-up at the airport and transfer to your designated hotel. Evening at your leisure.",
        activities: [
            {
                name: "Narita Express Transfer",
                description: "Comfortable transfer from Narita Airport to your hotel with English-speaking staff",
                image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=500&h=300&fit=crop",
                duration: "2 hours",
            },
        ],
        meals: {
            breakfast: "Not included",
            lunch: "Not included",
            dinner: "At your leisure",
        },
        accommodation: {
            name: "Premium Hotel Tokyo",
            type: "4-star",
        },
        highlights: ["Airport transfer", "Hotel check-in", "Evening orientation"],
    },
    {
        day: 2,
        title: "Tokyo Private City Tour",
        location: "Tokyo",
        description: "Discover iconic landmarks and hidden gems of Tokyo with your private guide.",
        activities: [
            {
                name: "Senso-ji Temple Visit",
                description: "Explore Tokyo's oldest temple with stunning architecture and rich history",
                image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/5asd8asd4as5d4a.jpg",
                duration: "2 hours",
            },
            {
                name: "Nakamise Shopping Street",
                description: "Traditional shopping street with local shops offering snacks and souvenirs",
                image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/a54das12d1as1.jpg",
                duration: "1.5 hours",
            },
            {
                name: "Tokyo Skytree",
                description: "Japan's tallest structure offering panoramic views of the city",
                image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/4a5d12asda5s.jpg",
                duration: "2 hours",
            },
        ],
        meals: {
            breakfast: "Included at hotel",
            lunch: "Included - Local restaurant",
            dinner: "Included - Traditional Japanese",
        },
        accommodation: {
            name: "Premium Hotel Tokyo",
            type: "4-star",
        },
        highlights: ["Historic temple", "Traditional shopping", "Panoramic views", "English-speaking guide"],
    },
    {
        day: 3,
        title: "Tokyo to Nikko",
        location: "Nikko",
        description: "Journey to the scenic mountains of Nikko, famous for natural beauty and historical shrines.",
        activities: [
            {
                name: "Toshogu Shrine",
                description: "UNESCO World Heritage shrine with intricate carvings and serene atmosphere",
                image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=300&fit=crop",
                duration: "2 hours",
            },
            {
                name: "Chuzenji Lake",
                description: "Beautiful alpine lake surrounded by mountains and walking trails",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
                duration: "2 hours",
            },
        ],
        meals: {
            breakfast: "Included at hotel",
            lunch: "Included",
            dinner: "Included",
        },
        accommodation: {
            name: "Mountain Resort Nikko",
            type: "4-star",
        },
        highlights: ["UNESCO site", "Mountain scenery", "Traditional shrine", "Lake activities"],
    },
]

export function NewItineraryTab() {
    const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set())
    const [favorites, setFavorites] = useState<Set<number>>(new Set())

    const toggleDay = (day: number) => {
        const newExpanded = new Set(expandedDays)
        if (newExpanded.has(day)) {
            newExpanded.delete(day)
        } else {
            newExpanded.add(day)
        }
        setExpandedDays(newExpanded)
    }

    const toggleFavorite = (day: number) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(day)) {
            newFavorites.delete(day)
        } else {
            newFavorites.add(day)
        }
        setFavorites(newFavorites)
    }

    return (
        <div className="!max-w-6xl !py-7">
            <div className="relative">
                <div className="!absolute !left-5.5 !top-0 !bottom-0 !w-1 !bg-gray-300"></div>
                <div className="!space-y-6">
                    {itineraryDays.map((dayData) => (
                        <div key={dayData.day} className="!relative !mb-8">
                            <div className="!flex !items-start !gap-6">
                                <button
                                    onClick={() => toggleDay(dayData.day)}
                                    className="!w-12 !h-12 !rounded-full !bg-teal-700 !text-white !flex !items-center !justify-center !font-bold !text-md"
                                >
                                    {dayData.day}
                                </button>
                                <div className="flex-1 !rounded-2xl !bg-white !border-2 !border-teal-700 !overflow-hidden">
                                    <button
                                        onClick={() => toggleDay(dayData.day)}
                                        className="!w-full !p-6 !flex !items-start !justify-between !text-left"
                                    >
                                        <div className="flex-1">
                                            <span className="text-xl font-bold text-slate-900 !block !mb-2">{dayData.title}</span>
                                            <div className="!flex !items-center !gap-4 !text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4 text-gray-600" />
                                                    <span className="text-md">{dayData.location}</span>
                                                </div>
                                                <span className="text-md">{dayData.activities.length} activities</span>
                                            </div>
                                            <span className="text-gray-600 !block !mt-3">{dayData.description}</span>
                                        </div>
                                        <ChevronDown className={`w-6 h-6 text-teal-700 transition-transform duration-300 ${expandedDays.has(dayData.day) ? "rotate-180" : ""}`} />
                                    </button>
                                    {expandedDays.has(dayData.day) && (
                                        <div className="!border-t !border-gray-200">
                                            <div className="!p-6">
                                                <span className="text-lg font-bold text-black !mb-4 !flex !items-center !gap-2">
                                                    <Clock className="w-5 h-5 text-gray-600" /> Highlights & Activities
                                                </span>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {dayData.activities.map((activity, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="!bg-white !rounded-lg !overflow-hidden !border !border-teal-400 transition-colors"
                                                        >
                                                            <img
                                                                src={activity.image || "/placeholder.svg"}
                                                                alt={activity.name}
                                                                className="w-full h-40 object-cover"
                                                            />
                                                            <div className="!p-4">
                                                                <span className="font-bold text-slate-900 !block">{activity.name}</span>
                                                                <span className="text-sm text-slate-600 !block !mt-2">{activity.description}</span>
                                                                <div className="flex items-center gap-2 !mt-3 text-sm !text-gray-600">
                                                                    <Clock className="w-4 h-4" /> {activity.duration}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Meals Section */}
                                            <div className="!px-6 !py-4 !border-t !border-gray-200">
                                                <span className="text-lg font-bold text-black !block !mb-4 !flex !items-center !gap-2">
                                                    <Utensils className="w-5 h-5 text-gray-600" />
                                                    Meals
                                                </span>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {[
                                                        { label: "Breakfast", value: dayData.meals.breakfast },
                                                        { label: "Lunch", value: dayData.meals.lunch },
                                                        { label: "Dinner", value: dayData.meals.dinner },
                                                    ].map((meal, idx) => (
                                                        <div key={idx} className="!bg-white !p-4 !rounded-lg !border !border-teal-400">
                                                            <div className="text-sm font-semibold text-slate-900">{meal.label}</div>
                                                            <div className="text-sm text-slate-600 mt-1">{meal.value}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Accommodation Section */}
                                            <div className="!px-6 !py-4 !border-t !border-gray-200">
                                                <span className="text-lg font-bold text-black !block !mb-4 !flex !items-center !gap-2">
                                                    <Hotel className="w-5 h-5 text-gray-600" />
                                                    Accommodation
                                                </span>
                                                <div className="!bg-white !p-4 !rounded-lg !border !border-teal-400">
                                                    <div className="text-sm font-semibold text-slate-900">{dayData.accommodation.name}</div>
                                                    <div className="text-sm text-slate-600 mt-1">{dayData.accommodation.type}</div>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="!px-6 !py-4 !border-t !border-gray-200">
                                                <span className="text-lg font-bold text-black !block !mb-4 !flex !items-center !gap-2">
                                                    <AlertCircle className="w-5 h-5 text-gray-600" />
                                                    Key Points
                                                </span>
                                                <ul className="space-y-2">
                                                    {dayData.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="!flex !items-center gap-3 !text-gray-600">
                                                            <div className="!w-2 !h-2 !rounded-full !bg-green-500"></div>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
