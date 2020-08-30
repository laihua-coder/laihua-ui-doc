import LhAlert from './src/alert';

/* istanbul ignore next */
LhAlert.install = function(Vue) {
  Vue.component(LhAlert.name, LhAlert);
};

export default LhAlert;
