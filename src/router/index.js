import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Register from '@/views/Register/index.vue'
import Search from '@/views/Search/index.vue'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/components/AddCartSuccess'
import ShopCart from '@/components/ShopCart'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, meta: { show: true } },
  { path: '/login', component: Login, meta: { show: false } },
  { path: '/register', component: Register, meta: { show: false } },
  { path: '/search/:keyword?', component: Search, meta: { show: true }, name: 'search', props: ($route) => { return { keyword: $route.params.keyword, k: $route.query.k } } },
  { path: '/detail/:skuid', component: Detail },
  { path: '/shopCart', component: ShopCart },
  { path: '/addCartSuccess', component: AddCartSuccess, name: 'addCartSuccess' }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  }

})

export default router
