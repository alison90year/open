/*
 * @Descripttion:
 * @Date: 2021-04-01 14:34:08
 */
import { defineComponent, ref, Ref, getCurrentInstance } from 'vue';
import { Uploader } from 'vant';
import { questions } from './static';
import Nav from '../../../components/nav/index.vue';
import 'vant/lib/uploader/index.css';
interface CellItem {
  title: string;
  name: string;
}
interface File {
  type: string;
  size: number;
}
// 选择反馈问题类型
const chooseQuestion = (valid: Ref<boolean>) => {
  const active = ref<string>('');
  const show = ref<boolean>(false);

  const des = ref<string>('');
  const current = ref<CellItem>({
    title: '',
    name: ''
  });
  const setCurrent = (item: CellItem) => {
    current.value = item;
    active.value = item.name;
    show.value = false;
    textChange();
  };
  const textChange = () => {
    valid.value = active.value !== '' && des.value.length >= 20;
  };
  return {
    active,
    show,
    current,
    des,
    setCurrent,
    textChange
  };
};
// 图片上传和删除
const upload = () => {
  const fileList = ref<File[]>([]);
  const app = getCurrentInstance();
  const beforeRead = (file: File): boolean => {
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      app?.appContext.config.globalProperties.$toast('文件格式不正确');
      return false;
    }
    if (!(file.size / 1024 / 1024 < 15)) {
      app?.appContext.config.globalProperties.$toast('图片大小不能超过15MB!');
      return false;
    }
    return true;
  };
  const afterRead = (file: File) => {
    // const fromdata=new FormData();
    // fromdata.append('file',file.file);
  };
  const deleteImg = (index: number) => {
    fileList.value.splice(index, 1);
  };
  return {
    fileList,
    beforeRead,
    afterRead,
    deleteImg
  };
};

export default defineComponent({
  name: 'feedback',
  components: {
    Nav,
    [Uploader.name]: Uploader
  },
  setup() {
    const qurstionList: CellItem[] = questions;
    const valid = ref<boolean>(false);
    const feedBack = () => {
      if (!valid.value) return;
    };
    return {
      qurstionList,
      valid,
      ...chooseQuestion(valid),
      ...upload(),
      feedBack
    };
  }
});
