<template>
  <div class="flex ai-c jc-sb list-title-view" :class="cls" :style="styl" @click="clickHandler">
    <div class="icon-wp">
      <slot name="icon">
        <template v-if="iconUrl && iconUrl.length > 0">
          <img :src="iconUrl" />
        </template>
      </slot>
    </div>
    <div class="flex flex1 ai-c jc-sb content">
      <slot name="title">
        <div class="fs-28 title">{{title}}</div>
      </slot>
      <div class="flex right">
        <slot name="desc">
          <div class="desc">{{desc}}</div>
        </slot>
        <img src="icon-arrow.png" />
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>

<style lang="scss">
@import '@site/components/list-title.scss';
</style>
