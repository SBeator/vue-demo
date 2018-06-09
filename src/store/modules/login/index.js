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
    const response = await fetch('https://dev.paircity.com/v1/admin/auth/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    const responseData = await response.json()
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
