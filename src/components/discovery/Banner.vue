<template>
  <div class="container">
    <el-carousel :interval="4000" trigger="click" height="285px">
      <el-carousel-item v-for="(b, index) in banners" :key="index">
        <img :src="b.imageUrl" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="downloadBox">
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    </div>
  </div>
</template>
<script>
/**
 *
 * @param { array } banners 轮播图列表
 * @function getData 拉取轮播图数据
 */
import { ref, reactive, toRefs, onMounted } from "vue";
import { getBannerList } from "@/api/http";
export default {
  name: "Bnaner",
  setup() {
    let banners = reactive([
      {
        imageUrl:
          "http://p1.music.126.net/U-klDW80305UEuVErdMpSw==/109951167239238686.jpg?imageView&quality=89",
      },
    ]);
    const getData = async () => {
      let { banners: res } = await getBannerList();
      banners.push(...res);
      banners.shift();
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
  width: 980px;
  display: flex;
  .el-carousel {
    width: 730px;
    height: 285px;
    margin: 0 auto;
    img {
      display: block;
      width: 730px;
      height: 285px;
    }
  }
  .downloadBox {
    width: 252px;
    height: 285px;
    background: url("~@/assets/download.png");
    position: relative;
    p {
      color: #8d8d8d;
      font-size: 12px;
      text-align: center;
      position: absolute;
      bottom: 10px;
      width: 100%;
    }
  }
}
.el-carousel {
  ::v-deep .el-carousel__indicators {
    width: 400px !important;
  }
}
</style>