import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "使用模版",
    children: [
      {text: "demo", link: "/pages/demo/"},
      {text: "memo", link: "/pages/memo/"},
    ]
  },
]);
