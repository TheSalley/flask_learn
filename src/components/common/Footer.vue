<template>
  <footer>
    <div class="container">
      <audio ref="audioRef" controls autoplay loop></audio>
    </div>
  </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
footer{
    height: 53px;
    width: 100%;
    margin-right: 67px;
    background-color: rgba($color: #2E2E2E, $alpha: .9);
    position: fixed;
    bottom: 0;
    .container {
        width: 980px;
        margin: 0 auto;
    }
}
    
</style>