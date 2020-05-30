// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'

import axios from 'axios'

window.router=router
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from '@/utils/request'
import '@/style/base.css'
import '@/style/header.css'
import '@/style/home.css'

import {post,fetch,patch,put} from '@/utils/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
 
import Distpicker from 'v-distpicker'
 
Vue.component('v-distpicker', Distpicker)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.request = request
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
