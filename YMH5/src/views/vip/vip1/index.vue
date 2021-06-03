<template>
  <div class="vip-view">
    <van-nav-bar class="header-nav-bar" title="VIP特权" right-text="VIP详情">
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" alt="" class="header-icon-back" />
      </template>
    </van-nav-bar>
    <div class="vip-top">
      <TopInfo></TopInfo>
      <LevelSwipe></LevelSwipe>
    </div>
    <Prerogative></Prerogative>
    <div class="birthday">
      <div class="birthday-bg flex jc-sb ai-c">
        <div class="birthday-pic flex jc-c ai-c">
          <img v-hash src="/assets/blue/kok/vip/birthdayIcon.webp">
          <span>设置出生日期,尊享生日礼金</span>
          <!-- <span>注册超过90天，可领取生日礼金</span> -->
        </div>
        <van-button>立刻设置</van-button>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>