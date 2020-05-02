import React from "react";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";

/** assets */
import Emart1 from "assets/img/emart1.png";
import Emart2 from "assets/img/emart2.png";
import Emart3 from "assets/img/emart3.png";
import num1 from "assets/img/01.png";
import num2 from "assets/img/02.png";
import num3 from "assets/img/03.png";
import num4 from "assets/img/04.png";
import tech1 from "assets/img/download1.png";
import tech2 from "assets/img/protect.png";
import tech3 from "assets/img/pdf.png";
import tech4 from "assets/img/csv.png";
import "assets/css/aboutus.css";
import Helmet from "react-helmet";

const AboutUS = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('nav_menu.about_us')}</title>
            </Helmet>
            <section className="section-about">
                <h1 className="title-sec">{t("about_content.title")}</h1>
                <div className="row">
                    <div>
                        <LazyLoad offset={100}>
                            <img src={Emart1} alt="about emart"></img>
                        </LazyLoad>
                    </div>
                    <div className="about-desc">
                        <div>
                            <h2 className="title-sub">{t("about_content.content.0.title")}</h2>
                            <p>{t("about_content.content.0.desc")}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="about-desc">
                        <div>
                            <h2 className="title-sub">{t("about_content.content.1.title")}</h2>
                            <p>{t("about_content.content.1.desc")}</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoad offset={100}>
                            <img src={Emart2} alt="system emart"></img>
                        </LazyLoad>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <LazyLoad offset={100}>
                            <img src={Emart3} alt="emart easy to use"></img>
                        </LazyLoad>
                    </div>
                    <div className="about-desc">
                        <div>
                            <h2 className="title-sub">{t("about_content.content.2.title")}</h2>
                            <p>{t("about_content.content.2.desc")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-technology">
                <h1 className="title2-sec">Technology</h1>
                <div className="group-technology">
                    <div className="list">
                        <img className="img-number" src={num1} alt="number" />
                        <img className="img-tech" src={tech1} alt="tech" />
                        <div className="tech-name">technology 01</div>
                        <div className="tech-desc">lorem ipsum dolor sit amet consecteur adipising elit</div>
                    </div>
                    <div className="list">
                        <img className="img-number" src={num2} alt="number" />
                        <img className="img-tech" src={tech2} alt="tech" />
                        <div className="tech-name">technology 02</div>
                        <div className="tech-desc">lorem ipsum dolor sit amet consecteur adipising elit</div>
                    </div>
                    <div className="list">
                        <img className="img-number" src={num3} alt="number" />
                        <img className="img-tech" src={tech3} alt="tech" />
                        <div className="tech-name">technology 03</div>
                        <div className="tech-desc">lorem ipsum dolor sit amet consecteur adipising elit</div>
                    </div>
                    <div className="list">
                        <img className="img-number" src={num4} alt="number" />
                        <img className="img-tech" src={tech4} alt="tech" />
                        <div className="tech-name">technology 04</div>
                        <div className="tech-desc">lorem ipsum dolor sit amet consecteur adipising elit</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUS;
