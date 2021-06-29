import { defineComponent, reactive, inject } from 'vue';
import { NavBar, Button } from 'vant';
import TopInfo from './top-info/index.vue';
import LevelSwipe from './level-swipe/index.vue';
import Prerogative from './prerogative/index.vue';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/button/index.css';

export default defineComponent({
  name: 'vip',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    TopInfo,
    LevelSwipe,
    Prerogative
  }
});
