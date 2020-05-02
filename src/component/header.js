import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { NavHashLink as Link } from 'react-router-hash-link'
import EmartLogo from 'assets/img/emart-logo.png'
import 'assets/css/header.css'
import { useTranslation } from 'react-i18next'
import { setLang } from 'store/action/language'
import { connect } from 'react-redux'
const Header = ({ setLang, language, ...props }) => {
    const { pathname, hash } = useLocation()
    const [showNav, setshowNav] = useState(false)
    const [headerHeight, setheaderHeight] = useState(0)
    const getHeader = useRef()
    const { t } = useTranslation()
    useEffect(() => {
        const getHeaderHeight = getHeader.current.offsetHeight
        if (getHeaderHeight) {
            setheaderHeight(getHeaderHeight)
        }
    }, [getHeader])

    useEffect(() => {
        if (pathname && hash) {
            const anchor = document.querySelector(hash)
            if (anchor) {
                const offsetTop = anchor.offsetTop - 78
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                })
            } else {
                window.scrollTo(0, 0)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname, hash])

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset
        window.scrollTo({
            top: elementPosition,
            left: 0,
            behavior: 'smooth',
        })
    }

    const getActivePage = (path) => {
        if (path === pathname + hash) {
            return 'active-nav'
        } else {
            return 'unactive-nav'
        }
    }
    const handleChangeLanguage = (code) => {
        setLang(code)
    }
    return (
        <>
            <header className="container-header" ref={getHeader}>
                <div>
                    <div className="group-logo">
                        <Link to="/">
                            <img src={EmartLogo} alt="logo emart" />
                        </Link>
                        <div className="tagline">Belanja Cepat, Belanja Mudah</div>
                    </div>
                    <div className="group-nav hide-small">
                        <Link to="/about-us" className={getActivePage('/about-us')}>
                            {t('nav_menu.about_us')}
                        </Link>
                        <Link
                            to="/#benefit"
                            className={getActivePage('/#benefit')}
                            scroll={(el) => scrollWithOffset(el, headerHeight)}
                        >
                            {t('nav_menu.benefit')}
                        </Link>
                        <Link to="/partners" className={getActivePage('/partners')}>
                            {t('nav_menu.partner')}
                        </Link>
                        <Link to="/galleries" className={getActivePage('/galleries')}>
                            {t('nav_menu.gallery')}
                        </Link>
                    </div>
                    <div className="group-btn hide-small">
                        <div className="group-dual-language">
                            <Link
                                to="#"
                                className={language === 'id' ? 'active-nav' : ''}
                                onClick={() => handleChangeLanguage('id')}
                            >
                                ID
                            </Link>
                            <span>|</span>
                            <Link
                                to="#"
                                className={language === 'en' ? 'active-nav' : ''}
                                onClick={() => handleChangeLanguage('en')}
                            >
                                EN
                            </Link>
                        </div>

                        <Link
                            to="/#contact-us"
                            activeClassName="active"
                            scroll={(el) => scrollWithOffset(el, 850)}
                            className="btn btn-primary btn-contact"
                        >
                            {t('nav_menu.contact_us')}
                        </Link>
                    </div>

                    {/*navbar on mobile */}
                    <div
                        className={`menu-burger hide-medium ${showNav ? 'change' : ''}`}
                        onClick={() => setshowNav(!showNav)}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    {showNav && (
                        <div className="mobile-navbar hide-medium">
                            <Link to="/about-us" className={getActivePage('/about-us')}>
                                {t('nav_menu.about_us')}
                            </Link>
                            <Link
                                to="/#benefit"
                                className={getActivePage('/#benefit')}
                                scroll={(el) => scrollWithOffset(el, headerHeight)}
                            >
                                {t('nav_menu.benefit')}
                            </Link>
                            <Link to="/partners" className={getActivePage('/partners')}>
                                {t('nav_menu.partner')}
                            </Link>
                            <Link to="/galleries" className={getActivePage('/galleries')}>
                                {t('nav_menu.gallery')}
                            </Link>
                            <Link
                                to="/#contact-us"
                                className={getActivePage('/#contact-us')}
                                scroll={(el) => scrollWithOffset(el, 1200)}
                            >
                                {t('nav_menu.contact_us')}
                            </Link>
                            <div className="group-dual-language">
                                <Link
                                    to="#"
                                    className={language === 'id' ? 'active-nav' : ''}
                                    onClick={() => handleChangeLanguage('id')}
                                >
                                    ID
                                </Link>
                                <span>|</span>
                                <Link
                                    to="#"
                                    className={language === 'en' ? 'active-nav' : ''}
                                    onClick={() => handleChangeLanguage('en')}
                                >
                                    EN
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <div className="ghost-element" style={{ height: headerHeight }} />
        </>
    )
}
const mapStateToProps = ({ language }) => ({ language })
const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
