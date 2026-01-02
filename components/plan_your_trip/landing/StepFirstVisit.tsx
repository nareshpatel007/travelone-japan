"use client";
import { useState } from "react";

export default function StepFirstVisit() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <>
            <h2 className="!text-2xl !md:text-3xl !font-normal !mb-6">
                Is this your first time visiting Japan?
            </h2>

            <div className="space-y-4">
                <Option
                    number="1"
                    text="Yes, I want to see the iconic highlights."
                    value="yes"
                    selected={selected}
                    onChange={setSelected}
                />

                <Option
                    number="2"
                    text="No, I’ve been before and want to discover hidden gems."
                    value="no"
                    selected={selected}
                    onChange={setSelected}
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
            className={`
                !flex !items-center !justify-between !p-4 !rounded-lg !cursor-pointer !transition
                ${isActive
                    ? "!bg-[#CFF5DF] !border !border-[#0FB37A]"
                    : "!border !border-[#54595F] !hover:bg-[#EEF7F2]"
                }
            `}
        >
            <div className="!flex !items-center !gap-4">
                <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                    {number}
                </span>
                <span className="text-sm md:text-base">{text}</span>
            </div>

            {/* Hidden radio for semantics */}
            <input
                type="radio"
                name="first_visit"
                checked={isActive}
                onChange={() => onChange(value)}
                className="hidden"
            />

            {/* Checkmark */}
            {isActive && (
                <span className="!text-[#0FB37A] !text-lg !font-bold">
                    ✓
                </span>
            )}
        </label>
    );
}
