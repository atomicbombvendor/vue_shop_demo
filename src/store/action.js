
/**
 * vuex 的 actions 模块
 * 和后台交互的异步Action
*/

// 引入函数名
import {reqAddress, reqCategorys, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_SHOPS, RECEIVE_CATEGORYS} from './moutation-types'

export default {

  // 异步获取
  async getAddress({commit, state}){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  }

}
