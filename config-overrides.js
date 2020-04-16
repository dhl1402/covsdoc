const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  // config => {
  //   const eslintRule = config.module.rules.filter(
  //     r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== 0),
  //   )[0];
  //   eslintRule.use[0].options.baseConfig = {
  //     extends: 'react-app',
  //     rules: {
  //       'react-hooks/exhaustive-deps': 0,
  //     },
  //   };
  //   return config;
  // },
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
