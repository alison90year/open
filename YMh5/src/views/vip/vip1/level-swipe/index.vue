<template>
  <van-sticky class="swiper-group">
    <div class="proress-bar-div">
      <div class="progress-bar" ref="progressBar" :style="{'transform':`translateX(${progressBarTranslate}px)`}">
        <template v-for="item in 11" :key="item">
          <div @click="tapLevel(item - 1)" :class="{'progress-bar-item':true,'active': activeIndex === item - 1,'now-level': nowLevel === item -1 }">Lv{{item - 1}}</div>
          <div class="progress-bar-item-line" v-if="item !== 11"></div>
        </template>
      </div>
    </div>
    <div class="swiper-container swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 11" :key="item">
          <div class="card-item">
            <p class="card-head flex ai-c jc-c">未达标</p>
            <div class="card-content flex jc-sb">
              <p class="vip-number">VIP{{item - 1}}</p>
              <img v-hash :src="`/assets/blue/kok/vip/vip${item - 1}_g.webp`" alt="">
            </div>
            <div class="card-bottom flex">
              <div class="card-bottom-item flex1 txt-c">
                <p>30,000,000</p>
                <p>累计存款</p>
              </div>
              <div class="card-bottom-item flex1 txt-c">
                <p>180,000,000</p>
                <p>流水要求</p>
              </div>
              <div class="card-bottom-item flex1 txt-c">
                <p>50,000,000</p>
                <p>保级流水</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">{{activeIndex + 1}}<span>/11</span></div>
  </van-sticky>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>