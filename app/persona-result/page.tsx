"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { CheckCircle, Key } from "lucide-react";
import Image from "next/image";
import TravelExpert from "@/components/tour_details/travel-experts";
import PageHelpful from "@/components/common/helpful";
import Link from "next/link";

export default function Page() {
    // Get query parms
    const token = getQuery("token", "");

    // Define state
    const [ready, setReady] = useState(false);
    const [resultData, rowResultData] = useState<any>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("all");
    const [isLoading, setIsLoading] = useState(true);
    const [destinationList, setDestinationList] = useState<any[]>([]);
    const [countriesList, setCountriesList] = useState<any[]>([]);

    useEffect(() => {
        requestAnimationFrame(() => { setReady(true); });
    }, []);

    useEffect(() => {
        if (!token) {
            return;
        }
        fetchPersonasResult(token);
    }, [token]);

    // Fetch personas result
    const fetchPersonasResult = async (token: string) => {
        try {
            // Update state
            setIsLoading(true);

            // API Call
            const response = await fetch(`/api/plan_your_trip/persona-result`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token
                })
            });

            // Convert into JSON
            const data = await response.json();

            // Check response
            if (data?.status) {
                rowResultData(data?.data);
                setCountriesList(data?.data?.data?.inventory ?? []);
                setDestinationList(data?.data?.destination ?? []);
            }
        } finally {
            // Update state
            setIsLoading(false);
        }
    };

    // Filter countries
    const filteredCountries = selectedDestination === "all" ? countriesList : countriesList.filter(
        (country) => country.destination_name === selectedDestination
    );

    return (
        <>
            {ready && <>
                <div className="min-h-screen bg-white">
                    <CommonHeader />

                    {/* Loading */}
                    {isLoading && <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                        <div className="grid grid-cols-1 space-y-4">
                            <div className="animate-pulse bg-gray-200 rounded h-20 md:h-30"></div>
                            <div className="animate-pulse bg-gray-200 rounded h-40 md:h-50"></div>
                            <div className="animate-pulse bg-gray-200 rounded h-40 md:h-50"></div>
                        </div>
                    </div>}

                    {/* Result */}
                    {!isLoading && resultData && (
                        <div className="space-y-8">
                            <div className="max-w-7xl mx-auto px-5 md:px-0 py-6 space-y-12">
                                <div className="relative overflow-hidden rounded-3xl bg-[#FFF9EE] text-white p-10 md:p-16">
                                    <div className="relative z-10 text-center space-y-6">
                                        <div className="inline-flex items-center gap-3 bg-black/80 px-6 py-2 rounded-full text-sm tracking-wide uppercase">
                                            <CheckCircle className="text-white" size={18} />
                                            Your Travel DNA
                                        </div>

                                        <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                                            {resultData?.data?.headline}
                                        </h1>

                                        <p className="max-w-3xl mx-auto text-sm md:text-lg text-black leading-relaxed">
                                            {resultData?.data?.paragraph}
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                                            <span className="px-5 py-2 rounded-full bg-black/10 text-black font-medium text-sm">
                                                Climate: {resultData?.data?.climate_filter}
                                            </span>
                                            <span className="px-5 py-2 rounded-full bg-black/10 text-black font-medium text-sm">
                                                Service Style: {resultData?.data?.service_style}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* ETHOS */}
                                {resultData?.data?.ethos && <div className="max-w-5xl mx-auto px-5 md:px-0 space-y-12">
                                    <div className="text-center space-y-8">
                                        <h2 className="text-3xl md:text-6xl md:max-w-4xl md:mx-auto leading-tight font-normal">
                                            The Core Ethos: Your Travel Psychography
                                        </h2>

                                        <p className="text-black text-md">
                                            A multi-layered analysis of the traits, drivers, and desires that define your global footprint.
                                        </p>

                                        <p className="text-base sm:text-lg text-black leading-relaxed">
                                            {resultData?.data?.ethos}
                                        </p>
                                    </div>
                                </div>}

                                {/* Static Section */}
                                <div className="max-w-5xl mx-auto px-5 md:px-0 py-12 space-y-12">
                                    <div className="text-center space-y-8">
                                        <h2 className="text-3xl md:text-6xl md:max-w-4xl md:mx-auto leading-tight font-normal">
                                            Behind the Blueprint: The Science of Your Selection
                                        </h2>

                                        <div className="flex justify-center">
                                            <span className="w-20 h-1 bg-black" />
                                        </div>

                                        <p className="text-base sm:text-lg text-black leading-relaxed">
                                            To derive your Signature Results, our engine moves beyond traditional destination filtering and enters the realm of Agentic Reasoning. We cross-referenced your 30 Marker Points—a high-fidelity diagnostic of your Cognitive Travel Architecture. This includes an algorithmic analysis of your Environmental Resonance (climate-resilience and sensory-density scores) and your Service-Friction Index (the precise balance between 'Invisible Tech' and 'Curated Human Intervention').
                                        </p>

                                        <p className="text-base sm:text-lg text-black leading-relaxed">
                                            Our proprietary engine then performed a Multi-Layered Asset Match, scanning global infrastructure data to identify the exact coordinates where the local landscape, hotel architecture, and transit velocity align with your psychological needs. These are not merely vacations; they are Adaptive Ecosystems built to respond to the unique frequency of your Travel DNA.
                                        </p>
                                    </div>
                                </div>

                                {/* EXPERIENCE HIGHLIGHTS */}
                                <div className="space-y-8">
                                    <div className="max-w-5xl mx-auto space-y-2 text-center">
                                        <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal md:max-w-4xl md:mx-auto">
                                            Territory Alignment: Your Global Destinations
                                        </h2>
                                        <div className="space-y-3">
                                            <p className="text-black text-md md:max-w-4xl md:mx-auto">
                                                The optimal geographic environments selected to host your unique Travel DNA.
                                            </p>
                                            <p className="text-black text-md">
                                                While your persona is universal, certain landscapes are better equipped to respond to your specific needs. We have identified these countries because their local infrastructure—from high-speed transit networks to secluded sanctuary stays—offers the most seamless alignment with your profile. By selecting a territory from this list, you are choosing a destination that is naturally 'pre-synced' to your expectations of pulse, grit, and service.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex gap-3 items-center overflow-x-auto pb-2 md:flex-wrap md:justify-center scrollbar-hide">
                                            <FilterButton
                                                active={selectedDestination === "all"}
                                                label="All Destinations"
                                                onClick={() => setSelectedDestination("all")}
                                            />

                                            {destinationList && destinationList.map((destination, index) => (
                                                <FilterButton
                                                    key={index}
                                                    label={destination}
                                                    active={selectedDestination === destination}
                                                    onClick={() =>
                                                        setSelectedDestination(destination)
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            {filteredCountries.length > 0 && filteredCountries.map((item: any, index: number) => (
                                                <div key={index} className="relative w-full">
                                                    <div className="relative w-full pb-[100%] overflow-hidden group cursor-pointer">
                                                        <Link
                                                            href={`/persona-landing/${item?.slug}?token=${token}`}
                                                            target="_blank"
                                                            className="absolute inset-0 block"
                                                        >
                                                            <Image
                                                                src={item?.featured_image || "/placeholder.svg"}
                                                                alt={item?.name || "placeholder"}
                                                                fill
                                                                className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                                                            />

                                                            <div className="absolute inset-0 bg-black/30" />

                                                            {resultData?.data?.match_perfect && resultData?.data?.match_perfect?.includes(item?.id) && (
                                                                <div className="absolute top-3 left-3">
                                                                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-400 text-black rounded-full">
                                                                        ★ Perfect Match
                                                                    </span>
                                                                </div>
                                                            )}

                                                            <div className="absolute bottom-4 left-4 right-4">
                                                                <h3 className="text-white text-sm sm:text-xl font-medium leading-snug">
                                                                    {item.name}
                                                                </h3>
                                                                <span className="text-xs sm:text-sm text-white">
                                                                    {item?.archetype_heading}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <TravelExpert />

                                <PageHelpful
                                    text="Was this TravelDNA report helpful?"
                                    pageName={`persona-result?token=/${token}`}
                                />
                            </div>
                        </div>
                    )}

                    {/* Result not found */}
                    {!isLoading && !resultData && <div className="mx-auto max-w-4xl py-20 text-center space-y-5">
                        <Key
                            size={120}
                            className="mx-auto text-[#ef2853] opacity-15"
                        />
                        <h2 className="text-3xl font-medium text-black">
                            Result not found
                        </h2>
                        <p className="text-base text-black max-w-2xl mx-auto">
                            Requested token is not valid. Please check your token.
                        </p>
                    </div>}

                    <CommonFooter />
                </div>
            </>}
        </>
    );
}

// Filter button
function FilterButton({
    label,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border cursor-pointer transition
                ${active
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
        >
            {label}
        </button>
    );
}

// Get query
export const getQuery = (key: string, fallback = "") =>
    typeof window === "undefined"
        ? fallback
        : new URLSearchParams(window.location.search).get(key) ?? fallback;