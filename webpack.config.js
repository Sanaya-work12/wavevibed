/**
 * Authored by Shruti
 * Webpack configurations for module bundling
 */
var webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: '[name].bundle-[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		inline: true,
		open: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
						  hmr: process.env.NODE_ENV === 'development',
						}
					},
					'postcss-loader',
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader'// compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
      		chunkFilename: '[id].css'
		}),
		new AutoPrefixer()
	]
};