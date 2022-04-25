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
          <div>
            <span @click="playMusic(item.id)">***</span>
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, nextTick, watch, toRefs } from "vue";
import {useRoute, onBeforeRouteUpdate} from 'vue-router'
import { getRankListDetail } from "@/api/http";
import emitter from "@/utils/mitt";
import { getSongUrl } from "@/api/http";
export default {
  name: "Right",
  props: ["idVal"],
  setup(props) {
    let topData = reactive({
      data: "",
    });
    const route = useRoute();
    onMounted(async () => {});
    async function getData(id) {
      const { playlist: res } = await getRankListDetail(id);
      topData.data = res;
      console.log(topData.data);
    }
    async function playMusic(id) {
      const { data: res } = await getSongUrl(id);
      emitter.emit("transfer", res[0].url);
    }
    watch(
      props,
      (newV, oldV) => {
        newV.idVal && getData(newV.idVal);
      },
      { immediate: true }
    );
    onBeforeRouteUpdate((to)=>{
      console.log(to.query.id)
      getData(to.query.id)
    })
    /* watch(
      route,
      (newV, oldV) => {
        /* newV.idVal && getData(newV.idVal);
        console.log(newV)
      },
      { immediate: true }
    ); */
    return {
      ...toRefs(topData),
      playMusic,
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
      margin-right: 30px;
      img {
        width: 150px;
        height: 150px;
        border: 1px solid #cccccc;
        padding: 3px;
      }
    }
  }
}
</style>