// This file represents the globally used configuration for eslint.
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
  },
  extends: [
    // Use the airbnb ruleset as a base.
    'airbnb',

    // Use typescript-eslint's recommended rules.
    'plugin:@typescript-eslint/recommended',

    // Enable prettier integration.
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // Don't require import statements in javascript files.
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Don't require prop types in typescript files.
        'react/prop-types': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-use-before-define': 2,
    curly: ['error', 'multi-line'],
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/display-name': 0,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-fragments': [2, 'element'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
