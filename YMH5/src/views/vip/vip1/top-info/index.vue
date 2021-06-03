<template>
  <div class="top-info pos-r">
    <div class="info flex ai-c">
      <div class="info-avatar pos-r">
        <img v-hash src="/assets/blue/kok/vip/imageAvatar01@3x.webp" fit="cover" />
        <img class="vip-level-icon" v-hash src="/assets/blue/kok/vip/vip0-icon.webp" alt="">
      </div>
      <div class="info-username">
        <p class="username">ymtest3</p>
        <p class="rank">加入KOK第19天</p>
      </div>
      <img class="vip-level-pic" v-hash src="/assets/blue/kok/vip/vip0_g.webp" alt="">
    </div>
    <div class="vip-progress flex ai-fe">
      <div class="pre-level level flex ai-c jc-c"><span>VIP0</span></div>
      <div class="progress flex ai-fe pos-r">
        <div class="float-num">
          <p>4.31%</p>
          <img v-hash src="/assets/blue/kok/vip/icon-jiantou@2x.webp" alt="">
        </div>
        <div class="progress-strip pos-r">
          <div class="trip"></div>
          <div class="now-strip">
            <img class="tirp-soccer" v-hash src="/assets/blue/kok/vip/football_icon.webp" alt="">
          </div>
        </div>
        <div class="now-strip-shadow"></div>
      </div>
      <div class="next-level level flex ai-c jc-c"><span>VIP1</span></div>
    </div>
    <ul class="deposit">
      <li class="flex ai-c">
        <div></div>
        <span>当前存款(元):<i class="active">0.00</i><i>(0.00/500.00)</i></span>
      </li>
      <li class="flex ai-c">
        <div></div>
        <span>当前流水(元):<i class="active">258.20</i><i>(258.20/3,000.00)</i></span>
      </li>
    </ul>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>