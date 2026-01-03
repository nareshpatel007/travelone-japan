"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepBudget({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    // ✅ Restore selection when coming back to this step
    useEffect(() => {
        if (planYourTripForm?.budget) {
            setSelected(planYourTripForm.budget);
        }
    }, [planYourTripForm?.budget]);

    const handleChange = (value: string) => {
        setSelected(value);

        setPlanYourTripForm((prev: any) => ({
            ...prev,
            budget: value,
        }));
    };

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                What is your target price range per person for this journey? (Excluding international flights)
            </h2>

            <div className="space-y-4">
                <Option
                    number="1"
                    text="$5,000 – $7,500 USD (Premium Private Experience)"
                    value="$5,000 – $7,500 USD (Premium Private Experience)"
                    selected={selected}
                    onChange={handleChange}
                />

                <Option
                    number="2"
                    text="$7,500 – $12,000 USD (Luxury Stays & Signature Experiences)"
                    value="$7,500 – $12,000 USD (Luxury Stays & Signature Experiences)"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    number="3"
                    text="$12,000+ USD (Ultra-Luxury & Exclusive Access)"
                    value="$12,000+ USD (Ultra-Luxury & Exclusive Access)"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    number="4"
                    text="I’d like to discuss this during my consultation"
                    value="I’d like to discuss this during my consultation"
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
                {/* <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                    {number}
                </span> */}
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
