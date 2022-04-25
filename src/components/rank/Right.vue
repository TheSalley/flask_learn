<template>
  <div class="container">
    <div class="topBox">
      <div class="left">
        <img :src="data.coverImgUrl" alt="" />
      </div>
      <div class="right">
        <div>{{ data.name }}</div>
      </div>
    </div>
    <div class="bottomBox">
      <ul>
        <li v-for="(item, index) in data.tracks" :key="index">
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, nextTick, watch, toRefs } from "vue";
import { getRankListDetail } from "@/api/http";
export default {
  name: "Right",
  props: ["idVal"],
  setup(props) {
    let topData = reactive({
      data: "",
    });
    onMounted(async () => {});
    async function getData(id) {
      const { playlist: res } = await getRankListDetail(id);
      topData.data = res;
      console.log(topData.data);
    }

    watch(
      props,
      (newV, oldV) => {
        newV.idVal && getData(newV.idVal);
      },
      { immediate: true }
    );
    return {
      ...toRefs(topData),
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: block !important;
  .topBox {
    width: 740px;
    height: 238px;
    padding: 40px;
    display: flex;
    .left {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>