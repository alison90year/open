<!--
 * @Author: Seanm
 * @Date: 2021-03-30 16:16:07
-->
<template>
<ul class="ovhide report">
  <li v-for="(item,index) in reportList" :key="index">
    <div class="report-box">
      <div class="report-img"><img v-hash :src="`/assets/blue/kok/account/slide2-img${index +2}.webp`" alt=""></div>
      <p>{{ item.title }}</p>
      <p>{{ item.des }}</p>
    </div>
  </li>
</ul>
</template>

<script src="./report.ts"></script>

<style lang="scss" scoped>
@import './report.scss'
</style>
