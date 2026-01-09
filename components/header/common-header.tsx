import Image from "next/image";
import Link from "next/link";
import { CommonPlanTripModal } from "../plan_your_trip/common-popup";
import { useState } from "react";
import { User, User2, UserCircle2 } from "lucide-react";
import { LoginModal } from "../common/login-modal";
import NavigationMenu from "./navigation-menu";

// components/Header.tsx
export default function CommonHeader() {
    // Define state
    const [isOpenPlanYourTrip, setIsOpenPlanYourTrip] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    return (
        <>
            <header id="qodef-page-header" role="banner">
                <div id="qodef-page-header-inner">
                    <div className="qodef-header-wrapper">
                        <div className="qodef-header-logo">
                            <Link href="/">
                                <Image alt="Logo" width={160} height={100} src="https://stage.travelone.io/html/home/assets/images/logo.png" />
                            </Link>
                        </div>
                        <nav className="qodef-header-navigation" role="navigation" aria-label="Top Menu">
                            <NavigationMenu />
                        </nav>
                        <div className="qodef-widget-holder qodef--one">
                            <div id="wanderaway_core_woo_dropdown_cart-3" className="widget widget_wanderaway_core_woo_dropdown_cart qodef-header-widget-area-one" data-area="header-widget-one">
                                <div className="qodef-widget-dropdown-cart-outer" style={{ padding: "0px 0 0 0" }}>
                                    <div className="qodef-widget-dropdown-cart-inner">
                                        <Link className="qodef-m-opener" href="/cart">
                                            <span className="qodef-m-opener-icon"><svg className="qodef-svg--cart" xmlns="http://www.w3.org/2000/svg" width="22" height="17.316">
                                                <path d="m21.957 3.91-2.578 8.035a1.247 1.247 0 0 1-1.289.988H8.207a1.234 1.234 0 0 1-1.289-.9l-3.781-10.1H.945a.909.909 0 0 1-.666-.279A.961.961 0 0 1 0 .945.909.909 0 0 1 .279.279.909.909 0 0 1 .945 0h2.836a.991.991 0 0 1 .945.645L8.594 11H17.7l2.02-6.445H8.465a.909.909 0 0 1-.665-.276.909.909 0 0 1-.279-.666.961.961 0 0 1 .279-.709.909.909 0 0 1 .666-.279h12.59a.909.909 0 0 1 .773.43.973.973 0 0 1 .128.855ZM8.723 14.179a1.527 1.527 0 0 0-1.117.473 1.311 1.311 0 0 0-.473 1.074 1.527 1.527 0 0 0 .473 1.117 1.527 1.527 0 0 0 1.117.473 1.481 1.481 0 0 0 1.077-.472 1.527 1.527 0 0 0 .473-1.117 1.311 1.311 0 0 0-.473-1.075 1.481 1.481 0 0 0-1.077-.473Zm8.551 0a1.311 1.311 0 0 0-1.074.473 1.311 1.311 0 0 0-.473 1.074 1.527 1.527 0 0 0 .473 1.118 1.311 1.311 0 0 0 1.074.473 1.527 1.527 0 0 0 1.117-.473 1.528 1.528 0 0 0 .473-1.117 1.311 1.311 0 0 0-.473-1.074 1.527 1.527 0 0 0-1.118-.474Z">
                                                </path>
                                            </svg></span>
                                            <span className="qodef-m-opener-count-holder">
                                                <svg className="qodef-svg--cart-count" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <path d="M1759.835,761.127c-.338.949-2.086,1.17-2.681,1.931-.617.789-.36,2.456-1.183,3.011s-2.382-.241-3.353.047-1.772,1.787-2.8,1.772c-.991-.015-1.751-1.531-2.74-1.856s-2.557.426-3.35-.146c-.822-.592-.5-2.256-1.081-3.047s-2.319-1.077-2.619-2.01.971-2.089.988-3.076c.016-.952-1.224-2.154-.885-3.1s2.086-1.17,2.681-1.931c.617-.789.36-2.456,1.184-3.011s2.382.241,3.353-.047,1.772-1.787,2.8-1.772c.991.015,1.751,1.531,2.74,1.856s2.557-.426,3.35.146c.822.592.5,2.256,1.081,3.047s2.319,1.078,2.619,2.01-.971,2.089-.987,3.076C1758.934,758.975,1760.174,760.178,1759.835,761.127Z" transform="translate(-1739.982 -747.888)" fill="currentColor">
                                                    </path>
                                                </svg> <span className="qodef-m-opener-count">0</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_wanderaway_core_woo_dropdown_cart qodef-header-widget-area-one">
                                <User className="h-6 w-6 text-[#333] mr-5 cursor-pointer" onClick={() => setIsOpenLogin(true)} />

                                <button
                                    className="bg-white border-1 border-black text-black hover:bg-black hover:text-white hover:border-[#333] cursor-pointer px-4 py-2 rounded font-semibold text-sm"
                                    onClick={() => setIsOpenPlanYourTrip(true)}
                                >
                                    Plan Your Trip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qodef-header-sticky qodef-custom-header-layout qodef-appearance--down">
                    <div className="qodef-header-sticky-inner ">
                        <a className="qodef-header-logo-link qodef-height--set qodef-source--image" href="#">
                            <Image alt="Logo" width={100} height={100} src="/assets/images/logo.png" />
                        </a>
                        <nav className="qodef-header-navigation" role="navigation" aria-label="Top Menu">
                            <NavigationMenu />
                        </nav>
                        <div className="qodef-widget-holder qodef--one">
                            <div id="wanderaway_core_side_area_opener-4"
                                className="widget widget_wanderaway_core_side_area_opener qodef-sticky-right"><a
                                    href="javascript:void(0)"
                                    className="qodef-opener-icon qodef-m qodef-source--predefined qodef-side-area-opener">
                                    <span className="qodef-m-icon qodef--open">
                                        <svg className="qodef-svg--menu" xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21">
                                            <line x1="19" y1="3" x2="2" y2="3"></line>
                                            <line x1="19" y1="8" x2="2" y2="8"></line>
                                            <line x1="19" y1="13" x2="2" y2="13"></line>
                                            <line x1="19" y1="18" x2="2" y2="18"></line>
                                        </svg> </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <LoginModal open={isOpenLogin} onOpenChange={setIsOpenLogin} />
            <CommonPlanTripModal open={isOpenPlanYourTrip} onOpenChange={setIsOpenPlanYourTrip} />
        </>
    );
}
