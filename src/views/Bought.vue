<template>
    <div class="bought">
        
    </div>
</template>

<script>
export default {
    name: "Bought",
    mounted() {
        // Toast('身份验证失败');
        // Toast.loading({
        //     message: "身份验证失败",
        //     forbidClick: true,
        // });
        this.$toast('身份验证失败');
    },
};
</script>

<style scoped>

</style>