import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import lhButton from "./components/button/lh-button";

const components = [lhButton];

Vue.use(ElementUI);

const laihuaUI = {
  // 必须得有install方法
  install(Vue, options) {
    Object.values(components).forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(laihuaUI);
}

export default laihuaUI;
