const merge = require('webpack-merge')
const commonConfig = require('./webpack/common.js')
const devConfig = require('./webpack/webpack.dev.js')
const proConfig = require('./webpack/webpack.pro.js')

if(process.env.NODE_ENV === 'Pro'){
	// 生产环境
	var config = proConfig;
} else {
	// 开发环境
	var config = devConfig;
}

module.exports = merge(commonConfig, config);