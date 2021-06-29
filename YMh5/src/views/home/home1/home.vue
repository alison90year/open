<template>
  <div>
    <p class="page-txt">this is home temp1 page {{ count }}</p>
    <button @click="setCount">按钮</button>
    <img src="/assets/a.jpg" v-webp />
    <img src="/assets/a.jpg" v-hash />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'home',
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.app.count),
      setCount: () => store.dispatch('app/aycSetCount')
    }
  }
});
</script>

<style lang="scss">
@import './style.scss';
</style>