<!--
 * @Author: Seanm
 * @Date: 2021-03-26 16:45:25
-->
<template>
<div class="nav">
   <div class="pos-f w100 txt-c fs-36 nav-content">
       <img class="pos-a nav-back" src="/assets/blue/kok/account/back" v-webp  @click="goback">
       <p class="txt-c fs-36 txt-ellipsis">{{ title }}</p>
       <slot />
   </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'topnav',
  props:{
    title: {
      type: String,
      default: ''
    },

    type:{
      type: String,
      default: ''
    }
  },
  setup({ type }, { emit }) {
    const router = useRouter();
    const goback = ()=>{
      type ? emit('navChange') : router.go(-1)
    }
    return {
     goback
    }
  }
})
</script>

<style lang="scss" scoped>
.nav{
  height: rem(90rem);
  padding-bottom: rem(10rem);
  &-content{
    top: 0;
    height: rem(90rem);
    line-height: rem(90rem);
    z-index: 11;
    background: map.get($colors, white);
    color: $theme-txt-color;
    font-weight: normal;
    p {
    width: 69%;
    margin: 0 auto;
    color: $theme-txt-color;
    }
  }
  &-back{
    height: rem(36rem);
    display: block;
    left: rem(20rem);
    top: rem(24rem);
  }
}
</style>
