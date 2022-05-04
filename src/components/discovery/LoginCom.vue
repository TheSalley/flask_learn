<template>
    <div class="container">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <button>用户登录</button>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container {
    width: 250px;
    height: 126px;
    background: url('@/assets/index.png') no-repeat 0 0px;

    p {
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        
        font-size: 12px;
    }

    button {
        outline: none;
        border: none;
        margin: 0 auto;
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background: url('@/assets/index.png') no-repeat 0 -195px;
    }
}
</style>