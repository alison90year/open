import { defineComponent } from 'vue';
import { Empty, NavBar } from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/empty/index.css';

export default defineComponent({
  name: 'share-record',
  components: {
    [NavBar.name]: NavBar,
    [Empty.name]: Empty
  }
});
