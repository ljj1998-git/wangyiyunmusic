/*
 * @Author: your name
 * @Date: 2021-01-22 11:44:48
 * @LastEditTime: 2021-01-23 16:19:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \configurationd:\work\wangyiyunmusic\music\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/findMusic',
  },
  {
    path: '/findMusic',
    name: 'findMusic',
    component: () => import('@/views/findMusic/findMusic.vue'),
    children: [
      {
        path: 'gxtj',
        name: 'gxtj',
        component: () => import('@/views/findMusic/gxtj.vue')
      }, {
        path: 'gd',
        name: 'gd',
        component: () => import('@/views/findMusic/gd.vue')
      }

    ]
  },
  {
    path: '/songSheet',
    name: 'songSheet',
    component: () => import('@/views/songSheet/songSheetList.vue'),
    children: []
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',//配置单页应用的基路径,默认为/
  routes
})

export default router
