const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			// {
			// 	test: /\.s[ac]ss$/i,
			// 	include: [__dirname + '/src'],
			// 	use: ['style-loader', 'css-loader', "sass-loader",],
			// },
			{
				test: /\.(scss|css)$/,
				include: [__dirname + '/src'],
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			  },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{ test: /\.hbs$/, loader: 'handlebars-loader' },
			{
                test: /\.svg$/,
                use: ['file-loader',
					'svg-sprite-loader',
					'svgo-loader'
				  ]
            },
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			  },
			  {
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			  },
			// {
			// 	test: /\.(gif|png|jpe?g|svg)$/i,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				name: '[path][name].[ext]',
			// 				limit: 8192,
			// 				esModule: false,
			// 			},
			// 		},
			// 		'img-loader',
			// 	],
			// },
			// {
			// 	test: /\.png$/,
			// 	use: ['file-loader'],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		compress: true,
		port: 9000,
	},
};
