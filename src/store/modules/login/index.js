const state = {
  username: '',
  login: false
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
        username: responseData.data.username
      })
    }

    return responseData
  }
}

const mutations = {
  setLoginUser(state, {
    username
  }) {
    state.username = username
    state.login = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
