import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only';
import VuePlugin from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip';

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

const useTerser = false;
const minificator = useTerser ? terser : uglify;

/*if (useTerser) {
    options.ecma = 6;
}*/

export default {
    input: './app/main.js',
    output: {
        file: './dist/main.js',
        format: 'iife',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        resolve({
            browser: true
        }),
        VuePlugin(),
        commonjs({
            namedExports: {
                'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        css({ output: './dist/styles.css' }),
        typescript(),
        babel({ extensions: ['.js', '.ts', '.tsx', '.js6', '.mjs', '.jsx', '.vue']}),
        minificator(options),
        gzipPlugin()
    ]
};
