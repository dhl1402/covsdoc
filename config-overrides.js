const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#7BB94A',
      '@layout-body-background': '#282c34',
      '@layout-header-background': '#1D2025',
      '@text-color': '#FFF',
    },
  }),
);
