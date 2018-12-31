const webpack = require( 'webpack' );
const path = require( 'path' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );

const config = {
	entry: [
		path.resolve( __dirname, './src/js/index.js' ),
		path.resolve( __dirname, './src/styles/style.scss' ),
	],
	output: {
		path: path.resolve( __dirname, 'public' ),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {name: '[name].css' },
					},
					{loader: 'extract-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'},
				],
			},
		],
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
		],
	},
	devServer: {
		contentBase: './public',
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: false,
			errorDetails: false,
			warnings: false,
			publicPath: false,
		  },
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
	],
	stats: false,
};

module.exports = config;
