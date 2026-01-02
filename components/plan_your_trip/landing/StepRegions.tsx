"use client";
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
                            className={`
                                !flex !items-center !justify-between !p-4 !rounded-lg !cursor-pointer !transition
                                ${isActive
                                    ? "!bg-[#CFF5DF] !border !border-[#0FB37A]"
                                    : "!border !border-[#54595F] !hover:bg-[#EEF7F2]"
                                }
                            `}
                        >
                            <div className="!flex !gap-3 !items-center">
                                <span
                                    className={`
                                        border px-2 rounded text-sm
                                        ${isActive
                                            ? "border-[#0FB37A]"
                                            : "border-[#54595F]"
                                        }
                                    `}
                                >
                                    {i + 1}
                                </span>
                                <span>{theme}</span>
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
                                <span className="text-[#0FB37A] text-lg font-bold">
                                    ✓
                                </span>
                            )}
                        </label>
                    );
                })}
            </div>
        </>
    );
}
