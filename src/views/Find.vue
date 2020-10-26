<template>
    <div class="register">
        <van-nav-bar
            title="找回密码"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <div class="main">
            <van-field
                v-model="tel"
                type="tel"
                placeholder="请输入手机号"
                class="one"
            />
            <van-field
                class="two"
                v-model="sms"
                center
                clearable
                placeholder="请输入验证码"
            >
                <template #button>
                    <van-button size="small" type="primary" disabled
                        >获取验证码</van-button
                    >
                </template>
            </van-field>
            <div class="protocol">
                <van-checkbox
                    v-model="checked"
                    checked-color="#07c160"
                    icon-size="13"
                />同意
                <router-link to>《阿里文学说用户服务协议》</router-link>和
                <router-link to>《隐私服务协议》</router-link>
            </div>
            <van-button type="primary" block class="btn" disabled
                >下一步</van-button
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "Find",
    methods: {
        onClickLeft() {
            this.$router.push(this.$route.query.rtu);
        },
    },
};
</script>

<style scoped>
.main {
    padding: 2rem;
}
.van-field {
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    color: #1d1e1f;
    background-color: #f7f7fa;
}
.van-cell {
    padding: 0;
    margin-bottom: 1.7rem;
}
.one {
    padding: 1.2rem 1.3rem;
}
.two {
    padding: 0.5rem 0.5rem 0.5rem 1.3rem;
}
.protocol {
    display: flex;
    font-size: 1.2rem;
    height: 2.8rem;
    color: #a1a1b3;
    position: relative;
    align-items: center;
    margin: 1rem 0;
}
.van-checkbox {
    padding: 0.5rem 1rem 0.5rem 0;
}
.btn {
    padding: 0 1rem;
    font-size: 1.4rem;
    line-height: 4.4rem;
    background-color: #23b383;
    color: #fff;
    border-radius: 0.8rem;
}
</style>