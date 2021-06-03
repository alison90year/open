/*
 * @Author: Seanm
 * @Date: 2021-03-29 11:46:44
 */
import { Check, CheckBankAndCoin, BankAndCoin, BooleanMap, Form } from '../../../dto/account';
import { isPhone, isEmail } from '../../../utils/validate';
/**
 * @description: 手机绑定、邮箱绑定
 * @param {*}
 * @return {*}
 */
function checkPhoneAndEmail(status: BooleanMap, form: Form, type: string): Check {
  const blur = (): void => {
    type === 'phone' ? (status.phoneClose = false) : (status.emailClose = false);
    checkValue();
    status.error = !status.valid;
  };
  function checkValue(): void {
    status.valid = type === 'phone' ? isPhone(form[type]) : isEmail(form[type]);
    if (status.error) {
      status.error = false;
    }
  }
  function clearValue(): void {
    form[type] = '';
    status.valid = false;
  }
  function changeCode(): void {
    status.finised = form.code.length === 6;
  }
  function band(): void {
    console.log(1);
  }
  return {
    blur,
    checkValue,
    clearValue,
    changeCode,
    band
  };
}

function checkNull(status: BankAndCoin, form: Form): CheckBankAndCoin {
  const check = (): void => {
    status.phoneCheck = isPhone(form.phone);
    status.valid = Object.keys(form).every((key): string => {
      return form[key];
    });
  };
  return {
    check
  };
}
export { checkPhoneAndEmail, checkNull };
