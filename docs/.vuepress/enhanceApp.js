import ElementUI from "element-ui";
// import apiTable from './components/apiTable.vue'
import LaihuaUI from "../../src";
import "element-ui/lib/theme-chalk/index.css";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  Vue.use(ElementUI);
  Vue.use(LaihuaUI);
  // Vue.component('apiTable', apiTable)
};
