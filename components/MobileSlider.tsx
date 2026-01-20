"use client";

import Image from "next/image";

interface Props {
    images: string[];
}

export default function MobileSlider({ images }: Props) {
    return (
        <div className="block md:hidden w-full py-10 overflow-hidden">
            <div className="simple-image-slider">
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 px-3"
                    >
                        <Image
                            src={src}
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-xl object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}