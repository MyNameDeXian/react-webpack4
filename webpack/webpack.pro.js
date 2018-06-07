const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 生产环境打包配置
module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				// postcss-loader 不全浏览器前缀
				use: ['style-loader','css-loader','postcss-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader','css-loader','postcss-loader','less-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','postcss-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
					// 大于 10240 字节的图片 打包到 dist/images/ 文件夹下
	              limit: 10240,
	              outputPath:'images/'
	            }
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new UglifyJsPlugin()
	]
}