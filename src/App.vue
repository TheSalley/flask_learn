<template>
  <div class="discovery-container">
    <NavHeader></NavHeader>
    <router-view></router-view>
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
<style lang="css">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-drag: none;
}
#app {
  overflow-y: scroll;
}
</style>
