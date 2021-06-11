import React, { useState } from "react";
import { Segment, Row, Col, Container, Button } from "component/UI";
import styled, { css } from "styled-components";
import { layout, space, typography } from "styled-system";
import Me from "assets/img/me.jpg";
import AnchorLink from "component/UI/ScrollSpyMenu/AnchorLink";
import { CircleAbsoluteTop } from "pages/Home/Home.styled";
import { Fade, Slide } from "react-reveal";
import ParallaxHover from "component/UI/ParallaxHover";

const ImageWrapper = styled(Segment)`
  background-position: center center;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: all 0.425s ease;
  filter: blur(3px) grayscale(0.8);
  @media ${(props) => props.theme.devices.sm} {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  ${(p) =>
    p.hover &&
    css`
      transition-delay: 1s;
      transition: all 0.425s ease;
      filter: blur(0px) grayscale(0);
    `}
  &:hover {
    transition: 0.425s ease;
    filter: blur(0px) grayscale(0);
  }
`;
const Image = styled.img`
  min-height: 100%;
  object-fit: cover;
  ${layout}
`;
const TextInfo = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 0px;
  ${space}
`;
const TextTitle = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: 0.2px;
  color: ${(p) => p.theme.colors.black};
  ${space};
  em {
    color: ${(p) => p.theme.colors.primary};
    background: linear-gradient(
      45deg,
      ${(p) => p.theme.colors.secondary} 0%,
      ${(p) => p.theme.colors.primary} 100%
    );
    font-weight: 900;
    margin-bottom: 16px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 100%;
    background-position: 100%;
    transition: background-position 500ms ease;
    text-decoration: none;
  }
`;
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
`;
const OverrideSegment = styled(Segment)`
  padding-left: 48px;
  @media ${(props) => props.theme.devices.sm} {
    padding-left: 24px;
  }
`;
const AboutMe = () => {
  const [hover, setHover] = useState(false);
  return (
    <Segment
      as="section"
      id="aboutme"
      py={80}
      zIndex={10}
      bg="white"
      minHeight={"calc(100vh - 160px)"}
    >
      <CircleAbsoluteTop />
      <Container noGutter mobileGutter>
        <Row justifyContent="center" alignItems="center">
          <Col sm={12} md={6}>
            <Slide left>
              <OverrideSegment>
                <ParallaxHover
                  borderRadius={16}
                  width="500"
                  height="500"
                  onMouseOver={(e) => setHover(true)}
                  onMouseOut={(e) => setHover(false)}
                >
                  <ImageWrapper
                    height={500}
                    borderRadius={16}
                    mb={48}
                    boxShadow="-40px 40px 100px rgba(0, 0, 0, 0.32)"
                    hover={hover}
                  >
                    <Image width={"100%"} alt={"ME"} src={Me} />
                  </ImageWrapper>
                </ParallaxHover>
              </OverrideSegment>
            </Slide>
          </Col>
          <Col sm={12} md={6}>
            <OverrideSegment>
              <Fade up>
                <TextInfo>Hello, I'm</TextInfo>
                <TextTitle mb={24}>
                  <em>ADIT</em>YA WARDHANA
                </TextTitle>
              </Fade>
              <Fade up delay={100}>
                <TextCaption maxWidth={450}>
                  I currently am working as a <em>Frontend Engineer</em> at{" "}
                  <em>
                    <a href={"https://tiket.com"} target="_blank">
                      Tiket.com
                    </a>
                  </em>
                  . I am focused on developing{" "}
                  <em>
                    <a href={"https://tiket.com/to-do"} target="_blank">
                      Things To Do
                    </a>
                  </em>{" "}
                  website (Desktop & Mobile).
                </TextCaption>
                <AnchorLink href="#letstalk">
                  <Button bg={"primary"} color={"white"} minWidth={120}>
                    Let's Talk
                  </Button>
                </AnchorLink>
              </Fade>
            </OverrideSegment>
          </Col>
        </Row>
      </Container>
    </Segment>
  );
};

export default AboutMe;
