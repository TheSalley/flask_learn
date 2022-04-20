<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" class="logoImg" />
          <span class="title">Music</span>
        </div>
        <!-- 一级路由 -->
        <ul class="list">
          <li v-for="item in listArr" :key="item.id">
            <router-link :to="item.path" v-slot="{ isActive }">
              <div :class="[isActive && 'active']" class="firstRouter">
                <em>{{ item.name }}</em>
                <sub :class="[isActive && 'cor']"></sub>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="search">
          <div class="inputBox">
            <input type="text" placeholder="音乐/视频/电台/用户"/>
          </div>
          <span class="createrCenter">创作者中心</span>
          <span class="login">登录</span>
        </div>
      </div>
    </div>
    <!-- 二级路由 -->
    <div class="nav" :style="{ height: isShow ? ' 35px' : '6px' }">
      <ul :class="['list']">
        <router-link
          :to="item.path"
          v-for="item in listArr[0].children"
          :key="item.id"
          v-slot="{ isExactActive, href }"
        >
          <li>
            <em :class="[isExactActive && 'active', href === isRoute]">{{
              item.name
            }}</em>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
/**
 * @param {array} listArr 头部导航栏数据
 * @param {boolean} isRoute 计算属性控制第一个二级路由默认地高亮
 * @param {boolean} isShow 计算属性控制二级路由的显隐
 */
import { ref, reactive, toRefs, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "NavHeader",
  setup(props) {
    let arr = [
      {
        id: 1,
        name: "发现音乐",
        path: "/",
        children: [
          {
            id: 11,
            name: "推荐",
            path: "/discovery",
          },
          {
            id: 12,
            name: "排行榜",
            path: "/discovery/toplist",
          },
          {
            id: 13,
            name: "歌单",
            path: "/discovery/playlist",
          },
          {
            id: 14,
            name: "主播电台",
            path: "/discovery/djradio",
          },
          {
            id: 15,
            name: "歌手",
            path: "/discovery/artist",
          },
          {
            id: 16,
            name: "新碟上架",
            path: "/discovery/album",
          },
        ],
      },
      {
        id: 2,
        name: "我的音乐",
        path: "/my",
      },
      {
        id: 3,
        name: "关注",
        path: "/friend",
      },
      {
        id: 4,
        name: "商城",
        path: "/store",
      },
      {
        id: 5,
        name: "音乐人",
        path: "/musician",
      },
      {
        id: 6,
        name: "下载客户端",
        path: "/download",
      },
    ];
    let route = useRoute();
    const listArr = reactive(arr);

    // console.log(route.path);
    let isRoute = computed(() => {
      return route.path === "/discovery" || route.path === "/" ? "active" : "";
    });
    let isShow = computed(() => {
      return route.path.includes("/discovery") || route.path === "/" || route.path.includes("/playlist")
        ? true
        : false;
    });
    return {
      listArr,
      isRoute,
      isShow,
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
      .title {
        color: white;
        font-size: 25px;
        font-style: italic;
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
    .search {
      display: flex;
      margin-top: 19px;
      margin-left: auto;
      .inputBox {
        width: 158px;
        height: 32px;
        border-radius: 32px;
        display: flex;
        align-items: center;
        background: url('~@/assets/topbar.png') no-repeat 0 -99px;
        background-color: #fff;
        input {
          border: none;
          outline: none;
          width: 95%;
          background: transparent;
          color: #333;
          line-height: 16px;
          cursor: text;
          font-size: 12px;
          margin-left: 25px;
        }
      }
      .createrCenter {
        width: 90px;
        height: 32px;
        color: #ccc;
        border-radius: 20px;
        border: 1px solid #4F4F4F;
        font-size: 12px;
        line-height: 32px;
        text-align: center;
        margin-left: 12px;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          border-color: white;
        }
      }
      .login {
        font-size: 12px;
        color: rgba(110, 103, 103, 0.85);
        line-height: 32px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

    }
  }
  .active {
    background-color: #000;
    position: relative;
    .cor {
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      border: 7px solid transparent;
      border-bottom-color: #c20c0c;
    }
  }
  .firstRouter:hover {
    background-color: #000;
  }
}

.nav {
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  overflow: hidden;
  .list {
    display: flex;
    width: 1100px;
    margin: 0 auto;
    padding-left: 165px;
    li {
      em {
        display: block;
        color: #fff;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        font-size: 12px;
        font-style: normal;
        &:hover {
          background: #9b0909;
        }
      }
      .active {
        background: #9b0909;
      }
    }
  }
}
</style>