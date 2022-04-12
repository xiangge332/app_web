import Vue from 'vue'
import VueRouter from 'vue-router'
import tp from '../views/tpWrold.vue'
import luck from '../views/luck185.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: tp
  },
  {
      path: '/luck',
      component: luck
  }
]

const router = new VueRouter({
  routes
})

export default router
