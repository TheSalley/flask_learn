<template>
    <div v-for="item in songArr" :key="item.id">
            <span @click="play(item.id)">{{item.name}}</span>
    </div>
</template>
<script>
import { getHotRecommendDetail, getSongUrl } from "@/api/http";
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import emitter from '@/utils/mitt'
export default {
  setup() {
      const songArr = reactive([])
    const route = useRoute();

    onMounted(async () => {
      const { playlist: res } = await getHotRecommendDetail(route.query.id);
      console.log(res);
      songArr.push(...res.tracks)
    });

    async function play(id){
        const {data: res} = await getSongUrl(id)
        //console.log(res[0].url)
        emitter.emit('transfer',res[0].url)
       
    }

    return {
        songArr,
        play
    };
  },
};
</script>