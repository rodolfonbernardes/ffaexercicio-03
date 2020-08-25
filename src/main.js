import Vue from 'vue'
import App from './App.vue'
import { Plugin } from "vue-fragment";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(Plugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
