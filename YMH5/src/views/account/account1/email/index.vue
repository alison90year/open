<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="phone">
    <Nav title="电子邮箱">
        <span :class="['pos-a fs-36 phone-finish',{finised: finised && valid }]" @click="bandEmail">完成</span>
    </Nav>
<div class="phone-form">
   <div class="fs-28 phone-form-message"><span v-if="error">请输入正确的邮箱地址</span></div>
   <div class="ovhide phone-form-item pad0">
       <div class="fs-28 phone-form-title">邮箱账号</div>
       <div class="flex ai-c jc-e input-wrap">
           <input class="flex1 h100 fs-28" 
           type="text"
           placeholder="请输入邮箱账号" 
           autocomplete="off" 
           @focus="emailClose = true"
           @blur="blur"
           @keyup="checkValue"
           v-model="email">
          <img :class="['hide ',{'phone-form-delete':email && !valid}]"
           v-webp src="/assets/blue/kok/account/delete" alt="清空" @click="clearEamil"></div>
   </div>
   <div class="ovhide phone-form-item pad0">
      <div class="flex jc-sb ai-c h100 mar-code">
          <div class="flex fdr-c w100 h100">
             <div class="fs-28 phone-form-title">邮箱验证码</div>
             <div class="flex ai-c jc-e input-wrap">
                 <input type="tel" 
                 class="flex1 h100 fs-28" 
                 pattern="[0-9]*" 
                 placeholder="请输入邮箱验证码" 
                  @blur="codeclose = false"
                  @focus="codeclose = true"
                  @keyup="changeCode"
                  maxlength="6"
                  v-model="code"
                 autocomplete="off" >
                 <img :class="['hide',{'phone-form-delete': codeclose && code}]" 
                  v-webp src="/assets/blue/kok/account/delete" alt="清空"
                  @click="code = ''"
                 >
             </div>
          </div>
          <div :class="['txt-c nobd fs-28 code-btn',{'active': valid}]">
              获取验证码
          </div>
      </div>
   </div>
</div>
<Footer/>
<div>
    
</div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import '../../../../theme/blue/account.scss';
.mar-code{
  margin: 0;
}
</style>
