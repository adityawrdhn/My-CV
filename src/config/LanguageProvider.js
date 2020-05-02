import React, { useEffect } from 'react'
import i18next from './i18nConfig'
import { I18nextProvider } from 'react-i18next'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import { setLang } from 'store/action/language'
const LanguageProvider = (props) => {
    useEffect(() => {
        const cookieLang = Cookie.get('language')
        cookieLang && props.setLang(cookieLang)
    }, [])
    useEffect(() => {
        Cookie.set('language', props.language)
        i18next.changeLanguage(props.language)
    }, [props.language])
    return (
        <I18nextProvider i18n={props.i18n ? props.i18n : i18next}>{props.children}</I18nextProvider>
    )
}

const mapStateToProps = ({ language }) => ({
    language,
})
const mapDispatchToProps = { setLang }
export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider)
