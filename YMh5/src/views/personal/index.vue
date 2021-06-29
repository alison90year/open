<template>
  <div class="personal-view">
    <section class="top-sec">
      <section class="flex jc-e set-sec">
        <div class="icon-notice" @click="goto('/message')"></div>
        <div class="icon-setting" @click="goto('/system')"></div>
      </section>
      <section class="flex ai-c info-sec">
        <div class="avator-wp">
          <img src="https://images.4vw264.com/1577419251059212/imageAvatar01@3x.png?x-oss-process=image/resize,p_100/quality,Q_70/format,webp" style="">
        </div>
        <div class="u-name-wp">
          <div><span class="fs-38">test001</span><span></span></div>
          <div>加入KOK第{{18}}天</div>
        </div>
      </section>
      <section class="flex oper-panel">
        <div class="flex fdr-c jc-c flex1 u-info">
          <div>中心钱包</div>
          <div class="fw-b mgt-20 fs-32">
            <span>¥</span> 
            <span>0.00</span>
          </div>
        </div>
        <ul class="flex fs-24 menu-wp">
          <li v-for="(menu, i) in operMenus" :key="i" @click="goto(menu.path)" :class="['flex flex1 fdr-c ai-c jc-c menu-item']">
            <div :class="['menu-icon', menu.icon]">
            </div>
            <div>{{menu.title}}</div>
          </li>
        </ul>
      </section>
      <section class="shelf-show-wp">
        <div class="flex ai-c jc-sb shelf-items">
          <div class="vip">
            <router-link to="/vip">
              <div class="title">VIP特权</div>
              <div class="desc">每月红包 晋级红利</div>
            </router-link>
          </div>
          <div class="invite">
            <div class="title">KOK总动员</div>
            <div class="desc">邀友同欢 有钱同赚</div>
          </div>
        </div>
      </section>
    </section>
    <section class="often-use-wp">
      <header class="fs-28 fw-b">常用功能</header>
      <ul class="flex jc-sb often-use-list">
        <li class="often-use-item">
          <router-link to="/myWallet">
            <img v-webp :src="`${config.BASE_IMG_DIR}personal/icon-wallet.png`" />
            <div>我的钱包</div>
          </router-link>
        </li>
        <li class="often-use-item" @click="$router.push('/bet')">
          <img v-webp :src="`${config.BASE_IMG_DIR}personal/icon-bet-record.png`" />
          <div>投注记录</div>
        </li>
        <li class="often-use-item" @click="$router.push('/transaction')">
          <img v-webp :src="`${config.BASE_IMG_DIR}personal/icon-change-record.png`" />
          <div>交易记录</div>
        </li>
        <li class="often-use-item">
          <img v-webp :src="`${config.BASE_IMG_DIR}personal/icon-prize.png`" />
          <div>奖品记录</div>
        </li>
      </ul>
    </section>
    <section class="mgt-20">
      <list-title title="账户与安全" desc="完善账户信息，更安全"  @click="goto('/account')"><template v-slot:icon><img  :src="`${config.BASE_IMG_DIR}personal/icon-safe.svg`" ></template></list-title>
      <list-title title="合营计划" desc="加入我们" @click="goto('/agent')"><template v-slot:icon><img  :src="`${config.BASE_IMG_DIR}personal/icon-copr.svg`" ></template></list-title>
      <list-title title="帮助中心" desc="" @click="goto('/help')"></list-title>
    </section>
  </div>
</template>


<script src="./index.ts"></script>

<style lang="scss">
@import '@site/styles/personal.scss';
</style>