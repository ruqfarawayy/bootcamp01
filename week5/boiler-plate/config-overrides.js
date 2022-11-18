const {
 override,
 useBabelRc,
 fixBabelImports
 // fixBabelImports
} = require("customize-cra");
module.exports = override(
 fixBabelImports('import', {
 	libraryName: 'antd',
 	libraryDirectory: 'es',
 	style: 'css'
 }),
 useBabelRc()
);
