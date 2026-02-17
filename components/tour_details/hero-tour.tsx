"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Heart, Loader2, MoveRight } from "lucide-react";
import 'react-loading-skeleton/dist/skeleton.css';
import { formatPrice } from "@/lib/utils";
import { findTourInWishlist, getLoginCookie, isLoggedIn, updateHeaderWishlistCount } from "@/lib/auth";
import { LoginModal } from "../common/login-modal";

// Define props
interface Props {
    tour: any;
    packages: any;
    city_nights: any;
    selectedPackage: any;
    setSelectedPackage: (value: any) => void;
    setOpenCustomizeTripPopup: (value: any) => void;
    setOpenDownloadBrochurePopup: (value: any) => void;
    setOpenQuotePopup: (value: any) => void;
    setOpenBookingCartPopup: (value: any) => void;
}

export default function HeroTour({
    tour,
    packages,
    city_nights,
    selectedPackage,
    setSelectedPackage,
    setOpenCustomizeTripPopup,
    setOpenDownloadBrochurePopup,
    setOpenQuotePopup,
    setOpenBookingCartPopup
}: Props) {
    // Define state
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Check if tour is wishlisted
    useEffect(() => {
        setIsWishlisted(findTourInWishlist(tour?.id));
    }, [tour]);

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

    // Auto change image
    useEffect(() => {
        if (!tour?.media_gallery?.sightseeing?.length) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === tour.media_gallery.sightseeing.length - 1
                    ? 0
                    : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [tour?.media_gallery?.sightseeing]);

    // Handle wishlist
    const handleWishlist = () => {
        try {
            // Get wishlist
            const stored = localStorage.getItem("wishlist");
            const wishlist: number[] = stored ? JSON.parse(stored) : [];

            // Update wishlist
            const updatedWishlist = isWishlisted ? wishlist.filter((tourId) => tourId !== tour?.id) : [...wishlist, tour?.id];

            // Set wishlist
            localStorage.setItem("wishlist", JSON.stringify([...new Set(updatedWishlist)]));

            // Update state
            setIsWishlisted((prev) => !prev);
            updateHeaderWishlistCount();
        } catch (error) {
            console.error("Wishlist error:", error);
        }
    };

    // Get login data
    const is_logged_in = isLoggedIn();
    const user_data = getLoginCookie();

    return (
        <>
            <div className="w-full">
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
                            onClick={handleWishlist}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg cursor-pointer transition"
                        >
                            <Heart
                                size={24}
                                className={`${isWishlisted ? "fill-[#ef2853] text-[#ef2853]" : "text-gray-600 hover:fill-[#ef2853] hover:text-[#ef2853]"}`}
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
                        <div className="bg-[#FFF9EE] text-white p-5 md:p-6 border-b border-[#d9cec1]">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-black text-xl md:text-2xl leading-tight font-medium">
                                                {tour?.name}
                                            </span>
                                            <span className="inline-block bg-[#ef2853] px-3 py-0.5 md:py-1 rounded text-sm font-semibold text-white">
                                                {tour?.tour_type}
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base text-black">
                                            {tour?.tour_sub_title && tour?.tour_sub_title?.join(" → ")}
                                        </p>

                                        <p className="text-sm md:text-md text-black">
                                            {city_nights && city_nights.map((item: any, index: number) => (
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
                        <div className="bg-[#FFF9EE]/50 p-5 md:p-6 flex-1 border-b border-[#d9cec1]">
                            <span className="text-md md:text-lg font-medium text-gray-900 mb-3 block">Select Your Package</span>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {packages.map((pkg: any) => (
                                    <div
                                        key={pkg.no}
                                        onClick={() => setSelectedPackage(pkg.no)}
                                        className={`border-1 rounded-sm p-3 space-y-2 cursor-pointer transition-all text-center ${selectedPackage === pkg.no
                                            ? "border-[#2F5D50] bg-white shadow-lg"
                                            : "border-gray-300 bg-white/50 hover:border-[#2F5D50]"
                                            }`}
                                    >
                                        <div className="flex justify-center">
                                            {selectedPackage === pkg.no ? (
                                                <div className="w-6 h-6 bg-[#ef2853] rounded-full flex items-center justify-center text-white font-bold">
                                                    <Check className="h-4 w-4" />
                                                </div>
                                            ) : (
                                                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                            )}
                                        </div>

                                        <span className="font-medium text-gray-900 block">{pkg.name}</span>

                                        <div className="space-y-1">
                                            <p className="text-xs text-gray-600 line-through">${formatPrice(Number(pkg.price) + 500, 0)}</p>
                                            <p className="text-xl md:text-lg font-semibold text-black">${formatPrice(pkg.price, 0)}</p>
                                            <p className="text-xs text-gray-600">Per Person</p>
                                        </div>

                                        {pkg.no != 1 && <p className="text-xs text-gray-600 font-normal">Double Sharing</p>}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3 flex-wrap mb-3">
                                <button className="bg-[#ef2853] border-1 border-[#ef2853] hover:bg-white hover:text-[#ef2853] text-white px-4 py-2 rounded font-semibold text-sm cursor-pointer" onClick={() => setOpenBookingCartPopup(true)}>
                                    Book {packages.find((p: any) => p.no === selectedPackage)?.name}
                                </button>

                                <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenCustomizeTripPopup(true)}>
                                    Customize Trip
                                </button>

                                <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenDownloadBrochurePopup(true)}>
                                    Download Brochure
                                </button>

                                {/* {is_logged_in && <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenQuotePopup(true)}>
                                    Quote
                                </button>} */}
                            </div>
                            <p className="text-sm text-gray-900">*Rates may change if the tour is customized</p>
                        </div>
                    </div>
                </div>
            </div>

            <LoginModal open={openLogin} onOpenChange={setOpenLogin} />
        </>
    )
}
