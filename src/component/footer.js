import React from "react";
import mobileEmart from "assets/img/silver.png";
import { NavHashLink as Link } from "react-router-hash-link";
import phone from "assets/img/phone.svg";
import mail from "assets/img/mail.svg";
import fb from "assets/img/icon-fb.svg";
import tw from "assets/img/icon-tw.svg";
import ig from "assets/img/icon-ig.svg";
import yt from "assets/img/icon-yt.svg";
import "assets/css/footer.css";

const footer = () => {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scrollTo({
            top: elementPosition || el.offsetTop,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="container-footer">
            <div className="footer-img">
                <img src={mobileEmart} alt="mobile-sample-emart" className="hide-small" />
            </div>
            <div className="footer-info">
                <div className="group-info">
                    <div className="comp">
                        <div>
                            <h2>Address</h2>
                            <p>
                                AIA Central Lt.30
                                <br /> Jl. Jend. Sudirman No.Kav 48A,
                                <br /> RT.5/RW.4, Karet Semanggi, Setia Budi
                                <br /> Kota Jakarta Selatan
                                <br /> Daerah Khusus Ibukota Jakarta
                                <br /> 12930
                            </p>
                        </div>
                        <div>
                            <h2>Navigate</h2>
                            <div className="footer-nav">
                                <Link to="/about-us">About Us</Link>
                                <Link to="/#benefit" scroll={el => scrollWithOffset(el, 78)}>Benefit</Link>
                                <Link to="/partners">Clients & Partners</Link>
                                <Link to="/#testimony" scroll={el => scrollWithOffset(el, 90)}>Testimony</Link>
                                <Link to="/galleries">Galleries</Link>
                            </div>
                        </div>
                    </div>

                    <div className="soc">
                        <div className="soc-item">
                            <h2>Ikuti Kami</h2>
                            <div className="soc-icon">
                                <a href="https://www.facebook.com/elevenia.co.id" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="icon-facebook-emart" />
                                </a>
                                <a href="https://twitter.com/eleveniaID" target="_blank" rel="noopener noreferrer">
                                    <img src={tw} alt="icon-twitter-emart" />
                                </a>
                                <a href="http://www.youtube.com/eleveniaID" target="_blank" rel="noopener noreferrer">
                                    <img src={yt} alt="icon-youtube-emart" />
                                </a>
                                <a href="http://instagram.com/eleveniaID" target="_blank" rel="noopener noreferrer">
                                    <img src={ig} alt="icon-instagram-emart" />
                                </a>
                            </div>
                        </div>

                        <div className="soc-item">
                            <h2>Customer Support</h2>
                            <div className="contact">
                                <div>
                                    <img src={phone} alt="icon-phone-emart" />
                                    <a href="tel:1500211">1500 211</a>
                                </div>
                                <div>
                                    <img src={mail} alt="icon-mail-emart" />
                                    <a href="mailto:emart@elevenia.co.id">emart@elevenia.co.id</a>
                                </div>
                            </div>
                        </div>

                        <div className="aff">
                            Affiliates with:
                            <br /> <a href="https://www.elevenia.co.id" target="_blank" rel="noopener noreferrer">elevenia</a> & <a href="https://elevenia.biz" target="_blank" rel="noopener noreferrer">eleveniabiz</a>
                        </div>
                    </div>
                </div>
                <div className="copyright">Copyright 2020 EleveniaMart | Part of Salim Group</div>
            </div>
        </footer>
    );
};

export default footer;
