module.exports = [
  [
    require("../demoBlock"),
    {
      component: "DemoBlock"
    }
  ], // 测试用例显示块
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require("moment");
        require("moment/locale/zh-cn");
        moment.locale("zh-cn");
        return moment(timestamp).fromNow();
      }
    } // 更新时间格式化
  ],
  ["@vuepress/back-to-top"], // 置顶
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true
    }
  ] // 让网站兼容pwa
];
