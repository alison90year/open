<!--
 * @Author: Seanm
 * @Date: 2021-03-30 16:16:07
-->
<template>
  <div class="pos-r w100 h100 agent">
    <Nav title="合营计划" />
    <van-swipe class="h100 my-swipe" :loop="false" indicator-color="white">
    <van-swipe-item>
    <div class="pos-r w100 h100 agent-slide">
         <img class="slide-title-img" v-hash src="/assets/blue/kok/account/slide1-img1.webp" alt="">
         <div class="pos-r w100 txt-c">
           <img class="w100" v-hash src="/assets/blue/kok/account/slide1-img2.webp" alt="">
         </div>
         <ul class="pos-a w100 contact">
           <li class="flex jc-sb ai-c w100" v-for="(item,i) in agentList" :key="i">
             <img class="" v-webp :src="`/assets/blue/kok/account/${item.icon}.png`" alt="">
             <div class="contact-way">
               <p>{{ item. title }}</p>
               <p>{{ item.content }}<span>
                 <img v-if="i > 0" class="copy" @click="copyName" v-hash src="/assets/blue/kok/account/icon-copy.svg" alt="">
                 </span></p>
             </div>
             <div class="txt-c fs-24 contact-btn">{{ item.button }}</div>
           </li>
         </ul>
    </div>
  </van-swipe-item>
  <van-swipe-item v-for="(item,i) in titleList" :key="i">
     <div class="pos-r w100 h100 agent-slide">
       <img class="slide-title-img report-title" v-hash :src="`/assets/blue/kok/account/${item.icon}.webp`" alt="">
       <h2 class="txt-c fs28">{{ item.title }}</h2>
       <Report v-if="i === 0" /> <Plan v-else />
     </div>
  </van-swipe-item>
</van-swipe>
<div class="pos-a txt-c fs-24 join-btn">加入我们</div>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss" scoped>
@import 'index.scss';
</style>