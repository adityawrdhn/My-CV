import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'
import Cookie from 'js-cookie'
import LanguageProvider from 'config/LanguageProvider'
import i18nConfig from 'config/i18nConfig'
import App from './App'
import createStore from './store'
import ThemesProvider from 'config/ThemesProvider'
import { setTheme } from 'store/action/theme'
if (window) {
    if (window.__I18N_STATE__) {
        i18nConfig.changeLanguage(window.__I18N_STATE__)
    }
    const store = window.__PRELOADED_STATE__
        ? createStore(window.__PRELOADED_STATE__)
        : createStore()
    const themeCookie = Cookie.get('theme')
    themeCookie && store.dispatch(setTheme(themeCookie))
    const html = (
        <ReduxProvider store={store}>
            <LanguageProvider I18n={i18nConfig}>
                <Router>
                    <ThemesProvider mode={themeCookie}>
                        <App />
                    </ThemesProvider>
                </Router>
            </LanguageProvider>
        </ReduxProvider>
    )

    const app = document.getElementById('root')
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
    renderMethod(html, app)
    const browserHistory = window.browserHistory || createBrowserHistory()
    if (process.env.NODE_ENV === 'development') {
        if (module.hot) {
            module.hot.accept()
        }

        if (!window.store || !window.browserHistory) {
            window.browserHistory = browserHistory
            window.store = store
        }
    }
}
