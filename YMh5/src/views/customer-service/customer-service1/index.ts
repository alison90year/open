import { defineComponent, ref } from 'vue';
import { NavBar, Button, Collapse, CollapseItem } from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/button/index.css';
import 'vant/lib/collapse-item/index.css';
import 'vant/lib/cell/index.css';
// import 'vant/lib/collapse/index.css';

export default defineComponent({
  name: 'customer-service',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  setup() {
    const activeNames = ref<string[]>([]);
    return {
      activeNames
    };
  }
});
