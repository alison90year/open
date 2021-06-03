import { defineComponent, defineAsyncComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
// tslint:disable-next-line: no-var-requires
const config = require('@site/config');
export default defineComponent({
  name: 'Personal',
  components: {
    'list-title': defineAsyncComponent(() => import('@/components/list-title/index.vue'))
  },
  setup() {
    const operMenus = reactive([
      {id: 1, title: '存款', name: '', icon: 'icon-deposit', path: '/deposit'},
      {id: 2, title: '转账', name: '', icon: 'icon-transfer', path: '/transfer'},
      {id: 3, title: '取款', name: '', icon: 'icon-withdraw', path: '/withdraw'},
    ]);
    const router = useRouter();
    const store = useStore();
    const goto = (url: string) => {
      router.push(url);
    }
    return {
      operMenus,
      goto,
      config
    }
  }
});
