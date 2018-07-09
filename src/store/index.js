import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import map from './modules/map'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    login,
    map
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
