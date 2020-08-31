const base = require("../router/base");
const business = require("../router/business");
const form = require("../router/form");
const navigation = require("../router/navigation");
const notice = require("../router/notice");
const test = require("../router/test");
const data = require("../router/data");
const other = require("../router/other");

module.exports = {
  "/guide/": [
    {
      title: "指南",
      collapsable: false,
      children: [
        {
          title: "使用说明",
          path: "introduction",
        },
        {
          title: "快速上手",
          path: "started",
        },
      ],
    },
  ],
  "/options/": [
    {
      title: "配置",
      collapsable: false,
      children: [
        {
          title: "快速上手",
          path: "options",
        },
      ],
    },
  ],
  "/components/": [
    {
      title: "使用说明",
      collapsable: false,
      children: [
        {
          title: "快速安装",
          path: "start",
        },
      ],
    },
    test,
    base,
    form,
    data,
    notice,
    navigation,
    business,
    other,
    {
      title: "过渡效果",
      collapsable: true,
      children: [
        {
          title: "过渡效果",
          path: "transition/transition",
        },
      ],
    },
    {
      title: "更新记录",
      collapsable: true,
      children: [
        {
          title: "更新记录",
          path: "ralease/ralease",
        },
      ],
    },
  ],
};
