module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:unicorn/recommended', 'prettier'],
	plugins: ['@typescript-eslint', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['dist/**/*.*'],
	rules: {
		'prettier/prettier': [1],
		'linebreak-style': 0,
		'no-param-reassign': 0,
		'no-multiple-empty-lines': [1, { max: 2 }],
		indent: [1, 'tab', { SwitchCase: 1 }],
		'no-tabs': [1, { allowIndentationTabs: true }],
		'max-len': [
			1,
			{
				code: 120,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTrailingComments: true,
				ignoreTemplateLiterals: true,
			},
		],
		'function-paren-newline': 0,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'unicorn/no-for-loop': 0,
		'unicorn/no-array-for-each': 0,
		'unicorn/prefer-spread': 0,
		'unicorn/expiring-todo-comments': 0,
		'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
		'default-param-last': 0,
		'no-underscore-dangle': [1, { allowAfterThis: true }],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
