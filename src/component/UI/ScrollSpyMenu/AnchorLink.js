import React from 'react'
import styled from 'styled-components'
const LinkWrapper = styled.a`
    text-decoration: none;
`
const AnchorLink = ({ href, offset, onClick, ...props }) => {
    const smoothScroll = (e) => {
        e.preventDefault()
        let _offset = () => 2
        if (typeof offset !== 'undefined') {
            if (!!(offset && offset.constructor && offset.apply)) {
                _offset = offset
            } else {
                _offset = () => parseInt(offset)
            }
        }
        const anchor = document.querySelector(href)
        if (anchor) {
            const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset
            window.scroll({
                top: offsetTop - _offset() + 5,
                behavior: 'smooth',
            })
        }
        onClick && onClick(e)
    }
    return <LinkWrapper {...props} href={href} onClick={(e) => smoothScroll(e)} />
}

export default AnchorLink
