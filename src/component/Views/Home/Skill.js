import React, { Fragment, useEffect } from 'react'
import { Segment, Row, Col, Container } from 'component/UI'
import styled, { css } from 'styled-components'
import { layout, space, typography, border } from 'styled-system'
import { Fade, Slide } from 'react-reveal'
import AnchorLink from 'component/UI/ScrollSpyMenu/AnchorLink'
import ReactImg from 'assets/img/react.png'
import NextImg from 'assets/img/nextjs.png'
import WebpackImg from 'assets/img/webpack.png'
import VueImg from 'assets/img/vue.png'
import NuxtImg from 'assets/img/nuxtjs.png'
import NodeImg from 'assets/img/nodejs.png'
import ExpressImg from 'assets/img/express.png'
import PHPImg from 'assets/img/php.svg'
import MagentoImg from 'assets/img/magento.png'
import WPImg from 'assets/img/wp.png'

const SkillImage = [
    {
        name: 'React JS',
        img: ReactImg,
    },
    {
        name: 'NEXT JS',
        img: NextImg,
    },
    {
        name: 'Webpack',
        img: WebpackImg,
    },
    {
        name: 'Vue JS',
        img: VueImg,
    },
    {
        name: 'Nuxt JS',
        img: NuxtImg,
    },
    {
        name: 'Node JS',
        img: NodeImg,
    },
    {
        name: 'Express JS',
        img: ExpressImg,
    },
    {
        name: 'PHP',
        img: PHPImg,
    },
    {
        name: 'Magento',
        img: MagentoImg,
    },
    {
        name: 'Wordpress',
        img: WPImg,
    },
]

const ImageWrapper = styled(Segment)`
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    background: #fff;
    box-shadow: ${(p) => p.theme.colors.boxShadow};
    transition: 500ms ease;
    &:hover {
        box-shadow: ${(p) => p.theme.colors.boxShadowHover};
        transition: 500ms ease;
    }
`
const Image = styled.img`
    min-height: 100%;
    object-fit: contain;
    ${layout}
`
const TextTitle = styled.h1`
    font-weight: 900;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    background: linear-gradient(
        45deg,
        ${(p) => p.theme.colors.secondary} 0%,
        ${(p) => p.theme.colors.primary} 50%,
        ${(p) => p.theme.colors[p.color] || p.theme.colors.black} 50%
    );
    margin-bottom: 16px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 210% 100%;
    background-position: 100%;
    transition: background-position 500ms ease;
    text-decoration: none;
    ${layout};
    ${typography};
    ${space};
    em {
        color: ${(p) => p.theme.colors.primary};
    }
    &:hover {
        color: ${(p) => p.theme.colors.primary};
        ${(p) =>
            p.canHover &&
            css`
                background-position: 0 100%;
            `}
    }
`
const TextInfo = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    ${space};
`
const TextTag = styled.h4`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.primary};
    text-decoration: underline;
    ${space};
`
const TextCaption = styled.p`
    margin-top: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black70};
    ${layout}
    ${space}
    ${typography}
    ${border}
`
const BarsWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 20px;
    border-radius: 50px;
    background: ${(p) => p.theme.colors.white};
    color:${(p) =>
        p.percentage > 80
            ? p.theme.colors.primary
            : p.percentage > 50
            ? p.theme.colors.yellow
            : p.theme.colors.green};
    box-shadow:${(p) => p.theme.colors.boxShadow};
    transition: 500ms ease;
    ${space};
    &:before {
        content: '${(p) => `${p.percentage || 0}%`}';
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        font-family: inherit;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        color: #fff;
    }
    &:hover{
        box-shadow: ${(p) => p.theme.colors.boxShadowHover};
        transition: 500ms ease;
    }
`
const Bars = styled.div`
    border-radius: 20px;
    width: 0%;
    height: 100%;
    transition: width;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.36, 0.55, 0.63, 0.48);
    transition-delay: 0.5s;
    background: ${(p) =>
        p.percentage > 80
            ? `linear-gradient(45deg, ${p.theme.colors.secondary} 0%, ${p.theme.colors.primary} 50%)`
            : p.percentage > 50
            ? `linear-gradient(45deg, ${p.theme.colors.secondary} 0%, ${p.theme.colors.yellow} 50%)`
            : p.theme.colors.green};
    &.slide-right {
        width: ${(p) => p.percentage || 0}%;
    }
`
const Card = styled(Segment)`
    transition: box-shadow 500ms ease;
    &:hover {
        transition: box-shadow 500ms ease;
        box-shadow: ${(p) => p.theme.colors.boxShadowHover};
    }
`
const Skill = () => {
    useEffect(() => {
        const section = document.getElementById('whyme')
        const barElements = document.getElementsByClassName('bar')
        const bindClass = () => {
            const winTop = Math.round(window.scrollY)
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
            const sectionOffset = section.offsetTop - Math.round(window.innerHeight / 2)
            if (sectionOffset <= scrollPosition) {
                Array.from(barElements).forEach((el) => {
                    const pos = el.offsetTop
                    const halfWindow = Math.round(window.innerHeight / 2 + 200)
                    if (pos < winTop + halfWindow) {
                        el.classList.add('slide-right')
                    }
                })
            }
        }
        window.addEventListener('scroll', bindClass)
        return () => {
            window.removeEventListener('scroll', bindClass)
        }
    })
    return (
        <Segment
            as="section"
            id="whyme"
            py={80}
            zIndex={10}
            bg="white"
            minHeight={'calc(100vh - 160px)'}
        >
            <Container noGutter mobileGutter>
                <Row justifyContent="center">
                    <Col md={12} lg={4} wide={4}>
                        <Segment className="is-desktop">
                            <AnchorLink href="#experience">
                                <TextTitle pl={48} color="black50" canHover display="inline-block">
                                    EXPERIENCE
                                </TextTitle>
                            </AnchorLink>
                            <TextTitle color="black" pl={48} fontSize={40} lineHeight={'50px'}>
                                WHY ME?
                            </TextTitle>
                        </Segment>
                        <Segment className="is-mobile">
                            <TextTitle color="black" pl={24} fontSize={40} lineHeight={'50px'}>
                                WHY ME?
                            </TextTitle>
                        </Segment>
                    </Col>
                    <Col md={12} lg={5} wide={5}>
                        <TextInfo px={24} mb={28}>
                            Ways I can help you
                        </TextInfo>
                        <Fade up>
                            <Card mb={28} position="relative" bg="white" borderRadius={10}>
                                <Row p={24}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <TextInfo mb={8} pr={16}>
                                            React JS
                                        </TextInfo>
                                        <TextTag>CRA, SSR, Webpack, Babel, NEXT JS</TextTag>
                                        <TextCaption>
                                            Elevenia Mart (E-Mart), E-Mart Landing Page, Elevenia
                                            Seller, Elevenia Master UI
                                        </TextCaption>
                                        <BarsWrapper percentage={90}>
                                            <Bars className="bar" percentage={90} />
                                        </BarsWrapper>
                                    </Col>
                                </Row>
                            </Card>
                        </Fade>
                        <Fade up>
                            <Card mb={28} position="relative" bg="white" borderRadius={10}>
                                <Row p={24}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <TextInfo mb={8} pr={16}>
                                            Vue JS
                                        </TextInfo>
                                        <TextTag>CLI, NUXT JS</TextTag>
                                        <TextCaption>
                                            Thefthing (Mobile, Desktop), Interbio, Wan Solution
                                        </TextCaption>
                                        <BarsWrapper text="Vue" percentage={90}>
                                            <Bars className="bar" percentage={90} />
                                        </BarsWrapper>
                                    </Col>
                                </Row>
                            </Card>
                        </Fade>
                        <Fade up>
                            <Card mb={28} position="relative" bg="white" borderRadius={10}>
                                <Row p={24}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <TextInfo mb={8} pr={16}>
                                            Node JS
                                        </TextInfo>
                                        <TextTag>Express</TextTag>
                                        <TextCaption>TRI B2B ANTUM</TextCaption>
                                        <BarsWrapper text="NodeJS" percentage={80}>
                                            <Bars className="bar" percentage={80} />
                                        </BarsWrapper>
                                    </Col>
                                </Row>
                            </Card>
                        </Fade>
                        <Fade up>
                            <Card mb={28} position="relative" bg="white" borderRadius={10}>
                                <Row p={24}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <TextInfo mb={8} pr={16}>
                                            PHP
                                        </TextInfo>
                                        <TextTag>Laravel, CI, Wordpress, Magento</TextTag>
                                        <TextCaption>
                                            Thefthing, Talent Management System KAI, Interbio, Wan
                                            Solution, Lido Lake Resort, MNC Financial Services
                                        </TextCaption>
                                        <BarsWrapper text="PHP" percentage={80}>
                                            <Bars className="bar" percentage={80} />
                                        </BarsWrapper>
                                    </Col>
                                </Row>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md={12} lg={3} wide={3}>
                        <Row justifyContent="center" pl={24}>
                            {SkillImage.map((list, index) => (
                                <Fragment key={index}>
                                    <Col xs={3} sm={3} md={4} lg={6}>
                                        <Slide right delay={90}>
                                            <Segment ml="auto" mr="auto" width="fit-content">
                                                <ImageWrapper
                                                    p={12}
                                                    mb={16}
                                                    width={50}
                                                    height={50}
                                                    borderRadius={'50%'}
                                                >
                                                    <Image
                                                        src={list.img}
                                                        alt={list.name}
                                                        width={'100%'}
                                                    />
                                                </ImageWrapper>
                                            </Segment>
                                        </Slide>
                                    </Col>
                                </Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Segment>
    )
}

export default Skill
