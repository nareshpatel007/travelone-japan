// Define props
interface Props {
    main: string;
    sub?: string;
    marginBottom?: string;
}

export default function Heading({ main, sub, marginBottom = '16' }: Props) {
    return (
        <div className={`text-center space-y-2 mb-0 md:mb-${marginBottom}`}>
            <h2 className="font-serif text-5xl font-light">{main}</h2>
            {sub && <p className="qodef-m-text">{sub}</p>}
        </div>
    );
}
