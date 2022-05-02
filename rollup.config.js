import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: ['./dist/index.js'],
        output: {
        file: 'lib/index.folody.js',
        format: 'cjs',
            exports: 'named',
        },
        plugins: [
            external(),
            resolve(),
            terser(),
        ]
    },
    {
        input: ['./dist/utils/FileSystem.js'],
        output: {
        file: 'lib/utils/FileSystem.js',
        format: 'cjs',
            exports: 'named',
        },
        plugins: [
            external(),
            resolve(),
            terser(),
        ]
    },
    {
        input: ['./dist/utils/error/Error.js'],
        output: {
        file: 'lib/utils/error/Error.js',
        format: 'cjs',
            exports: 'named',
        },
        plugins: [
            external(),
            resolve(),
            terser(),
        ]
    },
    {
        input: ['./dist/handler/Error.handler.js'],
        output: {
        file: 'lib/handler/Error.handler.js',
        format: 'cjs',
            exports: 'named',
        },
        plugins: [
            external(),
            resolve(),
            terser(),
        ]
    }
]
    