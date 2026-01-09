import Link from "next/link";

export default function NavigationMenu() {
    return (
        <ul className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <Link href="/">
                    <span className="qodef-menu-item-text">Home</span>
                </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <Link href="/tours">
                    <span className="qodef-menu-item-text">Tours</span>
                </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <Link href="/about">
                    <span className="qodef-menu-item-text">About Us</span>
                </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <Link href="/contact">
                    <span className="qodef-menu-item-text">Contact Us</span>
                </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <Link href="/blog">
                    <span className="qodef-menu-item-text">Blog</span>
                </Link>
            </li>
        </ul>
    );
}
