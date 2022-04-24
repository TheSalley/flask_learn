<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in arr" :key="index" @click="changeRank(item.id)">
        <img :src="item.coverImgUrl" alt="" />
        <div>
          <span>{{ item.name }}</span>
          <p>{{ item.updateFrequency }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * 
 * @param {string} title 标题
 * @param {array} arr 排行榜名单数据
 * @function changeRank 转变排行榜内容事件 
 */
import { ref, reactive, toRefs } from "vue";
import { useRouter } from 'vue-router'
export default {
  name: "Aside",
  props: ["arr", "title"],
  setup(props) {
    const title = ref(props.title);
    const arr = reactive(props.arr);
    const router = useRouter();
    function changeRank(id){
      router.push({
        path: '/discovery/toplist',
        query: {
          id
        }
      })
    }
    return {
      title,
      arr,
      changeRank
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: block !important;
  h3 {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun, \5b8b\4f53;
    font-weight: bold;
  }
  li {
    display: flex;
    width: 240px;
    height: 62px;
    padding: 10px 0 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #e6e6e6;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    span {
      color: #000;
      font-size: 12px;
    }
    p {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>