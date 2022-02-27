import requests from './request'
import mock from './mock'

// 获取三级联动
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get'
})
// 获取banner
export const reqGetBannerList = () => mock.get('/banner')
// 获取floor
export const reqGetFloorList = () => mock.get('/floor')
// 获取search
export const reqGetSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
})

export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
