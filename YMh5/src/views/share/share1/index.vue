<template>
  <div class="share-view">
    <van-nav-bar class="header-nav-bar" title="邀请好友" fixed placeholder right-text="礼金明细">
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" class="header-icon-back">
      </template>
    </van-nav-bar>
    <div class="share-view-content">
      <div class="share-view-content-wrap">
        <div class="three-step-title flex jc-c ai-c">
          <img v-hash src="/assets/blue/kok/share/titlepatternLeft.webp">
          <div class="three-step-text">简单三步 立享奖励</div>
          <img v-hash src="/assets/blue/kok/share/titlepatternRight.webp">
        </div>
        <div class="three-step-content flex">
          <div class="three-step-content-item flex1">
            <img v-hash src="/assets/blue/kok/share/icon_shore.webp">
            <p>分享链接</p>
            <p>给您好友</p>
          </div>
          <div class="three-step-content-next flex1">
            <img v-hash src="/assets/blue/kok/share/next.webp">
          </div>
          <div class="three-step-content-item flex1">
            <img v-hash src="/assets/blue/kok/share/icon_friendwebp.webp">
            <p>好友接受</p>
            <p>您的邀请</p>
          </div>
          <div class="three-step-content-next flex1">
            <img v-hash src="/assets/blue/kok/share/next.webp">
          </div>
          <div class="three-step-content-item flex1">
            <img v-hash src="/assets/blue/kok/share/icon_gift.webp">
            <p>好友注册</p>
            <p>并且首存</p>
          </div>
        </div>
        <div class="three-step-table">
          <table>
            <tr>
              <th>好友首存金额</th>
              <th>可获礼金</th>
            </tr>
            <tr>
              <td>≥188元</td>
              <td>28元</td>
            </tr>
            <tr>
              <td>≥288元</td>
              <td>38元</td>
            </tr>
            <tr>
              <td>≥588元</td>
              <td>68元</td>
            </tr>
            <tr>
              <td>≥1088元</td>
              <td>88元</td>
            </tr>
            <tr>
              <td>≥2888元</td>
              <td>188元</td>
            </tr>
            <tr>
              <td>≥5888元</td>
              <td>288元</td>
            </tr>
            <tr>
              <td>≥10888元</td>
              <td>488元</td>
            </tr>
            <tr>
              <td>≥18888元</td>
              <td>688元</td>
            </tr>
            <tr>
              <td>≥48888元</td>
              <td>1588元</td>
            </tr>
            <tr>
              <td>≥188888元</td>
              <td>3888元</td>
            </tr>
          </table>
        </div>
        <div class="reminder">*礼金满足1倍流水后即可提取</div>
      </div>
      <div class="share-view-content-wrap">
        <div class="three-step-title flex jc-c ai-c">
          <img v-hash src="/assets/blue/kok/share/titlepatternLeft.webp">
          <div class="three-step-text">活动规则</div>
          <img v-hash src="/assets/blue/kok/share/titlepatternRight.webp">
        </div>
        <div class="content-rule">
          <div>
            <div style="line-height: 1.5;"><span style="font-size: 12pt; color: #414655;">1.&nbsp; 本活动全体用户皆可参与，用户点击推荐链接分享给新用户注册并进行存款后即可获得对应推荐礼金，被推荐用户无需填写推荐码；</span></div>
            <div style="line-height: 1.5;">&nbsp;</div>
            <div style="line-height: 1.5;"><span style="font-size: 12pt; color: #414655;">2.&nbsp; 每推荐一个新用户注册并存款皆可获得一次对应用户首存金额的推荐礼金；</span></div>
            <div style="line-height: 1.5;">&nbsp;</div>
            <div style="line-height: 1.5;"><span style="font-size: 12pt; color: #414655;">3.&nbsp; 本活动与【返水优惠】共享，不与其他任何优惠共享；</span></div>
            <div style="line-height: 1.5;">&nbsp;</div>
            <div style="line-height: 1.5;"><span style="font-size: 12pt; color: #414655;">4.&nbsp; 每位被推荐用户需满足：每一个手机号码、电子邮箱、IP地址、相同银行卡、同一台电脑仅可注册一个会员账号，如发现有违规用户，我们将保留无限期审核扣回红利及所产生利润的权利；</span></div>
            <div style="line-height: 1.5;">&nbsp;</div>
            <div style="line-height: 1.5;"><span style="font-size: 12pt; color: #414655;">5.&nbsp; 为避免文字理解差异，KOK体育保留本活动最终解释权。</span></div>
          </div>
        </div>
      </div>
      <van-button block class="invite-button" @click="isShowPopup = true">立即邀请</van-button>
    </div>
    <van-popup v-model:show="isShowPopup" position="bottom">
      <div class="popup-share-list flex pos-r">
        <div class="popup-share-list-item">
          <div class="popup-share-list-item-icon flex jc-c ai-c">
            <i class="copy"></i>
          </div>
          <div class="popup-share-list-item-title">复制链接</div>
        </div>
        <div class="popup-share-list-item">
          <div class="popup-share-list-item-icon flex jc-c ai-c">
            <i class="down"></i>
          </div>
          <div class="popup-share-list-item-title">保存图片</div>
        </div>
      </div>
      <van-button class="cancel-button" block @click="isShowPopup = false">取消</van-button>
    </van-popup>
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>