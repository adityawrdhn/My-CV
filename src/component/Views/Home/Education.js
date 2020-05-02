import React from 'react'
import { Segment, Row, Col, Container } from 'component/UI'
import styled from 'styled-components'
import { layout, space, typography } from 'styled-system'
import UB from 'assets/img/ub.jpg'
import { Fade } from 'react-reveal'
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/ionicons'

const FixedSegment = styled(Segment)`
    position: fixed;
    @media ${(props) => props.theme.devices.sm} {
        position: relative;
    }
    &:before {
        display: block;
        width: 100%;
        height: 100%;
        background: url(${UB}) no-repeat 50%;
        background-size: cover;
        filter: blur(3px) opacity(0.15) grayscale(0.8);
        content: '';
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 0;
    }
`
const TextInfo = styled.h4`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors.black};
    ${space};
`
const TextTitle = styled.h1`
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 1px;
    color: ${(p) => p.theme.colors[p.color] || p.theme.colors.black};
    margin-bottom: 16px;
    ${typography};
    ${space};
    em {
        color: ${(p) => p.theme.colors.primary};
        background: linear-gradient(
            45deg,
            ${(p) => p.theme.colors.secondary} 0%,
            ${(p) => p.theme.colors.primary} 100%
        );
        margin-bottom: 16px;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 100% 100%;
        background-position: 100%;
        transition: background-position 500ms ease;
        text-decoration: none;
    }
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
`
const AbsoluteNumber = styled.em`
    position: absolute;
    width: 18px;
    height: 18px;
    left: 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-style: italic;
    color: ${(p) => p.theme.colors.primary};
    @media ${(props) => props.theme.devices.sm} {
        display: block;
        position: relative;
    }
`
const Card = styled(Segment)`
    padding-left: 48px;
    @media ${(props) => props.theme.devices.sm} {
        padding-left: 24px;
    }
`
const Education = () => {
    return (
        <Segment
            as="section"
            id="education"
            minHeight={'100vh'}
            bg="transparent"
            position="relative"
        >
            <FixedSegment
                top={0}
                left={0}
                height={'100%'}
                width={'100vw'}
                bg="white"
                zIndex={0}
                py={80}
            >
                <Container noGutter mobileGutter>
                    <Row mb={48}>
                        <Col md={6} lg={6} wide={6}>
                            <Segment pl={48} className="is-desktop">
                                <TextTitle color="black">
                                    LATEST <em>EDUCATION</em>
                                </TextTitle>
                                <TextCaption>
                                    Graduated from Faculty of Computer Science Brawijaya University
                                    with GPA 3.51
                                </TextCaption>
                            </Segment>
                            <Segment pl={24} className="is-mobile">
                                <TextTitle color="black" fontSize={40} lineHeight="50px">
                                    LATEST <em>EDUCATION</em>
                                </TextTitle>
                                <TextCaption>
                                    Graduated from Faculty of Computer Science Brawijaya University
                                    with GPA 3.51
                                </TextCaption>
                            </Segment>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={6} wide={6}>
                            <Card>
                                <TextInfo>Academic Experience</TextInfo>
                                <Fade right>
                                    <TextCaption>
                                        <AbsoluteNumber>01.</AbsoluteNumber>
                                        Coordinator Assistant of Software Engineering
                                    </TextCaption>
                                </Fade>
                                <Fade right>
                                    <TextCaption>
                                        <AbsoluteNumber>02.</AbsoluteNumber>
                                        Assistant of System Analysis and Design
                                    </TextCaption>
                                </Fade>
                                <Fade right delay={50}>
                                    <TextCaption>
                                        <AbsoluteNumber>03.</AbsoluteNumber>
                                        Assistant of Advance Programming (JAVA)
                                    </TextCaption>
                                </Fade>
                                <Fade right>
                                    <TextCaption>
                                        <AbsoluteNumber>04.</AbsoluteNumber>
                                        Assistant of Basic Programming (JAVA)
                                    </TextCaption>
                                </Fade>
                            </Card>
                        </Col>
                        <Col md={12} lg={6} wide={6}>
                            <Card>
                                <TextInfo>Non-Academic Experience</TextInfo>
                                <Fade right delay={100}>
                                    <TextCaption>
                                        <AbsoluteNumber>01.</AbsoluteNumber>
                                        Working as Student Employee at BPTIK Filkom UB (2016)
                                    </TextCaption>
                                </Fade>
                                <Fade right delay={150}>
                                    <TextCaption>
                                        <AbsoluteNumber>02.</AbsoluteNumber>
                                        Co-Founder and Treasurer at Basic Computing Community (BCC)
                                    </TextCaption>
                                </Fade>
                                <Fade right delay={150}>
                                    <TextCaption>
                                        <AbsoluteNumber>03.</AbsoluteNumber>
                                        Head of Cabinet Development at BEM Filkom (2016-2017)
                                    </TextCaption>
                                </Fade>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </FixedSegment>
        </Segment>
    )
}

export default Education
