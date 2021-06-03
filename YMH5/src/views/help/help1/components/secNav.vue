<!--
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
-->
<template>
  <div class="pos-r w100 help-wrap">
    <div class="close">
     <div class="first-nav" v-for="(item,index) in active" :key="item.name" @click="setIndex(index,item.title, 'j')">
         <div class="first-nav-title">
             <span>{{ item.title }}</span>
             <div class="first-nav-label"><i /></div>
         </div>
     </div>
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject, watchEffect } from 'vue';
import { navSecond } from '../static'
interface NavItem {
  title:string;
  name:string;
}
interface Params {
  show: number;
  i: number;
  j: number;
  title: string[];
}
export default defineComponent({
  name: 'firstNav',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const navList: NavItem[][] = navSecond;
    const active = ref<NavItem[]> ([]);
    const params = inject('params');
    const setIndex = inject('setIndex');
    watchEffect(()=>{
      active.value = navList[(params as Params).i]
    })
    return {
      navList,
      active,
     setIndex
    };
  }
});
</script>
