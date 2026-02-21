"use client";

import Image from "next/image";
import Link from "next/link";

export default function LocalExpertise() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center px-6 sm:px-10 p-12 bg-[#FFF9EE]">
                <div className="max-w-2xl space-y-6">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-6xl leading-tight font-normal">
                            Local Expertise, Global Scale.
                        </h2>
                    </div>

                    <p className="text-black text-base sm:text-lg">
                        <b>Intelligence:</b> We don't just book; we orchestrate using local masters in our vetted destinations.
                    </p>

                    <p className="text-black text-base sm:text-lg">
                        <b>Security:</b> Headquartered in North America, providing a secure legal and financial framework.
                    </p>

                    <p className="text-black text-base sm:text-lg">
                        <b>Compliance:</b> Fully registered and compliant with international travel and tax regulations.
                    </p>

                    {/* LOGOS */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                        <Link href="/partnership/ACTA-License.jpeg" target="_blank">
                            <Image
                                src="/common/acta-logo.webp"
                                alt="ACTA"
                                width={160}
                                height={80}
                                draggable="false"
                                className="object-contain h-auto w-20 md:w-26"
                            />
                        </Link>

                        <Link href="/partnership/TICO-Bhavin-Vora.pdf" target="_blank">
                            <Image
                                src="/common/tico-logo.webp"
                                alt="TICO"
                                width={160}
                                height={80}
                                draggable="false"
                                className="object-contain h-auto w-20 md:w-26"
                            />
                        </Link>
                    </div>

                    <p className="text-black text-base sm:text-lg pt-2">
                        Global operations managed by TICO-certified advisors and ACTA-registered industry professionals.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/close-up-autumn-journey-elements-assortment_23-2148634117.jpg"
                        alt="Canada USA Flag"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg"
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