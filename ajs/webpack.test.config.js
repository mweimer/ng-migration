const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, 
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: 'file-loader'
        }, 
        {
            test: /\.(svg|woff|woff2|eot|ttf)$/,
            use: 'file-loader?outputPath=fonts/'
        }, 
        {
            test: /.html$/,
            use: 'html-loader'
        }]
    },

    plugins: [
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        })
    ],

    devtool: 'inline-source-map',
    
    mode: 'development'
};