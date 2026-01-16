// Define props
interface Props {
    main: string;
    sub?: string;
    marginBottom?: string;
}

export default function Heading({ main, sub }: Props) {
    return (
        <div className="text-center space-y-2 mt-5 mb-2 md:mb-5">
            <span className="text-2xl md:text-4xl font-bold text-gray-900 block">{main}</span>
            <p className="text-gray-600 max-w-2xl mt-4 mx-auto">{sub}</p>
        </div>
    );
}
