"use client";

import CommonHeader from "@/components/header/common-header";
import CommonMobileHeader from "@/components/header/common-mobile-header";
import CommonFooter from "@/components/footer/common-footer";
import CommonTopHeader from "@/components/header/common-top-header";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Heart, ArrowUp, CheckCircle2, Check, Flag, ThumbsUp, ThumbsDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { TourCard } from "@/components/tours/tour-card";
import { OverviewTabContent } from "@/components/tour_details/overview-tab";
import { ItineraryTab } from "@/components/tour_details/itinerary-tab";
import { CommonPlanTripModal } from "@/components/plan_your_trip/common-popup";
import { CustomizeTrip } from "@/components/tour_details/popup/customize-trip";
import { NewItineraryTab } from "@/components/tour_details/new-itinerary-tab";
import FAQsList from "@/components/tour_details/faqs";

// Define tour images
const tourImages = [
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_6920967b4770a0-33304777-60077532.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b3fc7ec4440-18458319-95193697.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b363d624066-48579587-60388838.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b386c4fd000-39486939-71365850.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b34d722df39-36914368-47623650.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b3736359a23-00226763-98513062.jpg",
    "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b27abc80086-27914435-69482703.jpg",
]

// Define packages
const packages = [
    {
        id: "without-stay",
        name: "Without Stay",
        originalPrice: "$2,980",
        finalPrice: "$2,280",
        type: ""
    },
    {
        id: "3-star",
        name: "3 Star Stay",
        originalPrice: "$4,480",
        finalPrice: "$3,980",
        type: "Double Sharing"
    },
    {
        id: "4-star",
        name: "4 Star Stay",
        originalPrice: "$5,158",
        finalPrice: "$4,658",
        type: "Double Sharing",
        featured: true,
    },
    {
        id: "5-star",
        name: "5 Star Stay",
        originalPrice: "$6,418",
        finalPrice: "$5,918",
        type: "Double Sharing"
    }
]

// Define reviews
const reviews = [
    {
        name: "Sarah Johnson",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/a4d5asd21ad54a.jpg",
        rating: 5,
        text: "Amazing experience!",
        location: "United States",
    },
    {
        name: "Michael Chen",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/4asd2as1da5s4das.jpg",
        rating: 5,
        text: "Incredible tour and guides",
        location: "Canada",
    },
    {
        name: "Emma Wilson",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/5asd8asd4as5d4a.jpg",
        rating: 4,
        text: "Great value for money",
        location: "Australia",
    },
    {
        name: "James Brown",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/a54das12d1as1.jpg",
        rating: 5,
        text: "Best trip ever!",
        location: "UK"
    },
    {
        name: "Lisa Martinez",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/4a5d12asda5s.jpg",
        rating: 5,
        text: "Highly recommended",
        location: "Spain",
    },
    {
        name: "David Kumar",
        image: "https://ik.imagekit.io/288weifiq/tr:q-40/trip_feedback/a4s5da1s2d1as.jpg",
        rating: 5,
        text: "Worth every penny",
        location: "India",
    },
];

const tabs = [
    "Highlights",
    "Hotels",
    "Activities",
    "Inclusions & Exclusions",
    "Terms & Conditions",
    "Payment & Cancellation",
];

const features = [
    { title: "Professional Guides", description: "Expert local guides with years of experience" },
    { title: "Comfortable Transport", description: "Air-conditioned vehicles throughout the tour" },
    { title: "Meal Inclusions", description: "Breakfast and lunch included daily" },
    { title: "24/7 Support", description: "Round-the-clock customer support available" },
]

const tours = [
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
]

// Define itinerary
const itineraryData = [
    {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Pick-up at the airport and transfer to the designated hotel.\nOvernight in Tokyo.",
        activities: [],
        meals: { lunch: "Not included", dinner: "Not included" },
        notes: ["Overnight in Tokyo."],
    },
    {
        day: 2,
        title: "Tokyo Private City Tour",
        description: "Pick up from the designated hotel at 9:00 AM by your private tour guide, car, and driver.",
        activities: [
            {
                name: "Visit Senso-ji Temple",
                description: "Tokyo's oldest temple, Senso-ji is a vibrant cultural site with stunning architecture and a rich history.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_6920967b4770a0-33304777-60077532.jpg",
            },
            {
                name: "Visit Nakamise Shopping Street",
                description: "A vibrant shopping street lined with traditional shops offering snacks and souvenirs, leading to Senso-ji Temple.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b3fc7ec4440-18458319-95193697.jpg",
            },
            {
                name: "Visit Tokyo Skytree",
                description: "Tokyo Skytree is the tallest structure in Japan, offering panoramic views of the city from its heights.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b363d624066-48579587-60388838.jpg",
            },
            {
                name: "Visit teamLab Borderless",
                description: "An immersive digital art museum featuring interactive installations that blend art and technology.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b386c4fd000-39486939-71365850.jpg",
            },
        ],
        meals: { lunch: "Not included", dinner: "Included" },
        notes: ["Drop-off at the designated hotel.", "Evening at your leisure.", "Overnight in Tokyo."],
    },
    {
        day: 3,
        title: "Tokyo-Nikko-Tokyo",
        description: "Pick up from the designated hotel at 8:30 AM.\nTransfer to Nikko.",
        activities: [
            {
                name: "Visit Toshogu Shrine",
                description:
                    "A UNESCO World Heritage site featuring ornate architecture and peaceful gardens in the mountains.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b34d722df39-36914368-47623650.jpg",
            },
            {
                name: "Visit Lake Chuzenji",
                description:
                    "A scenic alpine lake surrounded by forests, offering beautiful views and recreational activities.",
                image: "https://ik.imagekit.io/288weifiq/tr:q-60/attractions/attractions_689b27abc80086-27914435-69482703.jpg",
            },
        ],
        meals: { lunch: "Included", dinner: "Not included" },
        notes: ["Overnight in Nikko or return to Tokyo."],
    },
];

export default function TourDetailPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeMainTab, setActiveMainTab] = useState("package_details");
    const [activeTab, setActiveTab] = useState("highlights");
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("4-star");
    const [showStickyFooter, setShowStickyFooter] = useState(false);
    const [openCustomizeTripPopup, setOpenCustomizeTripPopup] = useState(false);
    const pageRef = useRef(null);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });

        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setShowStickyFooter(scrollPercentage > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle next image navigation
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % tourImages.length)
    }

    // Handle previous image navigation
    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + tourImages.length) % tourImages.length)
    }

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonTopHeader />
                    <CommonHeader />
                    <CommonMobileHeader />
                    <div ref={pageRef} className="min-h-screen !bg-white">
                        <div className="w-full !bg-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                                <div className="relative !h-full !overflow-hidden">
                                    <img
                                        src={tourImages[currentImageIndex] || "/placeholder.svg"}
                                        alt="Tour"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all cursor-pointer"
                                    >
                                        <Heart size={24} className={`hover:fill-[#ef2853] hover:text-[#ef2853] ${isWishlisted ? "fill-[#ef2853] text-[#ef2853]" : "text-gray-600"}`} />
                                    </button>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                                <div className="flex flex-col h-full">
                                    <div className="!bg-amber-400 !text-white !px-7 !py-6">
                                        <div className="max-w-7xl mx-auto">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <span className="text-xl md:text-2xl font-semibold !text-black !mb-2">
                                                        Maple Symphony – Japan Autumn Journey (Fully Guided Premium Package for 2025 / 2026)
                                                    </span>
                                                    <div className="!inline-block !bg-[#ef2853] !px-3 !py-0.5 !md:py-1 !rounded !text-sm !font-semibold !ml-2">Group Tour</div>
                                                    <p className="text-md md:text-lg !text-black !mb-3">10 Days → 1 Country → 8 Cities → 30 Places</p>
                                                    <p className="text-sm !text-black">
                                                        Tokyo (3 Nts) → Nikko → Mt.Fuji → Hakone (1 Nt) → Hiroshima (1 Nt) → Kyoto (2 Nts) → Nara → Osaka (2 Nts)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!bg-amber-50 !px-7 !py-6 !flex-1">
                                        <span className="text-xl font-bold text-gray-900 !mb-3 !block">Select Your Package</span>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 !mb-8">
                                            {packages.map((pkg) => (
                                                <div
                                                    key={pkg.id}
                                                    onClick={() => setSelectedPackage(pkg.id)}
                                                    className={`!border-1 !rounded-lg !p-3 !cursor-pointer !transition-all !text-center ${selectedPackage === pkg.id
                                                        ? "!border-amber-700 !bg-white !shadow-lg"
                                                        : "!border-gray-300 !bg-white/50 !hover:border-amber-700"
                                                        }`}
                                                >
                                                    <div className="flex justify-center !mb-3">
                                                        {selectedPackage === pkg.id ? (
                                                            <div className="!w-6 !h-6 !bg-[#ef2853] !rounded-full !flex !items-center !justify-center !text-white !font-bold">
                                                                <Check className="h-4 w-4" />
                                                            </div>
                                                        ) : (
                                                            <div className="w-6 h-6 !border-2 !border-gray-300 !rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <span className="!font-bold !text-gray-900 !mb-2 !block">{pkg.name}</span>
                                                    <p className="text-xs text-gray-600 line-through mb-1">{pkg.originalPrice}</p>
                                                    <p className="text-2xl font-bold text-black mb-1">{pkg.finalPrice}</p>
                                                    <p className="text-xs text-gray-600 mb-1">Per Person</p>
                                                    {pkg.type && <p className="text-xs text-gray-600 font-semibold">{pkg.type}</p>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 flex-wrap !mb-3">
                                            <button className="bg-[#ef2853] border-1 border-[#ef2853] hover:bg-white hover:text-[#ef2853] text-white px-4 py-2 rounded font-semibold text-sm cursor-pointer">
                                                Book {packages.find((p) => p.id === selectedPackage)?.name}
                                            </button>
                                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm" onClick={() => setOpenCustomizeTripPopup(true)}>
                                                Customize Trip
                                            </button>
                                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm">
                                                Download Brochure
                                            </button>
                                            <button className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm">
                                                Email Brochure
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-900">*Rates may change if the tour is customized</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block md:hidden !bg-white !p-8">
                            <div className="!border-b !border-gray-200">
                                <div className="flex gap-8">
                                    {["package_details", "itinerary"].map((tab) => {
                                        const tabName = (tab === "package_details") ? "Package Details" : "Itinerary";
                                        return (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveMainTab(tab)}
                                                className={`pb-4 font-semibold transition-colors capitalize cursor-pointer ${activeMainTab === tab ? "text-amber-600 border-b-2 border-amber-700" : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                {tabName}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {activeMainTab === "package_details" && (
                                <div className="!bg-white !py-7">
                                    <div className="grid grid-cols-1">
                                        <select
                                            value={activeTab}
                                            onChange={(e) => setActiveTab(e.target.value)}
                                            className="!border-1 !border-amber-700 !p-3 !rounded-lg !mb-4"
                                        >
                                            {tabs.map((tab) => (
                                                <option key={tab} value={tab.toLowerCase().replace(/\s+/g, "-")}>
                                                    {tab}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="!bg-white !border-1 !border-amber-700 !rounded !p-8">
                                            <OverviewTabContent activeTab={activeTab} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeMainTab === "itinerary" && <ItineraryTab itineraryData={itineraryData} device="mobile" />}

                            {activeMainTab === "new_itinerary" && <NewItineraryTab />}
                        </div>

                        <div className="hidden md:block !bg-white !p-12">
                            <div className="!border-b !border-gray-200">
                                <div className="flex gap-8">
                                    {["package_details", "itinerary"].map((tab) => {
                                        const tabName = (tab === "package_details") ? "Package Details" : "Itinerary";
                                        return (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveMainTab(tab)}
                                                className={`pb-4 font-semibold transition-colors capitalize cursor-pointer ${activeMainTab === tab ? "text-amber-600 border-b-2 border-amber-700" : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                {tabName}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {activeMainTab === "package_details" && (
                                <div className="!bg-white !py-7">
                                    <div className="grid grid-cols-4 gap-3 min-h-96">
                                        <div className="!col-span-1 !flex !flex-col !gap-2">
                                            {tabs.map((tab) => {
                                                const tabKey = tab.toLowerCase().replace(/\s+/g, "-");
                                                return (
                                                    <button
                                                        key={tab}
                                                        onClick={() => setActiveTab(tabKey)}
                                                        className={`px-4 py-3 text-left font-semibold rounded cursor-pointer transition-all ${activeTab === tabKey
                                                            ? "bg-amber-400 text-black"
                                                            : "bg-amber-50 text-amber-700 hover:bg-amber-400 hover:text-black"
                                                            }`}
                                                    >
                                                        {tab}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        <div className="!col-span-3 !bg-white !border-1 !border-amber-600 !rounded !p-8">
                                            <OverviewTabContent activeTab={activeTab} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeMainTab === "itinerary" && <ItineraryTab itineraryData={itineraryData} />}
                        </div>

                        <div className="!bg-amber-50 !px-8 !py-16">
                            <div className="!max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-black">Best Value Guarantee</span>
                                <p className="text-center text-amber-800 !mb-12 font-semibold">
                                    Your satisfaction is our priority
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                                    {[
                                        { icon: "✓", title: "Free Cancellation", desc: "Cancel up to 2 weeks before" },
                                        { icon: "✓", title: "Best Price Guarantee", desc: "Lowest price available" },
                                        { icon: "✓", title: "24/7 Support", desc: "Always here to help" },
                                        { icon: "✓", title: "Expert Guides", desc: "Experienced professionals" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                                            <div className="text-xl md:text-3xl !mb-3 !text-teal-700">{item.icon}</div>
                                            <span className="!font-bold !block !mb-2">{item.title}</span>
                                            <p className="!text-md !text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="!bg-amber-50 !px-8 !pb-16">
                            <div className="!pb-10 !max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-black">Recent Reviews</span>
                                <p className="text-center text-amber-800 !mb-12 font-semibold">
                                    To receive our best monthly deals and travel inspiration.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {reviews.map((review, idx) => (
                                        <div
                                            key={idx}
                                            className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                                        >
                                            <div className="!mb-6 relative">
                                                <div className="w-28 h-28 rounded-full border-4 border-amber-400 overflow-hidden shadow-md">
                                                    <Image
                                                        src={review.image || "/placeholder.svg"}
                                                        alt={review.name}
                                                        width={500}
                                                        height={500}
                                                        className="!w-full !h-full !object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-2xl font-bold !text-amber-800 !block !mb-3">{review.location}</span>
                                            <div className="flex gap-1 mb-4 justify-center">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={i < review.rating ? "!fill-amber-400 !text-amber-400" : "!fill-gray-300 !text-gray-300"}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{review.text}</p>
                                            <p className="text-amber-900 font-bold text-sm">− {review.name} −</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="!bg-amber-50 !px-8 !pb-16">
                            <div className="!max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-black">Why Travel with TravelOne</span>
                                <p className="text-center text-amber-800 !mb-12 font-semibold">
                                    We are committed to providing you with the best possible experience
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">Transparent Planning & Pricing</span>
                                    </div>
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">Local Experts & On-Ground Support</span>
                                    </div>
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">Custom Itineraries Based on Your Style</span>
                                    </div>
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">24x7 Assistance During Travel</span>
                                    </div>
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">Enhance Trip Experience By 50%</span>
                                    </div>
                                    <div className="!bg-white !rounded-2xl !p-8 !border-2 !border-dashed !border-amber-400 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                                        <span className="!font-semibold">4.8 Rated by Real Travelers</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white !p-20">
                            <div className="!max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-black">Trusted By</span>
                                <p className="text-center text-amber-800 !mb-12 font-semibold">
                                    We are trusted by leading tour operators
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 !gap-6 !items-center !justify-center place-items-center">
                                    <Image
                                        src="https://ik.imagekit.io/288weifiq/logo/TripAdvisor_Logo.png"
                                        alt="TripAdvisor"
                                        width={500}
                                        height={500}
                                        className="w-70 h-12 object-contain"
                                    />

                                    <Image
                                        src="https://ik.imagekit.io/288weifiq/logo/viator.png"
                                        alt="Viator"
                                        width={500}
                                        height={500}
                                        className="w-48 h-12 object-contain"
                                    />

                                    <Image
                                        src="https://ik.imagekit.io/288weifiq/logo/jnto.png"
                                        alt="JNTO"
                                        width={500}
                                        height={500}
                                        className="w-30 h-12 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <FAQsList />

                        <div className="!bg-white !px-8 !p-20">
                            <div className="!max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-black">You May Also Like</span>
                                <p className="text-center text-amber-800 !mb-12 font-semibold">
                                    We are committed to providing you with the best possible experience
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {tours.map((tour) => (
                                        <TourCard key={tour.id} {...tour} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="!bg-amber-50 !py-20 !px-8">
                            <div className="!max-w-7xl !mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <Image
                                            src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg"
                                            alt="Travel Expert"
                                            width={500}
                                            height={500}
                                            className="!w-full !h-full !object-cover !rounded-lg !shadow-lg"
                                        />
                                    </div>
                                    <div className="py-0 md:py-12">
                                        <div className="text-amber-700 font-semibold text-sm !mb-4 uppercase tracking-wider">Travel Experts</div>
                                        <span className="text-2xl md:text-4xl font-bold text-black !mb-6 leading-tight">
                                            Not sure where to start? Speak to a Travel Expert
                                        </span>
                                        <p className="text-gray-700 text-lg !mb-8 leading-relaxed">
                                            Our dedicated Travel Expert will take the time to understand your personal preferences and curate a
                                            custom travel itinerary that's perfectly suited to you.
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <button className="bg-black hover:bg-black/80 !cursor-pointer text-white px-8 py-3 rounded-lg font-semibold uppercase transition-colors">
                                                Customize Your Trip
                                            </button>
                                            <span className="text-gray-700 font-semibold text-lg">OR CALL +1 437 966 9023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-amber-100 !p-6 !border-b !border-gray-200">
                            <div className="!max-w-7xl !mx-auto">
                                <div className="flex items-center justify-center gap-5">
                                    <span className="text-black font-medium">Was this page helpful?</span>
                                    <ThumbsUp className="h-5 w-5 text-amber-600" />
                                    <ThumbsDown className="h-5 w-5 text-amber-600" />
                                </div>
                            </div>
                        </div>

                        {showStickyFooter && (
                            <div className="hidden md:block fixed bottom-0 left-0 right-0 !bg-gray-100 !shadow-lg !border-t !border-gray-300 !z-[9999]">
                                <div className="!max-w-7xl !mx-auto !px-6 !py-4 flex !items-center !justify-between">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={tourImages[0]}
                                            alt="Logo"
                                            width={70}
                                            height={50}
                                            className="!object-cover !rounded"
                                        />
                                        <span className="text-gray-700 text-md font-medium">Call us now on +1 437 966 9023</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button className="bg-[#ef2853] hover:bg-white text-white hover:text-[#ef2853] border border-[#ef2853] px-6 py-2 rounded font-semibold cursor-pointer transition">
                                            Book {selectedPackage.split("-")[0].charAt(0).toUpperCase() + selectedPackage.split("-")[0].slice(1)}{" "}
                                            Star Package
                                        </button>
                                        <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-6 py-2 rounded font-semibold cursor-pointer transition">
                                            Customize Trip
                                        </button>
                                        <button
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className="ml-4 p-2 bg-amber-500 text-white rounded-full shadow hover:shadow-md cursor-pointer transition"
                                        >
                                            <ArrowUp size={20} className="text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <CustomizeTrip open={openCustomizeTripPopup} onOpenChange={setOpenCustomizeTripPopup} />
                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
