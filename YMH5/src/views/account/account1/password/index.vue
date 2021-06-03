<template>
  <div class="phone">
    <Nav title="修改密码" />
    <div class="phone-form">
      <div class="fs-28 phone-form-message"><span v-if="error">{{ error }}</span></div>
      <div class="phone-form-item" v-for="(item,index) in optionList" :key="index">
        <div class="fs-28 phone-form-title">{{ item.label }}</div>
        <div class="flex ai-c jc-e input-wrap">
          <input :type="item.type" class="flex1 h100 fs-28" 
          :placeholder="item.placeholder"
          v-model="item.value"
          @keyup="check(item.value,index)"
          >
          <img class="phone-form-see" v-show="item.type === 'password'" v-webp src="/assets/blue/kok/account/password" @click="open(index, item.type)">
          <img class="phone-form-see" v-show="item.type === 'text'" v-webp src="/assets/blue/kok/account/text" @click="open(index, item.type)">
        </div>
      </div>
    </div>
  <button :class="['fw-b fs-32 submit',{'active': valid}]" @click="changePassword">提交</button>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import '../../../../theme/blue/account.scss';
</style>
