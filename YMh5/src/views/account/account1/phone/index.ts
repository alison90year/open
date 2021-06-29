/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Nav from '../../../../components/nav/index.vue';
import Footer from '../components/footer.vue';
import { BooleanMap, FormPhone } from '../../../../dto/account';
import { checkPhoneAndEmail } from '../common';

export default defineComponent({
  name: 'phone',
  components: {
    Nav,
    Footer
  },
  setup() {
    const status = reactive<BooleanMap>({
      valid: false,
      error: false,
      phoneClose: false,
      codeclose: false,
      finised: false
    });
    const form = reactive<FormPhone>({
      phone: '',
      code: ''
    });
    const { blur, checkValue, clearValue, changeCode, band } = checkPhoneAndEmail(status, form, 'phone');
    return {
      ...toRefs(status),
      ...toRefs(form),
      blur,
      checkValue,
      clearValue,
      changeCode,
      band
    };
  }
});
