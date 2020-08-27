const path = require("path");
const sidebar = require("./sidebar");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  title:"laihua-UI", // 标题
  description:"一个基于 Element ui 深度定制开源前端实践方案，帮助你快速构建应用", // 网站描述
  base: isProd ? "/laihua-ui/" : "/",
  port: "6700", // 启动端口
  dest: "docs/.vuepress/dist/laihua-ui/",
  markdown: {
    lineNumbers: true,
  }, // 是否显示行数
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }], // 增加一个自定义的 favicon
  ],
  theme: "antdocs", // 主题
  backToTop: true, // 是否显示置顶按钮
  themeConfig: {
    repo: "laihua-coder/laihua-ui",
    logo: "/logo.png",
    editLinks: false, // 是否可编辑
    docsDir: "docs", // 文档根目录
    // postcss: [require("autoprefixer")],
    // less: { indentedSyntax: true },
    //顶部导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction" },
      { text: "组件", link: "/components/base/layout", collapsable: true },
    ],
    sidebar: sidebar,
  },
  // 广告栏
  // ads: {
  //   style: 2,
  //   speed: 2000,
  //   items: [
  //     {
  //       text: "Ads details here",
  //       image:
  //         "https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg",
  //       link: "https://vuepress.vuejs.org/",
  //     },
  //     {
  //       text: "Ads details here",
  //       image:
  //         "https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg",
  //       link: "https://vuepress.vuejs.org/",
  //     },
  //     {
  //       text: "Ads details here",
  //       image:
  //         "https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg",
  //       link: "https://vuepress.vuejs.org/",
  //     },
  //   ],
  // },
  plugins: [
    [
      require("../../src"),
      {
        component: "DemoBlock",
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