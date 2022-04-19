<template>
  <div class="container">
    <div class="imgBox">
      <div class="box">
        <img
          :src="item.picUrl"
          alt
          v-for="(item, index) in newList.slice(0, 5)"
          :key="index"
        />
      </div>
      <div class="box">
        <img
          :src="item.picUrl"
          alt
          v-for="(item, index) in newList.slice(5, 10)"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>
<script>
/**
 *@newList 新碟上架列表
 */
import { getNewAlbums } from "@/api/discovery";
import { onMounted, reactive } from "vue";
export default {
  setup() {
    let newList = reactive([]);
    onMounted(async () => {
      let { albums: res } = await getNewAlbums();
      res = res.splice(0, 10);
      newList.push(...res);
      console.log(res);
    });
    return {
      newList,
    };
  },
};
</script>
<style lang="scss" scoped>
.imgBox {
  width: 678px;
  height: 186px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
  display: flex;
  flex-wrap: nowrap;
  // overflow: hidden;
  .box {
    width: 645px;
    height: 180px;
    display: flex;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>