import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import LightBox from "../../component/lightBox";
import LazyLoad from "react-lazyload";

/** assets */
import imgVidBg from "assets/img/img-video-sample.png";
import imgVidBg2 from "assets/img/img-video-sample2.png";
import arrowLeft from "assets/img/arrow-left.png";
import arrowRight from "assets/img/arrow-right.png";
import "assets/css/galleries.css";
import Helmet from "react-helmet";

const Galleries = () => {
    const { t } = useTranslation();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const [nav, setnav] = useState({
        nav1: null,
        nav2: null,
    });

    useEffect(() => {
        setnav({
            nav1: slider1.current,
            nav2: slider2.current,
        });

        return () => {
            setnav({
                nav1: null,
                nav2: null,
            });
        };
    }, []);

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={`arrow-left ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowLeft} alt="arrow prev" />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={`arrow-right ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowRight} alt="arrow next" />
            </div>
        );
    };

    const thumbVideoSettings = {
        asNavFor: nav.nav2,
        ref: (slider) => (slider1.current = slider),
        sliderToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: false,
        touchMove: false,
        fade: true,
        arrows: false,
    };

    const videoListSettings = {
        asNavFor: nav.nav1,
        ref: (slider) => (slider2.current = slider),
        sliderToScroll: 1,
        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>{t('nav_menu.gallery')}</title>
            </Helmet>
            <section className="section-video">
                <h1 className="title-sec">{t("gallery_content.title")}</h1>

                <div className="group-video">
                    <Slider {...thumbVideoSettings}>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                        <div>
                            <div className="thumb-video">
                                <img src={imgVidBg} alt="sample-bg" className="the-video" />
                            </div>
                        </div>
                    </Slider>
                    <div className="group-video-list">
                        <Slider {...videoListSettings}>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                            <div>
                                <div className="content-video">
                                    <img src={imgVidBg} alt="sample-bg" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="section-item-galleries">
                <div className="group-list-galleries">
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                    <LazyLoad offset={100}>
                        <LightBox className="item-galleries">
                            <img src={imgVidBg2} alt="sample-bg2" />
                        </LightBox>
                    </LazyLoad>
                </div>
            </section>
        </>
    );
};

export default Galleries;
