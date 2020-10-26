<template>
  <div class="list">
    <van-tabs
      v-model="active"
      color="#23b383"
      title-active-color="#23b383"
      swipeable
      animated
      @click="onclick"
    >
      <van-tab title="最新" :title-style="show1">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            loading-text="正在加载"
            finished-text="没有更多了"
            error-text="请求失败，点击重新加载"
            @load="onLoad1"
          >
            <router-link
              class="item item1"
              v-for="(item, index) in list1"
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
                  <van-tag color="#f5f5f5" text-color="#000">{{ item.tag }}</van-tag>
                </p>
              </div>
            </router-link>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="最热" :title-style="show2">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            loading-text="正在加载"
            finished-text="没有更多了"
            error-text="请求失败，点击重新加载"
            @load="onLoad2"
          >
            <router-link
              class="item item1"
              v-for="(item, index) in list2"
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
                  <van-tag color="#f5f5f5" text-color="#000">{{ item.tag }}</van-tag>
                </p>
              </div>
            </router-link>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      active: 0,
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      num: 0,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  mounted() {
    console.log(this.$route.params.index);
    this.axios
      .get("http://localhost:3000/list?term1=" + this.$route.params.index)
      .then(res => {
        this.list = res.data.data;
        console.log(this.list);
        this.list1 = this.list.filter(val => val.term2 == 1);
        this.list2 = this.list.filter(val => val.term2 == 2);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    show1() {
      return this.active == 0 ? "font-weight:bold" : "";
    },
    show2() {
      return this.active == 1 ? "font-weight:bold" : "";
    }
  },
  methods: {
    // getdata() {
    //   this.axios
    //     .get("http://localhost:3000/list?term1=" + this.$route.params.index+"&term2="+this.active+"&index="+this.num)
    //     .then(res => {
    //       this.list = res.data.data;
    //       console.log(this.list);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    onclick(name) {
      this.active = name;
    },
    onLoad1() {
      this.loading = true;
      this.list3 = this.list1.slice(this.num, 10);
      this.loading = false;
      this.num = this.num + 10;
    },
    onLoad2() {
      this.loading = true;
      this.list4 = this.list2.slice(this.num, 10);
      this.loading = false;
      this.num = this.num + 10;
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
  color: #000;
}
</style>