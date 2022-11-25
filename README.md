# @mattiadevivo/build-url

[![Publish to npmjs](https://github.com/mattiadevivo/build-url/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/mattiadevivo/build-url/actions/workflows/npm-publish.yml)

A super simple and zero-dependency url builder.

You're coming from `build-url` package but it's been deprecated and lacks support for **ESM** and **TS**?
This new build-url comes with the intention of substituting it with **zero dependencies**, let's help me to make it a better version (see [CONTRIBUTING.md](./CONTRIBUTING.md))!

## Installation

Install it with npm:
```bash
npm install build-url --save
```

No need of `@types` package since it has built-in support for TypeScript. 

## Usage

- No need to manage ending *basePath* ending with `/` or *path* starting with `/`, the function will manage it.

- No need to worry about double `/`, *build-url* function will remove them (except for the ones after the protocol i.e. `https://`).

Usage in TypeScript/ES6:
```ts
import {buildUrl} from "@mattiadevivo/build-url";

const result = buildUrl("http://localhost:8080", {
  path: "api/hello/",
  queryParams: {
    a: 1,
    b: 2,
  },
});
// This will produce http://localhost:8080/api/hello/?a=1&b=2
```


There is no support for commonjs modules right now, but it will be introduced later!

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Want to contribute?

This project is under a MIT license.

See [CONTRIBUTING.md](./CONTRIBUTING.md)
