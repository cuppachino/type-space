module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		/* 📚 JSdoc */
		'plugin:jsdoc/recommended',
		/* 🎨 Prettier - Needs to be last so it can override other configs */
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		tsconfigRootDir: './',
		project: './tsconfig.eslint.json'
	},
	plugins: ['@typescript-eslint', 'jsdoc', 'eslint-plugin-tsdoc', 'prettier'],
	rules: {
		// * 👕 ESLint
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-empty-interface': ['off'],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: false
			}
		],
		'@typescript-eslint/ban-types': [
			'warn',
			{
				types: {
					'{}': false
				}
			}
		],
		// * 📚 TSdoc
		'tsdoc/syntax': 'warn',
		// * 📚 JSdoc
		'jsdoc/require-asterisk-prefix': ['error', 'always'],
		'jsdoc/require-jsdoc': ['off'],
		'jsdoc/require-returns': ['off'],
		'jsdoc/require-returns-type': ['off'],
		'jsdoc/require-param': ['off'],
		'jsdoc/require-param-type': ['off'],
		'jsdoc/require-param-description': ['off'],
		'jsdoc/check-tag-names': ['off'],
		'jsdoc/check-param-names': ['off'],
		// * 🔗 Imports
		'sort-imports': [
			'error',
			{
				ignoreCase: false
			}
		]
	}
}
