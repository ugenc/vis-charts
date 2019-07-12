import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

// This is necessary for Moment to work.
import commonjs from 'rollup-plugin-commonjs'

const babelConfingBase = {
  extensions: ['.mts', '.ts', '.tsx', '.mjs', '.js', '.jsx'],
}
const resolveConfig = {
  extensions: [...babelConfingBase.extensions, '.json', '.node'],
}

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm.js',
      format: 'esm',
    },
    plugins: [resolve(resolveConfig), commonjs(), babel(babelConfingBase)],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'visUtil',
    },
    plugins: [resolve(resolveConfig), commonjs(), babel(babelConfingBase)],
  },
]
