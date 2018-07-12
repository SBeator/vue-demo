import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import HelloWorld from '@/components/HelloWorld'
import IconTest from '@/components/IconTest'
import Map from '@/components/Map'
import MainPage from '@/pages/MainPage'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import UserManagement from '@/pages/UserManagement.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: MainPage,
    beforeEnter(to, from, next) {
      if (!store.state.login.isLoggedin) {
        next('/login')
      } else {
        next()
      }
    },
    children: [{
      path: '/',
      name: 'Home page',
      component: IconTest
    },
    {
      path: 'accounts/users',
      name: 'User management',
      component: UserManagement
    },
    {
      path: 'accounts/taxies',
      name: 'Taxi management',
      component: HelloWorld
    },
    {
      path: 'accounts/companies',
      name: 'Companies management',
      component: Map
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '*',
    component: NotFound }
  ]
})
