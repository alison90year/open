import { defineComponent, ref, computed, reactive, watch, toRefs, Ref } from 'vue';
import { APIs } from '@/http';
import { Router, useRoute, useRouter } from 'vue-router';
import { Button, Field } from 'vant';
import { isPassword, isUserName } from '@/utils/validate';
import { store } from '@/store';
import Local from '@/utils/storage';
import 'vant/lib/field/index.css';
import 'vant/lib/button/index.css';
import 'vant/lib/cell/index.css';
import 'vant/lib/icon/index.css';

interface KeyMap<T> {
  [propName: string]: T;
}
interface User extends KeyMap<string> {
  id: string;
  name: string;
  password1: string;
  password2: string;
  code: string;
}

// 封装获取页面类型的方法，区分登陆页和注册页面
const typeRelativeEffect = (router: Router) => {
  const route = useRoute();
  const type = computed(() => {
    return route.params.type;
  });
  const handleTypeChange = (param: string) => {
    router.push(`/entry/${param}`);
  };
  const watchType = (id: Ref<string>, userForm: User, getCaptchaImage: (id: Ref<string>) => void, getUserFromLocal: (userForm: User) => void) => {
    watch(
      type,
      newType => {
        if (newType === 'register') {
          getCaptchaImage(id);
          Object.keys(userForm).forEach(key => {
            userForm[key] = '';
          });
        } else {
          getUserFromLocal(userForm);
        }
      },
      { immediate: true }
    );
  };
  return { type, handleTypeChange, watchType };
};

// 关于验证码相关内容
const captchaImageEffect = () => {
  const captchaImage = ref('');
  const getCaptchaImage = (id: Ref<string>): void => {
    APIs.getImgCode({ t: Date.now() }).then(res => {
      captchaImage.value = window.URL.createObjectURL(res);
      // id.value = store.getters.token;
    });
  };
  return { captchaImage, getCaptchaImage };
};

// 检测表单是否全部有值
const isFormReady = (form: User, except: string[]): boolean => {
  for (const i in form) {
    if (except && except.indexOf(i) !== -1) continue;
    if (!form[i]) return true;
  }
  return false;
};

// 关于记住密码的操作内容
const rememberPasswordEffect = () => {
  const result = Local.get('isRememberPassword');
  const isRememberPassword = result != null ? ref(result) : ref(true);
  const handleCheckedBoxChange = () => {
    isRememberPassword.value = !isRememberPassword.value;
    Local.set('isRememberPassword', isRememberPassword.value);
  };
  const getUserFromLocal = (form: User) => {
    form.name = Local.get('userName');
    if (isRememberPassword.value) form.password1 = Local.get('userPassword');
  };
  const setUserToLocal = (username: string, password: string) => {
    Local.set('userName', username);
    if (isRememberPassword.value) {
      Local.set('userPassword', password);
    }
  };
  return {
    isRememberPassword,
    handleCheckedBoxChange,
    getUserFromLocal,
    setUserToLocal
  };
};

// 关于input框事件操作的封装  密码框type 提示语
const inputRelativeEffect = (user: User) => {
  const nameTip = ref<HTMLDivElement>();
  const password1Tip = ref<HTMLDivElement>();
  const password2Tip = ref<HTMLDivElement>();
  const inputChange = (value: string, tip: HTMLDivElement) => {
    checkValue(value, tip);
  };
  const inputFocus = (e: Event, tip?: HTMLDivElement) => {
    const button = queryButton(e.target as EventTarget);
    const input = e.target as HTMLInputElement;
    if (tip !== nameTip.value) {
      button?.classList.add('show-right-button', input.type);
    }
    if (!tip) return;
    checkValue(input.value, tip);
  };
  const inputBlur = (e: Event, tip?: HTMLDivElement) => {
    if (tip !== nameTip.value) {
      const button = queryButton(e.target as EventTarget);
      button?.classList.remove('show-right-button');
    }
    if (!tip) return;
    tip.style.display = 'none';
    tip.classList.remove('error');
  };
  const queryButton = (target: EventTarget): Element => {
    const el = target as Element;
    const button = el.parentElement?.getElementsByClassName('password-right-icon')[0] as Element;
    return button;
  };
  const clearInput = (tip: HTMLDivElement): void => {
    tip.classList.remove('error');
  };
  const handleChangeInputType = (e: Event) => {
    const el = e.target as Element;
    const input = el.parentElement?.previousElementSibling as HTMLInputElement;
    const type = input.type === 'password' ? 'text' : 'password';
    const preType = input.type;
    el.classList.add(type);
    el.classList.remove(preType);
    input.type = type;
    input.focus();
  };
  const checkValue = (value: string, tip: HTMLDivElement) => {
    let checkResult = false;
    let display = 'none';
    if (tip === nameTip.value) {
      checkResult = !isUserName(value);
      display = checkResult ? 'flex' : 'none';
    } else if (tip === password1Tip.value) {
      checkResult = !isPassword(value) || value === user.name;
      (tip.lastElementChild as HTMLElement).innerHTML = value.length && value === user.name ? '密码和用户名不能一致' : '密码长度为8-12位，字母+数字的组合';
      display = checkResult ? 'flex' : 'none';
    } else if (tip === password2Tip.value) {
      checkResult = user.password1 !== value;
      display = !value.length || !checkResult ? 'none' : 'flex';
    }
    !value.length || !checkResult ? tip.classList.remove('error') : tip.classList.add('error');
    tip.style.display = display;
  };
  return {
    handleChangeInputType,
    inputChange,
    inputFocus,
    inputBlur,
    clearInput,
    nameTip,
    password1Tip,
    password2Tip
  };
};

// 关于用户登录注册等操作的封装
const userRalativeEffect = (router: Router, getCaptchaImage: (id: Ref<string>) => void) => {
  const userForm: User = reactive({
    id: '',
    name: '',
    password1: '',
    password2: '',
    code: ''
  });
  const login = (setUserToLocal: (username: string, password: string) => void): void => {
    const { name, password1 } = userForm;
    setUserToLocal(name, password1);
    APIs.login({ name, password: password1 }).then(res => {
      if (res.status) {
        // userStore.setLogin(true);
        // userStore.setUserInfo(res.data);
        // userStore.getUserBalance();
        router.push('/home');
      }
    });
  };
  const register = (): void => {
    const { name, password1, password2, code, id } = userForm;
    if (!isUserName(name)) {
      alert('用户名为4-11位，最少2个字母+数字组合，首位为字母');
      return;
    }
    if (name === password1) {
      alert('密码和用户名不能一致');
      return;
    }
    if (!isPassword(password1)) {
      alert('密码长度为8-12位，字母+数字的组合');
      return;
    }
    if (password1 !== password2) {
      alert('两次密码输入不一致');
      return;
    }
    APIs.register(userForm).then(res => {
      if (res.status) {
        alert('注册成功');
        // userStore.setLogin(true);
        // userStore.setUserInfo(res.data);
        // userStore.getUserBalance();
        router.push('/home');
      } else {
        getCaptchaImage(ref(id));
        alert('注册失败');
      }
    });
  };
  return { userForm, login, register };
};

export default defineComponent({
  name: 'entry',
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  setup() {
    const router = useRouter();
    const { captchaImage, getCaptchaImage } = captchaImageEffect();
    const { userForm, login, register } = userRalativeEffect(router, getCaptchaImage);
    const { name, password1, password2, code, id } = toRefs(userForm);
    const { isRememberPassword, handleCheckedBoxChange, getUserFromLocal, setUserToLocal } = rememberPasswordEffect();
    const { type, handleTypeChange, watchType } = typeRelativeEffect(router);
    watchType(id, userForm, getCaptchaImage, getUserFromLocal);
    return {
      ...inputRelativeEffect(userForm),
      type,
      captchaImage,
      isRememberPassword,
      router,
      name,
      password1,
      password2,
      code,
      id,
      userForm,
      getCaptchaImage,
      setUserToLocal,
      isFormReady,
      login,
      register,
      handleTypeChange,
      handleCheckedBoxChange
    };
  }
});
