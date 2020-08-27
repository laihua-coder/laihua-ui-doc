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
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }], // 增加一个自定义的 favicon
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Laihua-UI",
      description:
        "一个基于 Element ui 深度定制开源前端实践方案，帮助你快速构建应用",
    },
  },
  theme: "antdocs",
  backToTop: true,
  themeConfig: {
    repo: "laihua-coder/laihua-ui",
    // logo: "/logo.png",
    editLinks: false,
    docsDir: "docs",
    postcss: [require("autoprefixer")],
    less: { indentedSyntax: true },
    //顶部导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction" },
      { text: "组件", link: "/components/layout", collapsable: true },
    ],
    sidebar: sidebar,
  },
  ads: {
    style: 2,
    speed: 2000,
    items: [
      {
        text: "Ads details here",
        image:
          "https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "Ads details here",
        image:
          "https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "Ads details here",
        image:
          "https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg",
        link: "https://vuepress.vuejs.org/",
      },
    ],
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