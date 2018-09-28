module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'class-methods-use-this': 0,
    camelcase: 0,
    'arrow-body-style': 0,
    'no-unused-vars': [2, { args: 'none' }],
    'import/no-unresolved': 0, // Conflicts with lib node path.
    'import/no-extraneous-dependencies': 0, // Conflicts with lib node path.
    'no-underscore-dangle': ['error', { allow: ['__set__', '__get__', '_typeConfig', '_source'] }], // Allow rewire format.
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 10 }],
    'prefer-promise-reject-errors': 0, // Redundant with graphql
    'no-console': 1, // require('logger') & use logger.(debug, info, warning, error) instead
    'new-cap': 0, // express Router or model's name use capital.
    'no-param-reassign': 0, // reassigning or modifying req is commin
    'default-case': 0, // for switches - we often use 3 switches for networks, seems unnecessary
    'consistent-return': 0,
    'no-buffer-constructor': 0,
    'prefer-destructuring': ['error', { array: false, object: true }],
    'prettier/prettier': ['error', {
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'all',
    }],
  },
};
