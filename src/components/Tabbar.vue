<template>
    <van-tabbar route active-color="#07c160" inactive-color="#000">
        <van-tabbar-item
            v-for="(item, index) in tabs"
            :key="index"
            replace
            :to="item.path"
            :icon="item.icon"
        >
            {{item.tab}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    name: "Tabbar",
    data() {
        return {
            tabs: [
                {
                    path: "/shelf",
                    icon: "gift-card-o",
                    tab: "书架",
                },
                {
                    path: "/mall",
                    icon: "label-o",
                    tab: "书城",
                },
                {
                    path: "/sort",
                    icon: "apps-o",
                    tab: "分类",
                },
                {
                    path: "/mine",
                    icon: "contact",
                    tab: "我的",
                },
            ],
        };
    },
};
</script>

<style>
</style>