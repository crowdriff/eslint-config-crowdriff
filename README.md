### CrowdRiff linter config!

## What should we do

```
yarn add eslint-config-crowdriff
```

There are two main linting configs that we will go with - one for node, and a more robust one for react (with all of the fun exciting jsx things).

.eslintrc.js in the root for the node stuff:
```

module.exports = {
  env: {
    jest: true
    OR
    mocha: true
  },
  extends: ['eslint-config-crowdriff/node']
};
```
For react

.eslintrc.js in the src or app folder:
```

module.exports = {
  env: {
    jest: true
    OR
    mocha: true
  },
  extends: ['eslint-config-crowdriff/react']
};
```

To get autosaving working, add the eslint extension to vscode and in settings, set `eslint.autoFixOnSave: true`. Setting `fix: true` as part of the build process will also work 