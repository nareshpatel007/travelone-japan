// Define props
interface Props {
    main: string;
    sub?: string;
}

export default function Heading({ main, sub }: Props) {
    return (
        <div className="text-center !mb-16">
            <h2 className="font-serif text-5xl font-light !mb-2">{main}</h2>
            {sub && <p className="qodef-m-text">{sub}</p>}
        </div>
    );
}
