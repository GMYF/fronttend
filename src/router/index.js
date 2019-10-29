import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/page/user/UserLogin'
import Dashboard from '@/page/dashboard/dashboard'
import UserDetail from '@/page/user/detail'
import SessionOut from '@/page/common/SessionOut'

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
    },
    {
      path: '/logout',
      name: 'logout',
      component: SessionOut,
      meta: {
        keepAlive: true
      }
    }
  ]
})
