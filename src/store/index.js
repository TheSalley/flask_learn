import { createStore } from 'vuex'

export default createStore({
  state: {
    rankActive: '飙升榜'
  },
  getters: {
  },
  mutations: {
    changeRankActive(state, val){
      state.rankActive = val
    }
  },
  actions: {
  },
  modules: {
  }
})
