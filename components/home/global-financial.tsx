"use client";

import Image from "next/image";

export default function GlobalFinancialSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-[#FFF9EE] flex items-center px-6 sm:px-10 lg:px-16 py-14">
                <div className="max-w-2xl space-y-6">
                    <div className="space-y-6">
                        <h1 className="text-black text-3xl lg:text-6xl leading-tight font-normal">
                            Your Global Financial Safeguard.
                        </h1>

                        <span className="text-gray-600 text-base sm:text-lg">
                            Travel with the confidence of North American financial protection and MoR.
                        </span>
                    </div>

                    <p className="text-gray-600 text-base sm:text-lg">Travel with the confidence of North American financial protection. TravelOne USA acts as your Merchant of Record. We assume the liability, we manage the global taxes, and we guarantee your refunds. You simply explore.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-80 md:h-150 overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/indonesia/beautiful-young-couple-posing-sea-beach-love-tenderness_1296-915.avif"
                        alt="Travel"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
