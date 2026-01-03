"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepRegions({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const regions = [
        "The Classic Route (Tokyo, Kyoto, Osaka, Nara)",
        "The Japanese Alps (Hakone/Mt. Fuji, Takayama, Kanazawa)",
        "The Deep South (Hiroshima, Fukuoka, Nagasaki, Kyushu)",
        "Tropical Islands (Okinawa, Ishigaki, Miyakojima)",
        "The Wild North (Hokkaido, Sapporo, Hakodate)",
        "I’d like a curated recommendation based on my Vibe",
    ];

    const [selected, setSelected] = useState<string[]>([]);

    // ✅ Restore previously selected regions
    useEffect(() => {
        if (Array.isArray(planYourTripForm?.cities_options)) {
            setSelected(planYourTripForm.cities_options);
        }
    }, [planYourTripForm?.cities_options]);

    const toggleRegion = (region: string) => {
        setSelected((prev) => {
            const updated = prev.includes(region)
                ? prev.filter((r) => r !== region)
                : [...prev, region];

            // ✅ Save to parent state
            setPlanYourTripForm((form: any) => ({
                ...form,
                cities_options: updated,
            }));

            return updated;
        });
    };

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                Which parts of Japan would you like to explore?
            </h2>

            <div className="!grid !md:grid-cols-2 !gap-0">
                {regions.map((region, i) => {
                    const isActive = selected.includes(region);

                    return (
                        <label
                            key={i}
                            onClick={() => toggleRegion(region)}
                            className="!flex !items-center !justify-between !px-3 !py-2 !rounded-sm !cursor-pointer !transition !bg-white"
                        >
                            <div className="!flex !items-center !gap-4">
                                {/* <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                                    {i + 1}
                                </span> */}
                                <span className="text-sm md:text-base">{region}</span>
                            </div>

                            <input
                                type="checkbox"
                                checked={isActive}
                                onChange={() => toggleRegion(region)}
                                className="hidden"
                            />

                            {isActive && (
                                <span className="!text-black !text-md !font-semibold">
                                    <Check className="h-5 w-5" />
                                </span>
                            )}
                        </label>
                    );
                })}
            </div>
        </>
    );
}