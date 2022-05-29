const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../../build'),
        },
        port: 3000,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'build/assets', to: 'assets'}
            ]
        }),
        new HTMLWebpackPlugin({
            template: 'build/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    }
}