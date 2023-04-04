module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'new-cap': 'off',
    'no-new': 'off',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'never'
      }
    ],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
