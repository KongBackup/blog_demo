import { navbar } from "vuepress-theme-hope";
import {navList} from './utils'
 
export const enNavbar = navbar([
  "/",
  {
    text: "使用模版",
    children: [
      {text: "MAC", link: "/pages/工具箱/MAC/"},
      {text: "memo", link: "/pages/未分类/memo/"},
    ]
  },
  ...navList
]);
