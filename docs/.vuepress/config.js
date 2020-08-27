const path = require("path");
const sidebar = require("./sidebar");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  base: isProd ? "/laihua-ui/" : "/",
  port: "6700",
  dest: "docs/.vuepress/dist/laihua-ui/",
  markdown: {
    lineNumbers: false,
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Laihua-UI",
      description:
        "一个基于 Element ui 深度定制开源前端实践方案，帮助你快速构建应用",
    },
  },
  themeConfig: {
    repo: "laihua-coder/laihua-ui",
    editLinks: false,
    docsDir: "docs",
    //顶部导航栏配置
    nav: [
      { text: "指南", link: "/guide/introduction" },
      { text: "组件", link: "/components/complex" },
      { text: "主题", link: "/" },
    ],
    sidebar: sidebar,
  },
  plugins: [
    [
      require("../../src"),
      {
        component: "DemoBlock",
        locales: [
          {
            lang: "zh-CN",
            "demo-block": {
              "hide-text": "隐藏",
              "show-text": "显示",
              "copy-text": "复制",
              "copy-success": "成功",
            },
          },
        ],
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public/assets"),
      },
    },
  },
};