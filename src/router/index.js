import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/MainPage'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: MainPage,
    children: [{
      path: '/',
      name: 'Home Page',
      component: HelloWorld
    },
    {
      path: 'accounts/users',
      name: 'User Management',
      component: HelloWorld
    },
    {
      path: 'accounts/taxies',
      name: 'Taxi Management',
      component: HelloWorld
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
