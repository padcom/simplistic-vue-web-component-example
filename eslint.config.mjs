import config from '@padcom/eslint-config-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config['flat/browser'],
  {
    rules: {
      'jsdoc/require-jsdoc': 'off',
    },
  },
]
