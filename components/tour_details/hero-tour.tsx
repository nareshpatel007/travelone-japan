"use client"

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Heart, MoveRight } from "lucide-react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { formatPrice } from "@/lib/utils";

// Define props
interface Props {
    isLoading: boolean;
    tour: any;
    packages: any;
    city_nights: any;
    selectedPackage: any;
    setSelectedPackage: (value: any) => void;
    setOpenCustomizeTripPopup: (value: any) => void;
    setOpenDownloadBrochurePopup: (value: any) => void;
    setOpenEmailBrochurePopup: (value: any) => void;
    setOpenBookingCartPopup: (value: any) => void;
}

export default function HeroTour({ isLoading, tour, packages, city_nights, selectedPackage, setSelectedPackage, setOpenCustomizeTripPopup, setOpenDownloadBrochurePopup, setOpenEmailBrochurePopup, setOpenBookingCartPopup }: Props) {
    // Define state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

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

    return (
        <div className="w-full !bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="relative overflow-hidden w-full h-[220px] sm:h-[300px] md:h-full lg:h-full">
                    <div
                        className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {tour?.media_gallery?.sightseeing?.map((img: string, index: number) => (
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
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg cursor-pointer transition"
                    >
                        <Heart
                            size={24}
                            className={`${isWishlisted
                                ? "fill-[#ef2853] text-[#ef2853]"
                                : "text-gray-600 hover:fill-[#ef2853] hover:text-[#ef2853]"
                                }`}
                        />
                    </button>
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
                    <div className="bg-[#F6EFE6] text-white p-5 md:p-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xl md:text-2xl font-semibold text-[#1E1E1E]">
                                            {tour?.name}
                                        </span>
                                        <span className="inline-block bg-[#ef2853] px-3 py-0.5 md:py-1 rounded text-sm font-semibold text-white">
                                            {tour?.tour_type}
                                        </span>
                                    </div>
                                    <p className="text-md md:text-lg lg:text-lg text-black mb-3 mt-2">
                                        {tour?.tour_sub_title && tour?.tour_sub_title?.join(" → ")}
                                    </p>
                                    <p className="text-sm md:text-md lg:text-md text-black">
                                        {city_nights.map((item: any, index: number) => (
                                            <span key={index} className="inline-flex items-center">
                                                {item.name}
                                                {item.night > 0 && (
                                                    <span>&nbsp;({item.night} {item.night > 1 ? "Nights" : "Night"})
                                                    </span>
                                                )}
                                                {index < city_nights.length - 1 && (
                                                    <MoveRight className="h-4 w-4 mx-1 inline-flex" />
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="!bg-amber-50 p-5 md:p-6 !flex-1">
                        <span className="text-md md:text-lg lg:text-xl font-bold text-gray-900 !mb-3 !block">Select Your Package</span>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 !mb-8">
                            {packages.map((pkg: any) => (
                                <div
                                    key={pkg.no}
                                    onClick={() => setSelectedPackage(pkg.no)}
                                    className={`!border-1 !rounded-lg !p-3 !cursor-pointer !transition-all !text-center ${selectedPackage === pkg.no
                                        ? "!border-[#2F5D50] !bg-white !shadow-lg"
                                        : "!border-gray-300 !bg-white/50 !hover:border-[#2F5D50]"
                                        }`}
                                >
                                    <div className="flex justify-center !mb-3">
                                        {selectedPackage === pkg.no ? (
                                            <div className="!w-6 !h-6 !bg-[#ef2853] !rounded-full !flex !items-center !justify-center !text-white !font-bold">
                                                <Check className="h-4 w-4" />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 !border-2 !border-gray-300 !rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="!font-bold !text-gray-900 !mb-2 !block">{pkg.name}</span>
                                    <p className="text-xs text-gray-600 line-through mb-1">${formatPrice(Number(pkg.price) + 500, 0)}</p>
                                    <p className="text-xl md:text-xl lg:text-2xl font-bold text-black mb-1">${formatPrice(pkg.price, 0)}</p>
                                    <p className="text-xs text-gray-600 mb-1">Per Person</p>
                                    {pkg.no !== "1" && <p className="text-xs text-gray-600 font-normal">Double Sharing</p>}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 flex-wrap !mb-3">
                            <button className="bg-[#ef2853] border-1 border-[#ef2853] hover:bg-white hover:text-[#ef2853] text-white px-4 py-2 rounded font-semibold text-sm cursor-pointer" onClick={() => setOpenBookingCartPopup(true)}>
                                Book {packages.find((p: any) => p.no === selectedPackage)?.name}
                            </button>
                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenCustomizeTripPopup(true)}>
                                Customize Trip
                            </button>
                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenDownloadBrochurePopup(true)}>
                                Download Brochure
                            </button>
                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenEmailBrochurePopup(true)}>
                                Email Brochure
                            </button>
                        </div>
                        <p className="text-sm text-gray-900">*Rates may change if the tour is customized</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
