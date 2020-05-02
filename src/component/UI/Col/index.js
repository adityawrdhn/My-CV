import React from 'react'
import styled, { css } from 'styled-components'
import Segment from '../Segment'

export const StyledCol = styled(Segment)`
    position: relative;
    min-height: 1px;
    flex: 1;

    ${props =>
        props.offset &&
        css`
            margin-left: calc((${props.offset} / 12) * 100%);
        `}
    ${props =>
        props.wide &&
        css`
            flex: 0 0 calc((${props.wide} / 12) * 100%);
        `}
    ${props =>
        props.lg &&
        css`
            @media ${props.theme.devices.lg} {
                flex: 0 0 calc((${props.lg} / 12) * 100%);
            }
        `}
    ${props =>
        props.md &&
        css`
            @media ${props.theme.devices.md} {
                flex: 0 0 calc((${props.md} / 12) * 100%);
            }
        `}        
    ${props =>
        props.sm
            ? css`
                  @media ${props.theme.devices.sm} {
                      flex: 0 0 calc((${props.sm} / 12) * 100%);
                  }
              `
            : css`
                  @media ${props.theme.devices.sm} {
                      flex: 0 0 100%;
                  }
              `}
    ${props =>
        props.xs
            ? css`
                  @media ${props.theme.devices.xs} {
                      flex: 0 0 calc((${props.xs} / 12) * 100%);
                  }
              `
            : css`
                  @media ${props.theme.devices.xs} {
                      flex: 0 0 100%;
                  }
              `}
    
    
`

const Col = props => {
    return <StyledCol {...props}>{props.children}</StyledCol>
}

export default Col
