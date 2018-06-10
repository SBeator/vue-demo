import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/MainPage'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: HelloWorld
    },
    {
      path: 'accounts/users',
      name: 'User management',
      component: Login
    },
    {
      path: 'accounts/taxies',
      name: 'Taxi management',
      component: NotFound
    },
    {
      path: 'accounts/companies',
      name: 'Companies management',
      component: HelloWorld
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
