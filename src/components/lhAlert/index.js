import "./style.scss";
import LhAlert from "./lhAlert";

/* istanbul ignore next */
LhAlert.install = function(Vue) {
  Vue.component(LhAlert.name, LhAlert);
};

export default LhAlert;
