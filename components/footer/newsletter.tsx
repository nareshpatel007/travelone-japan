"use client";

export default function NewsletterSubscribe() {
    return (
        <section className="w-full bg-[#FFF4E3] rounded-tr-4xl rounded-bl-4xl border border-[#d9cec1]/50 px-6 py-6 md:px-12 md:py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h3 className="text-black text-lg md:text-xl font-semibold">
                        Subscribe to a Newsletter.
                    </h3>
                    <p className="text-black text-sm md:text-base">
                        Subscribe for trending deals and latest updates.
                    </p>
                </div>

                {/* RIGHT FORM */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex w-full md:w-auto max-w-3xl gap-3"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 text-sm md:text-base border border-[#d9cec1] bg-white text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black rounded-none"
                    />

                    <button
                        type="submit"
                        className="px-6 md:px-8 py-3 bg-black text-white text-sm md:text-base font-semibold tracking-wide hover:bg-black/90 transition"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </section>
    );
}