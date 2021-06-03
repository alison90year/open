<template>
  <div class="sponsor-view w100 h100">
    <van-nav-bar title="赞助专题" placeholder fixed />
    <ul class="sponsor-list">
      <li class="sponsor-item pos-r" v-for="item in 10" :key="item">
        <div class="sponsor-item-right">
          <img src="https://images.4vw264.com/clientManage/1594920370386195.png">
          <h3>西甲皇家马德里</h3>
          <p>亚洲区独家合作伙伴</p>
          <van-button>查看详情</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>