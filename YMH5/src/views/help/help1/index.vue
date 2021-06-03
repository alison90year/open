<!--
 * @Author: Seanm
 * @Date: 2021-03-30 19:42:27
-->
<template>
  <div class="help">
  <Nav :title="title[show-1]" @navChange="navChange" :show="show" type="help">
     <img class="nav-service" @click="$router.push('/customerService')" v-hash src="/assets/blue/kok/help/service.webp" alt="客服">
  </Nav>
<div class="help-content">
     <!-- 一级导航 -->
    <FirstNav :class="{active:show === 1}" />
    <!-- 二级导航 -->
    <SecNav :class="{active:show === 2 }" />
    <!-- 新手帮助->存款教程 -->
    <Tutorials v-if="i === 0 && j === 1 && show === 3" :class="{active:show === 3 }" />
    <!-- 三级详情 -->
    <Detail v-else :class="{active:show === 3 }"  />
    <div class="txt-c fs-24 help-tip">
      没有找到解决办法？请联系 <router-link :to="{path: '/serve'}">人工客服</router-link>解决
    </div>
</div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss">
@import '../../../theme/blue/account.scss';
</style>
