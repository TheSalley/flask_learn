<template>
  <div class="container">
    <ul>
      <li v-for="item in hotList" :key="item.id">
        <div class="imgBox" @click="goRecommendPlayList(item.id)">
          <img :src="item.picUrl" alt="" />
          <div class="iconBox">
            <span class="icon_headset"></span>
            <span class="play_count">
              {{deal(item.playCount)}}
            </span>
            <span class="icon_play"></span>
          </div>
        </div>
        <p class="describe">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @param {array} hotList - 热门推荐列表
 * @function deal 播放量过滤器函数
 * @function getHotRecommend 拉取热门推荐数据函数
 * @function goRecommendPlayList 点击图片跳转到对应的推荐页
 */
import { getHotRecommend } from "@/api/http";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let hotList = reactive([]);
    const router = useRouter();
    onMounted(async () => {
      const { result: res } = await getHotRecommend();
      //console.log(res);
      hotList.push(...res);
    });
    let deal = (val)=>{
      return val > 10000 ? (val/10000).toFixed(0) + '万': val
    }
    function goRecommendPlayList(id) {
      router.push({
        name: "PlayList",
        query: {
          id,
        },
      });
    }
    return {
      hotList,
      goRecommendPlayList,
      deal
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
        position: relative;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .iconBox {
          position: absolute;
          bottom: 0;
          width: 140px;
          height: 27px;
          background-image: url("~@/assets/coverall.png");
          background-position: 0 -537px;
          color: #ccc;
          font-size: 12px;
          .icon_headset {
            float: left;
            width: 14px;
            height: 11px;
            background-image: url("~@/assets/iconall.png");
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
          }
          .play_count {
            vertical-align: -webkit-baseline-middle;
          }
          .icon_play {
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-image: url("~@/assets/iconall.png");
            background-position: 0 0;
          }
        }
      }
      p {
        width: 140px;
        white-space: pre-line;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      &:nth-child(4),
      &:nth-child(8) {
        margin-right: 0;
      }
    }
  }
}
</style>