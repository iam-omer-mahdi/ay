import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sudakart',
    name: 'Sudakart',
    component: () => import(/* webpackChunkName: "sudakart" */ '../views/Sudakart.vue')
  },
  {
    path: '/qathara',
    name: 'Qathara',
    component: () => import(/* webpackChunkName: "qathara" */ '../views/Qathara.vue')
  },
  {
    path: '/qythara-delivery',
    name: 'QytharaDelivery',
    component: () => import(/* webpackChunkName: "QytharaDelivery" */ '../views/QytharaDelivery.vue')
  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
