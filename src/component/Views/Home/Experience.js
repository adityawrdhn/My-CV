import React from 'react'
import { Segment, Row, Col, Container } from 'component/UI'
import styled, { css } from 'styled-components'
import { layout, space, typography } from 'styled-system'
import { Fade } from 'react-reveal'
import Elevenia from 'assets/img/elevenia.png'
import MNC from 'assets/img/mnc.png'
import TRI from 'assets/img/transretail.jpg'
import KAI from 'assets/img/kai.png'
import AnchorLink from 'component/UI/ScrollSpyMenu/AnchorLink'
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/ionicons'

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
const TextInfo = styled.p`
    margin-top: 0px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    ${layout}
    ${space}
    ${typography}
`
const Media = styled(Segment)`
    align-items: flex-start;
    display: flex;
    text-align: left;
    transition: box-shadow 500ms ease;
    &:hover {
        transition: box-shadow 500ms ease;
        box-shadow: ${(p) => p.theme.colors.boxShadowHover};
    }
    @media ${(props) => props.theme.devices.sm} {
        display: block;
    }
`
const MediaLeft = styled(Segment)`
    margin-right: 1rem;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    @media ${(props) => props.theme.devices.sm} {
        margin-right: 0px;
    }
`
const MediaRight = styled(Segment)`
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
`
const MediaImageWrapper = styled(Segment)`
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    background: #fff;
    box-shadow: ${(p) => p.theme.colors.boxShadow};
    transition: 0.425s ease;
    &:hover {
        box-shadow: ${(p) => p.theme.colors.boxShadowHover};
        transition: 0.425s ease;
    }
`
const MediaImage = styled.img`
    min-height: 100%;
    object-fit: contain;
    ${layout}
`
const MediaImageText = styled.div`
    ${typography}
`
const MediaNumber = styled.h4`
    margin-top: 0px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.primary};
    ${space}
    ${typography}
`
const MediaTitle = styled.h2`
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors[p.color] || p.theme.colors.black};
    ${space}
    ${typography}
    @media ${(props) => props.theme.devices.sm} {
        font-size: 20px;
        line-height: 28px;
    }
`
const MediaInfo = styled.p`
    margin-top: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    ${space}
    ${typography}
`
const MediaCaption = styled.p`
    margin-top: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black70};
    ${space}
    ${typography}
`
const Experience = () => {
    return (
        <Segment
            as="section"
            id="experience"
            py={80}
            zIndex={10}
            bg="white"
            minHeight={'calc(100vh - 160px)'}
        >
            <Container noGutter mobileGutter>
                <Row justifyContent="center">
                    <Col md={12} lg={4} wide={4}>
                        <Segment className="is-desktop">
                            <TextTitle pl={48} color="black" fontSize={40} lineHeight={'50px'}>
                                EXPERIENCE
                            </TextTitle>
                            <AnchorLink href="#whyme">
                                <TextTitle color="black50" pl={48} canHover display="inline-block">
                                    WHY ME?
                                </TextTitle>
                            </AnchorLink>
                        </Segment>
                        <Segment className="is-mobile">
                            <TextTitle pl={24} color="black" fontSize={40} lineHeight={'50px'}>
                                EXPERIENCE
                            </TextTitle>
                        </Segment>
                    </Col>
                    <Col md={12} lg={8} wide={8}>
                        <TextInfo px={24} mb={28}>
                            Making Ideas Come to Life !
                        </TextInfo>
                        <Fade up>
                            <Media mb={28} p={24} borderRadius={10} bg="white" position="relative">
                                <MediaLeft>
                                    <MediaImageWrapper
                                        p={24}
                                        width={100}
                                        height={100}
                                        borderRadius={'50%'}
                                    >
                                        <MediaImage
                                            src={Elevenia}
                                            alt={'Elevenia'}
                                            width={'100%'}
                                        />
                                    </MediaImageWrapper>
                                </MediaLeft>
                                <MediaRight>
                                    <MediaNumber mb={0}>01</MediaNumber>
                                    <MediaTitle mb={0}>ELEVENIA</MediaTitle>
                                    <MediaInfo mb={16}>April 2019 - Present</MediaInfo>
                                    <MediaCaption>
                                        <Icon icon={plus} size={12} /> Developed dozens of
                                        features/modules of Elevenia Mart Web Admin Application.
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed several features of
                                        Elevenia Seller Mobile Web
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed Front-End project
                                        base skeleton
                                        <br />
                                        <Icon icon={plus} size={12} /> Implementing Isomorphic React
                                        SSR for Elevenia Mart Landing Page.
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed several modules of
                                        Elevenia Master UI (Elevenia UI Components)
                                        <br />
                                        <Icon icon={plus} size={12} /> Helped develop some features
                                        in several Elevenia Projects (LPI, Indostation, and Elevenia
                                        Seller Mobile App)
                                        <br />
                                    </MediaCaption>
                                </MediaRight>
                            </Media>
                        </Fade>
                        <Fade up>
                            <Media mb={28} p={24} borderRadius={10} bg="white" position="relative">
                                <MediaLeft>
                                    <MediaImageWrapper
                                        p={24}
                                        width={100}
                                        height={100}
                                        borderRadius={'50%'}
                                    >
                                        <MediaImage
                                            src={TRI}
                                            alt={'Trans Retail Indonesia'}
                                            width={'100%'}
                                        />
                                    </MediaImageWrapper>
                                </MediaLeft>
                                <MediaRight>
                                    <MediaNumber mb={0}>02</MediaNumber>
                                    <MediaTitle mb={0}>TRANS RETAIL INDONESIA</MediaTitle>
                                    <MediaInfo mb={16}>JANUARY 2019 - APRIL 2019</MediaInfo>
                                    <MediaCaption>
                                        <Icon icon={plus} size={12} /> Developed several features of
                                        B2B business Back Office application called ANTUM
                                        <br />
                                    </MediaCaption>
                                </MediaRight>
                            </Media>
                        </Fade>
                        <Fade up>
                            <Media mb={28} p={24} borderRadius={10} bg="white" position="relative">
                                <MediaLeft>
                                    <MediaImageWrapper
                                        p={24}
                                        width={100}
                                        height={100}
                                        borderRadius={'50%'}
                                    >
                                        <MediaImage
                                            src={MNC}
                                            alt={'MNC Investama'}
                                            width={'100%'}
                                        />
                                    </MediaImageWrapper>
                                </MediaLeft>
                                <MediaRight>
                                    <MediaNumber mb={0}>03</MediaNumber>
                                    <MediaTitle mb={0}>MNC INVESTAMA</MediaTitle>
                                    <MediaInfo mb={16}>FEBRUARY 2018 - DECEMBER 2018</MediaInfo>
                                    <MediaCaption>
                                        <Icon icon={plus} size={12} /> Developed several
                                        features/modules of TheFthing 2.0 web and mobile web
                                        front-end
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed several REST APIs
                                        for Thefthing application
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed MNC Lido lake
                                        resort website
                                        <br />
                                        <Icon icon={plus} size={12} /> Developed MNC Financial
                                        Services website
                                        <br />
                                    </MediaCaption>
                                </MediaRight>
                            </Media>
                        </Fade>
                        <Fade up>
                            <Media mb={28} p={24} borderRadius={10} bg="white" position="relative">
                                <MediaLeft>
                                    <MediaImageWrapper
                                        p={24}
                                        width={100}
                                        height={100}
                                        borderRadius={'50%'}
                                    >
                                        <MediaImageText lineHeight={'100px'} textAlign={'center'}>
                                            FREELANCE
                                        </MediaImageText>
                                    </MediaImageWrapper>
                                </MediaLeft>
                                <MediaRight>
                                    <MediaNumber mb={0}>04</MediaNumber>
                                    <MediaTitle mb={0}>FREELANCE PROJECT</MediaTitle>
                                    <MediaInfo mb={16}>JULY 2017 - Now</MediaInfo>
                                    <MediaCaption>
                                        Developed some websites :<br />
                                        <Icon icon={plus} size={12} /> Wan Solution
                                        <br />
                                        <Icon icon={plus} size={12} /> Interbio
                                        <br />
                                        <Icon icon={plus} size={12} /> Pastijadi
                                        <br />
                                    </MediaCaption>
                                </MediaRight>
                            </Media>
                        </Fade>
                        <Fade up>
                            <Media mb={28} p={24} borderRadius={10} bg="white" position="relative">
                                <MediaLeft>
                                    <MediaImageWrapper
                                        p={24}
                                        width={100}
                                        height={100}
                                        borderRadius={'50%'}
                                    >
                                        <MediaImage
                                            src={KAI}
                                            alt={'Kereta Api Indonesia'}
                                            width={'100%'}
                                        />
                                    </MediaImageWrapper>
                                </MediaLeft>
                                <MediaRight>
                                    <MediaNumber mb={0}>05</MediaNumber>
                                    <MediaTitle mb={0}>
                                        KERETA API INDONESIA <em> (Internship)</em>
                                    </MediaTitle>
                                    <MediaInfo mb={16}>JULY 2016 - SEPTEMBER 2016</MediaInfo>
                                    <MediaCaption>
                                        <Icon icon={plus} size={12} /> Helped develop Talent
                                        Management System feature for SAP HR application
                                        <br />
                                    </MediaCaption>
                                </MediaRight>
                            </Media>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Segment>
    )
}

export default Experience
