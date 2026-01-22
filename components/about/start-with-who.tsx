"use client";

import Image from "next/image";

export default function StartWithWho() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-[#FFF9EE] flex items-center px-6 sm:px-10 lg:px-16 py-14">
                <div className="max-w-2xl space-y-6">
                    <div className="space-y-6">
                        <h1 className="text-black text-3xl lg:text-6xl leading-tight font-normal">
                            Start with Who, Not Where.
                        </h1>
                        <span className="text-black text-base sm:text-lg">
                            We have replaced traditional booking with a data-driven orchestration system.
                        </span>
                    </div>

                    <p className="text-black text-base sm:text-lg">Recorded Data: We capture your unique travel DNA to eliminate the guesswork in planning.</p>

                    <p className="text-black text-base sm:text-lg">Total Personalization: Every journey is built from scratch based on your recorded persona.</p>

                    <p className="text-black text-base sm:text-lg">Global Accountability: As your Merchant of Record, we manage all financial and logistical liability.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-80 md:h-150 overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/thailand/beautiful-girl-sitting-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-837.avif"
                        alt="Canada USA Flag"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}