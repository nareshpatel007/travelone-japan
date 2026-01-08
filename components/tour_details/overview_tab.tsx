"use client"

// Define props
type Props = {
    activeTab: string;
}

export function OverviewTabContent({ activeTab }: Props) {
    return (
        <>
            {activeTab === "highlights" && (
                <div>
                    <span className="!block !text-xl !font-bold !text-black !mb-6">Highlights</span>
                    <ul className="!space-y-0 !mb-8">
                        {[
                            "Autumn foliage at top viewing spots",
                            "Premium small-group comfort",
                            "Private English-speaking guide",
                            "Private premium transport + Shinkansen",
                            "3★ / 4★ / 5★ hotel options",
                            "Daily breakfast & 7 dinners",
                            "30+ spots across 8 cities",
                            "Mt. Fuji, Kyoto, Hiroshima, Tokyo & Osaka",
                        ].map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <span className="text-[#ef2853] font-bold text-lg">✓</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="!border-t !border-gray-300 !pt-6">
                        <span className="!text-xl !block !font-bold !text-black !mb-3">Trip Flow</span>
                        <p className="text-gray-700">
                            Tokyo (3 Nts) → Nikko → Mt.Fuji → Hakone (1 Nt) → Hiroshima (1 Nt) → Kyoto (2 Nts) → Nara → Osaka
                            (2 Nts)
                        </p>
                    </div>
                </div>
            )}

            {activeTab === "hotels" && (
                <div>
                    <span className="!text-xl !block !font-bold !text-black !mb-6">Hotels</span>
                    <div className="space-y-4">
                        <p className="text-gray-700">Carefully selected premium accommodations throughout your journey:</p>
                        <ul className="!space-y-1">
                            {[
                                "3-Star Hotels: Comfortable and well-located",
                                "4-Star Hotels: Luxury amenities and service",
                                "5-Star Hotels: Premium experience with finest facilities",
                            ].map((hotel, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-[#ef2853] font-bold">✓</span>
                                    <span>{hotel}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === "activities" && (
                <div>
                    <span className="!text-xl !block !font-bold !text-black !mb-6">Activities</span>
                    <ul className="space-y-3">
                        {[
                            "Guided temple and shrine visits",
                            "Traditional tea ceremony experience",
                            "Local market exploration",
                            "Mt. Fuji scenic tours",
                            "Hiroshima Peace Memorial visit",
                            "Kyoto historic geisha district walk",
                        ].map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <span className="text-red-600 font-bold">✓</span>
                                <span>{activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {activeTab === "inclusions-&-exclusions" && (
                <div>
                    <span className="!text-xl !block !font-bold !text-black !mb-6">Inclusions & Exclusions</span>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold text-gray-900 !block !mb-2">Included:</span>
                            <ul className="space-y-2">
                                {[
                                    "Accommodation for 8 nights",
                                    "Daily breakfast & 7 dinners",
                                    "All entrance fees",
                                    "Professional guide service",
                                    "Private transportation & Shinkansen",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-red-600 font-bold">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 !block !mb-2">Not Included:</span>
                            <ul className="!space-y-1">
                                {[
                                    "International flights",
                                    "Travel insurance",
                                    "Personal shopping & meals",
                                    "Tips and gratuities",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-gray-400">○</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "terms-&-conditions" && (
                <div>
                    <span className="!text-xl !block !font-bold !text-black !mb-6">Terms & Conditions</span>
                    <div className="!space-y-0 text-gray-700">
                        <p>
                            By booking this tour, you agree to our terms and conditions. Please read carefully before
                            confirming your reservation.
                        </p>
                        <p>All bookings are subject to availability. Minimum group size is 8 participants.</p>
                    </div>
                </div>
            )}

            {activeTab === "payment-&-cancellation" && (
                <div>
                    <span className="!text-xl !block !font-bold !text-black !mb-6">Payment & Cancellation</span>
                    <div className="!space-y-0 text-gray-700">
                        <p>
                            <strong>Payment:</strong> 30% deposit required to confirm booking. Full payment due 60 days before
                            departure.
                        </p>
                        <p>
                            <strong>Cancellation:</strong> Free cancellation up to 60 days before. 50% charge 30-60 days
                            before. No refund within 30 days.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
