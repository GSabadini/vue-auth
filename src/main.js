import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import '@babel/polyfill'
import './plugins/vuetify'
import './plugins/VueSweetalert2'
import './plugins/filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
