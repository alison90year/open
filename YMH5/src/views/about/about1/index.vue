<!--
 * @Descripttion: 
 * @Date: 2021-04-01 19:05:33
-->
<template>
  <div class="about">
     <Nav title="关于我们">
         <img class="nav-service" @click="$router.push('/customerService')" v-hash src="/assets/blue/kok/about/kefu.webp" alt="">
  </Nav>
  <div class="about-top">
    <div class="pos-r">
        <img class="w100" v-webp src="/assets/blue/kok/about/about-bg.png" alt="">
        <div class="pos-a about-logo">
            <img v-webp src="/assets/blue/kok/about/about-logo.png" alt="">
        </div>
    </div>
  </div>
  <h3 class="txt-c fs-32">KOK</h3>
  <div class="txt-c about-content">
    <p class="txt-c fs-32 about-paizhao">正规牌照</p>
    <img v-webp src="/assets/blue/kok/about/paizhao.png" alt="">
    <div class="about-tip">
     <p class="txt-c  fs-22">
        我们拥有欧洲马耳他（MGA）、英国GC监督委员会（Gambling
    Commission）和菲律宾政府（PAGCOR）颁发的合法牌照。
    注册于英属维尔京群岛，是受国际协会认可的合法公司。
    进行注册并娱乐前，请确保您年满18周岁！
    </p>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '../../../components/nav/index.vue';
export default defineComponent({
  name: 'about',
  components:{
    Nav
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
