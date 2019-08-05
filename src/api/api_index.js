import ajax from './ajax'

import axios from 'axios'; // 引入axios

const BASE_URL = '/api'
/**
 * 获取地址信息 ( 根据经纬度串 )
 */
export const reqAddress = geohash => ajax(BASE_URL + '/position/' + geohash)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax(BASE_URL + '/index_category')
/**
 * 获取 msite 商铺列表 ( 根据经纬度 );
 * 两个数据一个参数
 */
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})
/**
 * 账号密码登录
 */
export const reqPwdLogin = (name, pwd, captcha) => axios.post(BASE_URL + '/login_pwd', {
  name,
  pwd,
  captcha
}).catch(function(error){
  if(error.response){
    //请求已发出，但服务器使用状态代码进行响应
    //落在2xx的范围之外
    // console.log(error.response.data);
    console.log(error.response.status);
    // console.log(error.response.headers);
  } else {
    //在设置触发错误的请求时发生了错误
    // console.log('Error', error.message);
  }
  debugger
  return {"name": name, "pwd": pwd};
});
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone})
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => axios.post(BASE_URL + '/login_sms', {phone, code}).catch(function(error){
  if(error.response){
    //请求已发出，但服务器使用状态代码进行响应
    //落在2xx的范围之外
    console.log(error.response.status);
  } else {
    //在设置触发错误的请求时发生了错误
    console.log('Error', error.message);
  }});
/**
 * 获取用户信息 ( 根据会话 )
 */
export const reqUser = () => ajax(BASE_URL + '/userinfo')
/**
 * 请求登出
 */
export const reqLogout = () => ajax(BASE_URL + '/logout')

/**
 * 图像验证码
 * @returns {*|Promise|Promise<unknown>}
 */
export const captcha = () => ajax(BASE_URL + '/captcha')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
