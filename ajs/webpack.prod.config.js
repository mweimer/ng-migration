const path = require('path');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                use: [
                {
                    loader: 'ng-annotate-loader',
                    options: {
                        ngAnnotate: 'ng-annotate-patched',
                        es6: true,
                        explicitOnly: false
                    }
                },
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }, 
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }),
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
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin(
            [{ from: 'assets/**/*'}], 
            { ignore: ['.gitkeep'], debug: 'warning' }
        ),
        new HtmlWebpackPlugin({
            title: 'Angular Migration',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        }),
        new ExtractTextPlugin('css/style.css'),
        new UglifyJsPlugin()
    ],

    entry: './index.js',
    mode: 'production',
    output: {
        path: DESTINATION,
        filename: 'js/[name]-bundle-[chunkhash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: {
          index: 'index.html'
        }
    },
};