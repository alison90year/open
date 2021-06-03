/*
 * @Author: Seanm
 * @Date: 2021-03-31 16:18:31
 */
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import Nav from '@/components/nav/index';
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: 'course',
  components: {
    Nav
  },
  data() {
    return {
      type: 0,
      typeList: [
        {
          title: '让球',
          value: 0
        },
        {
          title: '大小球',
          value: 1
        }
      ],
      active: 0,
      tabList: [],
      tab1: [],
      tab2: [],
      scrollTop: 0
    };
  },
  mounted() {
    const type = this.$route.query.tab;
    this.tabChange(type);
  },
  methods: {
    tabChange(val) {
      this.type = parseInt(val);
      this.tabList = val == 1 ? this.tab2 : this.tab1;
      this.active = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
};
