"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { CheckCircle, ChevronDown, Key } from "lucide-react";
import Image from "next/image";
import { LandingPlanTripModal } from "@/components/plan_your_trip/landing-popup";
import PageHeading from "@/components/common/page-heading";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function Page() {
    // Get query parms
    const token = getQuery("token", "");

    // Define state
    const [ready, setReady] = useState(false);
    const [resultData, rowResultData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(0);

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
            }
        } finally {
            // Update state
            setIsLoading(false);
        }
    };

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
                        <div className="max-w-7xl mx-auto px-5 md:px-0 py-6 space-y-12">
                            <div className="relative overflow-hidden rounded-3xl bg-[#FBF2E3] text-white p-10 md:p-16">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#ef2853,_transparent_60%)]"></div>
                                <div className="relative z-10 text-center space-y-6">
                                    <div className="inline-flex items-center gap-3 bg-black/80 px-6 py-2 rounded-full text-sm tracking-wide uppercase">
                                        <CheckCircle className="text-white" size={18} />
                                        Your Travel DNA
                                    </div>

                                    <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                                        {resultData?.data?.headline}
                                    </h1>

                                    <p className="max-w-3xl mx-auto text-black leading-relaxed">
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
                            <div className="space-y-8">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                                        Ethos
                                    </h2>
                                    <span className="text-black text-md">
                                        Your Ethos and Personality Traits
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="group border border-neutral-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
                                        <button
                                            onClick={() => setOpenIndex(0)}
                                            className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4 cursor-pointer">
                                                <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold ${openIndex === 0 ? "bg-amber-500/10 text-amber-500" : "bg-black/5 text-black"}`}>
                                                    01
                                                </div>

                                                <h3 className="text-lg font-semibold text-black">
                                                    {resultData?.data?.primary?.name}
                                                </h3>
                                            </div>

                                            <ChevronDown className={`transition-transform duration-300 ${openIndex === 0 ? "rotate-180 text-amber-500" : "rotate-0 text-neutral-400"}`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                                        >
                                            <div className="px-8 pb-8 text-black text-sm md:text-base leading-relaxed">
                                                {resultData?.data?.primary?.ethos}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group border border-neutral-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
                                        <button
                                            onClick={() => setOpenIndex(1)}
                                            className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4 cursor-pointer">
                                                <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold ${openIndex === 1 ? "bg-amber-500/10 text-amber-500" : "bg-black/5 text-black"}`}>
                                                    02
                                                </div>

                                                <h3 className="text-lg font-semibold text-black">
                                                    {resultData?.data?.secondary?.name}
                                                </h3>
                                            </div>

                                            <ChevronDown className={`transition-transform duration-300 ${openIndex === 1 ? "rotate-180 text-amber-500" : "rotate-0 text-neutral-400"}`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${openIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                                        >
                                            <div className="px-8 pb-8 text-black text-sm md:text-base leading-relaxed">
                                                {resultData?.data?.secondary?.ethos}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group border border-neutral-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
                                        <button
                                            onClick={() => setOpenIndex(2)}
                                            className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4 cursor-pointer">
                                                <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold ${openIndex === 2 ? "bg-amber-500/10 text-amber-500" : "bg-black/5 text-black"}`}>
                                                    03
                                                </div>

                                                <h3 className="text-lg font-semibold text-black">
                                                    {resultData?.data?.tertiary?.name}
                                                </h3>
                                            </div>

                                            <ChevronDown className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-180 text-amber-500" : "rotate-0 text-neutral-400"}`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${openIndex === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                                        >
                                            <div className="px-8 pb-8 text-black text-sm md:text-base leading-relaxed">
                                                {resultData?.data?.tertiary?.ethos}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EXPERIENCE HIGHLIGHTS */}
                            <div className="space-y-8">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                                        TravelOne Signature Suggestions
                                    </h2>
                                    <span className="text-black text-md">
                                        World destinations matching your TravelDNA
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {Array.isArray(resultData?.data?.inventory) && resultData?.data?.inventory.map((item: any, index: number) => (
                                        <div key={index} className="group h-full">
                                            <div className="flex h-full flex-col border border-gray-200 transition-all hover:shadow-md">
                                                <div className="relative h-52 md:h-80 overflow-hidden">
                                                    <Link target="_blank" href={`/archetype-landing/?type=${slugify(resultData?.data?.primary?.name)}&country=${item?.slug}`}>
                                                        <Image
                                                            src={item?.featured_image || "/placeholder.svg"}
                                                            alt={item?.name || "Image"}
                                                            fill
                                                            draggable={false}
                                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="flex flex-1 flex-col space-y-4 p-6 text-center">
                                                    <Link target="_blank" href={`/archetype-landing/?type=${slugify(resultData?.data?.primary?.name)}&country=${item?.slug}`}>
                                                        <h2 className="line-clamp-2 text-lg font-medium text-gray-900 md:text-xl">
                                                            {item?.name}
                                                        </h2>
                                                    </Link>
                                                    <div className="text-sm text-black">{item?.archetype_heading}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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

export const getQuery = (key: string, fallback = "") =>
    typeof window === "undefined"
        ? fallback
        : new URLSearchParams(window.location.search).get(key) ?? fallback;