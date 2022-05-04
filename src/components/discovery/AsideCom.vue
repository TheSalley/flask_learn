<template>
    <div class="container">
        <h3>{{ title }}</h3>
        <slot></slot>

    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>
<style lang="scss" scoped>
.container {
    margin-top: 15px;
    padding: 0 20px;

    h3 {
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 12px;
        font-weight: bold;
    }
}
</style>