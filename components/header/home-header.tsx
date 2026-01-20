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
                        src="https://stage.travelone.io/html/home/assets/images/logo.png"
                        alt="Logo"
                        width={160}
                        height={100}
                    />
                </Link>
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/">Home</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/tour">Tours</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/about">About Us</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/contact">Contact Us</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/blog">Blog</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/booking">Booking</Link>
                </nav>
            </div>
        </>
    );
}
