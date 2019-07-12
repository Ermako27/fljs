import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json';

export default [
    // CommonJS
    {
        input: 'src/index.js',
        output: {file: 'lib/fljs.js', format: 'cjs', indent: false},
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {}).concat('react-dom')
        ],
        plugins: [babel()]
    },

    // ES
    {
        input: 'src/index.js',
        output: {file: 'es/fljs.js', format: 'es', indent: false},
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ],
        plugins: [babel()]
    },

    // ES for Browsers
    {
        input: 'src/index.js',
        output: {
            file: 'es/fljs.mjs',
            format: 'es', 
            indent: false,
        },
        plugins: [
            babel(),
            nodeResolve({
                jsnext: true
            }),
            commonjs({
                namedExports: {
                    'node_modules/react/index.js': [
                        'React',
                        'Component'
                    ]
                }
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false
                }
            })
        ]
    },

    // UMD Development
    {
        input: 'src/index.js',
        output: {
            file: 'dist/fljs.js',
            format: 'umd',
            name: 'fljs',
            indent: false
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            nodeResolve({
                jsnext: true
            }),
            commonjs({
                namedExports: {
                    'node_modules/react/index.js': [
                        'React',
                        'Component'
                    ]
                }
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    },

    // UMD Production
    {
        input: 'src/index.js',
        output: {
            file: 'dist/fljs.min.js',
            format: 'umd',
            name: 'fljs',
            indent: false
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            nodeResolve({
                jsnext: true
            }),
            commonjs({
                namedExports: {
                    'node_modules/react/index.js': [
                        'React',
                        'Component'
                    ]
                }
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false
                }
            })
        ]
    }
];
