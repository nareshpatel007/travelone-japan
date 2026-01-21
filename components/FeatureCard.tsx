import { CheckCircle, CheckLine, Clock10, Flag, MapPin } from "lucide-react";

export default function FeatureCard() {
    return (
        <div className="py-12 max-w-7xl mx-auto px-5 md:px-0 space-y-10">
            <div className="text-center">
                <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    Why TravelOne
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Scalloped Background */}
                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0"
                        >
                            <path
                                d="M50 2 L58 8 L68 6 L74 14 L84 16 L86 26 L94 32 L92 42 L98 50 L92 58 L94 68 L86 74 L84 84 L74 86 L68 94 L58 92 L50 98 L42 92 L32 94 L26 86 L16 84 L14 74 L6 68 L8 58 L2 50 L8 42 L6 32 L14 26 L16 16 L26 14 L32 6 L42 8 Z"
                                fill="#edf3ed"
                            />
                        </svg>

                        {/* Icon */}
                        <MapPin className="relative z-10 w-8 h-8 text-[#385b21]" />
                    </div>
                    <div className="qodef-m-content">
                        <p className="qodef-m-text !text-black">
                            Persona-Driven Mapping Define your travel DNA for a perfectly synchronized journey.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Scalloped Background */}
                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0"
                        >
                            <path
                                d="M50 2 L58 8 L68 6 L74 14 L84 16 L86 26 L94 32 L92 42 L98 50 L92 58 L94 68 L86 74 L84 84 L74 86 L68 94 L58 92 L50 98 L42 92 L32 94 L26 86 L16 84 L14 74 L6 68 L8 58 L2 50 L8 42 L6 32 L14 26 L16 16 L26 14 L32 6 L42 8 Z"
                                fill="#edf3ed"
                            />
                        </svg>

                        {/* Icon */}
                        <Clock10 className="relative z-10 w-8 h-8 text-[#385b21]" />
                    </div>
                    <div className="qodef-m-content">
                        <p className="qodef-m-text !text-black">
                            Agentic AI Orchestration Silent real-time recovery that resolves friction before it begins.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Scalloped Background */}
                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0"
                        >
                            <path
                                d="M50 2 L58 8 L68 6 L74 14 L84 16 L86 26 L94 32 L92 42 L98 50 L92 58 L94 68 L86 74 L84 84 L74 86 L68 94 L58 92 L50 98 L42 92 L32 94 L26 86 L16 84 L14 74 L6 68 L8 58 L2 50 L8 42 L6 32 L14 26 L16 16 L26 14 L32 6 L42 8 Z"
                                fill="#edf3ed"
                            />
                        </svg>

                        {/* Icon */}
                        <Flag className="relative z-10 w-8 h-8 text-[#385b21]" />
                    </div>
                    <div className="qodef-m-content">
                        <p className="qodef-m-text !text-black">
                            Strategic Intelligence Zones Exclusive expert access in Japan, Kenya, and the Nordic Circle.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Scalloped Background */}
                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0"
                        >
                            <path
                                d="M50 2 L58 8 L68 6 L74 14 L84 16 L86 26 L94 32 L92 42 L98 50 L92 58 L94 68 L86 74 L84 84 L74 86 L68 94 L58 92 L50 98 L42 92 L32 94 L26 86 L16 84 L14 74 L6 68 L8 58 L2 50 L8 42 L6 32 L14 26 L16 16 L26 14 L32 6 L42 8 Z"
                                fill="#edf3ed"
                            />
                        </svg>

                        {/* Icon */}
                        <CheckCircle className="relative z-10 w-8 h-8 text-[#385b21]" />
                    </div>

                    <div className="qodef-m-content">
                        <p className="qodef-m-text !text-black">
                            Merchant of Record Trust One secure transaction with total North American accountability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
