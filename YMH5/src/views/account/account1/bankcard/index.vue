<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="bank">
  <Nav title="卡片管理" />
  <van-tabs 
  v-model="active" 
  color="#4080ff" 
  title-inactive-color="#A5A9B3" 
  title-active-color="#4080ff"
  line-width="60"
  line-height="2"
  >
  <van-tab v-for="(item, index) in tabList" :key="index" :title="item.title">
  <div class="bank-tab">
      <img class="bank-default"  v-webp src="/assets/blue/kok/account/no-bank" alt="">
      <div class="flex jc-c ai-c txt-c fs-32 bank-add" @click="$router.push(item.path)">
      <img class="phone-form-see" v-webp src="/assets/blue/kok/account/card-join" alt="">{{ item.buttonName }}</div>
      <p class="txt-c fs-28 bank-footer">{{ item.tip }}</p>
  </div>
  </van-tab>
</van-tabs>
<div>
    
</div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
