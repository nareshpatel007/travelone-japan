"use client"

export default function BestValueGuarantee() {
    return (
        <div className="bg-amber-50 py-10 md:py-16 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">Best Value Guarantee</h3>
                    <span className="text-sm md:text-lg text-[#C46A3A] font-medium">
                        Your satisfaction is our priority
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {[
                        { icon: "✓", title: "Free Cancellation", desc: "Cancel up to 30 days before" },
                        { icon: "✓", title: "Reserve with a small deposit", desc: "Book your tour with a small deposit" },
                        { icon: "✓", title: "Lowest price guarantee", desc: "We guarantee the lowest price" },
                        { icon: "✓", title: "Expert Guides", desc: "Experienced professionals with years of experience" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#C46A3A] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="text-md md:text-lg lg:text-xl mb-3 text-teal-700">{item.icon}</div>
                            <span className="font-semibold block mb-2">{item.title}</span>
                            <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
