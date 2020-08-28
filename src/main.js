import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
