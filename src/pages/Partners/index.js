import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

/** assets */
import imgSample from 'assets/img/sample-kategori.png'
import arrowLeft from 'assets/img/arrow-left-1.svg'
import arrowRight from 'assets/img/arrow-right-1.svg'
import 'assets/css/partners.css'
import Helmet from 'react-helmet'

const Partners = () => {
    const { t } = useTranslation()

    const TestiPrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div className={`testi-arrow ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowLeft} alt="testi arrow" />
            </div>
        )
    }

    const TestiNextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div className={`testi-arrow ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowRight} alt="testi arrow" />
            </div>
        )
    }

    const testiSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
        nextArrow: <TestiNextArrow />,
        prevArrow: <TestiPrevArrow />,
    }

    return (
        <>
            <Helmet>
                <title>{t('nav_menu.partner')}</title>
            </Helmet>
            <section className="section-kategori">
                <h1 className="title-sec">{t('partner_content.title')}</h1>
                <span className="sub-text">{t('partner_content.sub')}</span>

                <div className="group-kategori">
                    <div className="kategori-item">
                        <img src={imgSample} alt="instant food" />
                        <div className="kategori-name">Instant Food</div>
                    </div>
                    <div className="kategori-item">
                        <img src={imgSample} alt="snacks" />
                        <div className="kategori-name">Snacks</div>
                    </div>
                    <div className="kategori-item">
                        <img src={imgSample} alt="beverage" />
                        <div className="kategori-name">Beverages</div>
                    </div>
                    <div className="kategori-item">
                        <img src={imgSample} alt="medicines" />
                        <div className="kategori-name">Medicines</div>
                    </div>
                    <div className="kategori-item">
                        <img src={imgSample} alt="accessories" />
                        <div className="kategori-name">Accessories</div>
                    </div>
                </div>
            </section>
            <section className="section-testimony">
                <h1 className="title-sec">{t('partner_content.testimony.title')}</h1>
                <span className="sub-text">{t('partner_content.testimony.sub')}</span>

                <div className="group-testi-slider">
                    <Slider {...testiSettings}>
                        <div className="slick-item">
                            <div className="testimony-card">
                                <div className="testimony-content">
                                    <div className="testi-text">
                                        “Restock cepat sekali dan tepat waktu, jadi barang tidak
                                        pernah kosong”
                                    </div>
                                    <div className="testi-name">
                                        Edward Newgate
                                        <span>Manager AIA Insurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="testimony-card">
                                <div className="testimony-content">
                                    <div className="testi-text">
                                        “Restock cepat sekali dan tepat waktu, jadi barang tidak
                                        pernah kosong”
                                    </div>
                                    <div className="testi-name">
                                        Edward Newgate
                                        <span>Manager AIA Insurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="testimony-card">
                                <div className="testimony-content">
                                    <div className="testi-text">
                                        “Restock cepat sekali dan tepat waktu, jadi barang tidak
                                        pernah kosong”
                                    </div>
                                    <div className="testi-name">
                                        Edward Newgate
                                        <span>Manager AIA Insurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="testimony-card">
                                <div className="testimony-content">
                                    <div className="testi-text">
                                        “Restock cepat sekali dan tepat waktu, jadi barang tidak
                                        pernah kosong”
                                    </div>
                                    <div className="testi-name">
                                        Edward Newgate
                                        <span>Manager AIA Insurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Partners
