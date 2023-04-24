# {MODULE_NAME}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

{MODULE_DESCRIPTION}

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/{ORGANIZATION_NAME}/{MODULE_NAME}?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `{ORGANIZATION_NAME}/{MODULE_NAME}` dependency to your project

```bash
# Using pnpm
pnpm add -D {ORGANIZATION_NAME}/{MODULE_NAME}

# Using yarn
yarn add --dev {ORGANIZATION_NAME}/{MODULE_NAME}

# Using npm
npm install --save-dev {ORGANIZATION_NAME}/{MODULE_NAME}
```

2. Add `{ORGANIZATION_NAME}/{MODULE_NAME}` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '{ORGANIZATION_NAME}/{MODULE_NAME}'
  ],
  {MODULE_CONFIG_KEY}: {}
})
```

That's it! You can now use {MODULE_NAME} in your Nuxt app ✨

## Development

### Bootstrap module
Find and replace all on all files (CMD+SHIFT+F):
```shell
  - {MODULE_NAME} // nuxt-trustup-io-toasteo
  - {MODULE_DESCRIPTION} // Our notification package for nuxt.
  - {MODULE_CONFIG_KEY} // trustupIoToasteo
  - {ORGANIZATION_NAME} // @deegital
  - {REPOSITORY_URL} // git@github.com:deegitalbe/nuxt-trustup-io-toasteo.git
```
Start bootstrap script
```shell
./cli bootstrap
```

### Available commands
```bash
# Install dependencies
./cli yarn install

# Generate playground
./cli yarn generate

# Start project
./cli start

# Stop project
./cli stop

# Restart project
./cli restart

# Build the playground for production
./cli yarn dev:build

# Run ESLint
./cli yarn lint

# Run Vitest
./cli yarn test
./cli yarn test:watch

# Validate your package (running linter & typecript validation)
./cli yarn validate

# Build the package for publication
./cli yarn build

# Release new version
npm version patch
```

### References
Nuxt module development [reference](https://nuxt.com/docs/guide/going-further/modules)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/{ORGANIZATION_NAME}/{MODULE_NAME}/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/{ORGANIZATION_NAME}/{MODULE_NAME}

[npm-downloads-src]: https://img.shields.io/npm/dm/{ORGANIZATION_NAME}/{MODULE_NAME}.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/{ORGANIZATION_NAME}/{MODULE_NAME}

[license-src]: https://img.shields.io/npm/l/{ORGANIZATION_NAME}/{MODULE_NAME}.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/{ORGANIZATION_NAME}/{MODULE_NAME}

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
