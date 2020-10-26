<template>
    <div class="record">
        <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="身份验证失败"
        />
    </div>
</template>

<script>
export default {
    name: "Record",
};
</script>

<style scoped>
.record{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>