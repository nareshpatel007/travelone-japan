"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepThemes1({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const themes = [
        "Historical & Heritage Sites",
        "Adventure & Outdoor Activities",
        "Nature & Scenic Experiences",
        "Food & Culinary Experiences",
        "Cruises & Water Journeys",
        "Seasonal & Holiday Trips",
        "Luxury & Romantic Getaways",
        "Spiritual & Religious Journeys",
        "Eco & Sustainable Travel",
        "Nightlife & Festivals",
        "Local Culture & Traditions",
        "Sports & Active Travel",
    ];

    const [selected, setSelected] = useState<string[]>([]);

    // Restore selection when user comes back
    useEffect(() => {
        if (Array.isArray(planYourTripForm?.themes_priority_1)) {
            setSelected(planYourTripForm.themes_priority_1);
        }
    }, [planYourTripForm?.themes_priority_1]);

    const toggleTheme = (theme: string) => {
        setSelected((prev) => {
            const updated = prev.includes(theme)
                ? prev.filter((t) => t !== theme)
                : [...prev, theme];

            // Save to parent state
            setPlanYourTripForm((form: any) => ({
                ...form,
                themes_priority_1: updated,
            }));

            return updated;
        });
    };

    const leftThemes = themes.slice(0, 6);
    const rightThemes = themes.slice(6);

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !text-center !px-10 !pt-15 !font-semibold !mb-6">
                What theme do you want for this trip? (Priority 1)
            </h2>

            <div className="!grid grid-cols-2 !gap-2">
                {/* LEFT COLUMN */}
                <div>
                    {leftThemes.map((theme, i) => (
                        <ThemeItem
                            key={theme}
                            index={i}
                            theme={theme}
                            isActive={selected.includes(theme)}
                            onToggle={toggleTheme}
                        />
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div>
                    {rightThemes.map((theme, i) => (
                        <ThemeItem
                            key={theme}
                            index={i + 6}
                            theme={theme}
                            isActive={selected.includes(theme)}
                            onToggle={toggleTheme}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function ThemeItem({
    theme,
    index,
    isActive,
    onToggle,
}: any) {
    return (
        <label
            onClick={() => onToggle(theme)}
            className="!flex !items-center !justify-between !px-3 !py-2 !rounded-sm !cursor-pointer !transition !bg-white"
        >
            <div className="!flex !items-center !gap-4">
                {/* <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                    {index + 1}
                </span> */}
                <span className="text-sm md:text-base">{theme}</span>
            </div>

            <input
                type="checkbox"
                checked={isActive}
                onChange={() => onToggle(theme)}
                className="hidden"
            />

            {isActive && (
                <span className="!text-black !text-md !font-semibold">
                    <Check className="h-5 w-5" />
                </span>
            )}
        </label>
    );
}