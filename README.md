# vuepress-plugin-npm2yarn

这个插件的作用是当你在写一些文档或者教程时，可以很方便的将 `npm bash` 代码转化为 `yarn bash`，反之亦然。

本插件依赖 vuepress `<codeGroup>` 组件。

## How to use

### Install

```bash
npm install vuepress-plugin-npm2yarn
```

### use

```js
//.vuepress/config.js
const { npm2yarnPlugin } = require("vuepress-plugin-npm2yarn");

module.exports = {
  //...some code

  plugins: [npm2yarnPlugin()],
};
```

当你需要在 md 文件中使用时，仅需要添加`npm2yarn`即可识别。

````js
// ```bash npm2yarn

// yarn run start

// ```
````

![use](./asset/image/use.gif)

## development

```js

pnpm install

pnpm run build

```

```js
// other vuepress project
//.vuepress/config.js
const {
  npm2yarnPlugin,
} = require("../vuepress-plugin-npm2yarn/lib/node/index");

module.exports = {
  //...some code

  plugins: [npm2yarnPlugin()],
};
```
