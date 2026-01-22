import Image from "next/image";

export default function FullBannerSection() {
    return (
        <div className="relative w-full h-100 md:h-150 overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/nextjs/vietnam/sailboat-sea-evening-sunlight-beautiful-big-mountains-luxury-summer-adventure-active-vacation-mediterranean-sea-turkey_158595-6875.jpg"
                alt=""
                fill
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
            />
            <div className="relative h-full flex items-center justify-center px-8">
                <div className="text-center text-white max-w-2xl space-y-2">
                    <h1 className="text-3xl md:text-6xl leading-tight font-normal">
                        Travel is a Result of Your Persona.
                    </h1>
                    <span className="text-md">
                        Join the world’s most discerning travelers in a world that is perfectly synchronized to you.
                    </span>
                </div>
            </div>
        </div>
    );
}
