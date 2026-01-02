export default function StepTravelers() {
    return (
        <>
            <h2 className="!text-2xl !md:text-3xl !font-normal !mb-6">
                Who's traveling and how many of you?
            </h2>

            <div className="!flex !gap-3 !mb-6">
                <Tab label="Solo" />
                <Tab active label="Family & Friends" />
                <Tab label="Small Group" />
            </div>

            <div className="border border-green-400 rounded-lg p-4 space-y-4">
                {[
                    ["Adults", "Ages 12 or above"],
                    ["Child", "Ages 8-12"],
                    ["Child", "Ages 3-7"],
                    ["Infant", "Ages 0-2"],
                ].map(([t, s], i) => (
                    <div key={i} className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">{t}</p>
                            <p className="text-sm text-gray-600">{s}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="w-8 h-8 border text-[#54595F] cursor-pointer rounded-full">−</button>
                            <span className="text-black">0</span>
                            <button className="w-8 h-8 border text-[#54595F] cursor-pointer rounded-full">+</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

function Tab({ label, active }: any) {
    return (
        <button
            className={`px-4 py-2 rounded-md border ${active
                    ? "!bg-[#54595F] text-white"
                    : "border-[#54595F] text-[#54595F]"
                }`}
        >
            {label}
        </button>
    );
}
