import LhButton from './src/button';

/* istanbul ignore next */
LhButton.install = function(Vue) {
  Vue.component(LhButton.name, LhButton);
};

export default LhButton;
