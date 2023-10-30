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

- ⛰ &nbsp;Auto RTL All Styles
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

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
    // @nuxtjs/tailwindcss or any styled base module
    "nuxt-rtlcss",
  ],
});
```

> ⚠️ make sure load `nuxt-rtlcss` module end of `modules` list.

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
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
