# nuxt-trustup-io-auth

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for auth

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@deegital/nuxt-trustup-io-auth?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->


## Quick Setup

1. Add `@deegital/nuxt-trustup-io-auth` dependency to your project

```bash
# Using pnpm
pnpm add -D @deegital/nuxt-trustup-io-auth

# Using yarn
yarn add --dev @deegital/nuxt-trustup-io-auth

# Using npm
npm install --save-dev @deegital/nuxt-trustup-io-auth
```

2. Add `@deegital/nuxt-trustup-io-auth` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@deegital/nuxt-trustup-io-auth'
  ],
  trustupIoAuth: {}
})
```

## Usage/Examples

```bash
NUXT_PUBLIC_AUTH_TRUSTUP_IO_URL=https://auth.trustup.io
```

```javascript
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      authTrustupIoUrl: "",
    },
  },
  ...
  trustupIoAuth: {
    localStorageKey: "auth_token", // the name of the key for the token, 'auth_token by default'
  },
  ...

```
In your app.vue you should use the layout to have the loader and hide if not authenticated
```html
  <template>
  <div>
    <h1>App</h1>
    <div>
      <NuxtLayout name="auth-layout">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

```
If you want to display the user informations you can use the composable useAuth()

```javascript
    const auth = useAuth();

    console.log(auth.user);
```

That's it! You can now use nuxt-trustup-io-auth in your Nuxt app ✨

## Development

### Bootstrap module
Find and replace all on all files (CMD+SHIFT+F):
```shell
  - nuxt-trustup-io-auth // nuxt-trustup-io-toasteo
  - Nuxt module for auth // Our notification package for nuxt.
  - trustupIoAuth // trustupIoToasteo
  - @deegital // @deegital
  - git@github.com:deegitalbe/nuxt-trustup-io-auth.git // git@github.com:deegitalbe/nuxt-trustup-io-toasteo.git
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
[npm-version-src]: https://img.shields.io/npm/v/@deegital/nuxt-trustup-io-auth/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-auth

[npm-downloads-src]: https://img.shields.io/npm/dm/@deegital/nuxt-trustup-io-auth.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-auth

[license-src]: https://img.shields.io/npm/l/@deegital/nuxt-trustup-io-auth.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-auth

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
