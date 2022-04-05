<template>
  <div class="about">
    <!-- 轮播图 -->
    <Banner></Banner>
    <main>
      <div class="leftBox">
        <!-- 热门推荐 -->
        <Recommend :title="title1">
          <RecommendHot></RecommendHot>
        </Recommend>
        <!-- 个性推荐 -->
        <Recommend :title="title2">
          <RecommendNew></RecommendNew>
        </Recommend>
        <!-- 新碟上架 -->
        <Recommend :title="title3"></Recommend>
        <!-- 榜单 -->
        <Recommend :title="title4"></Recommend>
      </div>
    </main>
  </div>
</template>
<script>
import Banner from "@/components/discovery/Banner.vue";
import Recommend from "@/components/discovery/Recommend.vue";
import RecommendHot from "@/components/discovery/RecommendHot.vue";
import RecommendNew from "@/components/discovery/RecommendNew.vue";
import { reactive, toRefs } from "vue";
export default {
  name: "Discovery",
  components: {
    Banner,
    Recommend,
    RecommendHot,
    RecommendNew,
  },
  setup() {
    let data = reactive({
      title1: "热门推荐",
      title2: "个性化推荐",
      title3: "新碟上架",
      title4: "榜单",
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style lang="scss" scoped>
main {
  width: 980px;
  border: 1px solid #d3d3d3;
  margin: 0 auto;
  .leftBox {
    width: 729px;
    padding: 20px 20px 40px;
  }
}
</style>
