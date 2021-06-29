<!--
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
-->
<template>
  <div class="pos-r w100 help-wrap">
    <div :class="['pos-f w100 h100 hide sel-mask',{'sel-show':show}]">
        <div class="pos-f w100 sel-container">
            <div class="h100">
              <div class="pos-r w100 sel-header">
                <span class="pos-a fs-32" @click="show = false">取消</span>
                <h4 class="w100 h100 fs-32 txt-c">支付方式</h4>
              </div>
              <ul class="sel-list">
                <li v-for="item in payList" :key="item.name" @click="setCurrent(item)">
                  <span :class="`icon-${item.name}`"></span>
                  <div class="flt-l fs-24 sel-list-title">{{item.title}}</div>
                   <img v-if="active === item.name" v-hash src="/assets/blue/kok/help/chosen.svg" alt="">
                </li>
              </ul>
            </div>
        </div>
    </div>
    <div class="pos-r sel-scroll">
      <div class="pos-f w100 sel-top">
              <div class="first-nav" @click="show = true">
                <span :class="['sel-check',`icon-${current.name}`]"></span>
                <span class="fs-28 fw-b sel-title">{{ current.title }}</span>
                <span class="sel-money">{{ current.money}}</span>
                <div class="first-nav-title sel-right">
                <div class="first-nav-label"><i /></div>
              </div>
              </div>
          </div>
          <div class="pos-a w100 txt-c step-wrap" v-if="current.name">
              <div class="txt-c" v-for="item in current.step" :key="`${current.name+item}`">
                  <div class="fs-28 step-index">步骤{{item}}/{{current.step}}</div>
                  <img v-hash class="w100" :src="`/assets/blue/kok/help/${current.name}/step${item}.webp`" alt="">
              </div>
          </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { pay } from '../static';
interface PayItem {
  title: string;
  money: string;
  name: string;
  step: number;
}
const setEvent = (payList:PayItem[])=>{
  const active = ref<string>('daechongzhi');
  const show = ref<boolean>(false);
  const current = ref<PayItem>(payList[0]);
  const setCurrent = (item:PayItem):void=>{
    current.value = item
    active.value = item.name;
    show.value = false;
  }
 return {
   active,
   show,
   current,
   setCurrent
 }
}
export default defineComponent({
  name: 'tytorials',
  props: ['index'],
  setup() {
    const payList: PayItem[] = pay;
    return {
      payList,
      ...setEvent(payList)
    };
  }
});
</script>

<style lang="scss">
@import '../../../../theme/blue/cover.scss';
@import './tutorials.scss';

</style>
