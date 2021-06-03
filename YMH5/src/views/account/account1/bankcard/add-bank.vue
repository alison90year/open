<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="phone">
    <Nav title="添加银行卡" />
    <div :class="['pos-f w100 h100 hide sel-mask',{'sel-show':show}]">
        <div class="pos-f w100 sel-container">
            <div class="h100">
              <div class="pos-r w100 sel-header">
                <span class="pos-a fs-32" @click="show = false">取消</span>
                <h4 class="w100 h100 fs-32 txt-c">选择所属银行</h4>
              </div>
              <ul class="sel-list">
                <li v-for="item in actions" :key="item.name" @click="setCurrent(item)">
                  <span :class="`icon-${item.name}`"></span>
                  <div class="flt-l fs-24 sel-list-title">{{item.title}}</div>
                   <img v-if="active === item.name" v-hash src="/assets/blue/kok/account/chosen.svg" alt="">
                </li>
              </ul>
            </div>
        </div>
    </div>
<div class="phone-form add-bank">
   <div class="ovhide phone-form-item pad0">
       <div class="fs-28 phone-form-title">持卡人姓名</div>
       <div class="flex ai-c jc-e input-wrap">
           <input class="flex1 h100 fs-28" placeholder="请输入持卡人姓名，仅支持中文、英文、符号“·”" autocomplete="off" v-model="username">
            </div>
   </div>
    <p :class="['fs-24 bank-tip',{hide: !error}]">为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致</p>
   <div class="ovhide phone-form-item pad0">
       <div class="fs-28 phone-form-title">银行卡号</div>
       <div class="flex ai-c jc-e input-wrap">
           <input class="flex1 h100 fs-28" type="tel"
            maxlength="19" placeholder="请输入银行卡号"
             autocomplete="off"
              @keyup="check"
              v-model="card">
            </div>
   </div>
   <div class="ovhide phone-form-item pad0" @click="show=true">
       <div class="fs-28 phone-form-title">开户银行</div>
       <div class="flex ai-c jc-e input-wrap">
           <span :class="['flex1 h100 fs-28 bank-name',{'bank-active': title }]">{{ title ? title : '请选择银行'}}</span>
           <img class="phone-form-delete" v-webp src="/assets/blue/kok/account/right" alt="">
          </div>
   </div>
   <div class="fs-28 phone-form-item pad0 bank-bod">
       <div class="fs-28 phone-form-title">手机号码</div>
       <div class="flex ai-c jc-e input-wrap">
           <input type="tel" maxlength="11" class="flex1 h100 fs-28" 
           pattern="[0-9]*" placeholder="请输入11位手机号码"
           autocomplete="off" 
           v-model="phone"
            @keyup="check"
           ></div>
   </div>
   <div class="fs-28 phone-form-item pad0">
      <div class="flex jc-sb ai-c h100 mar-code">
          <div class="w100 h100 flex fdr-c">
             <div class="fs-28 phone-form-title">验证码</div>
             <div class="flex ai-c jc-e input-wrap">
                 <input type="tel" class="flex1 h100 fs-28"
                  pattern="[0-9]*" placeholder="请输入验证码"
                  v-model="code"
                  maxlength="6"
                   @keyup="check"
                   autocomplete="off" >
                 
             </div>
          </div>
          <div :class="['txt-c nobd fs-28 code-btn',{'active': phoneCheck}]">
              获取验证码
          </div>
      </div>
   </div>
</div>
<button :class="['fw-b fs-32 submit',{'active': valid}]">提交</button>
<div class="phone-footer">
<p class="txt-c fs-24">如需帮助，请 <router-link to="/customerService">联系客服</router-link></p>
</div>
<div>
    
</div>
</div>
</template>

<script src="./add-bank.ts"></script>

<style lang="scss" scoped>
@import '../../../../theme/blue/account.scss';
@import '../../../../theme/blue/cover.scss';
@import './add.scss';
.mar-code{
  margin: 0;
}
</style>
