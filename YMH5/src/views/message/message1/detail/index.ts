/*
 * @Descripttion:
 * @Date: 2021-04-01 11:46:45
 */
import { defineComponent, ref, onMounted } from 'vue';
import Nav from '../../../../components/nav/index.vue';
export default defineComponent({
  name: 'messageDetail',
  components: {
    Nav
  },
  setup() {
    const show = ref<boolean>(false);
    const title = ref<string>('');
    let info = ref<object>({});
    const getInfo = (): void => {
      const data = JSON.parse(localStorage.getItem('message') as string);
      title.value = data.title;
      info = data.info;
    };
    getInfo();
    return {
      show,
      title,
      info
    };
  }
});
