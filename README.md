# CrowdRiff eslint config

## Usage

```
yarn add --dev eslint-config-crowdriff
```

To use this eslint config, extend it in your local .eslintrc.js file:

```js
module.exports = {
  extends: ['eslint-config-crowdriff/core']
};
```

To get auto fixing working with VS Code, install the eslint extension and add
the following to your `settings.json` file:

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
