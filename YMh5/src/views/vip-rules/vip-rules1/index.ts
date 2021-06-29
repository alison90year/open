import { defineComponent } from 'vue';
import { NavBar } from 'vant';
import 'vant/lib/nav-bar/index.css';

export default defineComponent({
  name: 'vip-rules',
  components: {
    [NavBar.name]: NavBar
  }
});
