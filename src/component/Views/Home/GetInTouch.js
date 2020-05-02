import React, { Fragment } from 'react'
import { Segment, Row, Col, Container, Button } from 'component/UI'
import styled, { css } from 'styled-components'
import { layout, space, typography } from 'styled-system'
import { CircleAbsoluteBottom } from 'pages/Home/Home.styled'
import { socialGithub, socialWhatsapp, socialLinkedin } from 'react-icons-kit/ionicons'
import Icon from 'react-icons-kit'
import { Fade } from 'react-reveal'
const TextInfo = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    margin-bottom: 0px;
    ${layout}
    ${typography};
    ${space}
    i {
        color: ${(p) => p.theme.colors.primary};
        padding-left: 8px;
        padding-right: 8px;
    }
    a {
        padding-left: 8px;
        padding-right: 8px;
        text-decoration: underline !important;
    }
    @media ${(props) => props.theme.devices.sm} {
        a {
            color: ${(p) => p.theme.colors.black} !important;
            text-decoration: underline !important;
        }
    }
`
const TextTitle = styled.h1`
    display: inline-block;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
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
const TextCaption = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black70};
    ${layout};
    ${space};
    ${typography};
    em {
        text-decoration: underline;
        color: ${(p) => p.theme.colors.primary};
        a:-webkit-any-link {
            color: ${(p) => p.theme.colors.primary};
            cursor: pointer;
            text-decoration: underline;
        }
    }
`
const TextIcon = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    margin-bottom: 0px;
    ${layout}
    ${space}
    &:hover {
        color: ${(p) => p.theme.colors.primary};
    }
`
const OverrideSegment = styled(Segment)`
    padding-left: 48px;
    @media ${(props) => props.theme.devices.sm} {
        padding-left: 24px;
    }
`
const SOCIAL_PROFILES = [
    {
        icon: socialWhatsapp,
        url: 'https://api.whatsapp.com/send?phone=6281515963044&text=Hello%20Aditya,&l=id',
    },
    {
        icon: socialGithub,
        url: 'https://github.com/adityawrdhn',
    },
    {
        icon: socialLinkedin,
        url: 'https://linkedin.com/in/adityawrdhn',
    },
]

const GetInTouch = () => {
    return (
        <Segment
            as="section"
            id="letstalk"
            py={80}
            zIndex={10}
            bg="white"
            minHeight={'calc(100vh - 160px)'}
            overflow="hidden"
        >
            <CircleAbsoluteBottom />
            <Container noGutter mobileGutter>
                <Row justifyContent="center" alignItems="center">
                    <Col sm={12} md={12}>
                        <OverrideSegment mb={48}>
                            <Fade up>
                                <TextInfo>So, do we work together?</TextInfo>
                                <TextTitle mb={24} className="is-desktop" canHover>
                                    Let's Talk
                                </TextTitle>
                                <TextTitle
                                    mb={24}
                                    className="is-mobile"
                                    canHover
                                    fontSize={40}
                                    lineHeight="50px"
                                >
                                    Let's Talk
                                </TextTitle>
                            </Fade>
                            <Fade up delay={100}>
                                <TextCaption maxWidth={450}>
                                    If you interested to me as your good partner or you have a
                                    website or mobile app idea in mind or you need some advice about
                                    frontend development, feel free to contact me. The sooner you
                                    write, the better it is for both of us.
                                </TextCaption>
                                <a href="mailto:adityawrdhn@gmail.com">
                                    <Button bg={'primary'} color={'white'} minWidth={120}>
                                        Email Me
                                    </Button>
                                </a>
                            </Fade>
                        </OverrideSegment>
                        <OverrideSegment mb={48}>
                            {SOCIAL_PROFILES.map((list, index) => (
                                <Fragment key={index}>
                                    <a href={list.url} target="_blank">
                                        <TextIcon display="inline-block" mr={16}>
                                            <Icon icon={list.icon} size={48} />
                                        </TextIcon>
                                    </a>
                                </Fragment>
                            ))}
                        </OverrideSegment>
                        <OverrideSegment pt={48}>
                            <TextInfo mr={16} fontSize={16}>
                                Built & designed by
                                <a href={'https://github.com/adityawrdhn'} target="_blank">
                                    Adityawrdhn
                                </a>
                            </TextInfo>
                            <TextInfo mr={16} fontSize={12}>
                                © 2020 All rights reserved.
                            </TextInfo>
                        </OverrideSegment>
                    </Col>
                </Row>
            </Container>
        </Segment>
    )
}

export default GetInTouch
