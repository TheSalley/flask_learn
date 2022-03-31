<template>
  <div>
    <!-- {{banners[0].imageUrl}} -->
    <el-carousel :interval="4000" >
      <el-carousel-item v-for="(b, index) in banners" :key="index">
        <img :src="b.imageUrl" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { reactive, onBeforeMount, toRefs, onMounted } from "vue";
import { getBannerList } from "@/api/discovery";
export default {
  name: "Banner",
  setup() {
    let banners = reactive([]);

    const getData = async () => {
      let { banners: res } = await getBannerList();
      banners.push(...res);
    };
    getData();
    console.log(banners);
    return {
      banners,
      getData,
    };
  },
};
</script>


<style lang="scss" scoped>
.el-carousel {
  width: 730px;
  height: 283px;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>