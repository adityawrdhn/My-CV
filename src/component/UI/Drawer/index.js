import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
const StyledDrawer = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    &.drawer__right {
        right: 0;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(1, 0, 0.86, 0.86);
        will-change: transform;
        .drawer__content__wrapper {
            right: 0;
        }
        &.drawer__open {
            .drawer__content__wrapper {
                transform: translateX(-100%);
                transition-duration: 0.8s;
                transition-timing-function: cubic-bezier(0.18, 0.18, 0, 1);
                transition-delay: 0.1s;
            }
            .drawer__mask {
                opacity: 0.3;
                height: 100%;
                transform: translateX(-100%);
                transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
            }
        }
    }
    &.drawer__left {
        left: 0;
        transition: transform 0.4s cubic-bezier(1, 0, 0.86, 0.86);
        will-change: transform;
        .drawer__content__wrapper {
            transform: translateX(-100%);
            left: 0;
        }
        .drawer__mask {
            transform: translateX(-100%);
            left: 0;
        }
        &.drawer__open {
            .drawer__content__wrapper {
                transform: translateX(0%);
                transition-duration: 0.8s;
                transition-timing-function: cubic-bezier(0.18, 0.18, 0, 1);
                transition-delay: 0.1s;
            }
            .drawer__mask {
                opacity: 0.3;
                height: 100%;
                transform: translateX(0%);
                transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
            }
        }
    }
    &.drawer__right,
    .drawer__left {
        width: 0;
        height: 100%;
    }
    > * {
        transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
            opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
            box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
    .drawer__mask {
        background: #000;
        opacity: 0;
        width: 100%;
        height: 0;
        position: fixed;
        top: 0;
        left: 0;
        transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), height 0s ease 0.3s;
    }
    .drawer__content__wrapper {
        @media (max-width: 767px) {
            position: relative;
            overflow-y: scroll;
            background: ${(props) => props.theme.colors.white};
            width: 100vw !important;
            height: 100vh;
        }
    }
    &.drawer__open {
        width: 100%;
    }
`
const DrawerHeader = styled.div`
    position: sticky;
    top: 0;
    width: 100vw !important;
    height: 60px;
    z-index: 1;
    background: ${(props) => props.theme.colors.white};
`
const DrawerContent = styled.div`
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
`
const DrawerToggle = styled.div`
    display: none;
    @media ${(props) => props.theme.devices.sm} {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1030;
        border-radius: 50px;
        background: ${(props) => props.theme.colors.white};
        box-shadow: ${(props) => props.theme.colors.boxShadow};
        transition: 0.425s ease;
        &:hover {
            transition: 0.425s ease;
            box-shadow: ${(p) => p.theme.colors.boxShadowHover};
        }
    }
`
const Burger = styled.button`
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
    cursor: pointer;
    pointer-events: auto;
    background: none;
    border: none;
    span {
        background-color: ${(p) => p.theme.colors.black};
        display: block;
        height: 2px;
        left: calc(50% - 12px);
        position: absolute;
        transform-origin: center;
        transition-duration: 86ms;
        transition-property: background-color, opacity, -webkit-transform;
        transition-property: background-color, opacity, transform;
        transition-property: background-color, opacity, transform, -webkit-transform;
        transition-timing-function: ease-out;
        width: 24px;
        border-radius: 50px;
        backgorund-color: ${(props) => props.theme.colors.primary};
        &:first-child {
            width: 16px;
            top: calc(40% - 6px);
        }
        &:nth-child(2) {
            top: calc(50% - 1px);
        }
        &:nth-child(3) {
            top: calc(60% + 4px);
            width: 16px;
            left: calc(50% - 4px);
        }
    }
    &.is-active {
        span {
            &:first-child {
                width: 13px;
                transform: translateY(6px) translateX(2px) rotate(45deg);
                transition: transform 0.35s ease;
            }
            &:nth-child(2) {
                transform: rotate(-45deg);
                transition: transform 0.35s ease;
            }
            &:nth-child(3) {
                width: 13px;
                left: calc(50% - 12px);
                transform: translateY(-6px) translateX(10px) rotate(45deg);
                transition: transform 0.35s ease;
            }
        }
    }
`
const Drawer = ({ open, toggleHandler, placement, children, ...props }) => {
    const [classes, setClasses] = useState(['drawer'])
    const [show, setShow] = useState(false)
    useEffect(() => {
        props.className && classes.push(props.className)
        placement
            ? setClasses([...classes, placement === 'left' ? 'drawer__left' : 'drawer__right'])
            : setClasses([...classes, 'drawer__right'])
    }, [])
    useEffect(() => {
        if (open) {
            setShow(true)
            document.body.style.overflowY = 'hidden'
            setTimeout(() => {
                setClasses([...classes, 'drawer__open'])
            }, 200)
        } else {
            document.body.style = ''
            const index = classes.indexOf('drawer__open')
            if (index > -1) {
                classes.splice(index, 1)
                setClasses([...classes])
                setTimeout(() => {
                    setShow(false)
                }, 200)
            }
        }
    }, [open])

    const handleClose = () => {
        const index = classes.indexOf('drawer__open')
        classes.splice(index, 1)
        setClasses([...classes])
        setTimeout(() => {
            setShow(false)
            toggleHandler()
            document.body.style = ''
        }, 200)
    }
    return (
        <Fragment>
            {show &&
                ReactDOM.createPortal(
                    <StyledDrawer className={classes.join(' ')}>
                        <div className="drawer__mask" onClick={() => handleClose()}></div>
                        <div className="drawer__content__wrapper">
                            <DrawerHeader />
                            <DrawerContent>{children}</DrawerContent>
                        </div>
                    </StyledDrawer>,
                    document.body,
                )}
            <DrawerToggle>
                <Burger className={open && 'is-active'} onClick={toggleHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Burger>
            </DrawerToggle>
        </Fragment>
    )
}

export default Drawer
