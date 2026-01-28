"use client"

import Image from "next/image"
import Link from "next/link"

export default function TrustedBy() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-5 md:px-0 space-y-12">
            <div className="text-center space-y-1">
                <h3 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    Trusted By
                </h3>
                <span className="text-sm md:text-lg text-black">
                    We are trusted by leading organizations. Global operations managed by TICO-certified advisors and ACTA-registered industry professionals.
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center place-items-center">
                <Link href="/partnership/ACTA-License.jpeg" target="_blank">
                    <Image
                        src="/common/acta-logo.webp"
                        alt="ACTA"
                        width={160}
                        height={80}
                        draggable="false"
                        className="object-contain h-auto w-20 md:w-36"
                    />
                </Link>

                <Image
                    src="https://ik.imagekit.io/288weifiq/logo/viator.png"
                    alt="TICO"
                    width={160}
                    height={80}
                    draggable="false"
                    className="object-contain h-auto w-20 md:w-36"
                />

                <Link href="/partnership/TICO-Bhavin-Vora.pdf" target="_blank">
                    <Image
                        src="/common/tico-logo.webp"
                        alt="TICO"
                        width={160}
                        height={80}
                        draggable="false"
                        className="object-contain h-auto w-20 md:w-30"
                    />
                </Link>
            </div>
        </div>
    )
}
