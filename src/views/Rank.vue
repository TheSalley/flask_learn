<template>
  <div class="container">
    <aside>
      <RankCom :arr="arrTop" title="云音乐特色榜" />
      <RankCom :arr="arrBottom" title="全球媒体榜" />
    </aside>
    <div class="rightBox">
      <RightCom :idVal="defaultId"/>
    </div>
  </div>
</template>
<script>
/**
 *
 * @param {array} arrTop 侧边栏上半部分排行榜数据
 * @param {array} arrBottom 侧边栏下半部分排行榜数据
 */
import RankCom from "@/components/rank/Aside.vue";
import RightCom from "@/components/rank/Right.vue";
import { getRankList } from "@/api/http";
import {  reactive, ref, onBeforeMount } from "vue";
export default {
  name: "Rank",
  components: {
    RankCom,
    RightCom
  },
  setup() {
    let arrTop = reactive([]);
    let arrBottom = reactive([]);
    let defaultId = ref(0)
    onBeforeMount(async () => {
      const { list: res } = await getRankList();
      defaultId.value = res[0].id
      arrTop.push(...res.splice(0, 4));
      arrBottom.push(...res);
    });
    return {
      arrTop,
      arrBottom,
      defaultId
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  aside {
    width: 240px;
    padding-top: 40px;
    border-right: 1px solid #d3d3d3;
  }
}
</style>