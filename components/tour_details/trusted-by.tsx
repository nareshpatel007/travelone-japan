"use client"

import Image from "next/image"

export default function TrustedBy() {
    return (
        <div className="bg-white py-10 md:py-20 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-14">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        Trusted By
                    </h3>
                    <span className="text-sm md:text-lg text-black">
                        We are trusted by leading tour operators
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center place-items-center">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/logo/TripAdvisor_Logo.png"
                        alt="TripAdvisor"
                        width={500}
                        height={500}
                        className="w-70 h-12 object-contain"
                    />

                    <Image
                        src="https://ik.imagekit.io/288weifiq/logo/viator.png"
                        alt="Viator"
                        width={500}
                        height={500}
                        className="w-48 h-12 object-contain"
                    />

                    <Image
                        src="https://ik.imagekit.io/288weifiq/logo/jnto.png"
                        alt="JNTO"
                        width={500}
                        height={500}
                        className="w-30 h-12 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
