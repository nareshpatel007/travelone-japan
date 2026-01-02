"use client";
import { useState } from "react";

export default function StepTravelTime() {
    const [selected, setSelected] = useState<string | null>(null);

    const options = [
        "Spring 2026 (Cherry Blossoms)",
        "Autumn 2026 (Maple Leaves)",
        "Winter 2025/26 (Snow & Ski)",
        "Summer 2026 (Festivals)",
    ];

    return (
        <>
            <h2 className="!text-2xl !md:text-3xl !font-normal !mb-6">
                When do you plan to travel?
            </h2>

            <div className="space-y-3">
                {options.map((item, i) => (
                    <Option
                        key={i}
                        number={i + 1}
                        text={item}
                        value={item}
                        selected={selected}
                        onChange={setSelected}
                    />
                ))}
            </div>

            <div className="!mt-6">
                <label className="!block !text-md !font-semibold !mb-2">
                    Choose your travel month (optional)
                </label>

                <select className="!w-full !border !border-[#54595F] !rounded-md !p-3 !bg-transparent">
                    <option>Select month</option>
                    {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ].map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
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
                !flex !items-center !justify-between !gap-4 !p-4 !rounded-lg 
                !cursor-pointer !transition
                ${isActive
                    ? "!bg-[#CFF5DF] !border !border-[#0FB37A]"
                    : "!border !border-[#54595F] !hover:bg-[#EEF7F2]"
                }
            `}
        >
            <div className="!flex !items-center !gap-4">
                <span
                    className={`
                        !border !rounded !px-2 !text-sm
                        ${isActive ? "!border-[#0FB37A]" : "!border-[#54595F]"}
                    `}
                >
                    {number}
                </span>
                <span>{text}</span>
            </div>

            {/* Hidden radio */}
            <input
                type="radio"
                name="travel_time"
                checked={isActive}
                onChange={() => onChange(value)}
                className="hidden"
            />

            {/* Checkmark */}
            {isActive && (
                <span className="!text-[#0FB37A] !text-lg !font-bold">✓</span>
            )}
        </label>
    );
}
