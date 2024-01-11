module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    semi: 'error',
    'commonjs/no-duplicate-exports': 2,
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off'
  }
};
