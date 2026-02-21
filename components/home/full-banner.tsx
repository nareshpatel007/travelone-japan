import Image from "next/image";

interface Props {
    onOpenChange: (open: boolean) => void;
}

export default function FullBannerSection({ onOpenChange }: Props) {
    return (
        <section className="relative w-full min-h-[60vh] overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/nextjs/attractive-girl-sunglasses-hat-lies-warm-sand_231208-4782.jpg"
                alt="Travel Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-8 text-center">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-4xl md:text-6xl font-normal text-white leading-tight">
                        Journeys Tailored to Your Persona.
                    </h2>

                    <button
                        onClick={() => onOpenChange(true)}
                        className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white cursor-pointer transition"
                    >
                        Launch Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
}