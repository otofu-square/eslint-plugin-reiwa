<h1 align="center">eslint-plugin-reiwa</h1>

<p align="center">
  <a href="https://github.com/otofu-square/eslint-plugin-reiwa/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-plugin-reiwa.svg?style=flat-square" alt="GitHub license" /></a>
  <a href="https://www.npmjs.com/package/eslint-plugin-reiwa"><img src="https://img.shields.io/npm/v/eslint-plugin-reiwa.svg?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/eslint-plugin-reiwa"><img src="https://img.shields.io/npm/dm/eslint-plugin-reiwa.svg?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://travis-ci.com/otofu-square/eslint-plugin-reiwa" id="status-image-popup" title="Latest push build on default branch: " name="status-images" class="open-popup" data-ember-action="" data-ember-action-58="58"><img src="https://travis-ci.com/otofu-square/eslint-plugin-reiwa.svg?branch=master" alt="build:"></a>
</p>

## What's this?

This is the eslint plugin to replace 平成 with 令和 which is new era in Japan.

## Examples

### `reiwa/no-heisei-in-literal`

```js
// incorrect
let str = "heisei";
str = "平成";
str = "Heisei will ended during the GW of 2019 this year.";
str = "平成の終わりは今年2019年のＧＷ中になる見込みです。";
```

### `reiwa/no-heisei-in-variable-name`

```js
// incorrect
const theBeginningOfHeisei = 1989;
let heisei;
var 平成;
```

## Getting started

### Install

```sh
$ yarn add -D eslint-plugin-reiwa
# or
$ npm i -D eslint-plugin-reiwa
```

### Edit `.eslintrc.js`

```js
module.exports = {
  plugins: [
    ...
    "reiwa",
    ...
  ],
  rules: {
    "reiwa/no-heisei-in-literal": "error",
    "reiwa/no-heisei-in-variable-name": "error",
    ...
  }
}
```

or

```js
module.exports = {
  extends: ["plugin:reiwa/recommended"]
};
```

## LICENSE

MIT
