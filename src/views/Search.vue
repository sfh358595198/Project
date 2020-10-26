<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        clearable
        autofocus
        show-action
        placeholder="请输入书名或作者名"
        @clear="onclear"
      >
        <template #action>
          <div @click="onsearch">搜索</div>
        </template>
      </van-search>
    </form>
    <div class="main" v-show="flag">
      <div class="hot-wrap">
        <van-cell title="热门搜索" title-class="hot" :border="false" />
        <div class="hot-tags">
          <van-tag
            v-for="(item, index) in hot"
            :key="index"
            size="large"
            color="#f5f5f5"
            text-color="#333"
            @click="onsearch1(item)"
          >{{item}}</van-tag>
        </div>
      </div>
      <div class="history" v-if="tags.length">
        <van-cell
          title="搜索历史"
          title-class="hot"
          value="清空"
          value-class="clear"
          @click="clear"
          :border="false"
        />
        <div class="old-tags">
          <van-tag
            v-for="(item, index) in tags"
            :key="index"
            size="large"
            color="#f5f5f5"
            text-color="#333"
            @click="onsearch1(item)"
          >{{ item }}</van-tag>
        </div>
      </div>
    </div>
    <div class="main" v-show="!flag">
      <van-grid direction="horizontal" :column-num="1">
        <van-grid-item v-for="(item, index) in list" :key="index" :to="'/detail/'+item.id">
          <van-image :src="item.url" />
          <div class="book-info">
            <h4>{{ item.bookname }}</h4>
            <span class="author">{{ item.author }}</span>
            <p class="van-multi-ellipsis--l2">{{ item.intro }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
      hot: [
        "我不成仙",
        "校园全能高手",
        "修仙狂徒",
        "绝世剑神",
        "不死战神",
        "生死突击",
        "武道大帝",
        "雪中悍刀行",
        "天骄战纪",
        "妙手小村医"
      ],
      tags: [],
      list: [],
      flag: true
    };
  },
  methods: {
    onclear() {
      this.flag = true;
    },
    onsearch() {
      if (this.tags.indexOf(this.value) == -1) {
        this.tags.push(this.value);
      }
      this.axios
        .get("http://localhost:3000/search?key=" + this.value)
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
      this.flag = false;
      this.value = "";
    },
    onsearch1(val) {
      this.value = val;
      this.onsearch();
    },
    clear(obj) {
      if (obj.target.outerText == "清空") {
        this.tags.splice(0, this.tags.length);
      }
    }
  },
  mounted() {
    // console.log(this.$route.query.rtu);
  }
};
</script>

<style scoped>
.van-search__action,
.clear {
  font-size: 1.6rem;
  font-weight: 600;
  color: #23b383;
}
.van-search--show-action {
  padding-right: 0.8rem;
  padding-left: 1.6rem;
}
.hot-wrap {
  margin-top: 1rem;
}
.hot {
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
}
.hot-tags,
.old-tags {
  padding-left: 1.6rem;
  display: flex;
  flex-wrap: wrap;
}
.van-tag {
  margin: 0.3rem 1.2rem 1.2rem 0;
}
.van-cell {
  padding-right: 0.8rem;
}
.van-image {
  width: 7.1rem;
  height: 9.5rem;
  margin-right: 1.6rem;
  flex-shrink: 0;
}
.van-image img {
  width: 100%;
  height: 100%;
}
.van-list {
  padding: 0 1.6rem;
}
.book-info {
  text-align: left;
}
h4 {
  margin: 1.25rem 0 0.95rem;
  font-size: 1.5rem;
  color: #333;
}
span.author {
  font-size: 1.2rem;
  color: #999999;
}
p {
  margin: 0.45rem 0 1.2rem;
  font-size: 1.3rem;
  color: #999999;
}
</style>