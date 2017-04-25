/*
 * @Author: ReedSun
 * @Date: 2017-04-04 09:48:37
 * @Last Modified by: ReedSun
 * @Last Modified time: 2017-04-25 22:24:47
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
