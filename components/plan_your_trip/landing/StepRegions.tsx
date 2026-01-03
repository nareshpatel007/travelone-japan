"use client";
import { Check } from "lucide-react";
import { useState } from "react";

export default function StepRegions() {
    const themes = [
        "The Classic Route (Tokyo, Kyoto, Osaka, Nara)",
        "Japanese Alps (Hakone, Mt Fuji, Takayama)",
        "Deep South (Hiroshima, Fukuoka)",
        "Tropical Islands (Okinawa)",
        "The Wild North (Hokkaido)",
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const toggleRegion = (theme: string) => {
        setSelected((prev) =>
            prev.includes(theme)
                ? prev.filter((t) => t !== theme)
                : [...prev, theme]
        );
    };

    return (
        <>
            <h2 className="!text-2xl !md:text-3xl !font-normal !mb-6">
                Which parts of Japan would you like to explore?
            </h2>

            <div className="!grid !md:grid-cols-2 !gap-0">
                {themes.map((theme, i) => {
                    const isActive = selected.includes(theme);

                    return (
                        <label
                            key={i}
                            onClick={() => toggleRegion(theme)}
                            className="!flex !items-center !justify-between !px-3 !py-2 !rounded-sm !cursor-pointer !transition !bg-white"
                        >
                            <div className="!flex !items-center !gap-4">
                                <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                                    {i + 1}
                                </span>
                                <span className="text-sm md:text-base">{theme}</span>
                            </div>

                            {/* hidden checkbox */}
                            <input
                                type="checkbox"
                                checked={isActive}
                                onChange={() => toggleRegion(theme)}
                                className="hidden"
                            />

                            {/* checkmark */}
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
