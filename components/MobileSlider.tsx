"use client";

import Image from "next/image";

interface Props {
    images: string[];
}

export default function MobileSlider({ images }: Props) {
    return (
        <div className="overflow-hidden">
            <div className="simple-slider">
                {[...images, ...images].map((src, i) => (
                    <div key={i} className="px-2 flex-shrink-0">
                        <Image
                            src={src}
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
