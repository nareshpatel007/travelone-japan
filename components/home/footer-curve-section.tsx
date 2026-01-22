"use client";

// Define props
interface Props {
    onOpenChange: (open: boolean) => void;
}

export default function FooterCurveSection({ onOpenChange }: Props) {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="relative z-10 max-w-6xl mb-[-100px] md:mb-[-140px] mx-auto pt-24 md:pt-32 mb-6">
                <div className="hidden md:block absolute left-4 md:left-29 top-16 md:top-77">
                    <img
                        src="https://ik.imagekit.io/288weifiq/nextjs/japan/beautiful-landscape-mountain-fuji-with-chureito-pagoda-around-maple-leaf-tree-autumn-season_74190-9895.avif"
                        alt="Image"
                        className="w-24 h-32 md:w-40 md:h-40 rounded-full object-cover"
                    />
                </div>

                <div className="hidden md:block absolute right-4 md:right-21 top-12 md:top-30">
                    <img
                        src="https://ik.imagekit.io/288weifiq/nextjs/indonesia/woman-standing-pond-with-colorful-fish-tirta-gangga-water-palace-bali-indonesia_335224-358.avif"
                        alt="Image"
                        className="w-24 h-24 md:w-54 md:h-50 rounded-full object-cover"
                    />
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/288weifiq/nextjs/indonesia/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone_335224-365.avif"
                        alt="Image"
                        className="w-56 h-80 md:w-110 md:h-[580px] rounded-full object-cover"
                    />
                </div>
            </div>
            <section className="relative w-full overflow-hidden pt-34 pb-0 md:pt-40">
                <div
                    className="absolute inset-0 bg-no-repeat bg-top bg-cover"
                    style={{ backgroundImage: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-9.png')" }}
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl !text-black md:text-5xl font-normal leading-tight !mb-4">
                        Every Traveler’s Story<br />Deserves a Masterpiece.
                    </h2>

                    <p className="max-w-xl !text-black !mb-8">Create the journey your unique persona truly deserves with TravelOne, a modern orchestration platform designed to harmonize global exploration with your individual soul.</p>

                    <button
                        onClick={() => onOpenChange(true)}
                        className="bg-black text-white px-4 py-3 text-sm uppercase border border-black tracking-wide font-normal hover:bg-black/90 transition cursor-pointer"
                    >
                        Begin Your Persona Mapping
                    </button>
                </div>
            </section>
        </div>
    );
}
