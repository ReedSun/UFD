/*
 * @Author: ReedSun
 * @Date: 2017-04-04 09:48:37
 * @Last Modified by: ReedSun
 * @Last Modified time: 2017-05-10 20:59:15
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Indicator } from 'mint-ui'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  Indicator.close()
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
