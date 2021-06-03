<template>
  <div class="prerogative">
    <h2 class="title">
      <img v-hash src="/assets/blue/kok/vip/icon-juxing-vip@2x.webp" alt="">
      <span>VIP0尊享</span>
    </h2>
    <ul class="list flex fw-w jc-sb">
      <li v-for="item in 6" :key="item" class="flex">
        <div class="icon flex jc-c ai-c">
          <i class="cishu"></i>
        </div>
        <div class="info flex jc-c ai-c fdr-c flex1">
          <p>5</p>
          <p>每日提款次数</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>