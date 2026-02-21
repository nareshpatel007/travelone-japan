"use client";

interface Props {
    title: string;
}

export default function QuestionHeading({ title }: Props) {
    // If empty, return null
    if (!title) return null;

    return (
        <div className="text-center py-5">
            <h2 className="text-[30px] px-2 pt-15 font-[500] leading-tight">
                {title}
            </h2>
        </div>
    );
}