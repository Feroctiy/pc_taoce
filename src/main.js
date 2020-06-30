// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import echarts from 'echarts'
import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'

 



import IM from '../webIm.config'
console.log(IM);
Vue.use(IM)


import axios from 'axios'

import promise from 'es6-promise';
promise.polyfill();
Vue.prototype.$echarts = echarts;
window.router = router
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from '@/utils/request'
import '@/style/base.css'
import '@/style/header.css'
import '@/style/home.css'

import { post, fetch, patch, put } from '@/utils/http'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

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

if (
  '-ms-scroll-limit' in document.documentElement.style && 
  '-ms-ime-align' in document.documentElement.style
) { // detect it's IE11
  window.addEventListener("hashchange", function(event) {
    var currentPath = window.location.hash.slice(1);
    if (store.state.route.path !== currentPath) {
      router.push(currentPath)
    }
  }, false)
}