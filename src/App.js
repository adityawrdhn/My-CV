import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { GlobalStyle, FixedWrapper, ScrollWrapper, ContentWrapper } from 'App.styled'
import { DrawerProvider } from 'context/DrawerContext'
import { Navbar } from 'component/UI'
import favicon from 'assets/favicon.ico'
import Home from 'pages/Home'

const App = () => {
    return (
        <Fragment>
            <Helmet titleTemplate="Elevenia Mart - %s" defaultTitle="Elevenia Mart">
                <link rel="icon" href={favicon} />
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle />
            <FixedWrapper>
                <DrawerProvider>
                    <Navbar />
                </DrawerProvider>
                <ContentWrapper>
                    <ScrollWrapper fullWidth noGutter>
                        <Home />
                    </ScrollWrapper>
                </ContentWrapper>
            </FixedWrapper>
        </Fragment>
    )
}
export default App
