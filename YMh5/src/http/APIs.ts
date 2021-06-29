import http from './core';

import user from './modules/user';

/**
 *注册
 * @param {*} data
 * {
 *  id
 *  name
 *  code
 *  password1
 *  password2
 * }
 */
export function register(data: object = {}) {
  return http.post('member/reg', data);
}

/**
 *登录
 * @param {*} data
 * {
 *    name
 *    password
 * }
 */
export function login(data: object = {}) {
  return http.post('member/login', data);
}

/**
 * 获取图形验证码
 */
export function getImgCode(params: object = {}) {
  return http.get('member/captcha', { params, responseType: 'blob' });
}

/**
 * 获取场馆数据
 * @param {*} params
 */
export function getVenueData(params: object = {}) {
  return http.get('data/nav.json', { params });
}

/**
 * 进入场馆
 * @param {*} params
 * {
 *  i
 * }
 */
export function launchVenue(params: object = {}) {
  return http.get('game/launch', { params });
}

/**
 * 场馆钱包列表
 */
export function getVenueWalletList() {
  return http.get('game/list');
}

/**
 *
 * 根据场馆ID获取余额
 * @param {*} params
 * {
 *  id {String} 场馆ID
 * }
 */
export function getBalanceByVenueId(params: object = {}) {
  return http.get('game/balance', { params });
}

/**
 * 转账
 * @param {*} data
 * {
 *  amount 转账金额
 *  flags 转账类型(in或者out)
 *  id  场馆id
 * }
 */
export function transfer(data: object = {}) {
  // return http.post('game/transfer', data);
  return http.get('game/transfer', { params: data });
}


/**
 * 获取OB电子游戏列表
 */
export function getOBdzData() {
  return http.get('data/obdz_web.json');
}

/**
 * 获取PG电子游戏列表数据
 */
export function getPGdzData() {
  return http.get('data/pgdz_web.json');
}

const APIs = {
  register,
  getImgCode,
  login,
  getVenueData,
  launchVenue,
  getVenueWalletList,
  getBalanceByVenueId,
  transfer,
  getOBdzData,
  getPGdzData,
  ...user
};

export default APIs;
