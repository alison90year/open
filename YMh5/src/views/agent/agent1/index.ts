/*
 * @Author: Seanm
 * @Date: 2021-03-30 16:16:07
 */
import { defineComponent, getCurrentInstance } from 'vue';
import Nav from '../../../components/nav/index.vue';
import Report from './components/report.vue';
import Plan from './components/plan.vue';
import { copy } from '../../../utils/common';
import { Swipe, SwipeItem } from 'vant';
import { agent, swiperTitle } from './static';
import 'vant/lib/swipe/index.css';
import 'vant/lib/swipe-item/index.css';
interface SwiperItem {
  title: string;
  icon: string;
}

interface AgentItem extends SwiperItem {
  content: string;
  button: string;
}
export default defineComponent({
  name: 'agent',
  components: {
    Nav,
    Report,
    Plan,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const agentList: AgentItem[] = agent;
    const titleList: SwiperItem[] = swiperTitle;
    const app = getCurrentInstance();
    const copyName = () => {
      copy('kokaff5');
      app?.appContext.config.globalProperties.$toast('复制成功!');
    };
    return {
      copyName,
      agentList,
      titleList
    };
  }
});
