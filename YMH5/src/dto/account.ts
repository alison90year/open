/*
 * @Author: Seanm
 * @Date: 2021-03-27 14:59:59
 */

interface KeyMap<T> {
  [prop: string]: T;
}
// 绑定取款卡
export interface Withdrawals {
  title: string;
  path: string;
  buttonName: string;
  tip: string;
}

// 绑定银行卡
export interface BankItem {
  title: string;
  name: string;
}

export interface BankAndCoin {
  [prop: string]: boolean;
  valid: boolean;
  phoneCheck: boolean;
}

export interface BankForm extends KeyMap<string> {
  username: string;
  card: string;
  bank: string;
  phone: string;
  code: string;
}

// 新增虚拟币
// export interface CoinBoolean {
//   valid: boolean;
//   phoneCheck: boolean;
// }
export interface CoinForm extends KeyMap<string> {
  alias: string;
  prot: string;
  url: string;
  phone: string;
  code: string;
}

export interface ProtItem {
  label: string;
  value: string;
}

export interface PhoneCheck {
  phoneCheck: boolean
}
export interface UserInfo {
  avatar: string;
  nickName: string;
  name: string;
  sex: string;
  birthday: string;
  phone: string;
  email: string;
}

export interface PasswordItem {
  label: string;
  placeholder: string;
  value: string;
  type: string;
}

// 手机验证 & 邮箱验证
export interface FormPhone extends KeyMap<string> {
  phone: string;
  code: string;
}

export interface FormEmail extends KeyMap<string> {
  email: string;
  code: string;
}
export interface Form {
  [prop: string]: string;
  code: string;
}
export interface BooleanMap {
  valid: boolean;
  error: boolean;
  phoneClose?: boolean;
  emailClose?: boolean;
  codeclose: boolean;
  finised: boolean;
}
export interface Check {
  blur: () => void;
  checkValue: () => void;
  clearValue: () => void;
  changeCode: () => void;
  band: () => void;
}

export interface CheckBankAndCoin {
  check:() => void
}
// 个人资料

export interface MinAndMax {
  min: Date;
  max: Date;
  time: Date | undefined;
}