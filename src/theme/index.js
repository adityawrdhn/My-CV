import { dark, light } from './colors'
const breakpoints = {
    xs: 576,
    sm: 768,
    md: 991,
    lg: 1220,
}
const devices = Object.keys(breakpoints).reduce((a, b) => {
    a[b] = `(max-width: ${breakpoints[b]}px)`
    return a
}, {})
const loop = (startNumber, maxNumber, increment) => {
    let ret = []
    for (let i = startNumber; i <= maxNumber; i += increment) {
        ret = [...ret, i]
    }
    return ret
}
export const theme = (theme) => {
    const colors = theme === 'dark' ? dark : light
    return {
        mode: theme,
        breakpoints: { ...breakpoints },
        devices: { ...devices },
        space: loop(0, 200, 1),
        fontSizes: loop(0, 96, 1),
        fontWeights: loop(100, 900, 100),
        lineHeights: loop(8, 96, 1),
        letterSpacings: {
            normal: 'normal',
            tracked: '0.1em',
            tight: '-0.05em',
            mega: '0.25em',
        },
        borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
        radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
        widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
        heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
        maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
        colors,
        colorStyles: {
            primary: {
                color: colors.primary,
                borderColor: colors.transparent,
                backgroundColor: colors.transparent,
                '&:hover': {
                    color: colors.primary,
                    backgroundColor: colors.transparent,
                },
            },
            secondary: {
                color: colors.secondary,
                borderColor: colors.secondary,
                '&:hover': {
                    color: colors.secondaryHover,
                    borderColor: colors.secondaryHover,
                },
            },
            warning: {
                color: colors.yellow,
                borderColor: colors.yellow,
                '&:hover': {
                    color: colors.yellowHover,
                    borderColor: colors.yellowHover,
                },
            },
            error: {
                color: colors.secondaryHover,
                borderColor: colors.secondaryHover,
                '&:hover': {
                    color: colors.secondary,
                    borderColor: colors.secondary,
                },
            },
            primaryWithBg: {
                color: colors.white,
                border: '2px solid',
                backgroundColor: colors.primary,
                borderColor: colors.borderColor,
                borderRadius: '0',
                '&:after': {
                    content: '',
                    width: '100px',
                    height: '100px',
                    display: 'block',
                    backgroundColor: colors.primary,
                },
                '&:hover': {
                    backgroundColor: colors.primaryHover,
                    borderColor: colors.transparent,
                },
            },
            secondaryWithBg: {
                color: colors.white,
                backgroundColor: colors.secondary,
                borderColor: colors.secondary,
                '&:hover': {
                    backgroundColor: colors.secondaryHover,
                    borderColor: colors.secondaryHover,
                },
            },
            warningWithBg: {
                color: colors.white,
                backgroundColor: colors.yellow,
                borderColor: colors.yellow,
                '&:hover': {
                    backgroundColor: colors.yellowHover,
                    borderColor: colors.yellowHover,
                },
            },
            errorWithBg: {
                color: colors.white,
                backgroundColor: colors.secondaryHover,
                borderColor: colors.secondaryHover,
                '&:hover': {
                    backgroundColor: colors.secondary,
                    borderColor: colors.secondary,
                },
            },
            transparentBg: {
                backgroundColor: colors.white,
                '&:hover': {
                    backgroundColor: colors.white,
                },
            },
        },
        btnSize: {
            sm: {
                height: '28px',
                lineHeight: '12px',
                padding: '8px',
                fontSize: '10px',
                marginIcon: '4px',
            },
            md: {
                height: '40px',
                lineHeight: '16px',
                padding: '12px 16px',
                fontSize: '14px',
                marginIcon: '8px',
            },
            lg: {
                height: '50px',
                lineHeight: '20px',
                padding: '16px 24px',
                fontSize: '16px',
                marginIcon: '16px',
            },
            text: {
                height: '16px',
                padding: '4px',
                fontSize: '14px',
                marginIcon: '4px',
            },
        },

        // FlexBox: {
        //   backgroundColor: 'green'
        // }
    }
}
