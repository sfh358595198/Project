<template>
    <div class="consume">
        <van-cell-group :border="false">
            <van-cell
                title="请选择金额"
                title-class="title"
                class="titlebar"
                :border="false"
                value="1元=10书豆"
            />
            <van-cell
                title="10书豆"
                title-class="title1"
                value="￥1"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell
                title="60书豆"
                title-class="title1"
                value="￥6"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell
                title="100书豆"
                title-class="title1"
                value="￥10"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell
                title="120书豆"
                title-class="title1"
                value="￥12"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell
                title="300书豆"
                title-class="title1"
                value="￥30"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell
                title="2000书豆"
                title-class="title1"
                value="￥200"
                value-class="title2"
            >
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell value="￥50" value-class="title2">
                <template #title>
                    <span class="custom-title title1">500书豆</span>
                    <em>送</em>
                </template>
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
            <van-cell value="￥100" value-class="title2">
                <template #title>
                    <span class="custom-title title1">1000书豆</span>
                    <em>送</em>
                </template>
                <template #right-icon>
                    <van-button class="btn">充值</van-button>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group :border="false">
            <van-cell
                title="温馨提示"
                title-class="title"
                class="titlebar"
                :border="false"
            >
                <template #label>
                    <p>1. 充值过程可能会有延迟到账的情况，如果长时间未到账，请从“我的”“意见反馈”里进行反馈，客服人员会进行处理。</p>
                    <p>2. 点击充值，代表您已阅读过<router-link to>《用户服务》</router-link>和
                <router-link to>《隐私服务协议》</router-link></p>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: "Consume",
};
</script>

<style scoped>
.consume {
    text-align: left;
    /* padding: 0 1.6rem; */
}
.title {
    font-size: 1.8rem;
    color: #000;
}
.titlebar {
    margin-top: 0.7rem;
    padding: 2.4rem 1.6rem 1.2rem;
}
.title1,
.title2 {
    font-size: 1.7rem;
    color: #000;
}
.title2 {
    margin-right: 0.8rem;
}
.btn {
    background: #cca985;
    height: 2.7rem;
    padding: 0 1.3rem;
    border-radius: 0.4rem;
    font-size: 1.3rem;
    color: #fff;
}
.van-cell-group .van-cell + .van-cell {
    height: 5.2rem;
    line-height: 2.8rem;
}
</style>