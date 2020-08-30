const path = require("path");
const sidebar = require("./config/sidebar");
const plugins = require("./config/plugins")
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  title: "laihua-UI", // 标题
  description:
    "一个基于 Element ui 深度定制开源前端实践方案，帮助你快速构建应用", // 网站描述
  base: isProd ? "/laihua-ui/" : "/",
  port: "6700", // 启动端口
  docsDir: 'docs',
  dest: "docs/.vuepress/dist/laihua-ui/",
  markdown: {
    lineNumbers: true
  }, // 是否显示行数
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }] // 增加一个自定义的 favicon
  ],
  theme: "antdocs", // 主题
  themeConfig: {
    repo: "laihua-coder/laihua-ui",
    logo: "/logo.png",
    editLinks: false, // 是否可编辑
    docsDir: "docs", // 文档根目录
    postcss: [require("autoprefixer")],
    scss: { indentedSyntax: true },
    backToTop: true, //  是否显示置顶按钮
    //顶部导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction" },
      { text: "组件", link: "/components/start", collapsable: true },
      {
        text: "更新记录",
        link: "/components/ralease/ralease",
        collapsable: true
      }
    ],
    sidebar: sidebar,
    sidebarDepth: 0, // 设置成 0 将会禁用标题（headers）链接。同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
    lastUpdated: "最后更新时间", // string | boolean
    // 广告栏
    ads: {
      style: 2,
      speed: 2000,
      items: [
        {
          text: "Ads details here",
          image:
            "https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg",
          link: "https://vuepress.vuejs.org/"
        },
        {
          text: "Ads details here",
          image:
            "https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg",
          link: "https://vuepress.vuejs.org/"
        },
        {
          text: "Ads details here",
          image:
            "https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg",
          link: "https://vuepress.vuejs.org/"
        }
      ]
    }
  },
  plugins: plugins, // 插件
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public/assets")
      }
    }
  }
};
