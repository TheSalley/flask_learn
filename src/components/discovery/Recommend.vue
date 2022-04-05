<template>
  <div class="container">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>
    <div class="body">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Recommend",
  props: ["title"],
  setup(props) {
    let title = ref(props.title);
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 689px;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  position: relative;
  h3 {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 33px;
    &::before {
      content: "";
      position: absolute;
      left: 0px;
      width: 34px;
      height: 33px;
      background: url("@/assets/index.png") no-repeat;
      background-position: -225px -156px;
    }
  }
}
.body {
    width: 689px;
    margin: 20px 0 37px 0;
}
</style>