import { Plugin,PluginObject } from "@vuepress/core"
import * as npm2yarn from 'npm-to-yarn';

export const npm2yarnPlugin = (): Plugin => {
    const plugin: PluginObject = {
      name: '@vuepress/plugin-container',
      multiple: true,
    }
    
    plugin.extendsMarkdown = md => {
        const fence = md.renderer.rules.fence;
md.renderer.rules.fence = (tokens,idx,...args) => {
    let to:'npm' | 'yarn' = 'npm';
    const token = tokens[idx];
    const hasParams = token.info.includes('npm2yarn');
    const tokenRenderer = fence(tokens,idx,...args);
    if(token.content.startsWith('npm')) to = 'yarn';
    if(hasParams){
      const translate = hasParams ? (npm2yarn as any)(token.content,to) : '';
        token.content = translate;
    const otherTokenRenderer = fence(tokens,idx,...args);
    const firstGroupTitle = to === 'npm' ? 'YARN' : 'NPM';
    const nextGroupTitle = to === 'yarn' ? 'YARN' : 'NPM';
  return `<CodeGroup> <CodeGroupItem title="${firstGroupTitle}" actived>${tokenRenderer} </CodeGroupItem><CodeGroupItem title="${nextGroupTitle}">${otherTokenRenderer} </CodeGroupItem> </CodeGroup>`;
    } else {
      return fence(tokens,idx,...args);
    }
    
}
    }
  
    return plugin
  }

export default npm2yarnPlugin;