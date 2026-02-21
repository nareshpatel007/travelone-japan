import Image from "next/image";

interface Props {
    onOpenChange: (open: boolean) => void;
    setOpenInitializePersonaModel: (open: boolean) => void;
}

export default function FullBannerSection({ onOpenChange, setOpenInitializePersonaModel }: Props) {
    return (
        <section className="relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/nextjs/attractive-girl-sunglasses-hat-lies-warm-sand_231208-4782.jpg"
                alt="Travel Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            <div className="relative z-10 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] px-8 text-center">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl leading-tight font-normal">
                        Journeys Tailored to Your Persona.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                        <button
                            onClick={() => setOpenInitializePersonaModel(true)}
                            className="w-full sm:w-auto bg-black text-white px-6 py-3 text-sm uppercase border border-black tracking-wide font-semibold hover:bg-white hover:text-black transition cursor-pointer"
                        >
                            Initialize Persona
                        </button>

                        <button
                            onClick={() => onOpenChange(true)}
                            className="w-full sm:w-auto border border-black text-black bg-white px-6 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-black hover:text-white transition cursor-pointer"
                        >
                            Start a Journey
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}