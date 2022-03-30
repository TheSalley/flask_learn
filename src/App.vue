<template>
  <div class="discovery-container">
    <NavHeader></NavHeader>
    <router-view></router-view>
  </div>
</template>
<script>
import NavHeader from '@/components/common/NavHeader.vue'
export default {
  name: 'App',
  components: {
    NavHeader
  }
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}
</style>
