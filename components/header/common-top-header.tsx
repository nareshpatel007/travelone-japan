"use client";

export default function CommonTopHeader() {
    return (
        <div id="qodef-top-area">
            <div id="qodef-top-area-inner">
                <div className="qodef-widget-holder qodef--left">
                    <div id="block-8" className="widget widget_block qodef-top-bar-widget">
                        <p>Made By TravelOne</p>
                    </div>
                </div>
                <div className="qodef-widget-holder qodef--right">
                    <div id="wanderaway_core_svg_icon-3"
                        className="widget widget_wanderaway_core_svg_icon qodef-top-bar-widget">
                        <div className="qodef-svg-icon-widget">
                            <a href="https://www.instagram.com/qodeinteractive/" target="_blank">
                                <div className="qodef-m-holder">
                                    <div className="qodef-m-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="12.5">
                                            <g fill="none" stroke="#ec59bb" strokeWidth="1.5"
                                                transform="translate(-.25 -.25)">
                                                <rect width="11" height="11" rx="2.5" transform="translate(1 1)"></rect>
                                                <path d="M8.504 6.181a2 2 0 1 1-1.685-1.685 2 2 0 0 1 1.685 1.685Z">
                                                </path>
                                                <path d="M9.525 3.475h.005"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="qodef-m-text">INSTAGRAM</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="block-9" className="widget widget_block widget_search qodef-top-bar-widget">
                        <form role="search" method="get"
                            className="wp-block-search__button-inside wp-block-search__icon-button qodef-search-form wp-block-search"
                            action="#">
                            <label htmlFor="qodef-search-form-1" className="qodef-search-form-label screen-reader-text">Search</label>
                            <div className="qodef-search-form-inner">
                                <input type="search" id="qodef-search-form-1" className="qodef-search-form-field " placeholder="Search here..." />
                                <button type="submit" className="qodef-search-form-button has-background qodef--button-inside qodef--has-icon">
                                    <svg className="qodef-svg--search"
                                        xmlns="http://www.w3.org/2000/svg" width="14.811" height="14.811"
                                        viewBox="0 0 14.811 14.811">
                                        <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" transform="translate(-2.25 -2.25)">
                                            <circle cx="5.5" cy="5.5" r="5.5" data-name="Ellipse 7"
                                                transform="translate(3 3)"></circle>
                                            <path d="m16 16-3.142-3.142"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
