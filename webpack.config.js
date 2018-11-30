const { resolve } = require('path');
const webpack = require('webpack');

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
    ]
};

module.exports = config;
