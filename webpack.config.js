const { resolve } = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    stats: {
        maxModules: 0
    },
    mode: 'development',

    entry: './main.jsx',

    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },

    context: resolve(__dirname, 'app'),

    devServer: {
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/dist',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};

module.exports = config;
