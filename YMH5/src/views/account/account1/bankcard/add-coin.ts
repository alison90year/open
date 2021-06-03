/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Nav from '../../../../components/nav/index.vue';
import { isPhone } from '../../../../utils/validate';
import { BankAndCoin, CoinForm, ProtItem } from '../../../../dto/account';
import { prot } from '../static';
import { checkNull } from '../common';

const defineVariable = () => {
  const protList = prot;
  const status = reactive<BankAndCoin>({
    valid: false,
    phoneCheck: false
  });
  const active = ref<number>(0);
  const form = reactive<CoinForm>({
    alias: '',
    prot: 'ERC20',
    url: '',
    phone: '',
    code: ''
  });
  return {
    protList,
    status,
    active,
    form
  };
};
export default defineComponent({
  name: 'addCoin',
  components: {
    Nav
  },
  setup() {
    const { protList, status, active, form } = defineVariable();
    const changePort = (item: ProtItem): void => {
      form.prot = item.value;
      check();
    };
    const { check } = checkNull(status, form);
    return {
      protList,
      active,
      ...toRefs(form),
      ...toRefs(status),
      changePort,
      check
    };
  }
});
