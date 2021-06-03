/*
 * @Descripttion:
 * @Date: 2021-04-01 11:46:45
 */
import { defineComponent, ref, Ref, reactive } from 'vue';
import { useRouter, Router } from 'vue-router';
import Nav from '../../../components/nav/index.vue';
import { tabItem, msg } from './static';
interface Tab {
  title: string;
  num: number;
  name: string;
}
interface MsgItem {
  id: string;
  title: string;
  time: string;
  content: string;
  isCheck: boolean;
  isRead: boolean;
}
// 获取数据
const getMessage = () => {
  // TODO
};
// Tab切换
const changeTab = () => {
  const active = ref<string>('notice');
  const tabName = ref<string>('通知');
  const tab = reactive<Tab[]>(tabItem);
  const tabChange = (item: Tab): void => {
    active.value = item.name;
    tabName.value = item.title;
  };
  return {
    active,
    tabName,
    tab,
    tabChange
  };
};
// 勾选，全选, 取消
const checkMessage = () => {
  const isEdit = ref<boolean>(false);
  const isAll = ref<boolean>(false);
  const messageList = reactive<MsgItem[]>(msg);
  const checkedList = ref<MsgItem[]>([]);
  const readList = ref<MsgItem[]>([]);
  // 勾选
  const checkItem = (id: string): void => {
    messageList.forEach(item => {
      if (id === item.id) {
        item.isCheck = !item.isCheck;
        if (item.isCheck) {
          checkedList.value.push(item);
        } else {
          const index = checkedList.value.findIndex(el => el.id === id);
          checkedList.value.splice(index, 1);
        }
      }
    });
    getReadList();
  };
  // 全选
  const checkAll = (): void => {
    isAll.value = !isAll.value;
    messageList.forEach(item => {
      item.isCheck = isAll.value ? true : false;
      isAll.value ? checkedList.value.push(item) : (checkedList.value = []);
    });
    getReadList();
  };
  // 获取未读数据
  const getReadList = (): void => {
    readList.value = checkedList.value.filter(item => {
      if (!item.isRead) return item;
    });
  };
  // 取消
  const cancel = (): void => {
    isEdit.value = false;
    isAll.value = false;
    checkedList.value = [];
    readList.value = [];
  };
  return {
    isEdit,
    isAll,
    messageList,
    checkedList,
    readList,
    checkItem,
    checkAll,
    cancel
  };
};
// 标记已读
const setRead = () => {
  // TODO
};
// 跳转详情
const setDetail = (router: Router) => {
  const goDetail = (item: MsgItem, name: string): void => {
    localStorage.setItem(
      'message',
      JSON.stringify({
        info: item,
        title: name
      })
    );
    router.push('/message/detail');
  };
  return {
    goDetail
  };
};
export default defineComponent({
  name: 'message',
  components: {
    Nav
  },
  setup() {
    const router = useRouter();
    return {
      getMessage,
      setRead,
      ...changeTab(),
      ...checkMessage(),
      ...setDetail(router)
    };
  }
});
