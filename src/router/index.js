import Vue from 'vue'
import Router from 'vue-router'
import hotShow from '@/pages/hot-show'
import find from '@/pages/find'
import my from '@/pages/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hot-show',
      component: hotShow
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
