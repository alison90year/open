<!--
 * @Author: Seanm
 * @Date: 2021-03-26 17:37:45
-->
<template>
  <div class="user">
  <Nav title="个人资料" />
  <ul>
    <li>
      <div class="list-title"><span>个人头像</span></div>
      <div class="flex jc-sb list-content">
        <div class="pos-r list-avatar">
         <img v-if="avatar"  v-webp src="/assets/blue/kok/account/defaultProfile" alt="">
         <img v-if="avatar" class="pos-a"  v-webp src="/assets/blue/kok/account/avatarEdit" alt="">
        </div>
       
      </div>
    </li>
    <li>
      <div class="list-title"><span>用户名</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!nickName}">{{ nickName }}</span>
        <img v-if="!nickName" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
    <li @click="goPage(name,'/account/addbank')">
      <div class="list-title"><span>真实姓名</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!name}">{{ name ? name: '需与银行卡持卡人姓名一致，否则无法提款' }}</span>
        <img v-if="!name" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
    <li @click="openPopup('sex', sex)">
      <div class="list-title"><span>性别</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!sex}">{{ sex ? sex: '未选择' }}</span>
        <img v-if="!sex" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
    <li @click="openPopup('birthday',birthday)">
      <div class="list-title"><span>出生日期</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!birthday}">{{ birthday ? birthday : '添加日期，确保您已满18周岁'}}</span>
        <img v-if="!birthday" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
    <li @click="goPage(phone,'/account/phone')">
      <div class="list-title"><span>手机号码</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!phone}">{{ phone ? phone : '绑定手机号，保障账号安全'}}</span>
        <img v-if="!phone" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
    <li @click="goPage(email,'/account/email')">
      <div class="list-title"><span>电子邮箱</span></div>
      <div class="flex jc-sb list-content">
        <span :class="{'is-null':!email}">{{ email ? email : '绑定邮箱保护账号安全'}}</span>
        <img v-if="!email" class="cell-item-right" v-webp src="/assets/blue/kok/account/right" alt="">
      </div>
    </li>
  </ul>
  <!-- <div ref="picker"></div> -->
<Footer/>
<van-popup v-model:show="showPicker" position="bottom" :style="{ height: '42%' }">
      <van-picker
      ref="picker"
      v-show="showName === 'sex'"
      title="性别"
      :columns="sexOption"
      :default-index="defaultSex"
      @confirm="onConfirmSex"
      @cancel="onCancelSex"
    />
      <van-datetime-picker
      v-show="showName === 'birthday'"
      class="date-picker"
        v-model="time"
        type="date"
        title="请选择出生日期"
        :formatter="formatter"
        :min-date="min"
        :max-date="max"
         @confirm="onConfirmDate"
         @cancel="onCancelDate"
      />
    </van-popup>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
