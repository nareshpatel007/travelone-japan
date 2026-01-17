"use client"

import Image from "next/image"

export default function TrustedBy() {
    return (
        <div className="!bg-white py-16 px-5 md:px-0">
            <div className="!max-w-7xl !mx-auto">
                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-[#1E1E1E]">Trusted By</span>
                <p className="text-center text-[#C46A3A] !mb-12 font-semibold">
                    We are trusted by leading tour operators
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 !gap-6 !items-center !justify-center place-items-center">
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
