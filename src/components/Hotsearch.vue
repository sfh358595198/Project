<template>
    <div class="hotandhistory">
        <van-cell-group title="热门搜索">
            <van-cell
                v-for="(item, index) in names"
                :key="index"
                :value="item.name"
                :to="item.path"
            />
        </van-cell-group>
        <van-cell-group title="搜索历史" v-if="1">
            <van-tag plain size="large">清空</van-tag>
            <van-cell
                v-for="(item, index) in names"
                :key="index"
                :value="item.name"
                :to="item.path"
            />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: "Hotsearch",
    data() {
        return {
            names: [
                {
                    name: "神武至尊",
                    path: "/",
                },
                {
                    name: "春日宴",
                    path: "/",
                },
                {
                    name: "神龙兵王",
                    path: "/",
                },
                {
                    name: "九转帝尊",
                    path: "/",
                },
                {
                    name: "终极教官",
                    path: "/",
                },
                {
                    name: "医妃逆天：废柴大小姐",
                    path: "/",
                },
                {
                    name: "娱乐春秋",
                    path: "/",
                },
                {
                    name: "都市之兵王归来",
                    path: "/",
                },
                {
                    name: "异界魅影逍遥",
                    path: "/",
                },
                {
                    name: "开个诊所来修仙",
                    path: "/",
                },
            ],
            arr:[]
        };
    },
};
</script>

<style scoped>
.van-cell-group__title {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
}
.van-cell-group {
    display: flex;
    flex-wrap: wrap;
}
.van-hairline--top-bottom::after {
    border: none;
    border-bottom: 1px solid #e5e5e5;
}
.van-cell {
    width: auto;
    padding: 1rem 0.8rem;
}
.van-cell::after {
    border: none;
}
.van-cell__value {
    text-align: center;
    background: #f5f5f5;
    font-size: 1.4rem;
    color: #333;
    padding: 0.6rem 1.2rem;
}
.van-tag{
    position: absolute;
    top: -30px;
    right: 0;
    color: #23b383;
    font-size: 1.6rem;
    font-weight: 600;
}
.van-tag--plain::before{
    border: none;
}
</style>