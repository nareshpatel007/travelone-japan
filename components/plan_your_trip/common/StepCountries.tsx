"use client";
import { useEffect, useState } from "react";
import QuestionHeading from "./questionHeading";
import { Loader2 } from "lucide-react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

// Define the countries
const countriesByDestination = [
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
]

export default function StepCountries({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    // Define state
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [countriesList, setCountriesList] = useState<any>([]);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const loadInitData = async () => {
            // If already fetched, return
            if (countriesList.length > 0) {
                setIsLoading(false);
                return;
            } else {
                setIsLoading(true);
                try {
                    // Fetch the data
                    const response = await fetch("/api/destination/list", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            order_by: "name",
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    // Parse the JSON response
                    const data = await response.json();

                    // Update the state
                    if (data?.status) {
                        setCountriesList(data?.data?.countries ?? []);
                    }
                } catch (error: any) {
                    if (error.name !== "AbortError") {
                        console.error("Failed to fetch tours:", error);
                    }
                } finally {
                    setIsLoading(false);
                }
            }
        };
        loadInitData();
        return () => controller.abort();
    }, []);

    return (
        <>
            <div className="w-full max-w-3xl space-y-8">
                <QuestionHeading
                    title="Which country do you want to visit?"
                />
                {isLoading ? <div className="py-7">
                    <div className="text-center text-black">
                        <Loader2 className="w-6 h-6 mx-auto mb-3 animate-spin" />
                        Loading countries...
                    </div>
                </div> : <div className="max-h-[55vh] md:max-h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {countriesList.map((row: any, index: number) => (
                            <button
                                key={index}
                                onClick={() => setPlanYourTripForm({
                                    ...planYourTripForm,
                                    country_id: row?.id,
                                    country_name: row?.name
                                })}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-black border-1 transition-all cursor-pointer ${planYourTripForm.country_id === row?.id
                                    ? "border-black bg-white"
                                    : "border-black/30 bg-white hover:border-black/50"
                                    }`}
                            >
                                <span className={`flex items-center justify-center w-7 h-7 text-sm font-medium rounded border border-black/30 ${planYourTripForm.country_id === row?.id ? "bg-black border-black text-white" : "bg-white text-black"}`}>
                                    {index + 1}
                                </span>
                                <span className="text-sm font-medium text-gray-800">{row?.name}</span>
                            </button>
                        ))}
                    </div>
                </div>}
            </div>
        </>
    );
}