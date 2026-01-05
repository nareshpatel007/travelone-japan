"use client";

interface Props {
    title: string;
    subtitle?: string;
}

export default function QuestionHeading({ title, subtitle }: Props) {
    return (
        <div className="!text-center !mb-4">
            <h2 className="!text-[30px] !px-2 !pt-15 !font-[500] !mb-1">{title}</h2>
            {subtitle && <p className="!text-[17px]">{subtitle}</p>}
        </div>
    );
}