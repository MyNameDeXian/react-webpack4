const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 开发环境配置
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development', 
	module:{
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader','css-loader','less-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase: path.resolve(__dirname, './dist'),
		host: '127.0.0.1',
		compress: true,
		// open: true,
	}
}