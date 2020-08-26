module.exports = {
  title: "来画前端UI框架",
  description:
    "一个基于 Element ui 深度定制开源前端实践方案，帮助你快速构建应用",
  port: 8081,
  //主题配置
  themeConfig: {
    //顶部导航栏配置
    nav: [
      { text: "主页", link: "/" }, // 内部链接 以docs为根目录
      { text: "使用说明", link: "/guide/introduction" },
      {
        text: "文档",
        // 这里是下拉列表展现形式。
        items: [
          { text: "2.0.0", link: "/components/2.0/lhButton" },
          { text: "1.0.0", link: "/components/1.0/" }
        ]
      },
      {
        text: "关于作者",
        items: [
          { text: "GitHub地址", link: "https://github.com/laihua-coder" }, //外部链接
          { text: "个人博客", link: "http://90c.vip" }
        ]
      }
    ],
    // 这里使用的是多个侧边栏设置
    sidebar: {
      // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
      "/components/2.0/": [
        {
          title: "基础组件", // 必要的
          path: "", //如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton'
          collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
          // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
          children: [
            {
              title: "Button 按钮",
              path: "catButton"
            }
          ]
        },
        {
          title: "基础组件1",
          path: "./" //和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
        }
      ],
      "/components/1.0/": [
        {
          title: "基础组件",
          path: "",
          collapsable: false,
          children: [
            {
              title: "Button 按钮",
              path: "catButton"
            }
          ]
        }
      ],
      "/guide/": [
        {
          title: "使用说明",
          collapsable: false,
          children: [
            {
              title: "简介",
              path: "introduction",
              collapsable: false
            },
            {
              title: "快速上手",
              path: "quickStart",
              collapsable: false
            },
            {
              title: "几点说明",
              path: "tips",
              collapsable: false
            }
          ]
        }
      ]
    },
    sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
    lastUpdated: "最后更新于" // 文档更新时间：每个文件git最后提交的时间
  }
};
