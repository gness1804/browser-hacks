

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base'],
  // check if imports actually resolve
  // 'settings': {
  //   'import/resolver': {
  //     'webpack': {
  //       'config': 'build/webpack.base.conf.js'
  //     }
  //   }
  // },
  // add your custom rules here
  'rules': {
    'no-console': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'no-alert': 'off',
    'arrow-body-style': 'off',
    'global-require': 'off',
    'flowtype-errors/show-errors': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'operator-linebreak': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

