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
        <!-- 新碟上架 -->
        <Recommend :title="title2">
          <RecommendNew></RecommendNew>
        </Recommend>
        <!-- 榜单 -->
        <Recommend :title="title3">
          <h1>榜单</h1>
        </Recommend>

      </div>
      <div class="rightBox">
        <LoginCom />
        <AsideCom title="入驻歌手"/>
        <AsideCom title="热门主播"/>
      </div>
    </main>
  </div>
</template>
<script>
/**
 * 
 *@param data 红线上的标题数据
 */
import Banner from "@/components/discovery/Banner.vue";
import Recommend from "@/components/discovery/Recommend.vue";
import RecommendHot from "@/components/discovery/RecommendHot.vue";
import RecommendNew from "@/components/discovery/RecommendNew.vue";
import LoginCom from '@/components/discovery/LoginCom.vue'
import AsideCom from '@/components/discovery/AsideCom.vue'
import { reactive, toRefs } from "vue";
export default {
  name: "Discovery",
  components: {
    Banner,
    Recommend,
    RecommendHot,
    RecommendNew,
    LoginCom,
    AsideCom
  },
  setup() {
    let data = reactive({
      title1: "热门推荐",
      title2: "新碟上架",
      title3: "榜单",
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;

  .leftBox {
    padding: 20px 20px 40px;

  }
  .rightBox {
    border-left: 1px solid rgb(213, 204, 204);
  }
}
</style>
