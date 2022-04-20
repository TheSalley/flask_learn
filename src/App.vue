<template>
  <div class="containerBox">
    <NavHeader></NavHeader>
    <div class="mainBox">
      <router-view></router-view>
    </div>   
    <Footer></Footer>
  </div>
</template>
<script>
import NavHeader from '@/components/common/NavHeader.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  name: 'App',
  components: {
    NavHeader,
    Footer
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-drag: none;
}
.mainBox{
  width: 980px;
  border: 1px solid #d3d3d3;
  border-top: 0;
  margin: 0 auto;
}
</style>
