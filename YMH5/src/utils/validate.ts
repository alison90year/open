// 验证密码
export function isPassword(value: string): boolean {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/.test(value);
}

// 验证手机号
export function isPhone(value: string) {
  return /^[1][3456789]\d{9}$/.test(value);
}
// 验证用户名
export function isUserName(value: string): boolean {
  return /^[a-zA-Z]+(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,11}$/.test(value);
}

// 验证344格式的手机号
export function checkPhone(rule: any, value: string, callback: (arg?: any) => void) {
  if (!value) {
    return callback(new Error('手机号不能为空'));
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (reg.test(value.replace(/\D/g, ''))) {
      callback();
    } else {
      return callback(new Error('请输入正确的手机号'));
    }
  }
}

// 验证验证码
export function isCode(value: string) {
  return /^\d{6}$/.test(value);
}

// 验证邮箱
export function isEmail(value: string) {
  return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value);
}

// 验证银行卡号
export function isBankCard(value: string) {
  return /^[0-9]{8,19}$/.test(value);
}

// 验证身份证号码
export function isId(value: string) {
  return /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value);
}

// 验证真实姓名 (只能是2-3位中文)
export function isZhRealName(value: string) {
  return /^[\u4E00-\u9FA5]{2,4}$/.test(value);
}

/* 判断平年闰年 y:年份数字，四位*/
function isOrdinaryYear(y: number) {
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    return false;
  }
  return true;
}

// 验证是否满18岁
export function satisfyEight(bothDate: number) {
  const nowDate = new Date(); // 当前时间
  const mouth = nowDate.getMonth() + 1;
  let day = nowDate.getDate();
  const year = nowDate.getFullYear() - 18;
  if (mouth === 2 && day >= 28) {
    day = isOrdinaryYear(year) ? 28 : 29;
  }
  const oldDate = new Date(year + '-' + mouth + '-' + day).getTime();
  return oldDate < bothDate ? false : true;
}
