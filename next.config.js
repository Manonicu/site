const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
});

module.exports = withPlugins([withMDX], {
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	target: 'serverless',
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.node = {
				fs: 'empty',
			};
		}
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});
		return config;
	},
});
