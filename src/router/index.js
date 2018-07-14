import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

const MainPage = () => import('@/pages/MainPage')
const Login = () => import('@/pages/Login')
const PlaceholderPage = () => import('@/pages/PlaceholderPage.vue')
const NotFound = () => import('@/pages/NotFound')

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
      name: '首页',
      component: PlaceholderPage
    },
    {
      path: 'accounts/users',
      name: '用户管理',
      component: PlaceholderPage
    },
    {
      path: 'accounts/taxies',
      name: '出租车管理',
      component: PlaceholderPage
    },
    {
      path: 'accounts/companies',
      name: '订车公司管理',
      component: PlaceholderPage
    },
    {
      path: '/transHubEstMgmt/transHubEstChartPage',
      name: '运力保障',
      component: PlaceholderPage
    },
    {
      path: '/transHubStatMgmt/transHubStatPage',
      name: '关键数据',
      component: PlaceholderPage
    },
    {
      path: '/transHubTrailMgmt/transHubTrailListPage',
      name: '轨迹监控',
      component: PlaceholderPage
    },
    {
      path: '/transHubAreaMgmt/transHubAreaPage',
      name: '划定区域',
      component: PlaceholderPage
    },
    {
      path: '/shortCutEstMgmt/shortCutListPage',
      name: '短途行程',
      component: PlaceholderPage
    },
    {
      path: '/transHubTripMgmt/transHubTripListPage',
      name: '排队秩序',
      component: PlaceholderPage
    }]
  }, {
    path: '/login',
    name: '登录',
    component: Login
  }, {
    path: '*',
    component: NotFound }
  ]
})
