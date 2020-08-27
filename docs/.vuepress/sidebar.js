module.exports = {
  "/guide/": [
    {
      title: "指南",
      collapsable: false,
      children: [
        {
          title: "使用说明",
          path: "introduction"
        },
        {
          title: "快速上手",
          path: "started"
        }
      ]
    }
  ],
  "/options/": [
    {
      title: "配置",
      collapsable: false,
      children: [
        {
          title: "快速上手",
          path: "options"
        }
      ]
    }
  ],
  "/components/": [
    {
      title: "基础组件",
      collapsable: true,
      children: [
        {
          title: "Layout 布局",
          path: "layout"
        },
        {
          title: "Container 布局容器",
          path: "container"
        }
      ]
    },
    {
      title: "表单组件",
      collapsable: true,
      children: [
        {
          title: "Radio 单选框",
          path: "radio"
        },
        {
          title: "Checkbox 多选框",
          path: "checkbox"
        }
      ]
    },
    {
      title: "数据组件",
      collapsable: true,
      children: [
        {
          title: "Table 表格",
          path: "table"
        },
        {
          title: "Tag 标签",
          path: "tag"
        }
      ]
    },
    {
      title: "提示组件",
      collapsable: true,
      children: [
        {
          title: "Alert 警告",
          path: "alert"
        },
        {
          title: "Loading 加载",
          path: "loading"
        }
      ]
    }
  ]
};