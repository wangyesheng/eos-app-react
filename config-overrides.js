const {
   override,
   fixBabelImports,
   addLessLoader,
   addWebpackAlias,
   addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');
const theme = require('./theme');

const resolve = dir => path.join(__dirname, dir);

module.exports = override(
   fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
   }),
   addLessLoader({
      javascriptEnabled: true,
      modifyVars: theme,
      modules: true,
      localIdentName: '[local]--[hash:base64:5]'
   }),
   addWebpackAlias({
      '@': resolve('src'),
      _p: resolve('src/pages'),
      _c: resolve('src/components'),
      _s: resolve('src/store'),
      _h: resolve('src/hoc')
   }),
   addDecoratorsLegacy() // 装饰器
);
