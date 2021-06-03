<!--
 * @Author: Seanm
 * @Date: 2021-03-20 10:27:54
-->
<template>
  <router-view></router-view>
  <!-- <BottomTab /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { isWebp } from '@/utils/helpers';
import { useStore } from './store';
import BottomTab from '@/components/bottom-tab/index.vue';
import 'vant/lib/popup/index.css';
import 'vant/lib/toast/index.css';
export default defineComponent({
  name: 'App',
  components: {
    BottomTab
  },
  setup() {
    const store = useStore();

    // 给支持webp的浏览器设置标识，供css背景图片使用
    const setWebpMark = () => {
      if (isWebp) {
        document.documentElement.classList.add('webp');
      } else {
        document.documentElement.classList.remove('webp');
      }
    }

    onMounted(() => {
      setWebpMark();
      store.dispatch('app/getVenueData');
    })
  }
});
</script>
<style lang="scss">
@import '@/scss/reset.scss';
@import '@/scss/common.scss';
@import '@site/app.scss';
</style>