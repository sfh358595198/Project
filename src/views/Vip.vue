<template>
  <div class="vip">
    <van-grid :border="false">
      <van-grid-item class="photo1">
        <img src="@/assets/user.png" />
      </van-grid-item>
      <van-cell-group :border="false">
        <van-cell title="西伯利亚狼" :border="false" class="title" title-class="title1" />
        <van-cell
          title="开通会员，海量小说免费读"
          icon="@/assets/vip.png"
          :border="false"
          class="desc2"
          title-class="desc1"
        />
      </van-cell-group>
    </van-grid>
    <div class="status-wrap">
      <van-cell
        title="尚未开通会员"
        title-class="title2"
        is-link
        value="立即开通"
        value-class="todo"
        size="large"
        class="status"
      />
    </div>

    <van-cell
      title="会员权益"
      title-class="title3"
      value="全部特权"
      value-class="special"
      size="large"
      :border="false"
    />
    <van-grid :border="false">
      <van-grid-item icon="photo-o" text="包月书库" />
      <van-grid-item icon="photo-o" text="购买折扣" />
      <van-grid-item icon="photo-o" text="尊贵身份" />
      <van-grid-item icon="photo-o" text="超级特权" />
    </van-grid>
    <van-cell title="为你推荐" title-class="title5" value="换一换" value-class="turn" class="title4" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        loading-text="正在加载"
        finished-text="没有更多了"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <router-link
          class="item item1"
          v-for="(item, index) in list"
          :key="index"
          :to="'/detail/'+item.id"
        >
          <div class="photo">
            <img :src="item.url" alt />
          </div>
          <div class="info">
            <h5>{{ item.bookname }}</h5>
            <p class="desc">{{ item.intro }}</p>
            <p class="other">
              {{ item.author }}
              <van-tag color="#f5f5f5" text-color="#000">
                {{
                item.tag
                }}
              </van-tag>
            </p>
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "Vip",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  mounted() {},
  methods: {
    onLoad() {
      this.axios
        .get("http://localhost:3000/list1?index=0")
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
          this.loading = false;
          if (this.list.length >= 10) {
            this.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRefresh() {
      // 清空列表数据
      // this.finished = false;
      // // 重新加载数据
      // // 将 loading 设置为 true，表示处于加载状态
      // this.loading = true;
      // this.onLoad();
    }
  }
};
</script>

<style scoped>
.vip {
  text-align: left;
}
.van-grid {
  padding: 1.6rem;
}
.photo1 {
  width: 6rem;
  height: 6rem;
  flex-basis: unset !important;
}
.photo1 img {
  display: block;
  width: 100%;
  height: 100%;
}
.van-grid .van-cell {
  flex: 1;
  text-align: left;
}
.title {
  padding: 0.7rem 1.6rem 0.5rem;
}
.title1 {
  font-size: 15px;
  color: #000000;
  line-height: 17px;
  height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
  word-wrap: break-word;
  display: -webkit-box;
}
.desc2 {
  padding: 0 1.6rem;
}
.desc1 {
  font-size: 13px;
  /* line-height: 16px; */
  color: #cca985;
}
.status-wrap {
  padding: 0.8rem 1.6rem 0;
  margin-bottom: 1.75rem;
  background: linear-gradient(#fff, #e6e6e6);
}
.status {
  height: 5.2rem;
  line-height: 2.8rem;
  background: url(https://render-resource.11222.cn/public/shuqi-miniapp-web/app/vip-none.png?8f89d3a…)
    no-repeat;
  background-position: 0 0;
  background-size: cover;
  border-radius: 10px 10px 0 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.title2 {
  font-size: 1.7rem;
  color: #fff;
  font-weight: bold;
}
.todo,
.status .van-icon {
  color: #fff;
  font-size: 1.3rem;
}
.status .van-icon {
  margin-left: 0;
  line-height: 3rem;
}
.title3 {
  font-size: 1.8rem;
  color: #000000;
}
.special {
  color: #cca985;
  font-weight: bold;
}
.title4 {
  margin-top: 1.2rem;
}
.title5 {
  font-size: 1.8rem;
  color: #000000;
}
.turn {
  color: #cca985;
}
.van-list {
  text-align: left;
  padding: 1rem 1.6rem;
}
.item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0;
}
.photo {
  width: 31.8%;
  height: 14.55rem;
}
.info {
  flex: 1;
  padding-left: 1.2rem;
}
.photo img {
  display: block;
  width: 100%;
  height: 100%;
}
.info h5 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
}
.info .desc {
  font-size: 1.3rem;
  line-height: 2rem;
  height: 4rem;
  margin: 1.5rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999;
}
.info .other {
  height: 2rem;
  line-height: 2rem;
  font-size: 1.4rem;
  padding-top: 2.5rem;
  margin: 0;
  color: #999;
}
.van-tag {
  float: right;
}
</style>