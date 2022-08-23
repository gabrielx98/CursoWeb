const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')

const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            /* new uglifyJsPlugin({  // substituido pelo terser
                cache: true,
                parallel: true
            }), */
            new optimizeCssAssetsPlugin({})

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        }),
        new terserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            }
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //regex => regex101.com
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // adiciona css a dom injetando a tag style
                'css-loader',// interpreta @import, url()....
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }
        ]
    }
}