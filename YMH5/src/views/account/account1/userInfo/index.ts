/*
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
 */
import { defineComponent, ref, Ref, reactive, toRefs, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Popup, Picker, DatetimePicker } from 'vant';
import Nav from '../../../../components/nav/index.vue';
import Footer from '../components/footer.vue';
import { UserInfo, MinAndMax } from '../../../../dto/account';
import { formatter, parseTime, getDateArray } from '../../../../utils/common';
import 'vant/lib/overlay/index.css';
import 'vant/lib/popup/index.css';
import 'vant/lib/picker/index.css';

const pickEvent = (showName: Ref<string>, userInfo: UserInfo) => {
  const showPicker = ref<boolean>(false);
  const defaultSex = ref<number>(0);
  const picker = ref<HTMLElement | null>(null);
  const day = getDateArray(parseTime(new Date(), '{y}-{m}-{d}'));
  const date = reactive<MinAndMax>({
    min: new Date(1950, 0, 1),
    max: new Date(day[0], day[1] - 1, day[2]),
    time: new Date(1999, 5, 18)
  });

  const openPopup = (name: string, val: string): void => {
    if (val) return;
    popupStatus(true);
    showName.value = name;
  };
  const onConfirmSex = (i: string): void => {
    popupStatus(false);
    userInfo.sex = i;
  };
  const onConfirmDate = (val: string): void => {
    popupStatus(false);
    userInfo.birthday = parseTime(val, '{y}-{m}-{d}');
  };
  const onCancelSex = (val: string): void => {
    popupStatus(false);
    // picker.setColumnValue(0, '男');
  };
  const onCancelDate = (): void => {
    popupStatus(false);
    date.time = new Date(1999, 5, 18);
  };
  const popupStatus = (val: boolean): void => {
    showPicker.value = val;
  };
  return {
    showPicker,
    picker,
    date,
    defaultSex,
    openPopup,
    onConfirmSex,
    onConfirmDate,
    onCancelSex,
    onCancelDate
  };
};
export default defineComponent({
  name: 'userInfo',
  components: {
    Nav,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [DatetimePicker.name]: DatetimePicker,
    Footer
  },
  setup() {
    const showName = ref<string>('');
    const router = useRouter();
    const sexOption: string[] = ['男', '女'];
    const userInfo = reactive<UserInfo>({
      avatar: '11',
      nickName: '',
      name: '',
      sex: '',
      birthday: '',
      phone: '',
      email: ''
    });
    const { picker, showPicker, date, defaultSex, openPopup, onConfirmSex, onConfirmDate, onCancelSex, onCancelDate } = pickEvent(showName, userInfo);
    const goPage = (value: string, path: string): void => {
      if (value) return;
      router.push(path);
    };
    onMounted(() => {
      console.log(picker.value);
    });
    return {
      picker,
      showName,
      sexOption,
      date,
      defaultSex,
      showPicker,
      ...toRefs(userInfo),
      ...toRefs(date),
      goPage,
      onConfirmSex,
      onConfirmDate,
      onCancelSex,
      onCancelDate,
      openPopup,
      formatter
    };
  }
});
