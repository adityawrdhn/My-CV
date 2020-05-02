import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import { setTheme } from 'store/action/theme'
const ThemesProvider = (props) => {
    const [mode, setMode] = useState(props.mode ? props.mode : Cookie.get('theme'))
    useEffect(() => {
        setMode(props.mode ? props.mode : Cookie.get('theme'))
    }, [])
    useEffect(() => {
        if (props.theme) {
            Cookie.set('theme', props.theme)
            setMode(props.theme)
        }
    }, [props.theme])
    return <ThemeProvider theme={theme(mode)}>{props.children}</ThemeProvider>
}

const mapStateToProps = ({ theme }) => ({
    theme,
})
const mapDispatchToProps = { setTheme }
export default connect(mapStateToProps, mapDispatchToProps)(ThemesProvider)
