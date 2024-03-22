import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    files: ['docs/front-base/**/**'],
    rules: {
      'no-extend-native': 'off',
      'prefer-promise-reject-errors': 'off',
      // 'no-multi-spaces': 'off',
      'ts/no-this-alias': 'off',
    },
  },
  {
    files: ['scripts/**'],
    rules: {
      'n/prefer-global/process': 'off',
    },
  },
)
