<template>
  <div class="vip-rules-view">
    <van-nav-bar class="header-nav-bar" title="VIP特权详情" fixed placeholder>
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" class="header-icon-back">
      </template>
    </van-nav-bar>
    <div class="vip-detail">
      <div class="vip-detail-box">
        <p><i>VIP返水比例</i><span>VIP等级越高，场馆返水越高</span></p>
        <div class="vip-detail-tab ">
          <div class="level">
            <p>VIP等级</p>
            <p class="current">VIP0</p>
            <p v-for="item in 10" :key="item">VIP{{item}}</p>
          </div>
          <div class="container">
            <div class="content plat flex">
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
              <p>KOK体育</p>
            </div>
            <div :class="['content','flex',item == 1 ? 'current' : '']" v-for="item in 11" :key="item">
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
              <p>0.48%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vip-detail-box">
        <p><i>VIP提款额度</i><span>VIP等级越高，每日提款次数和金额越多</span></p>
        <div class="vip-detail-tab withdraw">
          <div class="level">
            <p>VIP等级</p>
            <p class="current">VIP0</p>
            <p v-for="item in 10" :key="item">VIP{{item}}</p>
          </div>
          <div class="container">
            <div class="content plat flex">
              <p>每日提款次数</p>
              <p>日提款金额</p>
            </div>
            <div :class="['content','flex',item == 1 ? 'current' : '']" v-for="item in 11" :key="item">
              <p>{{5 * item}}</p>
              <p>200,000.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vip-detail-box">
        <p><i>活动的一般条款与规则</i></p>
        <div class="vip-detail-rule">
          <div class="vip-detail-rule-container">
            <ul>
              <li><i>1</i>
                <p>晋升标准：会员的累计存款以及累计流水达到相应级别的要求，即可在次日24点前晋级相应VIP等级。</p>
              </li>
              <li><i>2</i>
                <p>晋升顺序：VIP等级达到相应的要求可每天晋升一级，但VIP等级不可越级晋升。</p>
              </li>
              <li><i>3</i>
                <p>保级要求：会员在达到某VIP等级后，90天内投注需要完成保级要求。如果在此期间完成晋升，保级要求从新按照当前等级计算。</p>
              </li>
              <li><i>4</i>
                <p>降级标准：如果会员在一个季度（90天计算）内没有完成相应的保级要求流水，系统会自动降级一个等级，相应的返水及其它优惠也会随之调整至降级后的等级。</p>
              </li>
              <li><i>5</i>
                <p>升级礼金：升级礼金在会员达到该会员级别后系统自动派发，每个级别的升级礼金每位会员仅能获得1次。（升级礼金1倍流水即可提款）</p>
              </li>
              <li><i>6</i>
                <p>生日礼金：会员在注册90天内过生日，今年将不能领取生日礼金。另注册时间大于90天的会员需在生日当天的VIP页面进行自助领取，每年可领取一次。（生日礼金1倍流水即可提款）</p>
              </li>
              <li><i>7</i>
                <p>每月红包：会员在上个月有过至少1次的成功存款，即可在每月1号获得相应等级的每月红包彩金。（每月红包礼金1倍流水即可提款）</p>
              </li>
              <li><i>8</i>
                <p>KOK体育保留对活动的修改，停止及最终解释权。</p>
              </li>
            </ul>
          </div>
          <div class="vip-scroll-to-top flex jc-c">
            <div class="vip-scroll-to-top-btn flex jc-c">回到顶部 <img v-hash src="/assets/blue/kok/vip/scrollTop.webp" alt=""></div>
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