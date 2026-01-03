import Image from "next/image";
import Link from "next/link";

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
                    <ul id="menu-landing-anchor-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3487">
                            <Link href="/">
                                <span className="qodef-menu-item-text">Home</span>
                            </Link>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3495">
                            <Link href="/contact">
                                <span className="qodef-menu-item-text">Contact Us</span>
                            </Link>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3492">
                            <Link href="#">
                                <span className="qodef-menu-item-text">Blog</span>
                            </Link>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3491">
                            <Link href="#">
                                <span className="qodef-menu-item-text">Shop</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="qodef-widget-holder qodef--one"></div>
            </div>
        </header>
    );
}
