import Image from "next/image";

export default function FullBannerSection() {
    return (
        <div className="relative w-full h-100 md:h-150 overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-6.jpg"
                alt="Travel worth reading about"
                fill
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
            />
            <div className="relative h-full flex items-center justify-center px-8">
                <div className="text-center max-w-2xl">
                    <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight">
                        For Travels Worth<br />
                        Reading About
                    </h2>
                </div>
            </div>
        </div>
    );
}
