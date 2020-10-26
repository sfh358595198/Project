<template>
  <div class="mine">
    <div class="panel">
      <van-cell-group class="top-wrap">
        <van-cell title="登陆 / 注册" icon="user-circle-o" title-class="title" to="/login" />
      </van-cell-group>
    </div>
    <van-cell-group class="main">
      <van-cell title="我的会员" title-class="title1" is-link value="开通会员" to="/vip"/>
      <van-cell title="书豆" title-class="title1" is-link value="充值" to="/consume"/>
      <van-cell title="消费充值记录" title-class="title1" is-link to="/record"/>
      <van-cell title="购买过的书" title-class="title1" is-link to="/bought"/>
      <van-cell title="意见反馈" title-class="title1" is-link value="ID:8000000" to=""/>
    </van-cell-group>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  name: "Mine",
  components: {
        Tabbar,
    },
};
</script>

<style scoped>
.panel {
  padding: 1.2rem 1.6rem 1.6rem;
}
.top-wrap {
  height: 12.4rem;
  text-align: left;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 3rem 0;
  box-sizing: border-box;
}
.top-wrap .van-cell{
  height: 6.4rem;
  line-height: 6.4rem;
  padding: 0 1.6rem;
}
.top-wrap .van-cell .van-icon{
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  font-size: 6rem;
}
.title{
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
}
.main{
  text-align: left;
}
.main .van-cell{
  padding: 2.1rem 1.6rem;
}
.title1{
  font-size: 1.6rem;
  color: #333;
}
</style>
