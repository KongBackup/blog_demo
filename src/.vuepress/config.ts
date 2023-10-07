import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search"; // 添加搜索组件
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  title: '不悔下凡',
  plugins: [searchPlugin({}),registerComponentsPlugin({componentsDir: path.resolve(__dirname, './components')})
  ],
  theme,
  shouldPrefetch: false,
});
