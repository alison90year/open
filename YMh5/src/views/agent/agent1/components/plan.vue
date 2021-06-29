<!--
 * @Author: Seanm
 * @Date: 2021-03-30 16:16:07
-->
<template>
<div class="plan">
<ul class="flex  plan-app">
  <li v-for="(item,index) in appList" :key="index">
    <img v-hash :src="`/assets/blue/kok/account/slide-icon${index + 1}.webp`" alt="">
    <p>{{ item }}</p>
  </li>
</ul>
<ul class="plan-content">
  <li class="" v-for="(item,index) in planList" :key="index">
    <div class="plan-icon"><img v-hash :src="`/assets/blue/kok/account/cell-icon${index + 1}.webp`" alt=""></div>
    <div class="plan-text">
      <span>{{ item.title }}</span>
      <span>{{ item.des }}</span>
    </div>
  </li>
</ul>
</div>

</template>

<script src="./plan.ts"></script>

<style lang="scss" scoped>
@import './plan.scss';
</style>
