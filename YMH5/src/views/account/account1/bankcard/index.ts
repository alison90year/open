/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent } from 'vue';
import { Tab, Tabs } from 'vant';
import Nav from '../../../../components/nav/index.vue';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
import { Withdrawals } from '../../../../dto/account';
import { WithdrawalsList } from '../static';

export default defineComponent({
  name: 'email',
  components: {
    Nav,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    const tabList: Withdrawals[] = WithdrawalsList;
    return {
      tabList
    };
  }
});
