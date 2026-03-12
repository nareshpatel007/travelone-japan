"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { Key, MousePointerClick } from "lucide-react";
import Image from "next/image";
import PageHelpful from "@/components/common/helpful";
import Link from "next/link";
import FeedbackForm from "@/components/personas/feedback-rating";
import FeaturedSection from "@/components/personas/featured-section";
import EthosSection from "@/components/personas/ethos";
import ValueTable from "@/components/personas/value-table";
import TravelExpert from "@/components/personas/travel-experts";
import { CountryWhyPopup } from "@/components/personas/country-why-popup";
import { StartJourneyModal } from "@/components/plan_your_trip/journey-popup";

export default function Page() {
    // Get query parms
    const token = getQuery("token", "");

    // Define state
    const [ready, setReady] = useState<boolean>(false);
    const [resultData, rowResultData] = useState<any>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("all");
    const [isLoading, setIsLoading] = useState(true);
    const [destinationList, setDestinationList] = useState<any[]>([]);
    const [countriesList, setCountriesList] = useState<any[]>([]);
    const [showWhyPopup, setShowWhyPopup] = useState(false);
    const [activeCountry, setActiveCountry] = useState<any>(null);
    const [openStartJourney, setOpenStartJourney] = useState(false);
    const [journeyCountry, setJourneyCountry] = useState<string>("");

    useEffect(() => {
        requestAnimationFrame(() => { setReady(true); });
    }, []);

    // Prevent right click
    // useEffect(() => {
    //     const preventContextMenu = (e: any) => e.preventDefault();
    //     const preventCopy = (e: any) => e.preventDefault();
    //     const preventPaste = (e: any) => e.preventDefault();
    //     const preventCut = (e: any) => e.preventDefault();
    //     const preventKeys = (e: any) => {
    //         if (
    //             e.ctrlKey &&
    //             ["c", "v", "x", "u", "s", "a"].includes(e.key.toLowerCase())
    //         ) {
    //             e.preventDefault();
    //         }
    //     };

    //     document.addEventListener("contextmenu", preventContextMenu);
    //     document.addEventListener("copy", preventCopy);
    //     document.addEventListener("paste", preventPaste);
    //     document.addEventListener("cut", preventCut);
    //     document.addEventListener("keydown", preventKeys);

    //     return () => {
    //         document.removeEventListener("contextmenu", preventContextMenu);
    //         document.removeEventListener("copy", preventCopy);
    //         document.removeEventListener("paste", preventPaste);
    //         document.removeEventListener("cut", preventCut);
    //         document.removeEventListener("keydown", preventKeys);
    //     };
    // }, []);

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
        (country) => country?.destination_name === selectedDestination
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
                        <>
                            {/* Featured */}
                            <FeaturedSection
                                token={token}
                                userData={resultData?.user_data}
                                headline={resultData?.data?.headline}
                                paragraph={resultData?.data?.paragraph}
                                climateFilter={resultData?.data?.climate_filter}
                                serviceStyle={resultData?.data?.service_style}
                            />

                            {/* Ethos */}
                            <div className="max-w-7xl mx-auto px-5 md:px-0 py-0 md:py-6 space-y-12">
                                <EthosSection
                                    token={token}
                                    text={resultData?.data?.ethos}
                                />
                            </div>

                            {/* Value Table */}
                            {resultData?.data?.matrix_table && <div className="py-4 md:py-8 bg-[#faf7f2] space-y-3">
                                <div className="max-w-7xl mx-auto px-5 md:px-0 py-0 md:py-6 space-y-12">
                                    <ValueTable
                                        token={token}
                                        valueTable={resultData?.data?.matrix_table}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Link href="/manage-traveller-dna" target="_blank">
                                        <button
                                            className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-yellow-400 hover:text-black cursor-pointer"
                                        >
                                            <MousePointerClick className="w-5 h-5" /> Manage My Traveller DNA
                                        </button>
                                    </Link>
                                </div>
                            </div>}

                            {/* EXPERIENCE HIGHLIGHTS */}
                            <div className="p-5 md:p-8 space-y-8">
                                <div className="max-w-5xl mx-auto space-y-2 text-center">
                                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal md:max-w-4xl md:mx-auto">
                                        Territory Alignment: Your Global Destinations
                                    </h2>
                                    <div className="space-y-3">
                                        <p className="text-black text-md md:max-w-4xl md:mx-auto">
                                            The optimal geographic environments selected to host your unique Travel DNA.
                                        </p>
                                        <p className="text-black text-md">
                                            We have identified these countries because their local infrastructure offers the most seamless alignment with your profile. By selecting a territory from this list, you are choosing a destination that is naturally 'pre-synced' to your expectations of pulse, grit, and service.
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {filteredCountries.length > 0 && filteredCountries.map((item: any, index: number) => (
                                            <div key={index} className="relative w-full">
                                                <div className="relative w-full pb-[60%] overflow-hidden group cursor-pointer">
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
                                                    </Link>

                                                    {resultData?.data?.match_perfect && resultData?.data?.match_perfect?.includes(item?.id) && (
                                                        <div className="absolute top-3 left-3">
                                                            <span className="inline-flex items-center px-4 py-1 text-base font-medium bg-yellow-400 text-black rounded-full">
                                                                ★ Perfect Match
                                                            </span>
                                                        </div>
                                                    )}

                                                    <div className="absolute w-fit bottom-4 left-4 right-4 space-y-2">
                                                        <div className="bg-black/50 rounded px-3 py-1">
                                                            <h3 className="text-white text-lg md:text-3xl font-medium leading-snug">
                                                                {item.name}
                                                            </h3>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2">
                                                            <button
                                                                onClick={() => {
                                                                    setOpenStartJourney(true);
                                                                    setJourneyCountry(item?.name);
                                                                }}
                                                                className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-yellow-400 hover:text-black cursor-pointer"
                                                            >
                                                                Plan Your {item?.name} DNA Itinerary
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setActiveCountry(item);
                                                                    setShowWhyPopup(true);
                                                                }}
                                                                className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-yellow-400 hover:text-black cursor-pointer"
                                                            >
                                                                Why {item.name} for your Profile?
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Feedback */}
                            {/* <FeedbackForm faqs={resultData?.data?.faqs} token={token} /> */}

                            {/* Static Section */}
                            {/* <div className="max-w-7xl mx-auto px-5 md:px-0 py-6 space-y-12">
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
                            </div> */}

                            <div>
                                <TravelExpert
                                    token={token}
                                    faqs={resultData?.data?.faqs}
                                />
                                <PageHelpful
                                    text="Was this TravelDNA report helpful?"
                                    pageName={`persona-result?token=/${token}`}
                                />
                            </div>
                        </>
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

                    <StartJourneyModal selectedCountry={journeyCountry} open={openStartJourney} onOpenChange={setOpenStartJourney} />
                    <CountryWhyPopup open={showWhyPopup} onOpenChange={setShowWhyPopup} item={activeCountry} />

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