import Vue from 'vue'
import Router from 'vue-router'
import hotShow from '@/pages/hot-show'
import find from '@/pages/find'
import my from '@/pages/my'
import movieDetail from '@/pages/movie-detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hot-show',
      component: hotShow,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/item/:id',
      name: 'movie-detail',
      component: movieDetail,
      meta: {
        keepAlive: false
      }
    }
  ]
})
