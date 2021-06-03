import http from '../core';

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return http.get('member/token');
}

/**
 * 获取用户余额（中心钱包）
 */
export function getUserBalance() {
  return http.get('member/balance');
}

/**
 * 存款
 * @param {*} data {
 *  amount
 * }
 */
export function deposit(data: object = {}) {
  return http.post('member/deposit', data);
}

export default {
  getUserInfo,
  getUserBalance,
  deposit
};
