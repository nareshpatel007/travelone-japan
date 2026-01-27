"use client"

import { useState } from "react";
import Image from "next/image";
import { BedDouble, Check, ChevronLeft, ChevronRight, Heart, Loader2, MoveRight } from "lucide-react";
import 'react-loading-skeleton/dist/skeleton.css';
import { formatPrice } from "@/lib/utils";
import { addWishlistCount, getLoginCookie, isLoggedIn } from "@/lib/auth";
import { LoginModal } from "../common/login-modal";

// Define props
interface Props {
    tour: any;
    roomData: any;
}

export default function HeroTour({ tour, roomData }: Props) {
    // Define state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Total images
    const totalImages = tour?.media_gallery?.sightseeing?.length || 0;

    // Next image
    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === totalImages - 1 ? 0 : prev + 1
        );
    };

    // Previous image
    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? totalImages - 1 : prev - 1
        );
    };

    // Convert json parse
    const tourSummary = tour?.tour_sub_title ? JSON.parse(tour.tour_sub_title) : [];
    const media_gallery = tour?.media_gallery ? JSON.parse(tour.media_gallery) : [];

    return (
        <>
            <div className="w-full bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-stretch">
                    <div className="relative overflow-hidden w-full h-[220px] md:h-full">
                        <div
                            className="flex h-full transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {media_gallery?.sightseeing?.map((img: string, index: number) => (
                                <div key={index} className="relative min-w-full h-full">
                                    <Image
                                        src={img || "/placeholder-500x500.svg"}
                                        alt={`Tour Image ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={prevImage}
                            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 cursor-pointer rounded-full"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 cursor-pointer rounded-full"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="bg-[#FFF9EE] text-white p-5 md:p-6 border-b border-gray-200">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-black text-xl md:text-2xl leading-tight font-medium">
                                                {tour?.tour_name}
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base text-black">
                                            {tourSummary && tourSummary?.join(" → ")}
                                        </p>
                                        
                                        <p className="text-sm md:text-base font-medium text-red-500">
                                            #TO-29092026-MOL-280478-2
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FFF9EE]/50 p-5 md:p-6 flex-1 space-y-6">
                            <div className="space-y-2 text-sm md:text-base">
                                <p className="font-medium text-black">
                                    Booking for Molly John X 2 Travellers
                                </p>
                                <p className="text-black">
                                    Travel Date:
                                    <span className="text-red-500 font-semibold">
                                        {" "}September 29, 2026
                                    </span>
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black border-collapse text-sm sm:text-base">
                                    <thead>
                                        <tr className="border-b border-black">
                                            <th className="border-r border-black px-3 py-2 text-left">
                                                Room
                                            </th>
                                            <th className="border-r border-black px-3 py-2 text-left">
                                                Traveler Type
                                            </th>
                                            <th className="border-r border-black px-3 py-2 text-left">
                                                Bedding
                                            </th>
                                            <th className="px-3 py-2 text-center">
                                                Count
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {roomData.map((room: any, roomIndex: number) => (
                                            <tr
                                                key={roomIndex}
                                                className="border-b border-black last:border-b-0"
                                            >
                                                <td className="border-r border-black px-3 py-2">
                                                    Room {room.room_no}
                                                </td>

                                                <td className="border-r border-black px-3 py-2">
                                                    Adults
                                                </td>

                                                <td className="border-r border-black px-3 py-2">
                                                    Double
                                                </td>

                                                <td className="px-3 py-2 text-center font-medium">
                                                    1
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#ef2853] border-1 border-[#ef2853] hover:bg-white hover:text-[#ef2853] text-white px-4 py-2 rounded font-semibold text-sm cursor-pointer">
                                    Download Itinerary
                                </button>

                                <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm">
                                    Download Invoice
                                </button>

                                <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm">
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
