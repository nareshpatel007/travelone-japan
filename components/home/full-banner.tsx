import Image from "next/image";

// Define props
interface Props {
    onOpenChange: (open: boolean) => void;
}

export default function FullBannerSection({ onOpenChange }: Props) {
    return (
        <div className="relative w-full h-100 md:h-150 overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/nextjs/attractive-girl-sunglasses-hat-lies-warm-sand_231208-4782.jpg"
                alt=""
                fill
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
            />
            <div className="relative h-full flex items-center justify-center px-8">
                <div className="text-center max-w-2xl space-y-6">
                    <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight">
                        Journeys Tailored to Your Persona.
                    </h2>
                    <button
                        onClick={() => onOpenChange(true)}
                        className="px-5 py-2 bg-white text-md text-black cursor-pointer hover:bg-black hover:text-white transition"
                    >
                        Launch Your Journey
                    </button>
                </div>
            </div>
        </div>
    );
}
