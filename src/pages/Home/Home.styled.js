import styled from 'styled-components'
export const CircleAbsoluteTop = styled.div`
    position: absolute;
    width: 800px;
    height: 800px;
    left: -240px;
    top: -140px;
    border-radius: 50%;
    background: linear-gradient(
        180deg,
        ${(p) => p.theme.colors.secondary} 0%,
        ${(p) => p.theme.colors.primary} 100%
    );
    @media ${(props) => props.theme.devices.sm} {
        width: 400px;
        height: 400px;
        left: -200px;
        top: -140px;
    }
`
export const CircleAbsoluteBottom = styled.div`
    position: absolute;
    width: 600px;
    height: 600px;
    right: -250px;
    bottom: -200px;
    border-radius: 50%;
    background: linear-gradient(
        180deg,
        ${(p) => p.theme.colors.secondary} 0%,
        ${(p) => p.theme.colors.primary} 100%
    );
    @media ${(props) => props.theme.devices.sm} {
        width: 400px;
        height: 400px;
        right: -160px;
        bottom: -120px;
    }
`
