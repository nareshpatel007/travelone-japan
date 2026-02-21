"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Key, Loader2, X } from "lucide-react";

export default function Page() {
    // Get query parms
    const router = useRouter();
    const token = getQuery("token", "");

    // Define state
    const [ready, setReady] = useState(false);
    const [resultData, rowResultData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

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
                    {isLoading && <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-30">
                        <div className="grid grid-cols-1">
                            <div className="animate-pulse bg-gray-200 rounded-lg h-48 md:h-64"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-48 md:h-64"></div>
                        </div>
                    </div>}

                    {/* Result */}
                    {!isLoading && resultData && <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-30 text-center space-y-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <CheckCircle
                                size={120}
                                className="text-[#ef2853] opacity-15"
                            />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold text-black">
                            Congratulations! Your persona result is ready.
                        </h2>

                        <h2 className="text-3xl md:text-4xl font-semibold text-black">
                            You are a {resultData?.winner}
                        </h2>

                        <h2 className="text-xl md:text-2xl font-semibold text-black">
                            {resultData?.winner_score}% Sync
                        </h2>

                        {Object.entries(resultData?.all_scores).map(([name, score]: any) => (
                            <p
                                key={name}
                                className="text-base md:text-lg text-black max-w-2xl mx-auto"
                            >
                                {name}: {score}%
                            </p>
                        ))}

                        <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
                            {resultData?.description}
                        </p>

                        {/* <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
                            {status == "loading" && "We will notify you once your account is verified."}
                            {(status == "success" || status == "error") && "We will redirect you to the login page. Please wait..."}
                        </p> */}
                    </div>}

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