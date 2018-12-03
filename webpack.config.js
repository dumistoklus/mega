const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserJsPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
    const mode = env && env.production ? 'production' : 'development';
    const useTerser = env && env.terser;
    const options = {
        warnings: false,
        parse: {
            html5_comments: false
        },
        compress: {
            hoist_funs: true,
            passes: 5
        },
        output: {
            comments: false
        },
        mangle: true,
    };

    if (useTerser) {
        options.compress.ecma = 6;
        options.output.ecma = 6;
    }

    const minificator = useTerser ? new TerserJsPlugin({
        terserOptions: options
    }) : new UglifyJsPlugin({
        uglifyOptions: options
    });

    return {
        stats: {
            maxModules: 0
        },

        mode: mode,

        entry: './main.js',

        output: {
            filename: 'main.js',
            path: resolve(__dirname, 'dist'),
            publicPath: '/dist',
        },

        context: resolve(__dirname, 'app'),

        devServer: {
            contentBase: resolve(__dirname, '.'),
            publicPath: '/dist',
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts'],
        },

        module: {
            rules: [
                {

                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: resolve(__dirname, 'tsconfig.json') }
                        },
                    ]
                },
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

        optimization: {
            minimize: true,
            minimizer: [minificator]
        },

        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            }),
            new CompressionPlugin()
        ]
    };
};
