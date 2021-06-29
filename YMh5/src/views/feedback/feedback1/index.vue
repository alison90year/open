<!--
 * @Descripttion: 
 * @Date: 2021-04-01 14:31:16
-->
<template>
  <div class="pos-r w100 help-wrap">
     <Nav title="意见反馈" />
     <div class="fs-28 question-title">问题类型</div>
    <div :class="['pos-f w100 h100 hide sel-mask',{'sel-show':show}]">
        <div class="pos-f w100 sel-container">
            <div class="h100">
              <div class="pos-r w100 sel-header">
                <span class="pos-a fs-32" @click="show = false">取消</span>
                <h4 class="w100 h100 fs-32 txt-c">选择问题类型</h4>
              </div>
              <ul class="sel-list">
                <li v-for="item in qurstionList" :key="item.name" @click="setCurrent(item)">
                  <span :class="`icon-${item.name}`"></span>
                  <div class="flt-l fs-24 sel-list-title">{{item.title}}</div>
                   <img v-if="active === item.name" v-hash src="/assets/blue/kok/help/chosen.svg" alt="">
                </li>
              </ul>
            </div>
        </div>
    </div>
    <div>
      <div class="w100 sel-top">
              <div class="first-nav" @click="show = true">
                <span v-if="!current.name" class="question-sel">请选择问题类型</span>
                <span :class="['sel-check',`icon-${current.name}`]"></span>
                <span class="fs-24 sel-title">{{ current.title }}</span>
                <div class="first-nav-title sel-right">
                <div class="first-nav-label"><i /></div>
              </div>
              </div>
          </div>
          <div class="pos-r question-des">
           <div class="question-title">问题描述 <span class="fs-24">(内容介于20~200字)</span></div>
          <textarea class="w100 fs-28 nobd"  placeholder="请详细描述您遇到的问题，填写内容不少于20字"
           maxlength="200"
           @keyup="textChange"
            v-model="des" />
          <p class="pos-a question-des-length"><span>{{ des.length }}</span>/200</p>
          </div>
          <div class="question-upload">
            <div class="flex pos-r upload-wrap">
              <span class="pos-a upload-num">{{fileList.length}}/3</span>
             <div class="pos-r flt-l upload-item" v-for="(item,index) in fileList" :key="index + ''">
              <img :src="`${item.content}`" alt="">
               <span class="pos-a txt-c" @click="deleteImg(index)">x</span>
               </div>
              <van-uploader 
              v-show="fileList.length<3"
              v-model="fileList"
               :preview-image="false"
               :max-count="3"
                multiple
                :before-read="beforeRead"
               :after-read="afterRead">
                <div class="preview-cover"></div>
              </van-uploader>
            </div>          
           <p class="fs-24 upload-tip">*文件格式为png、jpg、jpeg，且大小不超过15MB</p>
          </div>
          <button :class="['fw-b fs-32 submit',{'active': valid}]" @click="feedBack">提交</button>
    </div>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
@import '../../../theme/blue/account.scss';
@import '../../../theme/blue/cover.scss';
@import './index.scss';
</style>
