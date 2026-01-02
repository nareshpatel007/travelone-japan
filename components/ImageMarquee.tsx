import Image from "next/image";

type MarqueeProps = {
    direction: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
    desktop: {
        image: string;
        width: number;
        height: number;
        duration: number;
    };
    mobile: {
        width: number;
        height: number;
    };
    vertical?: boolean;
};

export default function ImageMarquee({
    direction,
    desktop,
    mobile,
    vertical = false,
}: MarqueeProps) {
    const animationBase = `qode-move-marquee-${direction}`;

    return (
        <div className="elementor-element elementor-element-d6c022e elementor-hidden-laptop elementor-widget-tablet__width-inherit elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-mobile elementor-widget elementor-widget-wanderaway_core_image_marquee">
            <div className="elementor-widget-container">
                <div
                    className={`qodef-shortcode qodef-m qodef-image-marquee qodef-layout--default qodef-direction--${direction} qodef-direction-type--${vertical ? "vertical" : "horizontal"
                        }`}
                    style={vertical ? { "--qodef-double-image-height": `${desktop.height * 2}px` } as React.CSSProperties : undefined}
                >
                    {/* Desktop */}
                    <div
                        className="qodef-m-content qodef--desktop"
                        style={vertical ? { width: `${desktop.width}px` } : { height: `${desktop.height}px` }}
                    >
                        <div className="qodef-m-image-holder" style={{ opacity: 1 }}>
                            <Image width={210} height={1244} src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2024/01/Landing-marquee-img-01.png" className="attachment-full size-full" alt="s" />
                        </div>
                        <div
                            className="qodef-m-image qodef-image--original"
                            style={{
                                background: `url("${desktop.image}")`,
                                width: `${desktop.width}px`,
                                height: `${desktop.height}px`,
                                animation: `${animationBase} ${desktop.duration}s linear infinite`,
                            }}
                        />
                        <div
                            className="qodef-m-image qodef-image--copy"
                            style={{
                                background: `url("${desktop.image}")`,
                                width: `${desktop.width}px`,
                                height: `${desktop.height}px`,
                                animation: `${animationBase} ${desktop.duration}s linear infinite`,
                                animationName: `${animationBase}-copy`,
                            }}
                        />
                    </div>

                    {/* Mobile */}
                    <div
                        className="qodef-m-content qodef--mobile"
                        style={vertical ? { width: `${mobile.width}px` } : { height: `${mobile.height}px` }}
                    >
                        <div
                            className="qodef-m-image qodef-image--original"
                            style={{
                                background: `url("${desktop.image}")`,
                                width: `${mobile.width}px`,
                                height: `${mobile.height}px`,
                                animation: `${animationBase} ${desktop.duration}s linear infinite`,
                            }}
                        />
                        <div
                            className="qodef-m-image qodef-image--copy"
                            style={{
                                background: `url("${desktop.image}")`,
                                width: `${mobile.width}px`,
                                height: `${mobile.height}px`,
                                animation: `${animationBase} ${desktop.duration}s linear infinite`,
                                animationName: `${animationBase}-copy`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
