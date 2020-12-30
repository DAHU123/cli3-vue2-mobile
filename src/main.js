import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/api/index";
import vantUI from "@/utils/vantUI";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(vantUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
