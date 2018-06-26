const state = {
  user: {},
  token: null
}

const getters = {
  user: (state) => (state.user),
  token: (state) => (state.token)
}

const mutations = {
  setUser: (state, user) => (state.user = user),
  setToken: (state, token) => (state.token = token)
}

const actions = {
  initConfig: ({commit}, data) => {
    commit('setUser', data.user)
    commit('setToken', data.token)
  }
}

export default { state, getters, mutations, actions }
