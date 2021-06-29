import { defineComponent, ref } from 'vue';
import { Tab, Tabs, Image as VanImage, Lazyload } from 'vant';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
import 'vant/lib/swipe-item/index.css';
import 'vant/lib/swipe/index.css';
import 'vant/lib/image/index.css';

export default defineComponent({
  name: 'promotion',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [VanImage.name]: VanImage,
    Lazyload
  },
  setup() {
    const promotionList = ['全部', '最新', '新人', 'VIP', '日常', '豪礼'];

    return { promotionList };
  }
});
