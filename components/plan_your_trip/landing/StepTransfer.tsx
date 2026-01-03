"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepTransfer({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    // ✅ Restore selection when coming back to this step
    useEffect(() => {
        if (planYourTripForm?.transportation) {
            setSelected(planYourTripForm.transportation);
        }
    }, [planYourTripForm?.transportation]);

    const handleChange = (value: string) => {
        setSelected(value);

        setPlanYourTripForm((prev: any) => ({
            ...prev,
            transportation: value,
        }));
    };

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                Tell us how you’d like to travel between places
            </h2>

            <div className="space-y-4">
                <Option
                    number="1"
                    text="Fully Private Chauffeur (7-seat luxury van throughout the trip)"
                    value="Fully Private Chauffeur (7-seat luxury van throughout the trip)"
                    selected={selected}
                    onChange={handleChange}
                />

                <Option
                    number="2"
                    text="Executive Mix (Private van for tours + First Class Shinkansen between cities)"
                    value="Executive Mix (Private van for tours + First Class Shinkansen between cities)"
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
