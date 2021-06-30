const prod = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: [
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: prod
					? {
							grid: 'autoplace',
					  }
					: false,
				features: {},
				stage: 0,
			},
		],
		prod && [
			'cssnano',
			{
				preset: 'advanced',
			},
		],
		prod && 'postcss-fail-on-warn',
	].filter(Boolean),
};
