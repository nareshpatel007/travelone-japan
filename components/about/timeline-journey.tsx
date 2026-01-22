// Define array
const milestones = [
    {
        year: "2010 – 2022",
        description: "The Foundation Founder Bhavin Vora leads digital transformation for global giants Flamingo Transworld, Riya Travel, mastering large-scale data and retail logistics.",
    },
    {
        year: "2023",
        description: 'The Blueprint Initial research into the "Complexity Crisis" in travel. Conceptualization of a unified orchestration layer to replace fragmented booking systems.'
    },
    {
        year: "2024",
        description: "Intelligence Hub Establishment of TravelOne Canada. Launch of our Toronto R&D center focused on architecting our proprietary Agentic AI.",
    },
    {
        year: "2025",
        description: "Market Launch Establishment of TravelOne USA. Secured licensure as a Merchant of Record (MoR) to provide bank-grade security and full transaction accountability.",
    },
    {
        year: "2026",
        description: "Global Scale Activation of our Global Intelligence Network across 20+ countries and launch of the Persona Engine to automate deep travel personalization",
    }
];

export default function TravelOneJourney() {
    return (
        <div className="bg-[#FFF9EE]">
            <div className="max-w-7xl mx-auto px-5 md:px-0 py-10 md:py-16 space-y-10">
                <div className="text-black text-center">
                    <h1 className="text-3xl md:text-6xl leading-tight font-normal">
                        The TravelOne Evolution
                    </h1>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black" />
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                    <h3 className="text-black font-bold text-md md:text-xl">{milestone.year}</h3>
                                    <span className="text-sm md:text-base text-black">{milestone.description}</span>
                                </div>
                                <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow z-10" />
                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
