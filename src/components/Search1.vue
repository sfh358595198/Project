<template>
    <form action="/">
        <van-search
            v-model="value"
            placeholder="请输入书名或作者名"
            clearable
            :show-action="isShow"
            @focus="func"
            @blur="func"
        >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>
    </form>
</template>

<script>
export default {
    name: "Search",
    data(){
        return {
             value: "",
             isShow:false
        }
    },
    methods:{
        // onfocus(){
        //     this.isShow=true
        //     this.$emit('focus',this.isShow)
        // },
        // onblur(){
        //     this.isShow=false
        //     this.$emit('blur',this.isShow)
        // },
        func(){
            this.isShow=!this.isShow
            this.$emit('event',this.isShow)
        },
        onSearch(){
            console.log(111);
        }
    }
};
</script>

<style scoped>
.van-search__action {
    color: #23b383;
    font-size: 1.6rem;
    font-weight: 600;
}
</style>