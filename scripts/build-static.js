const webpack = require('webpack')
const rimraf = require('rimraf')
const clientConfig = require('../config/client.config')
const serverConfig = require('../config/server.config')
const paths = require('../config/paths')
const { logMessage, compilerPromise } = require('./utils')
const nodemon = require('nodemon')
const fs = require('fs')
const puppeteer = require('puppeteer')
const saveUrlToFile = (html = '', pathname = '/', output = '.') => {
    const path = pathname === '/' ? `${output}/index.html` : `${output}${pathname}.html`
    fs.writeFileSync(path, html, (err) => {
        if (err) {
            logMessage(`Generate Path > ${routes[i]} Failed!`, 'error')
            throw err
        }
    })
}
const crawler = async ({ url, browser }) => {
    let page = null
    let html = false
    try {
        page = await browser.newPage()
        await page.goto(url, { waitUntil: 'networkidle0' })
        html = await page.content()
    } catch (e) {
        logMessage(`Not able to fetch ${url}`, 'warning')
    } finally {
        if (page) {
            await page.close()
        }
        return html
    }
}
const generateStaticHTML = async () => {
    const PORT = process.env.PORT ? process.env.PORT : 2222
    const script = nodemon({
        script: `${paths.serverBuild}/server.js`,
        ignore: ['*'],
    })
    script.on('start', async () => {
        const domain = `http://localhost:${PORT}`
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
        const routes = ['/']
        for (let i = 0; i < routes.length; i++) {
            logMessage(`Generate Path > ${routes[i]}`)
            const html = await crawler({
                url: `${domain}${routes[i]}`,
                browser,
            })
            saveUrlToFile(html, routes[i], paths.clientBuild)
            logMessage(`Generate Path > ${routes[i]} Done!`, 'success')
        }
        await browser.close()
        process.exit()
    })
    script.on('quit', () => {
        process.exit()
    })
    script.on('error', () => {
        process.exit(1)
    })
}

const build = async () => {
    rimraf.sync(paths.clientBuild)
    rimraf.sync(paths.serverBuild)

    const multiCompiler = webpack([clientConfig, serverConfig])

    const clientCompiler = multiCompiler.compilers[0]
    const serverCompiler = multiCompiler.compilers[1]

    const clientPromise = compilerPromise(clientCompiler)
    const serverPromise = compilerPromise(serverCompiler)

    serverCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log('SERVER =>', stats.toString(serverConfig.stats))
            return
        } else {
            console.log('ERROR', error)
        }
    })

    clientCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log('CLIENT =>', stats.toString(clientConfig.stats))
            return
        } else {
            console.log('ERROR', error)
        }
    })

    try {
        await serverPromise
        await clientPromise
        await generateStaticHTML()
        logMessage('Build Successfull!', 'success')
    } catch (error) {
        logMessage(error, 'error')
    }
}

build()
