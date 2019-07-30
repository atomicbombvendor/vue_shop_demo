/*
vuex 的 mutations 模块
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from './moutation-types'

// 方法名使用 [xxx](i1, i2)
// {xxx} 包含xxx的对象
export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
}
