<!--
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
-->
<template>
  <div class="pos-r w100 help-wrap">
    <div class="close">
     <div class="help-detail">
        <!-- <div v-for="(item,index) in list[index][childIndex]" :key="index">
          <p v-html="item"></p>
        </div> -->
        <div class="txt-c w100 fs-28" style="margin-top:30px;">抱歉,页面待开发...</div>
     </div>
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject , toRefs } from 'vue';
interface Params {
  show: number;
  i: number;
  j: number;
  title: string[];
}
export default defineComponent({
  name: 'thrdNav',
  setup() {
    const params = inject('params');
    return {
      ...toRefs(params as Params)
    };
  }
});
</script>
<style lang="scss">
.close {
	display: none;
}
  .active {
	.close {
    display:block;
   }
  }
.help-detail{
  padding:0 rem(25rem);
  span {
    font-size: 12pt;
    color: $theme-txt-color22;
  }
  .title-color, .sec-title-color{
    color: $theme-txt-color21;
    font-weight: bold;
    line-height:rem(54rem);
 }
 .sec-title-color{
  font-weight: 400;
 }
 .line-end{
   display:block;
   padding-bottom:rem(24rem);
 }
 img{
   max-width: 100%;
  height: auto;
 }
}

</style>
