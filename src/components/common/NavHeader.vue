<template>
  <div>
    <ul>
      <li v-for="l in listArr" :key="l.id">
        <router-link :to="l.path">{{ l.name }}</router-link>
      </li>
    </ul>
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
        path: "discovery",
      },
      {
        id: 3,
        name: "关注",
        path: "discovery",
      },
      {
        id: 4,
        name: "商城",
        path: "discovery",
      },
      {
        id: 5,
        name: "音乐人",
        path: "discovery",
      },
      {
        id: 6,
        name: "下载客户端",
        path: "discovery",
      },
    ]);
    return {
      listArr,
    };
  },
};
</script>
<style lang="css" scoped>

</style>