import React from 'react'
import styled from 'styled-components'
import { border, space, position, layout } from 'styled-system'
import PropTypes from 'prop-types'

const ButtonWrapper = styled.button`
    position: relative;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    display: inline-flex;
    border: 1px solid ${(p) => p.theme.colors.black};
    height: ${(p) => p.theme.btnSize[p.variant]['height']};
    padding: ${(p) => p.theme.btnSize[p.variant]['padding']};
    box-sizing: border-box;
    color: ${(p) =>
        p.theme.mode === 'dark'
            ? p.bg === 'black'
                ? p.theme.colors.white
                : '#fff'
            : p.bg === 'white'
            ? p.theme.colors.black
            : '#fff'};
    border-radius: 1px;
    font-family: inherit;
    font-size: ${(p) => p.theme.btnSize[p.variant]['fontSize']};
    line-height: ${(p) => p.theme.btnSize[p.variant]['lineHeight']};
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    background: linear-gradient(
        45deg,
        ${(p) => p.theme.colors[`${p.bg}Hover`]} 0%,
        ${(p) => p.theme.colors[p.bg]} 50%,
        ${(p) => p.theme.colors[p.bg] || p.theme.colors.black} 50%
    );
    background-size: 210% 100%;
    background-position: 99%;
    transition: background-position 500ms ease, box-shadow 500ms ease;
    text-decoration: none;
    box-shadow: ${(p) => p.boxShadow || p.theme.colors.boxShadow};
    &:hover {
        transition: background-position 500ms ease, box-shadow 500ms ease;
        background-position: 0 50%;
        color: ${(p) =>
            p.theme.mode === 'dark'
                ? p.bg === 'black'
                    ? p.theme.colors.white
                    : '#fff'
                : p.bg === 'white'
                ? p.theme.colors.black
                : '#fff'};
        box-shadow: ${(p) => p.boxShadow || p.theme.colors.boxShadowHover};
    }

    &:focus {
        outline: none;
        transition: background-position 500ms ease, box-shadow 500ms ease;
        background-position: 0 50%;
        color: ${(p) =>
            p.theme.mode === 'dark'
                ? p.bg === 'black'
                    ? p.theme.colors.white
                    : '#fff'
                : p.bg === 'white'
                ? p.theme.colors.black
                : '#fff'};
        box-shadow: ${(p) => p.boxShadow || p.theme.colors.boxShadowHover};
    }

    &:link,
    &:visited,
    &:focus {
        text-decoration: none;
    }

    &[type='button'],
    &[type='reset'],
    &[type='submit'] {
        -webkit-appearance: none;
    }
    ${layout}
    ${border};
    ${space};
    ${position};
`

const Button = ({ children, ...props }) => {
    return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

Button.defaultProps = {
    bg: 'primary',
    color: 'white',
    variant: 'md',
}

Button.propTypes = {
    bg: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
    color: PropTypes.oneOf(['black', 'white']),
    variant: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Button
