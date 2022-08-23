const webpack = require('webpack')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const terserPlugin = require('terser-webpack-plugin')
const modoDev = process.env.NODE_ENV == 'production'
const HTMLMnifierPlugin = require('html-minifier-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9001
    },
    optimization: {
        minimizer: [
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
        }),
            new HTMLMnifierPlugin({})
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //regex => regex101.com
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // adiciona css a dom injetando a tag style
                'css-loader',// interpreta @import, url()....
                'sass-loader',

            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],


        },
        {
            test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
            use: [{ loader: 'file-loader', options: { name: '[name].[ext]' , outputPath: "/fonts"} }],
        },
        {
            test: /\.html$/,
            use: [{loader: 'file-loader', options: {name: '[name].[ext]',outputPath: "/html"}},'extract-loader','html-loader']
        }

        ]
    }
}