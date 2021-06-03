import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
interface TabItem {
  id: number;
  title: string;
  name: string;
  icon: string;
  path: string;
}

export default defineComponent({
  name: 'BottomTab',
  setup() {
    const curActive = ref(1);
    const show = ref(true);
    const tabs = ref([
      {id: 1, title: '首页', name: '', icon: 'icon-home', path: '/home'},
      {id: 2, title: '优惠', name: '', icon: 'icon-promotion', path: '/promotion'},
      {id: 3, title: '客服', name: '', icon: 'icon-customer-service', path: '/customerService'},
      {id: 4, title: '赞助', name: '', icon: 'icon-sponsor', path: '/sponsor'},
      {id: 5, title: '我的', name: '', icon: 'icon-personal', path: '/personal'}
    ]);
    const router = useRouter();
    const changeTab = (tab: TabItem) => {
      curActive.value = tab.id;
      router.push(tab.path);
    }
    return {
      curActive,
      show,
      tabs,
      changeTab
    }
  },
  // watch: {
  //   $route(router) {
  //     this.show = ['home', 'promotion', 'customerService','sponsor', 'personal'].includes(router.name);
  //   }
  // },
});
