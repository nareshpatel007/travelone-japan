"use client";

import Image from "next/image";

export default function LocalExpertise() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14">
                <div className="max-w-2xl space-y-6">
                    <div className="space-y-6">
                        <h1 className="text-black text-3xl lg:text-6xl leading-tight font-normal">
                            Local Expertise, Global Scale.
                        </h1>
                        <span className="text-black text-base sm:text-lg">
                            We operate through Strategic Intelligence Zones to ensure ground-level precision.
                        </span>
                    </div>

                    <p className="text-black text-base sm:text-lg"><b>Intelligence:</b> We don't just book; we orchestrate using local masters in our vetted destinations.</p>

                    <p className="text-black text-base sm:text-lg"><b>Security:</b> Headquartered in North America, providing a secure legal and financial framework.</p>

                    <p className="text-black text-base sm:text-lg"><b>Compliance:</b> Fully registered and compliant with international travel and tax regulations.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-80 md:h-150 overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/greece/travel-mediterranean-aegean-traditional-architecture_1203-4774.jpg"
                        alt="Canada USA Flag"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-80 md:h-150 overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/south-korea/haedong-yonggungsa-temple-haeundae-sea-busan-buddhist-temple-busan-south-korea_335224-436.avif"
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