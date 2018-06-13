// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'

import './theme/index.less'
import Icons from './icons'

import i18n from './i18n'

Vue.use(iView)
Vue.use(Icons)

Vue.config.productionTip = false

store.commit('login/init')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
