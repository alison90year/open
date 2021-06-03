/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent } from 'vue';
import Nav from '../../../components/nav/index.vue';
import { account } from './static';
interface AccountItem {
  title: string;
  label: string;
  path: string;
}
export default defineComponent({
  name: 'account',
  components: {
    Nav
  },
  setup() {
    const accountList: AccountItem[] = account;
    return {
      accountList
    };
  }
});
