import { reqCartList } from '@/api'
export default {
  state: {
    cartList: []
  },
  mutations: {
    GETCARTLIST (state, cartList) {
      state.cartList = cartList
    }
  },
  actions: {
    async getCartList ({ commit }) {
      const result = await reqCartList()
      if (result.code === 200) {
        commit('GETCARTLIST', result.data)
      }
    }
  },
  getters: {
    cartList (state) {
      return state.cartList[0] || {}
    }
  },
  modules: {
  }
}
