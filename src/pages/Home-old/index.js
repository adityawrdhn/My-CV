import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import { validateForm, validateInput } from 'helper/Validation'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'

/** assets */
import imgBanner from 'assets/img/hero.png'
import Emart1 from 'assets/img/emart1.png'
import Emart2 from 'assets/img/emart2.png'
import benefit1 from 'assets/img/managed.png'
import benefit2 from 'assets/img/efficient.png'
import benefit3 from 'assets/img/cashierless.png'
import benefit4 from 'assets/img/AIdriven.png'
import benefit5 from 'assets/img/rated.png'
import benefit6 from 'assets/img/dashboard.png'
import samplePartners from 'assets/img/sample-partners.png'
import arrowLeft from 'assets/img/arrow-left-1.svg'
import arrowRight from 'assets/img/arrow-right-1.svg'
import imgVidBg from 'assets/img/img-video-sample.png'
import iconWa from 'assets/img/icon-wa.svg'
import iconMail from 'assets/img/icon-mail.svg'
import iconLoc from 'assets/img/icon-location.svg'
import 'assets/css/home.css'
import Helmet from 'react-helmet'

const Home = () => {
    const { t } = useTranslation()
    const { hash } = useLocation()
    const TestiPrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div className={`testi-arrow ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowLeft} alt="testimony arrow" />
            </div>
        )
    }

    const TestiNextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div className={`testi-arrow ${className}`} style={{ ...style }} onClick={onClick}>
                <img src={arrowRight} alt="testimony arrow" />
            </div>
        )
    }

    const handleChange = (e) => {
        const { name } = e.target
        validateInput('myForm', name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = validateForm('myForm')
        if (valid) alert('data dikirim')
    }

    const bannerSettings = {
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    }

    const testiSettings = {
        autoplaySpeed: 5000,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
        nextArrow: <TestiNextArrow />,
        prevArrow: <TestiPrevArrow />,
    }

    useEffect(() => {
        const elementSlide = document.getElementsByClassName('slide')
        const bindClass = () => {
            const winTop = Math.round(window.scrollY)

            Array.from(elementSlide).forEach((el) => {
                const pos = el.offsetTop
                const halfWindow = Math.round(window.innerHeight / 2 + 200)

                if (pos < winTop + halfWindow) {
                    el.classList.add('slideUp')
                }
            })
        }
        window.addEventListener('scroll', bindClass)

        return () => {
            window.removeEventListener('scroll', bindClass)
        }
    })
    return (
        <>
            <Helmet>
                {hash === '#benefit' ? (
                    <title>{t('nav_menu.benefit')}</title>
                ) : hash === '#contact-us' ? (
                    <title>{t('nav_menu.contact_us')}</title>
                ) : (
                    <title>{t('nav_menu.home')}</title>
                )}
            </Helmet>
            <section className="section-banner">
                <Slider {...bannerSettings}>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div className="slick-item" key={index}>
                            <div className="content-banner">
                                <div className="banner-text">
                                    <h1 className="title2-sec">
                                        {t('home_slider.title.0')}
                                        <br />
                                        {t('home_slider.title.1')}
                                    </h1>
                                    <div className="sub-text">{t('home_slider.desc')}</div>
                                    <div className="badge">20+ merchants</div>
                                    <div className="badge">100+ brands</div>
                                </div>
                                <div className="banner-image">
                                    <img src={imgBanner} alt="banner home emart" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="section-about">
                <div className="row">
                    <div>
                        <LazyLoad offset={100}>
                            <img src={Emart1} alt="about emart"></img>
                        </LazyLoad>
                    </div>
                    <div className="about-desc">
                        <div>
                            <h2 className="title-sub">
                                {t('home_content.general.content.0.title')}
                            </h2>
                            <p>{t('home_content.general.content.0.desc')}</p>
                            <Link to="/about-us" className="btn btn-success btn-selengkapnya">
                                {t('home_content.general.learn_more')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="about-desc">
                        <div>
                            <h2 className="title-sub">
                                {t('home_content.general.content.1.title')}
                            </h2>
                            <p>{t('home_content.general.content.1.desc')}</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoad offset={100}>
                            <img src={Emart2} alt="system emart"></img>
                        </LazyLoad>
                    </div>
                </div>
            </section>
            <section className="section-benefits" id="benefit">
                <h1 className="txt-home title-sec">{t('home_content.benefit.title')}</h1>
                <div className="txt-home sub-text">{t('home_content.benefit.sub')}</div>

                <div className="group-benefit-card">
                    <div className="item-benefit-card slide">
                        <img src={benefit1} alt="fully managed" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.0.title')}
                            </div>
                            <p>{t('home_content.benefit.list.0.desc.0')}</p>
                            <p>{t('home_content.benefit.list.0.desc.1')}</p>
                        </div>
                    </div>
                    <div className="item-benefit-card slide">
                        <img src={benefit2} alt="convenience and eficient" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.1.title')}
                            </div>
                            <p>{t('home_content.benefit.list.1.desc.0')}</p>
                            <p>{t('home_content.benefit.list.1.desc.1')}</p>
                        </div>
                    </div>
                    <div className="item-benefit-card slide">
                        <img src={benefit3} alt="cashier less" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.2.title')}
                            </div>
                            <p>{t('home_content.benefit.list.2.desc.0')}</p>
                            <p>{t('home_content.benefit.list.2.desc.1')}</p>
                        </div>
                    </div>
                    <div className="item-benefit-card slide">
                        <img src={benefit4} alt="artificial intelligence driven" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.3.title')}
                            </div>
                            <p>{t('home_content.benefit.list.3.desc.0')}</p>
                            <p>{t('home_content.benefit.list.3.desc.1')}</p>
                        </div>
                    </div>
                    <div className="item-benefit-card slide">
                        <img src={benefit5} alt="curated products" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.4.title')}
                            </div>
                            <p>{t('home_content.benefit.list.4.desc.0')}</p>
                        </div>
                    </div>
                    <div className="item-benefit-card slide">
                        <img src={benefit6} alt="dashboard emart" />
                        <div className="content-benefit">
                            <div className="title-benefit">
                                {t('home_content.benefit.list.5.title')}
                            </div>
                            <p>{t('home_content.benefit.list.5.desc.0')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-partners">
                <h1 className="txt-home title-sec">{t('home_content.partners.title')}</h1>
                <div className="txt-home sub-text">{t('home_content.partners.sub')}</div>
                <div className="group-partners">
                    <div className="type-partners">
                        <div>
                            <div className="partners-title">
                                {t('home_content.partners.list.0.title')}
                            </div>
                            <div className="partners-title-sub">
                                {t('home_content.partners.list.0.sub')}
                            </div>
                        </div>
                        <div className="list-partners">
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                        </div>
                    </div>
                    <div className="type-partners">
                        <div>
                            <div className="partners-title">
                                {t('home_content.partners.list.1.title')}
                            </div>
                            <div className="partners-title-sub">
                                {t('home_content.partners.list.1.sub')}
                            </div>
                        </div>
                        <div className="list-partners">
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                        </div>
                    </div>
                    <div className="type-partners">
                        <div>
                            <div className="partners-title">
                                {t('home_content.partners.list.2.title')}
                            </div>
                            <div className="partners-title-sub">
                                {t('home_content.partners.list.2.sub')}
                            </div>
                        </div>
                        <div className="list-partners">
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                            <img className="item-partners" src={samplePartners} alt="partners" />
                        </div>
                    </div>
                </div>
                <div className="see-more">
                    <Link to="/partners">{t('home_content.general.see_more')} ></Link>
                </div>
            </section>
            <section className="section-testimony" id="testimony">
                <h1 className="title-sec">{t('home_content.testimony.title')}</h1>
                <span className="sub-text">{t('home_content.testimony.sub')}</span>

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
            <section className="section-banner-gallery">
                <div className="group-text">
                    <div className="title-banner">{t('home_content.gallery.title')}</div>
                    <div className="title-sub-banner">{t('home_content.gallery.sub')}</div>
                    <Link to="/galleries" className="btn btn-white btn-to-galleries">
                        {t('home_content.general.see_more')}
                    </Link>
                </div>
                <div className="group-image">
                    <img src={imgVidBg} alt="banner galleries emart" />
                </div>
            </section>
            <section className="section-contact-us">
                <h1 className="txt-home title-sec">{t('home_content.contact.title')}</h1>
                <div className="txt-home sub-text">
                    {t('home_content.contact.sub.0')}
                    <br /> {t('home_content.contact.sub.1')}
                </div>
                <form id="myForm" autoComplete="false" onSubmit={(e) => handleSubmit(e)}>
                    <div className="group-form">
                        <div className="form-left">
                            <div className="group-input">
                                <label>{t('home_content.contact.ask')}</label>
                                <select
                                    id="question-type"
                                    name="question-type"
                                    className="input-control validate[required]"
                                    defaultValue=""
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option value="" disabled>
                                        PICK QUESTION TYPE
                                    </option>
                                    <option value="vendor-question">Vendor Question</option>
                                    <option value="merchant-question">Merchant Question</option>
                                    <option value="general-question">General Question</option>
                                    <option value="advertise request">Advertise Request</option>
                                </select>
                            </div>
                            <div className="group-input">
                                <label>Name</label>
                                <input
                                    name="name"
                                    className="input-control validate[required]"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="group-input">
                                <label>Email</label>
                                <input
                                    name="email"
                                    className="input-control validate[required,email]"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="group-input">
                                <label>Phone</label>
                                <input
                                    name="phone"
                                    className="input-control validate[required,phone]"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="form-right">
                            <div className="group-input">
                                <label>Question</label>
                                <textarea
                                    name="question"
                                    className="input-control validate[required]"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="group-btn-send">
                                <div className="noted">{t('home_content.contact.note')}</div>
                                <button className="btn btn-success" type="submit">
                                    {t('home_content.general.submit')}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="group-to-contact" id="contact-us">
                    <div className="li-contact">
                        <img src={iconLoc} alt="location emart" />
                        <span>
                            <a
                                href="https://goo.gl/maps/ytkgDdKq56QTC6H9A"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                AIA Central, 30th floor. Jakarta Selatan
                            </a>
                        </span>
                    </div>
                    <div className="li-contact">
                        <img src={iconMail} alt="email emart" />
                        <span>
                            <a href="mailto:emart@elevenia.co.id">emart@elevenia.co.id</a>
                        </span>
                    </div>
                    <div className="li-contact">
                        <img src={iconWa} alt="whatsapp emart" />
                        <span>
                            <a
                                href="https://api.whatsapp.com/send?phone=6287712345678%E2%80%8B&text=Halo%20Elevenia%20Saya%20ada%20pertanyaan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +6287712345678
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
