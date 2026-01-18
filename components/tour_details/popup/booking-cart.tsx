"use client"

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Plus, X } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Props {
    tour: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

// Define room type
type Room = {
    id: number;
    bedding: string | null;
    adults: number;
    child_8_12: number;
    child_3_7: number;
    infant: number;
    extraBed: boolean;
    crib: boolean;
};

// Define room limits
const ROOM_LIMITS: any = {
    adults: 3,
    child_8_12: 1,
    child_3_7: 1,
    infant: 1,
};

export function BookingCart({ tour, open, onOpenChange }: Props) {
    // Define state
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedNationality, setSelectedNationality] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [availableSeats, setAvailableSeats] = useState<number>(0);
    const [activeRoomIndex, setActiveRoomIndex] = useState(0);
    const [rooms, setRooms] = useState<Room[]>([
        {
            id: 1,
            bedding: "Double",
            adults: 0,
            child_8_12: 0,
            child_3_7: 0,
            infant: 0,
            extraBed: false,
            crib: false,
        },
    ]);

    // Handle reset
    const handleReset = () => {
        setCurrentStep(1);
        setSelectedNationality(null);
        setSelectedDate("");
    }

    // Handle close
    const handleClose = () => {
        onOpenChange(false);
        handleReset();
    }

    // Handle submit
    const handleSubmit = () => {

    }

    // Check if date is in the future
    const isFutureDate = (dateString: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const date = new Date(dateString);
        return date > today;
    };

    // Handle choose date
    const handleChooseDate = (index: string) => {
        const dateObject = tour?.group_dates[index] || null;
        if (!dateObject) return;
        setSelectedDate(dateObject?.group_date);
        setAvailableSeats(dateObject?.available_seat || 0);
    }

    const getTotalTravellers = (rooms: Room[]) => {
        return rooms.reduce(
            (sum, room) =>
                sum +
                room.adults +
                room.child_8_12 +
                room.child_3_7 +
                room.infant,
            0
        );
    };

    const addRoom = () => {
        if (rooms.length >= availableSeats) return;

        setRooms((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                bedding: "Double",
                adults: 0,
                child_8_12: 0,
                child_3_7: 0,
                infant: 0,
                extraBed: false,
                crib: false,
            },
        ]);

        setActiveRoomIndex(rooms.length);
    };

    const removeRoom = (index: number) => {
        if (index === 0) return; // Do not allow removing Room 1

        setRooms((prev) => {
            const updated = prev.filter((_, i) => i !== index);
            return updated.map((room, i) => ({ ...room, id: i + 1 }));
        });

        // Adjust active tab safely
        setActiveRoomIndex((prev) =>
            prev >= index ? Math.max(0, prev - 1) : prev
        );
    };

    const updateRoom = (index: number, field: keyof Room, value: any) => {
        setRooms((prev) =>
            prev.map((room, i) =>
                i === index ? { ...room, [field]: value } : room
            )
        );
    };

    // Increment pax count
    const incrementCount = (field: keyof Room) => {
        // Get current room and its field value
        const room = rooms[activeRoomIndex];
        const roomFieldValue = room[field] as number;
        const roomLimit = ROOM_LIMITS[field] as number;

        // Per-room limit
        if (roomFieldValue >= roomLimit) return;

        // Total seats limit
        const totalTravellers = getTotalTravellers(rooms);
        if (totalTravellers >= availableSeats) return;

        // Update room
        updateRoom(
            activeRoomIndex,
            field,
            roomFieldValue + 1
        );
    }

    // Decrement pax count
    const decrementCount = (field: keyof Room) => {
        const room = rooms[activeRoomIndex];
        const roomFieldValue = room[field] as number;

        // Prevent going below zero
        if (roomFieldValue <= 0) return;

        // Update room
        updateRoom(
            activeRoomIndex,
            field,
            roomFieldValue - 1
        );
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
            <div className="absolute inset-0 !bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full !bg-[#fef4e4] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#FFC765] hover:bg-black hover:text-white cursor-pointer transition"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="!absolute !top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {[1, 2].map((step) => (
                        <div
                            key={step}
                            className={`w-3 h-3 rounded-full transition-colors ${step === currentStep ? "!bg-[#ffc765]" : step < currentStep ? "!bg-[#ffc765]" : "!bg-gray-300"}`}
                        />
                    ))}
                </div>
                <div className="min-h-full flex flex-col items-center justify-center px-4 md:px-8 py-20">
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-10 text-center">
                            When Would You Like to Book Your Trip?
                        </h2>

                        {/* Step 1 */}
                        {currentStep === 1 && (
                            <div className="border border-[#2F5D50] rounded-sm p-5 space-y-4 bg-white/60">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-md font-medium text-[#333] mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-md font-medium text-[#333] mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-md font-medium text-[#333] mb-1">
                                            Cellphone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            placeholder="Enter your cellphone"
                                            className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="border-t border-dashed border-gray-300 mt-6 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-md font-medium text-[#333] mb-1">
                                            Travel Date <span className="text-red-500">*</span>
                                        </label>
                                        {tour?.tour_type === "Group Tour" ? (
                                            <select
                                                value={selectedDate ?? ""}
                                                onChange={(e) => handleChooseDate(e.target.value)}
                                                className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                            >
                                                <option value="">Choose travel date</option>
                                                {tour?.group_dates?.filter((d: any) => isFutureDate(d.group_date)).map((date: any, index: number) => (
                                                    <option key={index} value={index}>
                                                        {`${formatDate(date.group_date)} (${date.available_seat} seats)`}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={new Date().toISOString().split("T")[0]}
                                                className="w-full max-w-md px-4 py-3 border border-[#2F5D50] rounded-md bg-white outline-none"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-md font-medium text-[#333] mb-1">
                                            Your Nationality <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={selectedNationality ?? ""}
                                            onChange={(e) => setSelectedNationality(e.target.value)}
                                            className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                        >
                                            <option value="">Select nationality</option>
                                            <option value="USA">United States of America</option>
                                            <option value="India">India</option>
                                            <option value="UK">United Kingdom</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {currentStep === 2 && (
                            <div className="w-full max-w-4xl mx-auto space-y-6">
                                <div className="text-center mb-3">
                                    <p className="text-xl font-semibold text-[#0F172A]">
                                        Choose Traveler Details
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        {availableSeats} Seats are available in this tour
                                    </p>
                                </div>
                                <div className="border border-[#2F5D50] rounded-sm p-5 space-y-4 bg-white/60">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold">Rooms</p>
                                        <button
                                            onClick={addRoom}
                                            className="flex items-center gap-1 px-4 py-1.5 font-medium rounded border border-[#2F5D50] text-sm cursor-pointer hover:bg-[#FFC765]"
                                        >
                                            <Plus className="h-3 w-3" /> Add Room
                                        </button>
                                    </div>
                                    <div className="border border-dashed border-gray-300 rounded-sm p-5 space-y-4">
                                        <div className="flex gap-4 items-center border-b border-dashed border-gray-300 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                                            {rooms.map((room, index) => (
                                                <div
                                                    key={room.id}
                                                    className="inline-flex items-center gap-1 pr-3 border-r border-dashed border-gray-300 flex-shrink-0"
                                                >
                                                    <button
                                                        onClick={() => setActiveRoomIndex(index)}
                                                        className={`font-medium cursor-pointer transition-colors ${activeRoomIndex === index ? "text-red-500" : "text-[#0F172A]"}`}
                                                    >
                                                        Room {index + 1}
                                                    </button>
                                                    {index > 0 && (
                                                        <button
                                                            onClick={() => removeRoom(index)}
                                                            className="text-red-500 text-xs font-semibold pl-1 hover:text-red-700 cursor-pointer"
                                                            title="Remove Room"
                                                        >
                                                            ✕
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-center font-medium mb-4">Bedding Preference</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {["Double", "Twin", "Single", "Two Queen Bed"].map((bed) => (
                                                    <button
                                                        key={bed}
                                                        onClick={() =>
                                                            updateRoom(activeRoomIndex, "bedding", bed)
                                                        }
                                                        className={`px-4 py-2 rounded-md border font-medium text-sm cursor-pointer ${rooms[activeRoomIndex].bedding === bed
                                                            ? "bg-[#ffc765] text-[#333] shadow-md"
                                                            : "border-[#2F5D50]"
                                                            }`}
                                                    >
                                                        {bed}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-6 text-sm">
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={rooms[activeRoomIndex].extraBed}
                                                    onChange={(e) =>
                                                        updateRoom(activeRoomIndex, "extraBed", e.target.checked)
                                                    }
                                                />
                                                Add Extra Bed
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={rooms[activeRoomIndex].crib}
                                                    onChange={(e) =>
                                                        updateRoom(activeRoomIndex, "crib", e.target.checked)
                                                    }
                                                />
                                                Add Crib
                                            </label>
                                        </div>
                                        {[
                                            { label: "Adults", field: "adults", age: "Ages 12 or above" },
                                            { label: "Child", field: "child_8_12", age: "Ages 8-12" },
                                            { label: "Child", field: "child_3_7", age: "Ages 3-7" },
                                            { label: "Infant", field: "infant", age: "Ages 0-2" },
                                        ].map((item) => (
                                            <div key={item.field} className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-medium">{item.label}</p>
                                                    <p className="text-sm text-gray-600">{item.age}</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button onClick={() => decrementCount(item.field as keyof Room)} className="w-7 h-7 cursor-pointer rounded-full border-1 hover:bg-gray-700 hover:text-white">−</button>

                                                    <span>{rooms[activeRoomIndex][item.field as keyof Room]}</span>

                                                    <button onClick={() => incrementCount(item.field as keyof Room)} className="w-7 h-7 cursor-pointer rounded-full border-1 hover:bg-gray-700 hover:text-white">+</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        {currentStep === 1 ? (
                            <button
                                onClick={() => setCurrentStep(currentStep + 1)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border cursor-pointer bg-[#ffc765] text-[#333] hover:border-[#333] hover:text-white hover:bg-[#333]`}
                            >
                                Next <ArrowRight className="h-5 w-5" />
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex items-center gap-2 px-8 py-3 bg-white text-[#1a2b49] rounded-lg font-medium border border-[#1a2b49] hover:bg-[#333] hover:border-[#333] transition-colors hover:text-white cursor-pointer"
                                >
                                    <ArrowLeft className="h-5 w-5" /> Previous
                                </button>

                                <button
                                    onClick={handleSubmit}
                                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border cursor-pointer bg-[#ffc765] text-[#333] hover:border-[#333] hover:text-white hover:bg-[#333]`}
                                >
                                    <CheckCircle className="h-5 w-5" /> Submit
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
