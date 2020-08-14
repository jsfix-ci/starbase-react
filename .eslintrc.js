module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import'],
  rules: {
    'linebreak-style': 0,
    'max-len': 0,
    'no-new': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  globals: {
    document: true,
    window: true,
    location: true,
    React: true,
    PropTypes: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.base.js',
      },
    },
  },
};
