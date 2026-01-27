"use client";

import { CheckCircle } from "lucide-react";

interface Props {
    index: number;
    title: string;
    ageLabel: string;
}

export default function TravellerForm({ index, title, ageLabel }: Props) {
    return (
        <div className="space-y-4">
            <div className="bg-green-100 px-4 py-3 rounded-md">
                <h3 className="font-semibold text-sm md:text-base">
                    {title} {index + 1}
                </h3>
                <p className="text-xs text-gray-600">{ageLabel}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="First Name" />
                <Input label="Middle Name (Optional)" />
                <Input label="Last Name" />
                <Input label="Email" />
                <Input label="Phone Number" />
                <Input label="Date of Birth" type="date" />
                <Input label="Passport Number" />
                <Input label="Passport Expiry" type="date" />
                <Select label="Nationality" />
            </div>

            <div>
                <p className="text-sm font-medium mb-2">Preferences</p>
                <div className="flex flex-wrap gap-2">
                    {["Passport", "Flight", "Meal", "Visa"].map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 text-xs bg-green-500 text-white rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md">
                <CheckCircle size={16} />
                Save Traveller
            </button>
        </div>
    );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm mb-1">{label}</label>
            <input
                type={type}
                className="border px-3 py-2 rounded-md text-sm focus:ring-1 focus:ring-green-500"
            />
        </div>
    );
}

function Select({ label }: { label: string }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm mb-1">{label}</label>
            <select className="border px-3 py-2 rounded-md text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>India</option>
            </select>
        </div>
    );
}
