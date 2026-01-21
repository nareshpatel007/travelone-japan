// Define props
interface Props {
    main: string;
    sub?: string;
}

export default function PageHeading({ main, sub }: Props) {
    return (
        <div className="w-full text-center px-4 sm:px-6 lg:px-0 mb-8 md:mb-12">
            {/* MAIN HEADING */}
            <h1 className="text-black text-2xl md:text-5xl font-medium leading-tight">
                {main}
            </h1>

            {/* OPTIONAL SUB HEADING */}
            {sub && (
                <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                    {sub}
                </p>
            )}
        </div>
    );
}