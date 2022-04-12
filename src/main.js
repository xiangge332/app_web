import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import "./assets/all.css"
// import axios from 'axios'//引入axios

// Vue.prototype.$axios = axios;//把axios挂载到vue上

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
