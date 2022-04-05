<template>
  <div class="container">
    <h1>sss</h1>
  </div>
</template>
<script>
/**
 *@hotList 热门推荐列表
 */
import { getHotRecommend } from "@/api/discovery";
import { onMounted, reactive } from "vue";
export default {
  setup() {
    let hotList = reactive([]);
    onMounted(async () => {
      const { playlists: res } = await getHotRecommend();
      console.log(res);
    //   hotList.push(...res);
    });
    return {
      hotList,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  // margin: 20px 0 37px 0;
  
}
</style>