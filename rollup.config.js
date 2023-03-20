import babel from 'rollup-plugin-babel';
import css from "rollup-plugin-import-css";
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import ignore from "rollup-plugin-ignore";

import pkg from './package.json';

const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
};

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'pipeline-ui',
      sourcemap: true,
      globals: outputGlobals,
    },
    {
      file: './dist/index.esm.js',
      format: 'es',
      name: 'pipeline-ui',
      sourcemap: true,
      globals: outputGlobals,
    },
  ],
  plugins: [
    css(),
    json(),
    external(),
    url(),
    svgr({
      ref: true,
      icon: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      namedExports: {
        '@walletconnect/environment': [ 'isNode' ],
        '@json-rpc-tools/utils/dist/cjs/index.js': [ 'formatJsonRpcRequest' ]
      }
    })
  ],
};