/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent, ref, reactive } from 'vue';
import Nav from '../../../../components/nav/index.vue';
import { isPassword } from '../../../../utils/validate';
import { PasswordItem } from '../../../../dto/account';
import { passwordList } from '../static';

const checkPassword = () => {
  const optionList = reactive<PasswordItem[]>(passwordList);
  const error = ref<string>('');
  const valid = ref<boolean>(false);
  const check = (value: string, i: number) => {
    const list = optionList;
    if (i > 0) {
      if (list[1].value && list[2].value && list[1].value !== list[2].value) {
        error.value = '两次密码输入不一致';
        valid.value = false;
        return;
      } else {
        error.value = '';
      }
    }
    if (i === 1) {
      error.value = !isPassword(value) ? '密码长度为8-12位，字母+数字的组合' : '';
    }
    valid.value = list.every((item: PasswordItem): boolean => {
      return item.value ? true : false;
    });
  };
  return {
    optionList,
    error,
    valid,
    check
  };
};
export default defineComponent({
  name: 'password',
  components: {
    Nav
  },
  setup() {
    const { optionList, error, valid, check } = checkPassword();
    const open = (i: number, type: string): void => {
      optionList[i].type = type === 'password' ? 'text' : 'password';
    };
    const changePassword = (): void => {
      if (!valid.value) return;
      // TODO
    };
    return {
      error,
      valid,
      optionList,
      open,
      check,
      changePassword
    };
  }
});
