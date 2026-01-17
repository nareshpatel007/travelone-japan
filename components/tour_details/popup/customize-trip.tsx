"use client";

import { CheckCircle, X } from "lucide-react";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CustomizeTrip({ open, onOpenChange }: Props) {
    const handleClose = () => {
        onOpenChange(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full bg-[#FFF6E5] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#FFC765] hover:bg-black hover:text-white cursor-pointer transition"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="min-h-full flex items-start justify-center px-6 py-6 md:py-16">
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-10 text-center">
                            Customization Request
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label className="block text-md font-medium text-[#333] mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="Enter your name"
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
                                <label className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-700">
                                    <input type="checkbox" />
                                    Are you on WhatsApp?
                                </label>
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
                                    Budget Per Person (Excluding Flight) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <input
                                        placeholder="Enter budget per person"
                                        className="w-full h-11 px-4 border border-[#2F5D50] rounded-l-sm bg-white outline-none text-md"
                                    />
                                    <span className="h-11 px-4 flex items-center bg-gray-700 text-white text-sm font-medium rounded-r-sm">
                                        USD
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-md font-medium text-[#333] mb-1">
                                    Hotel Preference <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none">
                                    <option>Select hotel preference</option>
                                    <option>3 Star</option>
                                    <option>4 Star</option>
                                    <option>5 Star</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-md font-medium text-[#333] mb-1">
                                    Your Travel Preferences <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Your travel preferences"
                                    className="w-full p-3 rounded-sm border border-[#2F5D50] bg-white outline-none resize-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-semibold bg-[#FFC765] text-[#333] hover:bg-black hover:text-white cursor-pointer transition"
                                >
                                    <CheckCircle className="h-5 w-5" />
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
