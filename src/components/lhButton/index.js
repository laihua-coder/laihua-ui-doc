import "./style.scss";
import LhButton from './lhButton';

/* istanbul ignore next */
LhButton.install = function(Vue) {
  Vue.component(LhButton.name, LhButton);
};

export default LhButton;
