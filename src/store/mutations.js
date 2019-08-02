/*
vuex 的 mutations 模块
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './moutation-types'

// 方法名使用 [xxx](i1, i2)
// {xxx} 包含xxx的对象
export default {
  // [RECEIVE_ADDRESS] 表示方法名
  // {address} mutations接收包含address的对象
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  }
}
