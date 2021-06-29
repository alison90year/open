/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Nav from '../../../../components/nav/index.vue';
import { isPhone } from '../../../../utils/validate';
import { BankAndCoin, BankItem, BankForm } from '../../../../dto/account';
import { bankList } from '../static';
import { checkNull } from '../common';

const defineVariable = () => {
  const active = ref<string>('');
  const status = reactive<BankAndCoin>({
    show: false,
    error: false,
    valid: false,
    phoneCheck: false
  });
  const form = reactive<BankForm>({
    username: '',
    card: '',
    bank: '',
    phone: '',
    code: ''
  });
  const current = reactive<BankItem>({
    title: '',
    name: ''
  });
  return {
    active,
    status,
    form,
    current
  };
};
export default defineComponent({
  name: 'addBank',
  components: {
    Nav
  },
  setup() {
    const actions = bankList;
    const { active, status, form, current } = defineVariable();
    const { check } = checkNull(status, form);
    const setCurrent = (item: BankItem): void => {
      current.title = item.title;
      active.value = item.name;
      form.bank = item.name;
      status.show = false;
      check();
    };
    return {
      active,
      actions,
      ...toRefs(status),
      ...toRefs(form),
      ...toRefs(current),
      setCurrent,
      check
    };
  }
});
