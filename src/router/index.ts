import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/my.vue')
  },
  {
    path:'*',
    name:'404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',//配置单页应用的基路径,默认为/
  routes
})

export default router
