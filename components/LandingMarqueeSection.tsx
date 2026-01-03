import Image from "next/image";

// Define props
interface Props {
    setOpenPlanYourTripModel: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LandingMarqueeSection({ setOpenPlanYourTripModel }: Props) {
    return (
        <div className="elementor-element elementor-element-3150fd8 e-con-full e-flex qodef-container-heights--disabled e-con e-parent e-lazyloaded">
            <div className="elementor-element elementor-element-5b79242 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                <div className="elementor-element elementor-element-ec76f25 elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-wanderaway_core_section_title">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                            <h1 className="qodef-m-title">Where All the Stories From Your Travels Find Their Home.</h1>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-bb5aff5 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile_extra__width-initial elementor-widget-laptop__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-wanderaway_core_info_section">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-info-section qodef-layout--background-text qodef-background-text-pos--top-left">
                            <div className="qodef-m-background-text"></div>
                            <div className="qodef-m-info">
                                <p className="qodef-m-text">Welcome to TravelOne, a theme specifically made for sharing all your travel adventures with your reading audience!</p>
                                <div className="qodef-m-button !mt-5">
                                    <span className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link qodef-m-text cursor-pointer" onClick={() => setOpenPlanYourTripModel(true)}>Plan Your Trip</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="elementor-element elementor-element-04bed72 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                <div className="elementor-element elementor-element-d6c022e elementor-hidden-laptop elementor-widget-tablet__width-inherit elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--right-to-left qodef-direction-type--horizontal">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "216px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-2.png')",
                                        width: "1066px",
                                        height: "216px",
                                        animation: "qode-move-marquee-right-to-left 23s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-2.png')",
                                        width: "1066px",
                                        height: "216px",
                                        animation: "qode-move-marquee-right-to-left 23s linear infinite",
                                        animationName: "qode-move-marquee-right-to-left-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "108px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-2.png')",
                                        width: "533px",
                                        height: "108px",
                                        animation: "qode-move-marquee-right-to-left 23s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-2.png')",
                                        width: "533px",
                                        height: "108px",
                                        animation: "qode-move-marquee-right-to-left 23s linear infinite",
                                        animationName: "qode-move-marquee-right-to-left-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-214018f elementor-hidden-laptop elementor-widget-tablet__width-inherit elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="214018f" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div
                            className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--right-to-left qodef-direction-type--horizontal">
                            <div className="qodef-m-content qodef--desktop" style={{ height: "200px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-1.png')",
                                        width: "981px",
                                        height: "200px",
                                        animation: "qode-move-marquee-right-to-left 25s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-1.png')",
                                        width: "981px",
                                        height: "200px",
                                        animation: "qode-move-marquee-right-to-left 25s linear infinite",
                                        animationName: "qode-move-marquee-right-to-left-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ height: "100px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-1.png')",
                                        width: "490.5px",
                                        height: "100px",
                                        animation: "qode-move-marquee-right-to-left 25s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-1.png')",
                                        width: "490.5px",
                                        height: "100px",
                                        animation: "qode-move-marquee-right-to-left 25s linear infinite",
                                        animationName: "qode-move-marquee-right-to-left-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-f76475a elementor-hidden-laptop elementor-widget-tablet__width-inherit elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="f76475a" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div
                            className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--left-to-right qodef-direction-type--horizontal">
                            <div className="qodef-m-content qodef--desktop" style={{ height: "180px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-1.png')",
                                        width: "1054px",
                                        height: "180px",
                                        animation: "qode-move-marquee-left-to-right 23s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-1.png')",
                                        width: "1054px",
                                        height: "180px",
                                        animation: "qode-move-marquee-left-to-right 23s linear infinite",
                                        animationName: "qode-move-marquee-left-to-right-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ height: "90px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-1.png')",
                                        width: "527px",
                                        height: "90px",
                                        animation: "qode-move-marquee-left-to-right 23s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-1.png')",
                                        width: "527px",
                                        height: "90px",
                                        animation: "qode-move-marquee-left-to-right 23s linear infinite",
                                        animationName: "qode-move-marquee-left-to-right-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-5b6eb5c elementor-hidden-laptop elementor-widget-tablet__width-inherit elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="5b6eb5c" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div
                            className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--left-to-right qodef-direction-type--horizontal">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "164px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-2.png')",
                                        width: "164px",
                                        height: "164px",
                                        animation: "qode-move-marquee-left-to-right 25s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-2.png')",
                                        width: "164px",
                                        height: "164px",
                                        animation: "qode-move-marquee-left-to-right 25s linear infinite",
                                        animationName: "qode-move-marquee-left-to-right-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "82px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-2.png')",
                                        width: "82px",
                                        height: "82px",
                                        animation: "qode-move-marquee-left-to-right 25s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-2.png')",
                                        width: "82px",
                                        height: "82px",
                                        animation: "qode-move-marquee-left-to-right 25s linear infinite",
                                        animationName: "qode-move-marquee-left-to-right-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-0eec80c elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="0eec80c" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--top-to-bottom qodef-direction-type--vertical qodef--init">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "210px" }}>
                                <div className="qodef-m-image-holder">
                                    <Image decoding="async" width="210" height="1244"
                                        src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png"
                                        className="attachment-full size-full" alt="s" />
                                </div>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png')",
                                        width: "210px",
                                        height: "1244px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png')",
                                        width: "210px",
                                        height: "1244px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite",
                                        animationName: "qode-move-marquee-top-to-bottom-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "105px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png')",
                                        width: "105px",
                                        height: "622px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png')",
                                        width: "105px",
                                        height: "622px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite",
                                        animationName: "qode-move-marquee-top-to-bottom-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-e1bedbf elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="e1bedbf" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--bottom-to-top qodef-direction-type--vertical qodef--init">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "213px" }}>
                                <div className="qodef-m-image-holder">
                                    <Image decoding="async" width="213" height="1219"
                                        src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-2.png"
                                        className="attachment-full size-full" alt="s" />
                                </div>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-2.png')",
                                        width: "213px",
                                        height: "1219px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-2.png')",
                                        width: "213px",
                                        height: "1219px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite",
                                        animationName: "qode-move-marquee-bottom-to-top-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "106.5px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-2.png')",
                                        width: "106.5px",
                                        height: "609.5px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-2.png')",
                                        width: "106.5px",
                                        height: "609.5px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite",
                                        animationName: "qode-move-marquee-bottom-to-top-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-b5459c5 elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="b5459c5" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--top-to-bottom qodef-direction-type--vertical qodef--init">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "250px" }}>
                                <div className="qodef-m-image-holder">
                                    <Image decoding="async" width="250" height="1233"
                                        src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png"
                                        className="attachment-full size-full" alt="s" />
                                </div>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png')",
                                        width: "250px",
                                        height: "1233px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png')",
                                        width: "250px",
                                        height: "1233px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite",
                                        animationName: "qode-move-marquee-top-to-bottom-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "125px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png')",
                                        width: "125px",
                                        height: "616.5px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png')",
                                        width: "125px",
                                        height: "616.5px",
                                        animation: "qode-move-marquee-top-to-bottom 50s linear infinite",
                                        animationName: "qode-move-marquee-top-to-bottom-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-5f6eff6 elementor-hidden-mobile elementor-hidden-laptop elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-wanderaway_core_image_marquee"
                    data-id="5f6eff6" data-element_type="widget"
                    data-widget_type="wanderaway_core_image_marquee.default">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--bottom-to-top qodef-direction-type--vertical qodef--init">
                            <div className="qodef-m-content qodef--desktop" style={{ width: "212px" }}>
                                <div className="qodef-m-image-holder">
                                    <Image decoding="async" width="212" height="1374"
                                        src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png"
                                        className="attachment-full size-full" alt="s" />
                                </div>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png')",
                                        width: "212px",
                                        height: "1374px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png')",
                                        width: "212px",
                                        height: "1374px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite",
                                        animationName: "qode-move-marquee-bottom-to-top-copy"
                                    }}>
                                </div>
                            </div>
                            <div className="qodef-m-content qodef--mobile" style={{ width: "106px" }}>
                                <div className="qodef-m-image qodef-image--original"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png')",
                                        width: "106px",
                                        height: "687px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite"
                                    }}>
                                </div>
                                <div className="qodef-m-image qodef-image--copy"
                                    style={{
                                        background: "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png')",
                                        width: "106px",
                                        height: "687px",
                                        animation: "qode-move-marquee-bottom-to-top 50s linear infinite",
                                        animationName: "qode-move-marquee-bottom-to-top-copy"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
