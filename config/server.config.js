const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: dev ? 'css/[name].css' : 'css/[name].[contenthash].css',
        chunkFilename: dev ? 'css/[id].css' : 'css/[id].[contenthash].css',
    }),
    new webpack.DefinePlugin({
        __SERVER__: 'true',
        __CLIENT__: 'false',
    }),
    new webpack.HotModuleReplacementPlugin(),
]
if (dev) {
    plugins.push(new WriteFilePlugin())
}

if (!dev) {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-report.html',
            openAnalyzer: false,
        }),
    )
}

module.exports = {
    name: 'server',
    target: 'node',
    mode: dev ? 'development' : 'production',
    entry: {
        server: ['@babel/polyfill', path.resolve(__dirname, '../src/Server.js')],
    },
    externals: [
        nodeExternals({
            whitelist: /\.(sa|sc|c)ss$/,
        }),
    ],
    resolve: {
        extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
        modules: paths.resolveModules,
        alias: {
            assets: path.join(paths.src, 'assets'),
            component: path.join(paths.src, 'component'),
            config: path.join(paths.src, 'config'),
            context: path.join(paths.src, 'context'),
            helper: path.join(paths.src, 'helper'),
            pages: path.join(paths.src, 'pages'),
            store: path.join(paths.src, 'store'),
            theme: path.join(paths.src, 'theme'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' },
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|txt|gif|png|svg|wav|mp3)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'media/[name].[hash:8].[ext]',
                        emitFile: false,
                    },
                },
            },
            {
                test: /\.ico$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[name].[ext]',
                    },
                },
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'font/[name].[hash:8].[ext]',
                        emitFile: false,
                    },
                },
            },
        ],
    },
    output: {
        path: paths.serverBuild,
        filename: '[name].js',
        publicPath: paths.publicPath,
        // chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    plugins,
    stats: {
        colors: true,
    },
}
