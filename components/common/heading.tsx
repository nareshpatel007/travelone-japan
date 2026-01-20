// Define props
interface Props {
    main: string;
    sub?: string;
    marginBottom?: string;
}

export default function Heading({ main, sub }: Props) {
    return (
        <div className="text-center space-y-2 mt-4 sm:mt-6 mb-3 md:mb-5 px-4">
            <span className="block text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                {main}
            </span>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4">
                {sub}
            </p>
        </div>
    );
}
