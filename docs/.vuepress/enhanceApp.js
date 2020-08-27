import ElementUI from "element-ui";
import CustomDemoBlock from './CustomDemoBlock.vue'
import "element-ui/lib/theme-chalk/index.css";
export default ({
  Vue
}) => {
  Vue.component('CustomDemoBlock', CustomDemoBlock)
  Vue.use(ElementUI);
}