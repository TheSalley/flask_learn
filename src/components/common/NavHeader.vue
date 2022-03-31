<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" class="logoImg">
      </div>
      <ul class="list">
        <li v-for="l in listArr" :key="l.id">
          <router-link :to="l.path">
            <em>{{ l.name }}</em>
            <sub></sub>
          </router-link>
        </li>
      </ul>
      <div class="search"></div>
    </div>
  </div>
</template>
<script>
/**
 * @listArr 头部导航栏
 */
import { ref, reactive, toRefs } from "vue";
export default {
  name: "NavHeader",
  setup(props) {
    const listArr = reactive([
      {
        id: 1,
        name: "发现音乐",
        path: "discovery",
      },
      {
        id: 2,
        name: "我的音乐",
        path: "my",
      },
      {
        id: 3,
        name: "关注",
        path: "friend",
      },
      {
        id: 4,
        name: "商城",
        path: "store",
      },
      {
        id: 5,
        name: "音乐人",
        path: "musician",
      },
      {
        id: 6,
        name: "下载客户端",
        path: "download",
      },
    ]);
    return {
      listArr,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  .container {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    .logo {
      width: 157px;
      height: 100%;
      padding-right: 20px;
      display: flex;
      align-items: center;
      .logoImg {
        width: 40px;
      }
    }
    .list {
      display: flex;
      align-content: center;
      li {
        width: 94px;
        height: 70px;
        text-align: center;
        em {
          height: 70px;
          line-height: 70px;
          font-size: 14px;
          cursor: pointer;
          font-style: normal;
          color: #ccc;
        }
      }
    }
  }
}
</style>