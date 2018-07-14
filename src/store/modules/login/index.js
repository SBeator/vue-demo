import { post, END_POINTS } from '@/api'

const state = {
  username: '',
  isLoggedin: false
}

const getters = {}

const actions = {
  async login({
    commit,
    state
  }, postData) {
    const responseData = await post(END_POINTS.LOGIN, postData)
    if (responseData.success) {
      commit('setLoginUser', {
        ...responseData.data
      })
    }

    return responseData
  }
}

const mutations = {
  init(state) {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if (token && username) {
      state.isLoggedin = true
      state.username = username
    }
  },

  setLoginUser(state, {
    username,
    token
  }) {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)

    state.username = username
    state.isLoggedin = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
