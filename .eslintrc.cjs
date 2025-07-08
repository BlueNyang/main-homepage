module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    '@vue/typescript/recommended',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
  },
};
