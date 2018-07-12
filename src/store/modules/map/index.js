const state = {
  gridArea: []
}

const getters = {}

const actions = {
  async loadGridArea({
    commit,
    state
  }, postData) {
    // const response = await fetch('https://dev.paircity.com/v1/admin/api/admin/gridArea/getGridByArea?areaCode=CNSCA1', {
    //   headers: {
    //     'x-me-token': localStorage.getItem('token')
    //   }
    // })
    // const responseData = await response.json()

    const responseData = require('../../../../static/fullAreaResponse.json')
    if (responseData.code === 2001) {
      commit('setGridArea', {
        data: responseData.data
      })

      return {
        success: true
      }
    }

    return {
      error: true
    }
  }
}

const mutations = {
  setGridArea(state, {
    data
  }) {
    state.gridArea = data.array
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
