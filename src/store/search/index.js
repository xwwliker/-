import { reqGetSearchInfo } from '@/api'
export default {
  state: {
    searchList: {}
  },
  mutations: {
    GETSEARCHLIST (state, searchList) {
      state.searchList = searchList
    }
  },
  actions: {
    async getSearchList ({ commit }, params = {}) {
      const result = await reqGetSearchInfo(params)
      if (result.code === 200) {
        commit('GETSEARCHLIST', result.data)
      }
    }
  },
  getters: {
    attrsList (state) {
      return state.searchList.attrsList || []
    },
    goodsList (state) {
      return state.searchList.goodsList || []
    },
    trademarkList (state) {
      return state.searchList.trademarkList || []
    }
  },
  modules: {
  }
}
