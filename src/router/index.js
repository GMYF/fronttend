import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/page/user/UserLogin'
import Dashboard from '@/page/dashboard/Dashboard'
import UserDetail from '@/page/user/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: UserLogin,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/user/detail',
      name: 'detail',
      component: UserDetail,
      meta: {
        keepAlive: true
      }
    }
  ]
})
