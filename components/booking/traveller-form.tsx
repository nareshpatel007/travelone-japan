"use client";

import nationalityList from "@/lib/nationality";
import { CheckCircle } from "lucide-react";

interface Props {
    headerBox?: boolean;
    index: number;
    title: string;
    ageLabel: string;
}

export default function TravellerForm({ headerBox = true, index, title, ageLabel }: Props) {
    // Define nationalities
    const nationality: any = nationalityList();

    return (
        <div className="space-y-4">
            {headerBox && <div className="bg-[#FFF9EE] border border-[#d9cec1] px-4 py-3 rounded-sm">
                <h3 className="font-medium text-sm md:text-lg">
                    {title} {index + 1}
                </h3>
                <p className="text-xs md:text-sm text-black">{ageLabel}</p>
            </div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="First Name" />
                <Input label="Middle Name (Optional)" />
                <Input label="Last Name" />
                <Input label="Email" />
                <Input label="Phone Number" />
                <Input label="Date of Birth" type="date" />
                <Input label="Passport Number" />
                <Input label="Passport Expiry" type="date" />
                <SelectNationality label="Nationality" list={nationality} />
                <SelectRooms label="Room Allocate" />
            </div>

            <div className="space-y-2">
                <p className="text-sm md:text-base font-medium">Preferences</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1 text-sm md:text-base bg-[#d9eed8] text-black border border-black rounded-sm hover:bg-black hover:text-white cursor-pointer">Passport</span>
                    <span className="px-4 py-1 text-sm md:text-base bg-[#d9eed8] text-black border border-black rounded-sm hover:bg-black hover:text-white cursor-pointer">Flight</span>
                    <span className="px-4 py-1 text-sm md:text-base bg-[#d9eed8] text-black border border-black rounded-sm hover:bg-black hover:text-white cursor-pointer">Meal</span>
                    <span className="px-4 py-1 text-sm md:text-base bg-[#d9eed8] text-black border border-black rounded-sm hover:bg-black hover:text-white cursor-pointer">Visa</span>
                </div>
            </div>

            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white hover:bg-black/90 text-white py-2 px-6 rounded-sm cursor-pointer">
                <CheckCircle size={16} />
                Save Traveller
            </button>
        </div>
    );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm">{label}</label>
            <input
                type={type}
                className="bg-white border border-black px-3 py-2 rounded-sm text-sm md:text-base focus:ring-1 focus:ring-black"
            />
        </div>
    );
}

function SelectNationality({ label, list }: { label: string, list: any }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm mb-1">{label}</label>
            <select className="bg-white border border-black px-3 py-2 rounded-sm text-sm md:text-base">
                {list.length > 0 && list.map((item: string) => (
                    <option>{item}</option>
                ))}
            </select>
        </div>
    );
}

function SelectRooms({ label }: { label: string }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm mb-1">{label}</label>
            <select className="bg-white border border-black px-3 py-2 rounded-sm text-sm md:text-base">
                <option value="1">Room 1</option>
                <option value="2">Room 2</option>
                <option value="3">Room 3</option>
            </select>
        </div>
    );
}
