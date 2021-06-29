<!--
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
-->
<template>
  <div class="pos-r w100 help-wrap">
    <div class="close">
     <div class="first-nav" v-for="(item,index) in navList" :key="item.name" @click="setIndex(index,item.title, 'i')">
         <img class="first-nav-icon" v-hash :src="`/assets/blue/kok/help/help${index + 1}.webp`" alt="">
         <div class="first-nav-title">
             <span>{{ item.title }}</span>
             <div class="first-nav-label">{{ item.label }} <i /></div>
         </div>
     </div>
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, inject} from 'vue';
import { navFirst } from '../static'
interface NavItem {
  title:string;
  label:string;
  name:string;
}
export default defineComponent({
  name: 'firstNav',
  setup() {
    const navList: NavItem[] = navFirst;
    const setIndex = inject('setIndex');
    return {
      navList,
      setIndex
    };
  }
});
</script>
