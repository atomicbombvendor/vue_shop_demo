/**
 * vuex 的 actions 模块
 * 和后台交互的异步Action
 */

// 引入函数名
import {reqAddress, reqCategorys,
  reqShops, reqUser,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api/api_index'

import {
  RECEIVE_ADDRESS, RECEIVE_SHOPS, RECEIVE_CATEGORYS, RECEIVE_USER_INFO, RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './moutation-types'

export default {

  // 异步获取
  // action可以传递 state，也可以不传。可以接收前台的参数
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 参数必须是{}对象
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys ({commit}) {
    // 使用await异步请求axios返回数据
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },

  // 异步获取用户信息
  async getUserInfo ({commit}) {

    const result = await reqUser()
    if (result.code === 0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    } else {
      return {'name': 'temp', '_id': 'da83d1da56g'}
    }
  },

  // 同步记录用户信息
  recordUserInfo ({commit}, user) {
    commit(RECEIVE_USER_INFO, {userInfo: user})
  },

  // 退出登陆
  async logout ({commit}) {
    commit(RESET_USER_INFO)
  },

  // 异步获取商家信息
  async getShopInfo ({commit}) {
    debugger
    const result = await reqShopInfo()
    debugger
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
}
