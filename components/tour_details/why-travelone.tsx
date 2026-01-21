"use client"

export default function WhyTravelOne() {
    return (
        <div className="bg-amber-50 py-10 md:py-16 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        Why Travel with TravelOne
                    </h3>
                    <span className="text-sm md:text-lg text-[#C46A3A] font-medium">
                        We are committed to providing you with the best possible experience
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">Transparent Planning & Pricing</span>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">Local Experts & On-Ground Support</span>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">Custom Itineraries Based on Your Style</span>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">24x7 Assistance During Travel</span>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">Enhance Trip Experience By 50%</span>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-center">
                        <span className="text-sm md:text-base font-medium">4.8 Rated by Real Travelers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}