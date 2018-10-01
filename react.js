module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'arrow-body-style': 0,
    camelcase: 0,
    // 'array-bracket-spacing': 0, // Problematic for ES6 destructuring
    'no-console': 0,
    // 'object-curly-newline': 0, // Let line length be the limiting factor
    'new-cap': 0, // new keyword?
    'no-debugger': 1, // allow debugger in dev
    'max-len': [1, 100, 2, { ignoreComments: true, ignoreTrailingComments: true }],
    'no-prototype-builtins': 0,
    'no-unused-vars': [
      1,
      {
        varsIgnorePattern: '(props|expect|wrapper)', // for testing
        argsIgnorePattern:
          '(props|err|nextProps|nextState|prevProps|prevState|nextLocation|response|action|res|reject|store|ownProps|dispatch)',
      },
    ], // Warn, ignoring args

    'class-methods-use-this': 0, // Not super useful in React
    'consistent-return': 0, // possible confusion when returns might be of done function
    'no-useless-constructor': 0,
    'react/destructuring-assignment': 0,
    'import/no-named-as-default': 0, // not how we do connected components
    'import/prefer-default-export': 0, // Doesn"t work with ducks
    'import/newline-after-import': 0, // bad for ducks
    'import/first': 0, // bad for ducks
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0, // Breaks tests
    'react/prop-types': 1, // Not for prototypin
    'react/require-default-props': 0, // Not for prototypin
    'react/no-danger': 0, // LIVE DANGEROUSLY
    'jsx-a11y/anchor-is-valid': 0, // Doesn"t work with Link
    'react/jsx-no-target-blank': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'no-confusing-arrow': 0, // Needed for styled components
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  plugins: ['react'],
};
