import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import DelButton from './components/delButton'
Vue.config.productionTip = false
Object.defineProperty(
    Vue.prototype,
    '$api',
    { value: api }
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log("MAIN JS")

export default {
  $api : api
}