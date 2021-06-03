
import { defineComponent, ref, reactive, computed } from 'vue';
import { Swipe, SwipeItem, NoticeBar } from 'vant';
// import { APIs } from '@/http';
import 'vant/lib/notice-bar/index.css';
import 'vant/lib/swipe/index.css';
import 'vant/lib/swipe-item/index.css';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import UserModule from '@/store/modules/user/UserModule';
// tslint:disable-next-line: no-var-requires
const homeConf = require('@site/home');
interface OperMenuItem {
  id: number;
  title: string;
  name: string;
  icon: string;
  path: string;
  needLogin: boolean;
}

export default defineComponent({
  name: 'Home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar
  },
  setup(props) {
    const notice = ref('尊敬的会员：KOK体育场馆滚球比分系统，将在2021年3月4日（星期四）13:00至15:10进行升级维护，期间滚球盘口将不显示比分，不影响其他体育赛事盘口，若有疑问请联系24小时在线客服进行咨询。给您带来不便，还请谅解！ KOK平台运营部 2021年3月4日11');
    const operMenus = reactive<OperMenuItem[]> ([
      {id: 1, title: '存款', name: '', icon: 'icon-deposit', path: '/deposit', needLogin: true},
      {id: 2, title: '转账', name: '', icon: 'icon-transfer', path: '/transfer', needLogin: true},
      {id: 3, title: '取款', name: '', icon: 'icon-withdraw', path: '/withdraw', needLogin: true},
      {id: 4, title: 'VIP', name: '', icon: 'icon-VIP', path: '/VIP', needLogin: true},
    ]);
    const curGType = ref(0);
    const curGTypeName = ref('ty');
    const nameMap = reactive({ty: '体育', dj: '电竞', dz: '电子', by: '捕鱼', zr: '真人', cp: '彩票', qp: '棋牌'});
    const gameTypes = reactive({});
    const router = useRouter();
    const store = useStore();
    const goto = (p: OperMenuItem) => {
      console.log('route=', router);
      if (p.needLogin) {
        // TODO
        router.push(p.path);
      } else {
        // TODO
        router.push(p.path);
      }
    };
    const changeGType = (type: string) => {
      curGTypeName.value = type;
    }
    console.log('venue=', store.getters.userInfo);
    UserModule.getUserInfo();
    UserModule.getUserBalance();
    console.log('UserModule=', UserModule, UserModule.userInfo);
    return {
      notice,
      operMenus,
      curGType,
      curGTypeName,
      nameMap,
      gameTypes,
      iconSpeak: homeConf.iconSpeak,
      iconSignin: homeConf.iconSignin,
      venueData: computed(() => store.getters.venueData),
      goto,
      changeGType
    };
  }
});
