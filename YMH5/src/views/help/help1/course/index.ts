/*
 * @Author: Seanm
 * @Date: 2021-03-31 16:06:29
 */
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { tabItem, bollList } from '../static';
import { Tab, Tabs } from 'vant';
import Nav from '../../../../components/nav/index.vue';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
interface Type {
  title: string;
  value: number;
}
interface Ball {
  title: string;
  des: string;
}
export default defineComponent({
  name: 'course',
  components: {
    Nav,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    const typeList: Type[] = tabItem;
    const allBallList: Ball[] = bollList;
    const type = ref<number>(0);
    const active = ref<number>(0);
    const tabList = ref<Ball[]>([]);
    const tabChange = (val: string) => {
      type.value = +val; // +表示可将字符串转换为数字
      tabList.value = +val === 1 ? allBallList.slice(8, 12) : allBallList.slice(0, 8);
      document.documentElement.scrollTop = 1;
      document.body.scrollTop = 1;
      active.value = 0;
    };
    onMounted(() => {
      tabChange(useRoute().query.tab as string);
    });
    return {
      type,
      active,
      typeList,
      tabList,
      allBallList,
      tabChange
    };
  }
});
