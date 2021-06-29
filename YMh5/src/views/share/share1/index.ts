import { defineComponent, ref, getCurrentInstance } from 'vue';
import { NavBar, Button, Popup } from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/button/index.css';
import 'vant/lib/popup/index.css';

export default defineComponent({
  name: 'share',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  setup() {
    const isShowPopup = ref(false);
    return {
      isShowPopup
    };
  }
});
