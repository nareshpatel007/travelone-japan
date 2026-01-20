"use client";

import Image from "next/image";

export default function GlobalFinancialSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-[#f5f8f3] flex items-center px-6 sm:px-10 lg:px-16 py-14">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black">
                        Your Global Financial Safeguard.
                    </h2>

                    <p className="text-gray-600 text-base">Travel with the confidence of North American financial protection. TravelOne USA acts as your Merchant of Record. We assume the liability, we manage the global taxes, and we guarantee your refunds. You simply explore.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-80 md:h-150 overflow-hidden">
                    <Image
                        src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-13.jpg"
                        alt="Travel"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 hover:bg-black/35 transition" />

                    <div className="absolute bottom-6 left-0 right-0 px-6 text-center">
                        <p className="text-white text-base sm:text-xl lg:text-2xl font-medium leading-snug">
                            Roamed bustling markets, aromatic spices, street food and sensesdelight
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
