import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'//用于解决axios在vue原型上ts识别不到的插件
import './registerServiceWorker'

import '@/assets/css/common.css'//全局样式
import '@/assets/css/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
