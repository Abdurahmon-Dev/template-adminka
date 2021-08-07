import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./rourter.js";
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
