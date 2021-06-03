import { defineComponent } from 'vue';
import { NavBar, Button } from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/button/index.css';

export default defineComponent({
  name: 'sponsor',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button
  }
});
