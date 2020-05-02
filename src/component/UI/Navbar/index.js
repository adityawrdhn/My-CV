import React, { useContext, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Drawer, ScrollSpyMenu, Segment, Button } from 'component/UI'
import { DrawerContext } from 'context/DrawerContext'
import { setTheme } from 'store/action/theme'
import Icon from 'react-icons-kit'
import { sun, moon } from 'react-icons-kit/feather'

export const MENU_ITEMS = [
    {
        label: 'ABOUT ME',
        path: '#aboutme',
        offset: '0',
    },
    {
        label: 'EXPERIENCE',
        path: '#experience',
        offset: '0',
    },
    {
        label: 'WHY ME?',
        path: '#whyme',
        offset: '0',
    },
    {
        label: 'EDUCATION',
        path: '#education',
        offset: '0',
    },
    {
        label: "LET'S TALK",
        path: '#letstalk',
        offset: '0',
    },
]

const NavbarWrapper = styled.nav`
    @media (min-width: ${(props) => props.theme.breakpoints.sm + 1}px) {
        position: fixed;
        top: 50vh;
        right: 0;
        transform: translateY(-50%);
        z-index: 1000;
        width: 40px;
        pointer-events: none;
        &::before {
            content: '.';
            display: block;
            height: 0;
            overflow: hidden;
        }
        &::after {
            content: '.';
            display: block;
            height: 0;
            overflow: hidden;
            clear: both;
        }
        .scrollspy__menu {
            float: right;
            list-style: none;
            li {
                a {
                    font-family: 'Raleway', sans-serif;
                    position: relative;
                    display: block;
                    transform: translateX(calc(100% - 40px));
                    line-height: 40px;
                    padding: 0 1.0625em;
                    white-space: nowrap;
                    font-size: 1em;
                    font-weight: 500;
                    pointer-events: auto;
                    transition: background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
                    transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        color 0.4s cubic-bezier(0.77, 0, 0.175, 1);
                    transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                        -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
                    text-decoration: none;
                    color: ${(p) => p.theme.colors.black};
                    border: 1px solid ${(p) => p.theme.colors.transparent};
                    border-right: 0px;
                    box-sizing: border-box;
                    .scrollspy__menu__ticker {
                        span,
                        i {
                            opacity: 0;
                            transition: opacity 0.4s cubic-bezier(0.42, 0, 1, 1);
                            font-size: 0.875em;
                            line-height: 2.8571428571em;
                            letter-spacing: 2px;
                        }
                    }
                    &:hover {
                        &:before {
                            transform: scaleX(1);
                            transform-origin: left center 0;
                            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
                        }
                    }
                    &:before {
                        content: '';
                        position: absolute;
                        width: calc(100% - 16px);
                        height: 16px;
                        background: linear-gradient(
                            45deg,
                            ${(p) => p.theme.colors.secondary} 0%,
                            ${(p) => p.theme.colors.primary} 100%
                        );
                        bottom: 8px;
                        left: 8px;
                        z-index: -1;
                        transform: scaleX(0);
                        transform-origin: right center 0;
                        transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
                    }
                }
                hr {
                    width: 6px;
                    background: ${(p) => p.theme.colors.black};
                    opacity: 0.5;
                    margin: 0px 17px 0 auto;
                    border-width: 0px;
                    height: 1px;
                }
                &.is-active,
                :hover {
                    a {
                        color: ${(p) => p.theme.colors.black};
                        background: ${(p) => p.theme.colors.white};
                        border: 1px solid ${(p) => p.theme.colors.black};
                        border-right: 0px;
                        transform: translateX(0);
                        transition-duration: 0.7s;
                        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                        .scrollspy__menu__ticker {
                            span,
                            i {
                                opacity: 1;
                                transition-duration: 0.7s;
                                transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                            }
                        }
                    }
                }
                &:last-child {
                    hr {
                        display: none;
                    }
                }
            }
        }
    }
    @media ${(props) => props.theme.devices.sm} {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1030;
        width: 100vw;
        height: 60px;
        pointer-events: none;
        background: tranparent;
        cursor: none;
    }
`
const ToggleTheme = styled(Segment)`
    bottom: 50px;
    right: 0px;
    position: fixed;
    z-index: 1030;
    transition: width 500ms ease, max-width 350ms ease;
    button {
        transition: width 500ms ease, max-width 350ms ease;
        width: 40px;
        &:hover,
        :focus {
            transition: width 500ms ease, max-width 350ms ease;
            width: 40px;
        }
        span {
            transition: width 500ms ease, max-width 350ms ease;
            color: transparent;
            max-width: 0px;
        }
    }
    &:hover,
    :focus {
        transition: width 500ms ease, max-width 350ms ease;
        button {
            transition: width 500ms ease, max-width 350ms ease;
            width: 165px;
            &:hover,
            :focus {
                transition: width 500ms ease, max-width 350ms ease;
                width: 165px;
            }
            span {
                transition: width 500ms ease, max-width 350ms ease;
                color: inherit;
                max-width: 120px;
                padding-left: 8px;
            }
        }
    }
`
const Navbar = ({ theme, setTheme }) => {
    const { state, dispatch } = useContext(DrawerContext)
    const toggleHandler = () => {
        dispatch({
            type: 'TOGGLE',
        })
    }
    const handleChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <Fragment>
            <NavbarWrapper>
                <ScrollSpyMenu className="is-desktop" menuItems={MENU_ITEMS} offset={0} />
                <Drawer
                    placement="right"
                    className="is-mobile"
                    open={state.isOpen}
                    toggleHandler={toggleHandler}
                >
                    <ScrollSpyMenu
                        className="mobile-menu"
                        menuItems={MENU_ITEMS}
                        drawerClose={true}
                    />
                    <Segment position={'fixed'} bottom={50} width={'calc(100% - 60px)'}>
                        <Button
                            onClick={() => handleChange()}
                            bg={'white'}
                            color={'black'}
                            boxShadow="none"
                            width={'100%'}
                        >
                            <Icon icon={theme === 'dark' ? sun : moon} size={14} />
                            <span style={{ paddingLeft: 8 }}>
                                {theme === 'dark' ? 'Light' : 'Dark'} Mode
                            </span>
                        </Button>
                    </Segment>
                </Drawer>
            </NavbarWrapper>
            <ToggleTheme className="is-desktop">
                <Button
                    onClick={() => handleChange()}
                    bg={'white'}
                    color={'black'}
                    borderRight="0px"
                    boxShadow="none"
                >
                    <Icon icon={theme === 'dark' ? sun : moon} size={14} />
                    <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                </Button>
            </ToggleTheme>
        </Fragment>
    )
}
const mapStateToProps = ({ theme }) => ({ theme })
const mapDispatchToPops = { setTheme }

export default connect(mapStateToProps, mapDispatchToPops)(Navbar)
