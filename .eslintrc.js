module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es2021: true,
        node: true
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4]
    }
}
