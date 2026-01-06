"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PassengerForm() {
    // Define state
    const [title, setTitle] = useState("Mr.");
    const [showTitleMenu, setShowTitleMenu] = useState(false);

    return (
        <div className="!border !border-border !rounded-lg !p-6 !bg-card !mb-4">
            <span className="!text-xl font-semibold text-foreground mb-6 text-black !mb-4 !block">Lead Passenger Details</span>
            <div className="!space-y-4">
                <div className="!grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="relative">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Title</label>
                        <button
                            onClick={() => setShowTitleMenu(!showTitleMenu)}
                            className="!w-full !px-4 !py-3 border border-[#e8e8e8] rounded-sm bg-input text-foreground flex items-center justify-between hover:border-accent transition-colors"
                        >
                            <span>{title}</span>
                            <ChevronDown size={18} className="text-muted-foreground" />
                        </button>
                        {showTitleMenu && (
                            <div className="!absolute !top-full !left-0 !right-0 !mt-0 !bg-white !border !border-[#e8e8e8] !rounded-sm !shadow-lg !z-[99999]">
                                {["Mr.", "Mrs.", "Ms.", "Dr."].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setTitle(option)
                                            setShowTitleMenu(false)
                                        }}
                                        className="!block !w-full !text-left px-4 py-3 hover:bg-secondary text-foreground first:rounded-t-lg last:rounded-b-lg transition-colors"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Special Requirements</label>
                    <textarea
                        placeholder="Any special requests or requirements?"
                        rows={2}
                        className="!w-full px-4 py-3 border border-border !h-30 rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 resize-none"
                    />
                </div>
            </div>
        </div>
    )
}
