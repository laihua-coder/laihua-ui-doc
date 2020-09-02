import * as lhComponents from "./components";

const install = (Vue) => {
  // Use Components
  Object.values(lhComponents).forEach(lhComponent => {
    Vue.use(lhComponent);
  });
};

export default install;