# eslint-plugin-reiwa

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
