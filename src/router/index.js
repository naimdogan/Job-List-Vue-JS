import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/components/Layout'
import home from '@/components/views/home/home'
import job from '@/components/views/job/job'
import detail from '@/components/views/job/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/joblist',
      name: 'joblist',
      component: job
    },
    {
      path: '/jobdetail/:id',
      name: 'jobdetail',
      component: detail
    }
  ]
})
