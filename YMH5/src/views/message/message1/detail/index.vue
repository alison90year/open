<!--
 * @Descripttion: 
 * @Date: 2021-04-01 11:46:45
-->
<template>
  <div class="msg-detail">
  <Nav :title="`${title}详情`">
    <span class="pos-a msg-edit" @click="show = true"><img class="w100 h100" v-hash src="/assets/blue/kok/icon-more.webp" alt=""></span>
  </Nav>
  <div class="pos-a w100 msg-content">
    <div class="flex ai-c msg-title-wrap">
      <div class="flex msg-title">
         <img v-webp src="/assets/blue/kok/icon-message.png" alt="">
          <div class="flex fdr-c jc-sb msg-title-top">
          <span class="fs-28">{{ info.title }}</span>
          <span class="fs-20">{{ info.time }}</span>
        </div>
      </div>       
    </div>
    <div class="txt-j fs-28 msg-info">{{ info.content }}</div>
    </div>
  <div class="pos-f w100 h100 msg-mask" v-show="show">
    <div class="pos-a flex w100 fdr-c msg-bot">
    <div class="txt-c fs-36 msg-delete">删除</div>
    <div class="w100 msg-line"></div>
    <div class="txt-c  fs-36 msg-cancel" @click="show = false">取消</div>
    </div>
  </div>
<div>
    
</div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
