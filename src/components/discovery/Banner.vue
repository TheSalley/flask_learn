<template>
  <div class="container">
    <el-carousel :interval="4000" trigger="click" height="285px">
      <el-carousel-item v-for="(b, index) in banners" :key="index">
        <img :src="b.imageUrl" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
/**
 * @banners 轮播图列表
 */
import { ref, reactive, toRefs, onMounted } from "vue";
import { getBannerList } from "@/api/http";
export default {
  name: "Banner",
  components: {},
  setup() {
    let banners = reactive([
      {
        imageUrl:
          "http://p1.music.126.net/U-klDW80305UEuVErdMpSw==/109951167239238686.jpg?imageView&quality=89",
      },
    ]);
    const getData = async () => {
      let { banners: res } = await getBannerList();
      banners.push(...res.splice(1));
    };
    onMounted(() => {
      getData();
    });
    return {
      banners,
    };
  },
};
</script>


<style lang="scss" scoped>
.container {
  height: 285px;
  .el-carousel {
    width: 982px;
    height: 285px;
    margin: 0 auto;
    img {
      display: block;
      width: 780px;
      height: 285px;
    }
  }
}
</style>