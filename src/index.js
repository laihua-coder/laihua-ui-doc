import * as lhComponents from './components/index';

const install = (Vue) => {
  // Use Components
  Object.values(lhComponents).forEach(function (lhComponent) {
    Vue.use(lhComponent);
});
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;