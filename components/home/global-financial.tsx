"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export default function GlobalFinancialSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 md:px-10 py-12">
            {/* LEFT CONTENT */}
            <div className="flex items-center p-12 bg-[#FFF9EE]">
                <div className="max-w-2xl space-y-6 text-center lg:text-left">
                    <h1 className="text-black text-3xl sm:text-4xl lg:text-6xl leading-tight font-normal">
                        Your Global Financial Safeguard.
                    </h1>

                    <p className="text-black text-base sm:text-lg">
                        Travel with the confidence of North American financial protection and MoR.
                    </p>

                    <p className="text-black text-base sm:text-lg">
                        TravelOne USA acts as your Merchant of Record. We assume the liability,
                        manage global taxes, and guarantee your refunds. You simply explore.
                    </p>

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

            {/* RIGHT IMAGE */}
            <div className="flex items-center justify-center">
                <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/canada-day-celebration-with-maple-leaf-symbol_23-2151440473.jpg"
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