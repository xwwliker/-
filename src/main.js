import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
