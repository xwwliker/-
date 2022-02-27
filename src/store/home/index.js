import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index.js'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  GETCATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST (state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async getCategoryList ({ commit }) {
    // reqgetCategoryList返回的是一个Promise对象
    // 需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('GETCATEGORYLIST', result.data)
    }
  },
  async getBannerList ({ commit }) {
    const result = await reqGetBannerList()
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList ({ commit }) {
    const result = await reqGetFloorList()
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const modules = {
}
export default {
  state, mutations, actions, modules
}
