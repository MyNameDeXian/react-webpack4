const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// webpack 通用配置

// 配置别名
const resolve = {
	alias: {
		assets: path.join(__dirname, '../src/assets'),
		components: path.join(__dirname, '../src/components'),
		pages: path.join(__dirname, '../src/pages'),
		images: path.join(__dirname, '../src/images'),
		modules: path.join(__dirname, '../src/modules'),
		services: path.join(__dirname, '../src/services'),
	},
	// 文件扩展名
	extensions: ['.js']
}

// 公共插件
const plugins = [
	new CleanWebpackPlugin('../dist', {
		// 允许删除不在 webpack 根目录下的文件
		allowExternal: true
	}),
]

// 配置公共 loader
const rules = [
	{
		test: /\.js$/,
		use: "babel-loader",
		exclude: /node_modules/
	}
]

module.exports = {
	resolve,
	plugins,
	module: {
		rules
	}
}