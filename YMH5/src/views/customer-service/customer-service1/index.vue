<template>
  <div class="customer-service-view w100 h100 ovhide">
    <div class="customer-header">
      <van-nav-bar title="客服" right-text="意见反馈" />
    </div>
    <section class="cs-info-card">
      <div class="cs-info-card-bg"></div>
      <div class="cs-info-card-header flex ai-c">
        <!-- <van-image src="/assets/blue/kok/customer-service/picTouxiang-kok.webp" fit="cover" round /> -->
        <img v-hash src="/assets/blue/kok/customer-service/picTouxiang-kok.webp">
        <div>
          <h3>欢迎来到客服中心</h3>
          <p>24小时随时为您服务</p>
        </div>
      </div>
      <div class="cs-info-card-footer flex ai-c jc-sb">
        <p>添加桌面客服，随时享受一对一在线解答</p>
        <van-button round>立即添加</van-button>
      </div>
    </section>
    <div class="contact-cs-button flex ai-c jc-sa">
      <van-button icon="/assets/blue/kok/customer-service/iconKefu@2x.webp" class="master-cs">主线客服</van-button>
      <van-button>次线客服</van-button>
    </div>
    <div class="cs-questions">
      <div class="cs-questions-title">猜你想问</div>
      <van-collapse v-model="activeNames" :border="false">
        <van-collapse-item icon="/assets/blue/kok/customer-service/newbie.png" :is-link="false" name="1">
          <template #title>
            <div class="cs-questions-item flex ai-c van-hairline--bottom">
              <div class="title">新手帮助</div>
              <div class="value">存款极速到账</div>
              <i :class="{'arrow': true, 'arrow-rotate': activeNames.indexOf('1') > -1}"></i>
            </div>
          </template>
          <router-link class="item-link" to="">开户</router-link>
          <router-link class="item-link" to="">存款教程</router-link>
          <router-link class="more-questions" to="">更多问题<i></i></router-link>
        </van-collapse-item>
        <van-collapse-item title="游戏问题" icon="/assets/blue/kok/customer-service/game.png" :is-link="false" name="2">
          <template #title>
            <div class="cs-questions-item flex ai-c van-hairline--bottom">
              <div class="title">游戏问题</div>
              <div class="value">主流体育彩票玩法</div>
              <i :class="{'arrow': true, 'arrow-rotate': activeNames.indexOf('2') > -1}"></i>
            </div>
          </template>
          <router-link class="item-link" to="">体育投注-让球教程</router-link>
          <router-link class="item-link" to="">体育投注-大小球教程</router-link>
          <router-link class="more-questions" to="">更多问题<i></i></router-link>
        </van-collapse-item>
        <van-collapse-item title="企业事务" icon="/assets/blue/kok/customer-service/enterprise.png" :is-link="false" name="3">
          <template #title>
            <div class="cs-questions-item flex ai-c van-hairline--bottom">
              <div class="title">企业事务</div>
              <div class="value">提供全面技术支持</div>
              <i :class="{'arrow': true, 'arrow-rotate': activeNames.indexOf('3') > -1}"></i>
            </div>
          </template>
          <router-link class="item-link" to="">技术支持</router-link>
          <router-link class="item-link" to="">竞猜责任</router-link>
          <router-link class="more-questions" to="">更多问题<i></i></router-link>
        </van-collapse-item>
        <van-collapse-item title="联系我们" icon="/assets/blue/kok/customer-service/contactus.png" :is-link="false" name="4">
          <template #title>
            <div class="cs-questions-item flex ai-c van-hairline--bottom">
              <div class="title">联系我们</div>
              <div class="value">为您提供全天候服务</div>
              <i :class="{'arrow': true, 'arrow-rotate': activeNames.indexOf('4') > -1}"></i>
            </div>
          </template>
          <router-link class="item-link" to="">在线客服</router-link>
        </van-collapse-item>
        <van-collapse-item title="全部问题" class="no-content" icon="/assets/blue/kok/customer-service/all.webp" :is-link="false" name="5">
          <template #title>
            <div class="cs-questions-item flex ai-c van-hairline--bottom">
              <div class="title">全部问题</div>
              <div class="value">≥100个常见问题解密</div>
              <i :class="{'arrow': true, 'arrow-rotate': activeNames.indexOf('5') > -1}"></i>
            </div>
          </template>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>