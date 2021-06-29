<!--
 * @Author: Seanm
 * @Date: 2021-03-31 16:06:29
-->
<template>
  <div class="cse">
     <Nav title="体育投注-让球教程">
         <img class="nav-service" @click="$router.push('/customerService')" v-hash src="/assets/blue/kok/about/kefu.webp" alt="">
    </Nav>
     <div class="w100 pos-f cse-top">
       <div class="w100 cse-tab-wp">
          <div class="flex cse-tab">
              <div v-for="item in typeList" :key="item.value"
               :class="['pos-r txt-c fs-28 flex1',{'active': type === item.value}]" @click="tabChange(item.value)">{{ item.title }}</div>
          </div>
       </div>
     </div>
     <div class="w100 por-r cse-tab-list">
       <div class="pos-f h100 cse-tab-pre" v-show="active === 2"></div>
       <div class="pos-f h100 cse-tab-next" v-show="type ===0 && active < 5"></div>
            <van-tabs 
            ref="tab"
            class="cse-tabs"
              v-model="active" 
              color="#fff" 
              title-inactive-color="#263440" 
              title-active-color="#fff"
              line-width="60"
              line-height="2"
              scrollspy
               sticky
               scroll="{scrollTop:300px,isFixed:true}"
              >
               <van-tab v-for="(item,index) in tabList" :key="item.title" :name="index">
                 <template #title>
                   {{item.title}}球
                 </template>
                 <div class="txt-l ovhide cse-step">
                   <div class="flex ai-c txt-l fs-22 fw-b cse-stp-top">
                     <img v-hash src="/assets/blue/kok/course/shuxing.webp" alt="">{{ item.title }}  ({{ item.des }})
                   </div>
                    <img class="cse-img" v-hash :src="`/assets/blue/kok/course/tab${type}-${index}.webp`" alt="">
                    <img class="cse-img" v-if="type === 1" v-hash :src="`/assets/blue/kok/course/tab${type}-${index}1.webp`" alt="">
                 </div>
                  </van-tab>
            </van-tabs>
       </div>
  </div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
