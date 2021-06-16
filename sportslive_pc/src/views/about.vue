<template>
  <div id="about">
    <!-- <div class="content-about">
      <span class="contentval">个人中心</span>
    </div> -->
    <div class="my-menu-wrapper">
      <ul>
        <li
          class="item"
          v-for="(item, i) in menu"
          :key="item.i"
          :class="{ active: item.active }"
          @click="tabFn(item.name, i)"
        >
          <i :class="[item.icon]"></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import centerCommonHeard from "./centerCommonHeard";
// import {  GetUserinfo } from "@/api";
export default {
  name: "about",
  components: {
    centerCommonHeard,
  },

  data() {
    return {
      menu: [
        {
          name: "用户相关",
          active: true,
        },
        {
          name: "主播帮助",
          active: false,
        },
        {
          name: "联系我们",
          active: false,
        },
        // {
        //   name: "意见反馈",
        //   active: false,
        // },
      ],
    };
  },
  watch: {
    "$store.state.myCenterIndex": function () {
      this.menu.forEach((item, index) => {
        if (this.$store.state.myCenterIndex == index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
  },
  mounted() {},
  methods: {

    tabFn(val, i) {
      // this.getUserinfo()
      switch (val) {
        case "用户相关":
          this.$router.push({ name: "about-user" });
          break;
        case "主播帮助":
          this.$router.push({ name: "about-Anchor" });
          break;
        case "联系我们":
          this.$router.push({ name: "about-contact" });
          break;
        // case "意见反馈":
        //   this.$router.push({ name: "about-Feedback" });
        //   break;
      }

      this.menu.forEach((item, index) => {
        if (i == index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      
    },
    
  },
};
</script>

<style lang="stylus">
#about {
  width: 1200px;
  height: 900px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;

  /* height :700px; */
  .content-about {
    position: absolute;
    top: 76px;
    height: 61px;
    width: 1200px;

    .contentval {
      display: block;
      width: 168px;
      height: 100%;
      line-height: 61px;
      font-size: 24px;
      text-align: center;
      color: #333333;
      font-size: 24px;
      font-family: PingFang SC, PingFang SC-Heavy;
      font-weight: 800;
    }
  }

  .center {
    height: 840px;
    overflow: hidden;
    background: #fff;
  }

  >div {
    border-radius: 8px;
  }

  >div:last-child {
    flex: 1;
    margin-left: 20px;
    overflow: hidden;
  }

  .my-menu-wrapper {
    box-shadow: 0px 0px 20px rgba(119, 119, 119, 0.16);
    border-radius: 8px;
    width: 168px;
    // height: 400px;
    background: #fff;

    .item {
      list-style: none;
      overflow: hidden;
      width: 100%;
      height: 49px;
      line-height: 45px;
      font-size: 16px;
      background: #fff;
      cursor: pointer;
      letter-spacing: 1px;
      padding: 0 15px;

      i {
        display: inline-block;
        width: 23px;
        height: 23px;
        position: relative;
        top: 4px;
      }

      span {
        margin-left: 5px;
      }

      &:hover {
        color: rgb(191, 150, 90);
      }
    }

    .item.title {
      height: 70px;
      font-size: 24px;
      font-weight: 600;
      cursor: default;
      position: relative;
      bottom: 5px;
      text-align: center;
      margin-left: 5px;
    }

    .item.boundary {
      border-top: 1px solid #ddd;
      border-radius: 4px;
      height: 10px;
    }

    .item.active {
      background: #ececec;
      color: #CC9F49;
      letter-spacing: 1px;
      border-left: 3px solid #DBB16F;
      background: #fff9f3;
    }

    .item span {
      position: relative;
      bottom: 2px;
    }
  }
}
</style>
