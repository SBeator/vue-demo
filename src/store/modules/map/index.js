const state = {
  gridArea: [
    {
      'id': 0,
      'code': 'CNSCA1_98,109',
      'areaCode': 'CNSCA1',
      'uponLat': 31.072726,
      'underLat': 31.063788,
      'rightLng': 104.015574,
      'leftLng': 104.005244,
      'mainAreaCode': 'CNSCA1'
    },
    {
      'id': 0,
      'code': 'CNSCA1_98,108',
      'areaCode': 'CNSCA1',
      'uponLat': 31.063788,
      'underLat': 31.05485,
      'rightLng': 104.015574,
      'leftLng': 104.005244,
      'mainAreaCode': 'CNSCA1'
    }
  ]
}

const getters = {}

const actions = {
  async loadGridArea({
    commit,
    state
  }, postData) {
    const response = await fetch('https://dev.paircity.com/v1/admin/api/admin/gridArea/getGridByArea?areaCode=CNSCA1', {
      headers: {
        'x-me-token': localStorage.getItem('token')
      }
    })
    const responseData = await response.json()
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
