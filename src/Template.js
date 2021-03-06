import React from 'react'
import serialize from 'serialize-javascript'
import thumbnailUrl from 'assets/logo192.png'

const Template = ({ children, head, scripts, css, state, i18nState, style }) => {
    return (
        <html lang="">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="CV Website of Aditya Wardhana"
                />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="generator" content="Adityawrdhn" />
                <meta
                    name="keywords"
                    itemProp="keywords"
                    content="cv, resume, aditya, bayu, wardhana, aditya bayu, aditya wardhana, react, ssr, react ssr, multiple theme react, styled component"
                />
                <meta name="web_author" content="Elevenia Technology Division" />
                <meta
                    itemProp="headline"
                    content="CV Website of Aditya Wardhana"
                />
                <meta name="copyright" itemProp="dateline" content="Elevenia Technology Division" />
                <meta name="robots" content="index, follow" />
                <meta name="thumbnailUrl" itemProp="thumbnailUrl" content={thumbnailUrl} />
                <link rel="apple-touch-icon" href={thumbnailUrl} />

                {head.base.toComponent()}
                {head.title.toComponent()}
                {head.meta.toComponent()}

                {head.link.toComponent()}
                {head.script.toComponent()}
                {css.map((href) => {
                    return href && <link key={href} rel="stylesheet" href={href} />
                })}
                {style}
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__ = ${serialize(state, {
                            isJSON: true,
                        })}`,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__I18N_STATE__ = ${serialize(i18nState)}`,
                    }}
                />
                {scripts.map((src) => {
                    return src && <script key={src} src={src} />
                })}
            </body>
        </html>
    )
}

export default Template
