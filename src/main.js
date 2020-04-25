// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.router=router
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/base.css'
import '@/style/header.css'
import '@/style/home.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
