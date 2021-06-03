<!--
 * @Descripttion: 
 * @Date: 2021-04-01 14:34:08
-->
<template>
  <div class="system">
     <Nav title="设置" />
    <div class="system-list">
     <router-link class="first-nav system-nav" v-for="item in setList" :key="item.name" :to="item.path">
         <div class="first-nav-title system-title">
             <span>{{ item.title }}</span>
             <div class="first-nav-label"><i /></div>
         </div>
     </router-link>
     </div>
     <div class="txt-c fs-28 system-quit" @click="loginOut">
        退出
     </div>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
@import '../../../theme/blue/account.scss';
@import './index.scss';
</style>
