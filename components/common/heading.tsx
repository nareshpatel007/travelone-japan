// Define props
interface Props {
    main: string;
    sub?: string;
    marginBottom?: string;
}

export default function Heading({ main, sub, marginBottom = '16' }: Props) {
    return (
        <div className={`text-center !mb-${marginBottom}`}>
            <h2 className="font-serif text-5xl font-light !mb-2">{main}</h2>
            {sub && <p className="qodef-m-text">{sub}</p>}
        </div>
    );
}
