<!--
 * @Author: your name
 * @Date: 2021-04-01 11:46:45
 * @LastEditTime: 2021-04-01 14:09:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \YMh5\src\views\message\message1\index.vue
-->
<template>
  <div class="message">
  <Nav title="消息中心">
    <span class="pos-a fs-24 message-edit" @click="isEdit = true">编辑</span>
  </Nav>
  <span v-show="isEdit" class="pos-f cancel-btn" @click="cancel">取消</span>
  <span v-show="isEdit" class="pos-f txt-r allcheck-btn" @click="checkAll">{{isAll ? '取消': ''}}全选</span>
  <ul class="pos-f flex ai-c w100 message-tab">
    <li v-for="item in tab" :key="item.name" :class="{'active':active === item.name}" @click="active=item.name">
      <p>{{item.title}}
      <span>{{item.num}}</span></p>
      </li>
  </ul>
  <div class="message-content">
    <div class="pos-f flex w100 h100 message-more">
      <div class="pos-r w100 message-list-wrap">
        <div class="message-list-content">
          <ul :class="{'message-list-ul':isEdit}">
            <li v-for="item in messageList" :key="item.id" @click="goDetail(item, tabName)">
              <span v-if="isEdit" :class="['check',{'active': item.isCheck}]" @click.stop="checkItem(item.id)"></span>
              <img class="nav-service" v-hash src="/assets/blue/kok/icon-message.png" alt="">
              <div class="message-list-top">
                <i v-if="!item.isRead"></i>
                <span class="list-top-title">{{ item.title}}</span>
                <span class="list-top-time">{{ item.time }}</span>
              </div>
              <div class="message-list-bot">
                {{ item.content }}
              </div>
            </li>
          </ul>
        </div>
        <div class="txt-c fs-12 no-more">没有更多了~</div>
      </div>
    </div>
  </div>
  <div :class="['pos-f flex jc-c w100 fixed-bot',{'fixed-bot-active':isEdit}]">
    <span :class="['txt-l fs-32',{'is-active':checkedList.length>0 && readList.length >0}]" @click="tagRead">标记已读</span>
    <span :class="['txt-r fs-32',{'is-delete':checkedList.length>0}]">删除</span>
  </div>
<div>
    
</div>
</div>
</template>

<script src="./index.ts"></script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
