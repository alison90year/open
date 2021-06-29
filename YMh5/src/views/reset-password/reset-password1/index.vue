<template>
  <div class="reset-password-view ovhide w100 h100">
    <van-nav-bar class="header-nav-bar" title="密码找回" left-arrow @click-left="router.back()">
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" alt="" class="header-icon-back">
      </template>
    </van-nav-bar>

    <!-- 步骤条 -->
    <ul class="reset-password-list w100 flex jc-c">
      <li :class="{'reset-password-item-focus' : step >= stepEnum.step1}">
        <div><i>1</i></div>
        <p>身份验证</p>
      </li>
      <li :class="{'reset-password-item-focus' : step >= stepEnum.step3}">
        <div><i>2</i></div>
        <p>修改密码</p>
      </li>
      <li :class="{'reset-password-item-focus' : step === stepEnum.step4}">
        <div><i>3</i></div>
        <p>完成</p>
      </li>
    </ul>

    <!-- 身份验证输入框 -->
    <van-tabs v-model="tabsActive" title-inactive-color="#a5a9b3" title-active-color="#414655" class="step-one-tabs" v-if="step === stepEnum.step1">
      <van-tab title="手机验证" name="phone">
        <van-field type="text" label="用户名" placeholder="请输入用户名" v-model="form.username"/>
        <van-field type="text" label="手机号码" placeholder="请输入绑定手机号码" v-model="form.phone"/>
      </van-tab>
      <van-tab title="邮箱验证" name="email">
        <van-field type="text" label="用户名" placeholder="请输入用户名" v-model="form.username"/>
        <van-field type="text" label="邮箱" placeholder="请输入绑定邮箱" v-model="form.email"/>
      </van-tab>
    </van-tabs>

     <!-- 获取验证码 -->
    <div class="get-code" v-if="step === stepEnum.step2">
      <p class="tips-container" v-if="isGetCode">
        验证码已通过{{ tabsActive === 'phone' ? '短信' : '邮件'}}发送至<span>{{ tabsActive === 'phone' ? formatStringOfAsterisk(form.phone) : formatStringOfAsterisk(form.email) }}</span>
      </p>
      <van-field type="number" placeholder="请输入邮箱验证码" v-model.number="form.code">
        <template #button v-if="step === stepEnum.step2">
          <van-button type="primary" size="mini" @click="getCodeByType" :disabled="isGetCode">
            <template #default>
              <span v-if="!isGetCode">获取验证码</span>
              <span v-else class="count-down">{{current.seconds}}s</span>
            </template>
          </van-button>
        </template>
      </van-field>
      <van-field type="text" placeholder="请输入图形验证码" v-model="form.picCode"/>
    </div>

    <!-- 修改密码步骤 -->
    <div class="reset-password" v-if="step === stepEnum.step3">
      <p class="tips-container">请重新设置您的登录密码</p>
      <van-field :type="showLoginPwd ? 'text' : 'password'" label="登录密码" placeholder="请输入8-12位字母+数字的组合" v-model="form.pwd">
        <template #button>
          <span @click="pwdToggle(!showLoginPwd)" :class="{'icon-input-status': true, 'icon-input-show' : showLoginPwd, 'icon-input-hide' : !showLoginPwd}"
          :style="{opacity: form.pwd ? '1' : '0'}"
          ></span>
        </template>
      </van-field>
      <van-field :type="showLoginConPwd ? 'text' : 'password'" label="确认密码" placeholder="请再次输入密码" v-model="form.conPwd">
        <template #button>
          <span @click="conPwdtoggle(!showLoginConPwd)" 
          :class="{'icon-input-status': true, 'icon-input-show' : showLoginConPwd, 'icon-input-hide' : !showLoginConPwd}"
          :style="{opacity: form.conPwd ? '1' : '0'}"
          ></span>
        </template>
      </van-field>
      <p class="tips-password">请避免使用与其他网站相同或易于被他人猜测到的密码</p>
    </div>
    <van-button ref="button" block class="next-button" @click="tapNextButton" v-if="step !== stepEnum.step4">{{stepEnum.step2 >= step ? '下一步' : '完成'}}</van-button>
    <div class="reset-password-declare" v-if="step === stepEnum.step1">如果用户名没有绑定手机号或邮箱，请<router-link class="contact-us" to="/">联系客服</router-link>找回密码。</div>

    <!-- 完成步骤 -->
    <template v-if="step === stepEnum.step4">
      <van-empty  description="恭喜您，您的密码已经修改成功!" image="/assets/blue/kok/icon-success.png"/>
      <van-button block class="to-login">立即登录</van-button>
      <van-button block class="to-home">返回首页</van-button>
    </template>
  </div>
</template>
<script src="./index.ts"> </script>
<style lang="scss">
@import './index.scss';
</style>