import { isLoggedIn } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { LoginModal } from "../common/login-modal";
import { useState } from "react";

// components/Header.tsx
export default function HomeHeader() {
    // Define state
    const [openLogin, setOpenLogin] = useState(false);

    // Get login data
    const is_login_user = isLoggedIn();

    return (
        <>
            <div className="hidden md:flex lg:flex px-4 md:px-8 h-20 md:h-24 items-center space-x-10">
                <Link href="/">
                    <Image
                        src="/common/logo.webp"
                        alt="Logo"
                        width={160}
                        height={100}
                        className="cursor-pointer w-32 md:w-40"
                        draggable="false"
                    />
                </Link>
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/country">Destinations</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/about">About</Link>
                    <Link className="hover:underline underline-offset-5 cursor-pointer" href="/contact">Contact</Link>
                    {is_login_user && <Link className="hover:underline underline-offset-5 cursor-pointer" href="/bookings">My Bookings</Link>}
                    {!is_login_user && <Link onClick={() => setOpenLogin(true)} className="hover:underline underline-offset-5 cursor-pointer" href="#">Login</Link>}
                </nav>
            </div>

            <LoginModal open={openLogin} onOpenChange={setOpenLogin} />
        </>
    );
}
