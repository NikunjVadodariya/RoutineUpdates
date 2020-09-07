var webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './js/pages/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,
                            modules: {
                                // CSS name which we want to keep we can also
                                // change it to something like this [name]-[local]--[hash:base64:5]
                                localIdentName: '[name]',
                            },
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,
                            modules: {
                                // CSS name which we want to keep we can also
                                // change it to something like this [name]-[local]--[hash:base64:5]
                                localIdentName: '[local]',
                            },
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './scss/common/variables.scss'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./templates/index.html",
            filename: "./index.html",
            title: "Thawe Marine"
        }),
        new webpack.EnvironmentPlugin({
            BASE_ADDRESS:'http://localhost:3000'    
        }),
    ],
    mode: 'development',
    watch: true,
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: [path.join(__dirname, 'templates')],
        port: 5000,
        hotOnly: false,
        hot: false,
        host: '0.0.0.0'
    },
    devtool: 'source-map'
};