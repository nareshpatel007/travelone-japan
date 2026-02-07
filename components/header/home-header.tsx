import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./navigation-menu";

// components/Header.tsx
export default function HomeHeader() {
    return (
        <>
            <div className="hidden md:flex lg:flex px-4 md:px-8 h-20 md:h-24 items-center space-x-10">
                <Link href="/">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/logo.webp"
                        alt="Logo"
                        width={160}
                        height={80}
                        draggable="false"
                        className="object-contain h-auto w-20 md:w-26"
                    />
                </Link>
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/country">Destinations</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/about">About</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/contact">Contact</Link>
                </nav>
            </div>
        </>
    );
}
