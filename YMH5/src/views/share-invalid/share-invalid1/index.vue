<template>
  <div class="share-invalid">
    <van-nav-bar title="失效好友" class="header-nav-bar" fixed placeholder>
      <template #left>
        <img v-hash src="/assets/blue/kok/icon_back.webp" class="header-icon-back">
      </template>
    </van-nav-bar>
    <van-empty class="default-empty" image="/assets/blue/kok/share/default-nodata.webp" description="暂无记录" />
  </div>
</template>
<script src="./index.ts"></script>

<style lang="scss">
  @import './index.scss';
</style>