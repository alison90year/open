<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="phone">
    <Nav title="新增虚拟币地址" />
<div class="phone-form add-bank">
   <div class="ovhide phone-form-item pad0 bank-bod">
       <div class="fs-28 phone-form-title">别名</div>
       <div class="flex ai-c jc-e input-wrap">
           <input class="flex1 h100 fs-28" type="text" v-model="alias" @keyup="check"
           placeholder="别名能便于区分您名下的虚拟币地址" autocomplete="off">
        </div>
   </div>
   <div class="ovhide phone-form-item pad0 bank-bod pro-item">
       <div class="fs-28 phone-form-title">虚拟币协议</div>
       <div class="flex pro-wrap">
           <div v-for="(item,index) in protList" :key="index" 
           :class="['pos-r ovhide fs-28 txt-c',{'active': prot === item.value }]" @click="changePort(item)">{{item.label}} <span v-if="prot"></span></div>
        </div>
   </div>
   <div class="ovhide phone-form-item pad0 bank-bod">
       <div class="fs-28 phone-form-title">虚拟币地址</div>
       <div class="flex ai-c jc-e input-wrap">
           <input class="flex1 h100 fs-28" type="text" 
           maxlength="19" placeholder="请输入虚拟币地址"
           autocomplete="off" v-model="url" @keyup="check">
          </div>
   </div>
   <div class="fs-28 phone-form-item pad0 bank-bod">
       <div class="fs-28 phone-form-title">手机号码</div>
       <div class="flex ai-c jc-e input-wrap">
           <input type="tel" maxlength="11" class="flex1 h100 fs-28"
            pattern="[0-9]*" placeholder="请输入11位手机号码" 
            autocomplete="off" v-model="phone" @keyup="check">
            </div>
   </div>
   <div class="fs-28 phone-form-item pad0">
      <div class="flex jc-sb ai-c h100 mar-code">
          <div class="w100 h100 flex fdr-c">
             <div class="fs-28 phone-form-title">验证码</div>
             <div class="flex ai-c jc-e input-wrap">
                 <input type="number" class="flex1 h100 fs-28"
                 v-model="code"
                 maxlength="6"
                 @keyup="check"
                  pattern="[0-9]*" placeholder="请输入验证码" autocomplete="off" >
             </div>
          </div>
          <div :class="['txt-c nobd fs-28 code-btn',{'active': phoneCheck}]">
              获取验证码
          </div>
      </div>
   </div>
</div>
<div class="fs-24 coin-bot">请认真校对虚拟币地址和虚拟币协议的一致性，因地址和协议错误产生的损失由您自行承担！</div>
<button :class="['fw-b fs-32 submit',{'active': valid}]">提交</button>
<div class="phone-footer">
<p class="txt-c fs-24">如需帮助，请 <router-link to="/customerService">联系客服</router-link></p>
</div>
<div>
    
</div>
</div>
</template>

<script src="./add-coin.ts"></script>

<style lang="scss" scoped>
@import '../../../../theme/blue/account.scss';
@import '../../../../theme/blue/cover.scss';
@import './add.scss';
.mar-code{
  margin: 0;
}
</style>
