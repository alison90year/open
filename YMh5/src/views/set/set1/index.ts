/*
 * @Descripttion:
 * @Date: 2021-04-01 14:34:08
 */
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Nav from '../../../components/nav/index.vue';
interface CellItem {
  title: string;
  path: string;
}
const setList: CellItem[] = [
  {
    title: '意见反馈',
    path: '/feedback'
  },
  {
    title: '关于我们',
    path: '/about'
  }
];
export default defineComponent({
  name: 'set',
  components: {
    Nav
  },
  setup() {
    const router = useRouter();
    const loginOut = (): void => {
      router.push('/entry/login');
    };
    return {
      setList,
      loginOut
    };
  }
});
