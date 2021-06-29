<template>
  <div class="home-view">
    <div class="pos-r banner-wp">
      <van-swipe class="banner-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="/banner/ad.webp" /></van-swipe-item>
        <van-swipe-item><img src="/banner/ad2.webp" /></van-swipe-item>
        <van-swipe-item><img src="/assets/icon-success.png" /></van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="notice-bar-wp">
        <van-notice-bar>
          <template #left-icon><img v-webp :src="iconSpeak" class="mgr-10 icon-speak" /></template>
          <template #default>{{notice}}</template>
          <template #right-icon>
            <div class="flex ai-c jc-c fs-12 mgl-20 btn-hot-match">热门赛事</div>
          </template>
        </van-notice-bar>
      </div>
    </div>
    <section class="flex oper-panel">
      <div class="flex fdr-c jc-c flex1 u-info">
        <div>
          <span>test001</span>
          <span></span>
        </div>
        <div class="fw-b mgt-20 fs-32">
          <span>¥</span>
          <span>0.00</span>
        </div>
      </div>
      <ul class="flex fs-24 menu-wp">
        <li v-for="(menu, i) in operMenus" :key="i" @click="goto(menu)" :class="['flex flex1 fdr-c ai-c jc-c menu-item']">
          <div :class="['menu-icon', menu.icon]">
          </div>
          <div>{{menu.title}}</div>
        </li>
      </ul>
    </section>
    <section class="flex g-types-wp">
      <ul class="g-types">
        <li v-for="(v, k, i) in venueData" :key="k" :class="['flex fdr-c ai-c jc-c g-type-item', k === curGTypeName ? 'active' : '']" @click="changeGType(k, i)">
          <div class="g-t-icon">
            <img :src="`home/icon-${k}.png`" />
          </div>
          <div class="txt-c g-t-name">{{nameMap[k]}}</div>
        </li>
      </ul>
      <div class="flex fw-w g-list" :layout="venueData[curGTypeName] && venueData[curGTypeName].length">
        <div class="g-item" v-for="(item, j) in venueData[curGTypeName]" :key="j">
          {{item.name}}
        </div>
      </div>
    </section>
    <section>
      <div class="pos-f singin">
        <div class="pos-r singin-wp">
          <span class="pos-a"></span>
          <img v-webp :src="iconSignin" @click="goSignin" />
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./index.ts"></script>

<style lang="scss">
@import '@site/styles/home.scss';
</style>
