"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

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
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                What kind of accommodation do you prefer?
            </h2>

            <div className="space-y-4">
                <Option
                    number="1"
                    text="Premium 4-Star Boutique Hotels (Curated comfort)"
                    value="Premium 4-Star Boutique Hotels (Curated comfort)"
                    selected={selected}
                    onChange={handleChange}
                />

                <Option
                    number="2"
                    text="Luxury 5-Star International Hotels (Ultimate service)"
                    value="Luxury 5-Star International Hotels (Ultimate service)"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    number="3"
                    text="Authentic Five-Star Ryokans (Traditional stays with private in-room Onsens)"
                    value="Authentic Five-Star Ryokans (Traditional stays with private in-room Onsens)"
                    selected={selected}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

function Option({
    number,
    text,
    value,
    selected,
    onChange,
}: any) {
    const isActive = selected === value;

    return (
        <label
            onClick={() => onChange(value)}
            className="!flex !items-center !justify-between !px-3 !py-2 !rounded-sm !cursor-pointer !transition !bg-white"
        >
            <div className="!flex !items-center !gap-4">
                <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                    {number}
                </span>
                <span className="text-sm md:text-base">{text}</span>
            </div>

            <input
                type="radio"
                name="first_visit"
                checked={isActive}
                onChange={() => onChange(value)}
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
