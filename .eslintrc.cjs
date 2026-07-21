module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',   // ← ADD THIS: disables the old "React must be in scope" rule
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  globals: {                       // ← ADD THIS: tells ESLint about Vitest test globals
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
  },
  rules: {},
};