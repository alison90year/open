import { defineComponent, ref } from 'vue';
import { Empty, NavBar, Tab, Tabs } from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
import 'vant/lib/empty/index.css';

export default defineComponent({
  name: 'share-record',
  components: {
    [NavBar.name]: NavBar,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Empty.name]: Empty
  }
});
