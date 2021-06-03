<template>
  <ul class="flex bottom-tab-view" v-show="show">
    <li v-for="(tab, i) in tabs" :key="i" @click="changeTab(tab)" :class="['flex flex1 fdr-c ai-c jc-c tab-item', tab.id === curActive ? 'active' : '']">
      <div :class="['menu-icon', tab.icon]"></div>
      <div>{{tab.title}}</div>
    </li>
  </ul>
</template>

<script src="./index.ts"></script>

<style lang="scss">
@import '@site/components/bottom-tab.scss';
</style>
