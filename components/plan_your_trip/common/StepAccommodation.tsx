"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import QuestionHeading from "./questionHeading";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepAccommodation({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    // ✅ Restore selection when coming back to this step
    useEffect(() => {
        if (planYourTripForm?.accommodation) {
            setSelected(planYourTripForm.accommodation);
        }
    }, [planYourTripForm?.accommodation]);

    const handleChange = (value: string) => {
        setSelected(value);

        setPlanYourTripForm((prev: any) => ({
            ...prev,
            accommodation: value,
        }));
    };

    return (
        <div className="w-full max-w-3xl space-y-5">
            <QuestionHeading title="What kind of accommodation do you prefer?" />
            <div className="max-h-[55vh] md:max-h-[60vh] overflow-y-auto space-y-3">
                <Option
                    text="Premium 4-Star"
                    subText="Boutique Hotels (Curated comfort)"
                    value="Premium 4-Star Boutique Hotels (Curated comfort)"
                    selected={selected}
                    onChange={handleChange}
                />

                <Option
                    text="Luxury 5-Star"
                    subText="International Hotels (Ultimate service)"
                    value="Luxury 5-Star International Hotels (Ultimate service)"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    text="Authentic Five-Star"
                    subText="Ryokans (Traditional stays with private in-room Onsens)"
                    value="Authentic Five-Star Ryokans (Traditional stays with private in-room Onsens)"
                    selected={selected}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

function Option({
    text,
    subText,
    value,
    selected,
    onChange,
}: any) {
    const isActive = selected === value;

    return (
        <label
            onClick={() => onChange(value)}
            className={`flex items-center justify-between border px-5 py-4 rounded-sm cursor-pointer transition bg-white ${isActive ? "border-black" : "border-black/30"}`}
        >
            <div className="grid gap-1 text-sm md:text-base text-black">
                <span>{text}</span>
                <span>{subText}</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
                {isActive && <Check className="h-5 w-5 font-semibold text-black" />}
            </div>
            <input
                type="radio"
                checked={isActive}
                onChange={() => onChange(value)}
                className="hidden"
            />
        </label>
    );
}
