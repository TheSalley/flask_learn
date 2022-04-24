<template>
  <div class="container">
     <div class="topBox">
      <div class="left">
        <img src="" alt="" />
        <h1></h1>
      </div>
      <div class="right"></div>
    </div>
    <div class="bottomBox"></div> 
  </div>
</template>
<script>
import {ref, reactive, onMounted, nextTick} from 'vue'
import { getRankListDetail } from '@/api/http'
export default {
    name: "Right",
    props:["idVal"],
    setup(props){
      let id = ref(props.idVal)
      //const idVal = props.idVal
      console.log(id.value, '---', props.idVal)
        onMounted(async ()=>{
          nextTick(()=>{
            id.value= props.idVal
          })
          console.log(id.value)
          //const res = await getRankListDetail(id.value)
        })
        return {
          id
        }
    }
}
</script>
<style lang="scss" scoped>
.topBox {
  width: 740px;
  height: 238px;
  padding: 40px;
}
</style>