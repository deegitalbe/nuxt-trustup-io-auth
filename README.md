# nuxt-trustup-io-auth

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for auth

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@deegital/nuxt-trustup-io-auth?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->


## Installation

1. Add `@deegital/nuxt-trustup-io-auth` dependency to your project

```bash
# Using pnpm
pnpm add @deegital/nuxt-trustup-io-auth

# Using yarn
yarn add @deegital/nuxt-trustup-io-auth

# Using npm
npm install @deegital/nuxt-trustup-io-auth
```

2. Add `@deegital/nuxt-trustup-io-auth` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      trustupIoAuthUrl: "",
    },
  },
  modules: [
    '@deegital/nuxt-trustup-io-auth'
  ],
  trustupIoAuth: {
    accessRoles: ["Developer", "Super Admin"],
    localStorageKey: "auth", // OPTIONAL,
    authUrl: "https://auth.trustup.io", // OPTIONAL,
  }
})
```

3. Use layout to hide application if unauthenticated (usually in app.vue).
```vue
<template>
  <div>
    <NuxtLayout :name="AUTH_LAYOUT_NAME">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { AUTH_LAYOUT_NAME } = useAuthConfig();
</script>
```

That's it! You can now use nuxt-trustup-io-auth in your Nuxt app ✨

## Usage
Package exposes `useAuth()` composable

```vue
<script setup lang="ts">
const {
  isLoading,
  user,
  isAuthenticated,
  logout,
} = useAuth();
</script>
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
