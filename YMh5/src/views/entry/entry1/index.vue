<template>
  <div class="entry-page w100 h100 ovhide flex fdr-c jc-c">
    <!-- LOGO -->
    <div class="entry-page-logo-container w100">
      <div class="entry-page-logo"></div>
    </div>
    <!-- 赞助伙伴 -->
    <div>
      <div class="entry-page-sponsor-group-text flex ai-c jc-c">
        <span class="sponsor-group-line"></span>
        <span class="sponsor-group-title">赞助伙伴</span>
        <span class="sponsor-group-line"></span>
      </div>
      <div class="entry-page-sponsor-group"></div>
    </div>
    <!-- 登录注册表单 -->
    <div class="ovhide">
      <!-- 登录 -->
      <div class="entry-page-main flex jc-c ai-c pos-r" :style="{'left':type === 'login' ? '0' : '-100vw'}">
        <div class="entry-page-fromcontainer flex jc-c ovhide">
          <div class="entry-page-formcontainer-content">
            <div class="formcontainer-content">
              <div class="formcontainer-title">登录</div>
              <div class="formcontainer-form">
                <van-field type="text" placeholder="用户名" v-model="name" clearable>
                  <template #left-icon>
                    <div class="username-left-icon left-icon"></div>
                  </template>
                </van-field>
                <van-field  type="password" placeholder="密码" v-model="password1" @blur="inputBlur($event)"  @focus="inputFocus($event)"> 
                  <template #left-icon>
                    <div class="password-left-icon left-icon"></div>
                  </template>
                  <template #right-icon>
                    <div class="password-right-icon" @click="handleChangeInputType($event)"></div>
                  </template>
                </van-field>
                <div class="about-password flex jc-sb ac-c w100">
                  <div class="remember-me flex ai-c" @click="handleCheckedBoxChange">
                    <span :class="[isRememberPassword  ? 'remember-me-turn-on' : 'remember-me-turn-off']"></span>
                    <span>记住密码</span>
                  </div>
                  <span @click="router.push('/forget-password')">忘记密码？</span>
                </div>
                <van-button type="primary" block round :disabled="isFormReady(userForm,['id','password2','code'])" @click="login(setUserToLocal)">登录</van-button>
                <div class="visitor-btn">
                  <router-link to="/home">先去逛逛</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="location-to-right pos-r" @click="handleTypeChange('register')">
            <div class="location-content">
              <div class="link-icon"></div>
              <div class="link-text">
                <span>注</span><span>册</span><span>新</span><span>用</span><span>户</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 注册 -->
        <div class="entry-page-fromcontainer flex jc-c ovhide">
          <div class="location-to-left pos-r" @click="handleTypeChange('login')">
            <div class="location-content">
              <div class="link-icon"></div>
              <div class="link-text">
                <span>返</span><span>回</span><span>登</span><span>录</span>
              </div>
            </div>
          </div>
          <div class="entry-page-formcontainer-content register">
            <div class="formcontainer-title">注册</div>
            <div class="formcontainer-form">
              <van-field type="text" placeholder="用户名" :maxlength="11" @clear="clearInput(nameTip)" v-model="name" @blur="inputBlur($event,nameTip)" @focus="inputFocus($event, nameTip)" clearable @input="inputChange(name,nameTip)">
                <template #left-icon>
                  <div class="username-left-icon left-icon"></div>
                </template>
              </van-field>
              <div class="verity-tips flex ai-c" ref="nameTip">
                <span></span>
                <p>用户名为4-11位，最少2个字母+数字组合，首位为字母</p>
              </div>
              <van-field type="password" placeholder="密码" :maxlength="12" v-model="password1" @blur="inputBlur($event,password1Tip)" @input="inputChange(password1,password1Tip)"  @focus="inputFocus($event, password1Tip)">
                <template #left-icon>
                  <div class="password-left-icon left-icon"></div>
                </template>
                <template #right-icon>
                  <div class="password-right-icon" @click="handleChangeInputType($event)"></div>
                </template>
              </van-field>
              <div class="verity-tips flex ai-c" ref="password1Tip">
                <span></span>
                <p>密码长度为8-12位，字母+数字的组合</p>
              </div>
              <van-field type="password" placeholder="确认密码" :maxlength="12" v-model="password2" @blur="inputBlur($event, password2Tip)" @input="inputChange(password2,password2Tip)"  @focus="inputFocus($event, password2Tip)">
                <template #left-icon>
                  <div class="password-left-icon left-icon"></div>
                </template>
                <template #right-icon>
                  <div class="password-right-icon" @click="handleChangeInputType($event)"></div>
                </template>
              </van-field>
              <div class="verity-tips flex ai-c" ref="password2Tip">
                <span></span>
                <p>两次密码输入不一致</p>
              </div>
              <van-field type="type" placeholder="验证码" :maxlength="4" v-model="code" clearable>
                <template #left-icon>
                  <div class="code-left-icon left-icon"></div>
                </template>
                <template #right-icon>
                  <img v-if="captchaImage" @click="getCaptchaImage(id)" class="captcha" :src="captchaImage">
                </template>
              </van-field>
              <van-button type="primary" block round :disabled="isFormReady(userForm,['id'])" @click="register">注册</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
@import './index.scss';
</style>