module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    // see https://github.com/vuejs/vue-cli/issues/1650
    //  Unable to resolve path to module '@/components/hero/Illustration.vue'   import/no-unresolved
    //'@vue/airbnb',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  globals: {
    bus: false,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-missing-keys': 'off',
    '@intlify/vue-i18n/no-unused-keys': ['error', {
      extensions: ['.js', '.vue'],
    }],
    'no-multiple-empty-lines': 'off',
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/i18n/locales/*.json', // extension is glob formatting!
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
