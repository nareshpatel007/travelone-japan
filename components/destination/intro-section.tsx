"use client";

// Define inferface
interface Props {
    pageData: any;
}

export default function IntroSection({ pageData }: Props) {
    return (
        <section className="max-w-7xl md:max-w-5xl mx-auto px-5 md:px-0 py-12">
            <div className="text-center space-y-8">
                {/* Heading */}
                <h3 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                    {pageData?.single?.extra_data?.first_desc_title}
                </h3>

                {/* Underline */}
                <div className="flex justify-center">
                    <span className="w-20 h-1 bg-black" />
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-black leading-relaxed">
                    {pageData?.single?.extra_data?.first_desc}
                </p>
            </div>
        </section>
    );
}