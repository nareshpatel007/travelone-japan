"use client";

export default function WhoWeAreSection() {
    return (
        <section className="bg-[#FFF9EE] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                {/* HEADING */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h3 className="text-3xl md:text-6xl leading-tight font-normal">
                        Who We Are: A Dual-Continent Powerhouse
                    </h3>

                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        TravelOne operates as a sophisticated synergy between technology and service,
                        led by our Founder and CEO, <b>Bhavin Vora</b>.
                    </p>
                </div>

                {/* TWO-PART LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* CANADA */}
                    <div className="bg-white border border-black p-8 md:p-10 text-center md:text-left space-y-4">
                        <h3 className="text-black text-md md:text-xl font-medium">
                            The Intelligence (TravelOne Canada)
                        </h3>

                        <p className="text-black text-base leading-relaxed">
                            Based in our R&D hub in Toronto, our technology team architects the proprietary
                            Agentic AI and data models that power the entire ecosystem. This is where the
                            <b> “brain” of TravelOne</b> lives.
                        </p>
                    </div>

                    {/* USA */}
                    <div className="bg-white border border-black p-8 md:p-10 text-center md:text-left space-y-4">
                        <h3 className="text-black text-md md:text-xl font-medium">
                            The Service (TravelOne USA)
                        </h3>

                        <p className="text-black text-base leading-relaxed">
                            Headquartered in the United States, our service arm acts as the
                            <b> Merchant of Record (MoR)</b>. We take full financial and operational
                            liability for your journey, providing a single point of accountability
                            that the modern traveler deserves.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
