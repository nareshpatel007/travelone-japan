import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define array
const team = [
    {
        name: "Vipul Shah",
        role: "CTO",
        image: "https://ik.imagekit.io/288weifiq/team/img_team_63e33ba779f7f6-39405930-32732924.png",
        linkedin: "https://www.linkedin.com/in/shahvipulp/",
    },
    {
        name: "Pranav Amin",
        role: "B2B Marketing and Sales - USA Region",
        image: "https://ik.imagekit.io/288weifiq/team/img_team_63e33bb2382cf1-81493713-48358927.png",
    },
    {
        name: "Louise Berg",
        role: "Social Media & Destination Expert",
        image: "https://ik.imagekit.io/288weifiq/team/img_team_63e33bbf427638-77996729-78363986.png",
    },
    {
        name: "Michael Bronfman",
        role: "Sales Manager - Canada",
        image: "https://ik.imagekit.io/288weifiq/team/img_team_63e33bceb55f81-24897182-80425447.png",
    },
];

export default function LeadershipTeam() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-16 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-[520px] aspect-[4/3]">
                        <Image
                            src="https://ik.imagekit.io/288weifiq/nextjs/bhavin_solo.jpg"
                            alt="About TravelOne"
                            fill
                            priority
                            className="object-cover rounded-md shadow-xl"
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left max-w-xl mx-auto space-y-6">
                    <h2 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                        The Leadership
                    </h2>

                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        Bhavin Vora | Founder & CEO
                    </p>

                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        With nearly two decades of experience leading digital transformation for global retail icons like the Flamingo Transworld, Riya Travel, Bhavin Vora brings "Big Data" precision to the world of travel. An expert in AI Orchestration and consumer behavior, Bhavin founded TravelOne to solve the "Complexity Crisis" in the travel industry and bring high-scale personalization to North America.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start gap-4 pt-4">
                        <Link href="https://www.linkedin.com/in/bhavinofficial/" target="_blank">
                            <span className="w-10 h-10 rounded-full bg-amber-50 text-black border hover:bg-black hover:text-white flex items-center justify-center cursor-pointer">
                                <Linkedin className="h-5 w-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="group flex flex-col text-center"
                    >
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 space-y-1">
                            <h3 className="text-base md:text-2xl font-medium text-black">
                                {member.name}
                            </h3>
                            <p className="text-sm md:text-base text-black">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
