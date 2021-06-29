<template>
  <div class="promotion-view w100 h100">
    <div class="promotion-title">优惠活动</div>
    <van-tabs animated swipeable sticky>
      <van-tab :title="item" v-for="(item,index) in promotionList" :key="index">
        <div class="promotion-item pos-r">
          <span class="promotion-item-type pos-a"></span>
          <div class="promotion-item-card pos-r">
            <p class="promotion-item-title-box">
              <span class="title">真人首存</span>
              <span class="subtitle">长期活动</span>
            </p>
            <img v-hash src="/assets/blue/kok/promotion/test.webp" fit="cover"  />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script src="./index.ts"> </script>
<style lang="scss">
@import './index.scss';
</style>