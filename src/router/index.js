import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/MainPage'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: MainPage,
    children: [{
      path: '/',
      name: 'Home page',
      component: HelloWorld
    },
    {
      path: 'accounts/users',
      name: 'User management',
      component: HelloWorld
    },
    {
      path: 'accounts/taxies',
      name: 'Taxi management',
      component: HelloWorld
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
