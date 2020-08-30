import Button from '../packages/button/index.js';
import Alert from '../packages/alert/index.js';

const components = [
  Button,
  Alert
]

const install = (Vue) => {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Alert
}