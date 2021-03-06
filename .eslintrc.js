const production = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    overrides: [
        {
            env: {
                jest: true,
            },
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
        },
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    root: true,
    rules: {
        'max-len': 0,
        'indent': ['error', 4],
        'no-console': production ? 'error' : 'off',
        'no-debugger': production ? 'error' : 'off',
    },
};
