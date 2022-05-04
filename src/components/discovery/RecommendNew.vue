<template>
  <div class="container">
    <div class="imgBox" ref="Box">
      <div class="box">
        <div
          class="cover"
          v-for="(item, index) in newList.slice(0, 5)"
          :key="index"
        >
          <img :src="item.picUrl" alt />
          <div class="describe">
            <p>{{ item.name }}</p>
            <p>{{ item.artist.name ?? item.artist[0].name }}</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div
          class="cover"
          v-for="(item, index) in newList.slice(5, 10)"
          :key="index"
        >
          <img :src="item.picUrl" alt />
          <div class="describe">
            <p>{{ item.name }}</p>
            <p>{{ item.artist.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <a href="javascript:void(0)" class="leftButton" @click="move"></a>
    <a href="javascript:void(0)" class="rightButton" @click="move"></a>
  </div>
</template>
<script>
/**
 *
 *@param { array } newList 新碟上架列表
 *@function getNewAlbums 拉取新碟上架数据
 *@function move 新碟上架数据改变
 */
import { getNewAlbums } from "@/api/http";
import { onMounted, reactive, ref } from "vue";
export default {
  setup() {
    let newList = reactive([]);
    let Box = ref(null)
    onMounted(async () => {
      let { albums: res } = await getNewAlbums();
      res = res.splice(0, 10);
      newList.push(...res);
      //console.log(res);
    });
    function move(){
      Box.value.append(Box.value.children[0]) 
    } 

    return {
      newList,
      move,
      Box
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 687px;
  height: 186px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  position: relative;
  .imgBox {
    width: 645px;
    height: 180px;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    padding-top: 28px;
    margin-left: 10px;
    transition: all 1s;
    .box {
      width: 645px;
      display: flex;
      .cover {
        width: 118px;
        height: 100px;
        background: url("~@/assets/coverall.png") no-repeat 0 -570px;
        margin-right: 11px;
        position: relative;
        cursor: pointer;
        img {
          width: 100px;
          height: 100px;
        }
        .describe {
          position: absolute;
          top: 110px;
          font-size: 12px;
          p {
            width: 100px;
            margin-bottom: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
        }
      }
    }
  }
  .leftButton {
    position: absolute;
    background: url("~@/assets/index.png") -260px -75px;
    top: 71px;
    width: 17px;
    height: 17px;
    left: 3px;
    z-index: 100;
  }
  .rightButton {
    position: absolute;
    background: url("~@/assets/index.png") -300px -75px;
    top: 71px;
    right: 5px;
    width: 17px;
    height: 17px;
    z-index: 100;
  }
}
</style>