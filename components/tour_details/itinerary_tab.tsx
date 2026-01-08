"use client"

import Image from "next/image";

// Define props
type Props = {
    itineraryData: any;
    device?: string;
}

export function ItineraryTab({ itineraryData, device = "desktop" }: Props) {
    return (
        <div className={`!bg-white !py-7`}>
            <div className="max-w-8xl">
                <div className="!relative">
                    <div className={`!absolute ${(device === "mobile") ? '!left-3.5' : '!left-5.5'} !top-5 !bottom-0 !w-1 !bg-gray-300`}></div>
                    <div className="!space-y-6">
                        {itineraryData.map((dayData: any) => (
                            <div className={`!flex ${(device === "mobile") ? '!gap-3' : '!gap-6'}`}>
                                <div className="!flex-shrink-0 !relative">
                                    <div className={`${(device === "mobile") ? '!w-8 !h-8' : '!w-12 !h-12'} !rounded-full !bg-teal-700 !text-white !flex !items-center !justify-center !font-bold !text-md`}>
                                        {dayData.day}
                                    </div>
                                </div>
                                <div className="!flex-1 !bg-white !border-2 !border-teal-700 !rounded-lg !p-6 !mb-4">
                                    <span className="!text-lg !font-bold !text-gray-900 !mb-3 !block !uppercase">
                                        Day {dayData.day}: {dayData.title}
                                    </span>

                                    <p className={`!text-gray-700 ${(device === "mobile") ? '!text-sm' : '!text-md'} !mb-6 !whitespace-pre-line`}>{dayData.description}</p>

                                    {dayData.activities.length > 0 && (
                                        <div className="!mb-6">
                                            <span className="!text-[#ef2853] !font-bold !block !mb-4">Activities:</span>
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {dayData.activities.map((activity: any, actIdx: number) => (
                                                    <div key={actIdx} className="flex flex-col">
                                                        <Image
                                                            src={activity.image || "/placeholder.svg"}
                                                            alt={activity.name}
                                                            width={500}
                                                            height={500}
                                                            className={`!w-full ${(device === "mobile") ? '!h-30' : '!h-100'} !object-cover !rounded !mb-4`}
                                                        />

                                                        <span className="!font-bold !text-gray-900 !text-md !block !mb-2">{activity.name}</span>

                                                        <p className={`text-gray-600 ${(device === "mobile") ? 'text-sm' : 'text-md'} leading-relaxed`}>{activity.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Meals */}
                                    {dayData.meals && (
                                        <div className="!border-t !border-gray-200 !pt-4 !mb-4">
                                            <span className="!text-[#ef2853] !font-bold !mb-2">Meals:</span>
                                            <p className={`!text-gray-700 ${(device === 'mobile' ? '!text-sm' : '!text-md')}`}>Lunch {dayData.meals.lunch}</p>
                                            <p className={`!text-gray-700 ${(device === 'mobile' ? '!text-sm' : '!text-md')}`}>Dinner {dayData.meals.dinner}</p>
                                        </div>
                                    )}

                                    {/* Additional Notes */}
                                    {dayData.notes && dayData.notes.length > 0 && (
                                        <div className={`text-gray-700 ${(device === "mobile") ? 'text-sm' : 'text-md'} space-y-1`}>
                                            {dayData.notes.map((note: string, noteIdx: number) => (
                                                <p key={noteIdx}>{note}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
