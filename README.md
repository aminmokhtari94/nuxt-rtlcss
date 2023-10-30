# NuxtJs RTLCSS Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

NuxtJs RTLCSS Module to build Cascading Style Sheets (CSS) with Left-To-Right (LTR) and Right-To-Left (RTL) rules using RTLCSS PostCss Plugin

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-rtlcss?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 🙂 &nbsp;Auto RTL All Styles
- ⛰ Nuxt 3

## Quick Setup

1. Add `nuxt-rtlcss` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-rtlcss

# Using yarn
yarn add --dev nuxt-rtlcss

# Using npm
npm install --save-dev nuxt-rtlcss
```

2. Add `nuxt-rtlcss` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    // "@nuxtjs/tailwindcss" or any styled base module
    // ...
    "nuxt-rtlcss",
  ],
  rtlcss: {
    // ... options
  },
});
```

> ⚠️ make sure load `rtlcss` module at the end of `modules` list.

That's it! You can now use RTLCSS Module in your Nuxt app ✨

## Options

- Add `nuxt-rtlcss` to the root of `nuxt.config.ts`
- Read options and more informations at [elchininet/postcss-rtlcss](https://github.com/elchininet/postcss-rtlcss/tree/v4.0.8) repository

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-rtlcss/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-rtlcss
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-rtlcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-rtlcss
[license-src]: https://img.shields.io/npm/l/nuxt-rtlcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-rtlcss
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
