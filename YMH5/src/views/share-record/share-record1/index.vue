<template>
  <div class="share-record-view">
    <van-nav-bar title="推荐礼金" class="header-nav-bar" fixed placeholder right-text="失效好友">
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" class="header-icon-back">
      </template>
    </van-nav-bar>
    <van-tabs animated swipeable>
      <van-tab title="未首存">
        <van-empty class="default-empty" image="/assets/blue/kok/share/default-nodata.webp" description="暂无礼金记录" />
      </van-tab>
      <van-tab title="已派奖">
        <van-empty class="default-empty" image="/assets/blue/kok/share/default-nodata.webp" description="暂无礼金记录" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>