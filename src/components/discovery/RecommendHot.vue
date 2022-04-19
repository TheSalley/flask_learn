<template>
  <div class="container">
    <ul>
      <li v-for="item in hotList" :key="item.id">
        <div class="imgBox" @click="goRecommendPlayList(item.id)">
          <img :src="item.picUrl" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @param {array} hotList - 热门推荐列表
 */
import { getHotRecommend } from "@/api/discovery";
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    let hotList = reactive([]);
    const router = useRouter()
    onMounted(async () => {
      const { result: res } = await getHotRecommend();
      //console.log(res);
      hotList.push(...res);
    });

    function goRecommendPlayList(id){
      router.push({
        name: 'PlayList',
        query: {
          id
        }
      })
    }
    return {
      hotList,
      goRecommendPlayList
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 42px;
      .imgBox {
        width: 140px;
        height: 140px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        width: 140px;
        white-space: pre-line;
      }
      &:nth-child(4),
      &:nth-child(8) {
        margin-right: 0;
      }
    }
  }
}
</style>