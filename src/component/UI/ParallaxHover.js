import React from 'react'
import styled from 'styled-components'
import Segment from './Segment'
const ParallaxWrapper = styled.figure`
    position: relative;
    transition: all 0.3s ease-out;
    margin: 0;
    .ph-layer {
        transition: all 0.3s ease-out;
    }
    .ph-layer {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .ph-text > * {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 4rem;
        color: #fff;
        font-weight: 300;
    }

    .ph-heading {
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 3rem;
        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    }
`
const Layers = styled.div`
    transition: all 0.3s ease-out;
    width: 100%;
    height: 100%;
    position: relative;
`
const Shadow = styled.div`
    transition: all 0.3s ease-out;
    position: relative;
    height: 90%;
    width: 90%;
    left: 5%;
    top: 5%;
    background: none;
`
const Lighting = styled.div`
    background-image: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 33%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.3s ease-out;
    @media ${(props) => props.theme.devices.sm} {
        display: none;
    }
`
const config = {
    scale: 1.03,
    rotation: 0.3,
    alpha: 0.4,
    shadow: 8,
}

class ParallaxHover extends React.Component {
    static propTypes() {
        return {
            children: React.Proptypes.node.isRequired,
            width: React.Proptypes.string.isRequired,
            height: React.Proptypes.string.isRequired,
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            rotateX: 0,
            rotateY: 0,
            shadowMovement: 20,
            shadowSize: 50,
            scale: 1,
            angle: 0,
            alpha: 0,
        }
    }
    buildState(rotateX, rotateY, shadowMovement, shadowSize, scale, angle, alpha) {
        this.setState({
            rotateX: rotateX,
            rotateY: rotateY,
            shadowMovement: shadowMovement,
            shadowSize: shadowSize,
            scale: scale,
            angle: angle,
            alpha: alpha,
        })
    }

    buildTransformStrings(rotateX, rotateY, scale) {
        return {
            WebkitTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            MozTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }
    }

    calculateDistance(bounds, offsetX, offsetY) {
        const distanceX = Math.pow(offsetX - bounds.width / 2, 2)
        const distanceY = Math.pow(offsetY - bounds.height / 2, 2)
        return Math.floor(Math.sqrt(distanceX + distanceY))
    }

    calculateAlphaFromCenter(current) {
        const max = Math.max(this.props.width, this.props.height)
        return (current / max) * config.alpha
    }

    handleMouseMove = ({ pageX, pageY, nativeEvent }) => {
        const width = this.props.width
        const height = this.props.height
        const { scrollTop: scrollTop, scrollLeft: scrollLeft } = document.body

        const bounds = this.refs.wrapper.getBoundingClientRect()
        const centerX = this.props.width / 2
        const centerY = this.props.height / 2
        const widthMultiplier = 320 / this.props.width

        const offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width
        const offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height

        const deltaX = pageX - bounds.left - scrollLeft - centerX
        const deltaY = pageY - bounds.top - scrollTop - centerY
        const rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier)
        const rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier)
        const angleRad = Math.atan2(deltaY, deltaX)
        const angleRaw = (angleRad * 180) / Math.PI - 90
        const angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw
        const distanceFromCenter = this.calculateDistance(
            bounds,
            nativeEvent.offsetX,
            nativeEvent.offsetY,
        )
        const shadowMovement = centerY * 0.25
        const shadowSize = 120
        const alpha = this.calculateAlphaFromCenter(distanceFromCenter)

        this.buildState(rotateX, rotateY, shadowMovement, shadowSize, config.scale, angleDeg, alpha)
    }

    handleMouseLeave = () => {
        this.buildState(0, 0, 20, 50, 1, 0, 0)
    }

    renderChildren(children) {
        const st = this.state

        if (!Array.isArray(children)) {
            const styles = this.buildTransformStrings(st.rotateX, st.rotateY, st.scale)
            return (
                <div style={styles} className="ph-layer">
                    {children}
                </div>
            )
        }

        return children.map((layer, key) => {
            const num = key + 1
            const rotateX = Math.floor(st.rotateX / num)
            const rotateY = Math.floor(st.rotateY / num)
            let styles = this.buildTransformStrings(rotateX, rotateY, st.scale)
            let textClass

            if (layer.ref === 'text') {
                textClass = 'ph-text'
                const shadow = {
                    textShadow: `${rotateY * 0.5}px ${rotateX * 0.5}px 10px rgba(0, 0, 0, 0.5)`,
                }

                styles = Object.assign({}, shadow, styles)
            }

            return (
                <div style={styles} className={`ph-layer ${textClass}`} key={key}>
                    {layer}
                </div>
            )
        })
    }

    render() {
        const { width, height, children, ...attr } = this.props
        const st = this.state
        const baseTransforms = this.buildTransformStrings(st.rotateX, st.rotateY, st.scale)

        const stylesWrapper = Object.assign({}, baseTransforms, {
            width,
            height,
        })

        const stylesShadow = Object.assign({}, baseTransforms, {
            boxShadow: `0px ${st.shadowMovement}px ${st.shadowSize}px rgba(0, 0, 0, 0.6)`,
        })

        const stylesLighting = Object.assign({}, baseTransforms, {
            backgroundImage: `linear-gradient(${st.angle}deg, rgba(255,255,255, ${st.alpha}) 0%, rgba(0,0,0,0.3) 40%)`,
        })

        return (
            <Segment style={{ transformStyle: 'preserve-3d' }} {...attr}>
                <ParallaxWrapper
                    ref="wrapper"
                    style={stylesWrapper}
                    onMouseMove={this.handleMouseMove}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <Shadow style={stylesShadow} />
                    <Layers>{this.renderChildren(children)}</Layers>
                    <Lighting style={stylesLighting} />
                </ParallaxWrapper>
            </Segment>
        )
    }
}

export default ParallaxHover
