import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./navigation-menu";

// components/Header.tsx
export default function HomeHeader() {
    return (
        <header id="qodef-page-header" role="banner">
            <div id="qodef-page-header-inner">
                <div className="qodef-header-logo">
                    <div className="qodef-height--set qodef-source--image" style={{ marginRight: "34px" }}>
                        <Image alt="Logo" width={160} height={50} src="https://ik.imagekit.io/288weifiq/landing-japan/logo.webp" />
                    </div>
                </div>
                <nav className="qodef-header-navigation" role="navigation" aria-label="Top Menu">
                    <NavigationMenu />
                </nav>
                <div className="qodef-widget-holder qodef--one"></div>
            </div>
        </header>
    );
}
