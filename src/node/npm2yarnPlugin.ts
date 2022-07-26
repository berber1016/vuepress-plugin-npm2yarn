import { Plugin, PluginObject } from "@vuepress/core";
import convert from "@armano/npm-to-yarn";

export type ToType = "npm" | "yarn";
const KEY = "npm2yarn";

const getCodeType = (content: string) => {
  if (content.trim().includes("npm")) {
    return "npm";
  } else {
    return "yarn";
  }
};
export const npm2yarnPlugin = (): Plugin => {
  const plugin: PluginObject = {
    name: "vuepress-plugin-npm2yarn",
    multiple: true,
  };
  plugin.extendsMarkdown = (md) => {
    const originFence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
      const [tokens, idx, ...rest] = args;
      let to: ToType = "npm";

      const currentToken = tokens[idx];
      const OFF = currentToken.info.includes(KEY);

      const firstCode = originFence(tokens, idx, ...rest);
      const firstCodeTitle = getCodeType(currentToken.content).toUpperCase();
      if (OFF) {
        if (getCodeType(currentToken.content) === "npm") to = "yarn";
        const translatContent = convert(currentToken.content, to);
        currentToken.content = translatContent;
        const secondCode = originFence(tokens, idx, ...rest);
        const secondCodeTitle = getCodeType(currentToken.content).toUpperCase();

        return `<CodeGroup><CodeGroupItem title="${firstCodeTitle}" actived>${firstCode} </CodeGroupItem><CodeGroupItem title="${secondCodeTitle}">${secondCode} </CodeGroupItem> </CodeGroup>`;
      } else {
        return originFence(tokens, idx, ...rest);
      }
    };
  };

  return plugin;
};

export default npm2yarnPlugin;
