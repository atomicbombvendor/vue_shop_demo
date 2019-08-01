
/**
 * vuex 的 actions 模块
 * 和后台交互的异步Action
*/

// 引入函数名
import {reqAddress, reqCategorys, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_SHOPS, RECEIVE_CATEGORYS} from './moutation-types'

export default {

  // 异步获取
  // action可以传递 state，也可以不传。可以接收前台的参数
  async getAddress({commit, state}){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 参数必须是{}对象
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    // 使用await异步请求axios返回数据
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
