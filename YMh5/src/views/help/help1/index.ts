/*
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
 */
import { defineComponent, reactive, provide, toRefs } from 'vue';
import Nav from '../../../components/nav/index.vue';
import FirstNav from './components/firstNav.vue';
import SecNav from './components/secNav.vue';
import Detail from './components/Detail.vue';
import Tutorials from './components/Tutorials.vue';
import { useRouter } from 'vue-router';
import { KeyMap } from '../../../dto/common';
interface Params extends KeyMap<number | string[]> {
  show: number;
  i: number;
  j: number;
  title: string[];
}
export default defineComponent({
  name: 'help',
  components: {
    Nav,
    FirstNav,
    SecNav,
    Detail,
    Tutorials
  },
  setup() {
    const router = useRouter();
    const params = reactive<Params>({
      show: 1,
      i: 0,
      j: 0,
      title: ['帮助中心']
    });
    const setIndex = (i: number, title: string, type: string): void => {
      params[type] = i;
      params.show++;
      if (type === 'i') {
        params.title = ['帮助中心'];
      } else {
        if (params.i === 1 && i <= 1) {
          router.push({ path: '/course', query: { tab: i } });
        }
      }
      params.title.push(title);
    };
    const navChange = () => {
      params.title.pop();
      params.show > 1 ? params.show-- : router.push('/personal');
    };
    provide('params', params);
    provide('setIndex', setIndex);
    return {
      ...toRefs(params),
      navChange
    };
  }
});
