"use client"

import { useState } from "react";
import { ItineraryTab } from "./itinerary-tab";
import { WalletNotesTab } from "./wallet-notes";
import { TermsTab } from "./terms-tab";
import TravellerInfoTab from "./traveller-info";

// Define props
interface Props {
    itineraryData: any;
    walletNotes: any;
    termsData: any;
    paymentSchedule: any;
    cancellationPolicy: any;
}

export default function TabContent({ itineraryData, walletNotes, termsData, paymentSchedule, cancellationPolicy }: Props) {
    // Define state
    const [activeMainTab, setActiveMainTab] = useState("itinerary");

    return (
        <div className="bg-white p-5 md:p-10">
            <div className="border-b border-gray-200">
                <div className="flex gap-12">
                    <button
                        onClick={() => setActiveMainTab("itinerary")}
                        className={`pb-4 text-lg font-medium transition-colors capitalize cursor-pointer ${activeMainTab === "itinerary" ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                            }`}
                    >
                        Itinerary
                    </button>
                    <button
                        onClick={() => setActiveMainTab("travellers_info")}
                        className={`pb-4 text-lg font-medium transition-colors capitalize cursor-pointer ${activeMainTab === "travellers_info" ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                            }`}
                    >
                        Traveller's Info
                    </button>
                    <button
                        onClick={() => setActiveMainTab("payments")}
                        className={`pb-4 text-lg font-medium transition-colors capitalize cursor-pointer ${activeMainTab === "payments" ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                            }`}
                    >
                        Payments
                    </button>
                    <button
                        onClick={() => setActiveMainTab("wallet_notes")}
                        className={`pb-4 text-lg font-medium transition-colors capitalize cursor-pointer ${activeMainTab === "wallet_notes" ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                            }`}
                    >
                        Credit / Debit Notes
                    </button>
                    <button
                        onClick={() => setActiveMainTab("terms")}
                        className={`pb-4 text-lg font-medium transition-colors capitalize cursor-pointer ${activeMainTab === "terms" ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                            }`}
                    >
                        Terms
                    </button>
                </div>
            </div>

            {/* Itinerrary tab */}
            {activeMainTab === "itinerary" && <ItineraryTab itineraryData={itineraryData} />}
            {activeMainTab === "wallet_notes" && <WalletNotesTab walletNotes={walletNotes} />}
            {activeMainTab === "travellers_info" && <TravellerInfoTab />}
            {activeMainTab === "terms" && <TermsTab
                termsData={termsData}
                paymentSchedule={paymentSchedule}
                cancellationPolicy={cancellationPolicy}
            />}
        </div>
    )
}
