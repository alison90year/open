<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="account ovhide">
  <Nav title="账户与安全" />
  <div class="flex ai-c fdr-c account-top">
  <img src="/assets/blue/kok/account/safety" v-webp />
  <div class="fs-28 account-tip">完善账户信息，更安全</div>
  </div>
  <div class="account-content">
      <router-link class="cell-item" v-for="(item,index) in accountList" :key="index" :to="{path:item.path}">
        <div class="flex ai-c jc-e h100 cell-item-content">
        <div class="flex flex1 jc-e h100 fdr-c">
          <span class="fs-28 cell-item-title">{{item.title }}</span>
          <span :class="['fs-24 cell-item-label',{'label-warning': index < 3}]">{{item.label}}</span>
          </div>
          <img v-if="index < 3" class="cell-item-warning" src="/assets/blue/kok/account/warning" v-webp alt="">
          <span v-if="index === 3" class="fs-24 go-complete">去完善</span>
          <img class="cell-item-right" src="/assets/blue/kok/account/right" v-webp alt="">
        </div>
      </router-link>
  </div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
