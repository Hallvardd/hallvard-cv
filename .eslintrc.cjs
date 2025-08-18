module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte3/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['svelte3', '@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended'
			]
		}
	],
	rules: {
		'prettier/prettier': 'error'
	},
	settings: {
		'svelte3/typescript': () => require('typescript') // for svelte3 to detect TS
	}
};
