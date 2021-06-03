import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Button, Empty, Field, NavBar, Tab, Tabs } from 'vant';
import { formatStringOfAsterisk } from '@/utils/common';
import { useCountDown, useToggle } from '@vant/use';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/field/index.css';
import 'vant/lib/cell/index.css';
import 'vant/lib/button/index.css';
import 'vant/lib/empty/index.css';

// 关于验证码的操作
const codeRelativeEffect = () => {
  const isGetCode = ref(false);
  const countdown = useCountDown({
    time: 60000,
    onFinish: () => {
      isGetCode.value = false;
      countdown.reset();
    }
  });
  const getCodeByType = (): void => {
    isGetCode.value = true;
    countdown.start();
  };
  return { isGetCode, current: countdown.current, getCodeByType };
};

// 关于密码框显示密码功能的封装
const passwordRelativeEffect = () => {
  const [showLoginPwd, pwdToggle] = useToggle();
  const [showLoginConPwd, conPwdtoggle] = useToggle();
  return { showLoginConPwd, showLoginPwd, pwdToggle, conPwdtoggle };
};

// 关于步骤条操作的封装
const stepRelativeEffect = () => {
  enum stepEnum {
    step1 = 1,
    step2,
    step3,
    step4
  }
  const step = ref(1);
  const tapNextButton = () => {
    step.value++;
  };
  return { step, tapNextButton, stepEnum };
};

export default defineComponent({
  name: 'reset-password',
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button,
    [Empty.name]: Empty
  },
  setup() {
    const router = useRouter();
    const tabsActive = ref('email');
    const form = reactive({
      username: '',
      phone: '',
      email: '',
      code: '',
      picCode: '',
      pwd: '',
      conPwd: ''
    });

    return {
      router,
      tabsActive,
      form,
      ...toRefs(form),
      formatStringOfAsterisk,
      ...stepRelativeEffect(),
      ...codeRelativeEffect(),
      ...passwordRelativeEffect()
    };
  }
});
