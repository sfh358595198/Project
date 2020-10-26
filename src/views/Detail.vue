<template>
  <div class="detail">
    <div class="top">
      <div class="photo">
        <img :src="item.url" alt />
      </div>
      <div class="info">
        <h4 class="title">{{item.bookname}}</h4>
        <p class="author">{{item.author}}</p>
        <p class="desc">连载 625万字 0.6书豆/千字</p>
      </div>
    </div>
    <div class="intro">
      <h5>内容简介</h5>
      <p>{{item.intro}}</p>
      <van-tag></van-tag>
      <van-cell title="最新" is-link value="第三千零四十四章    通行令" />
      <van-cell title="目录" is-link value="共3044章" />
    </div>
    <div class="comment">
      <van-cell title="评论" title-class="title1" value="写评论" value-class="green" />
      <div class="item">
        <div class="img">
          <img
            src="http://img-tailor.11222.cn/account/avatar/4b69523fd53ddfb6fe797a6904a65134@120w_120h"
            alt
          />
        </div>
        <div class="content">
          <h4>纯良由于</h4>
          <p class="word">大家希望主角的第一滴血给谁？1.田晓霞2.关童欣3.叶佳楠4.肖清雅5.顾明月，在此回复，看希望给谁的多……</p>
          <p>
            <span>2017.9.21 14:06</span>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <p class="all">查看全部评论(1924条)</p>
    </div>
    <van-cell title="相关推荐" title-class="title1" value="换一换" value-class="green" />
    <div class="bookwrap">
      <div class="book-item" v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt />
        <h5 class="shadow">{{ item.bookname }}</h5>
        <p>{{ item.author }}</p>
      </div>
    </div>
    <van-cell title="图书信息" title-class="title1" />
    <dl>
      <dt>版权来源</dt>
      <dd>书旗小说</dd>
    </dl>
    <dl>
      <dt>免责声明</dt>
      <dd>本书数字版权由原创版权提供，授权本软件使用、制作、发行，若包含不良信息，请及时告知客服。</dd>
    </dl>
    <van-cell class="operate" :title-class="content=='已加书架'?'add':''" :title="content" @click="add">
      <van-button>开始阅读</van-button>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      item: [],
      list: [],
      content: "加书架"
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.axios
      .get("http://localhost:3000/detail/" + this.$route.params.id)
      .then(res => {
        // console.log(res.data.data[0]);
        this.item = res.data.data[0];
        if (localStorage.books) {
          if (JSON.parse(localStorage.books).indexOf(this.item.id) != -1) {
            this.content = "已加书架";
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    add() {
      if (event.target.localName == "span") {
        if (this.content == "加书架") {
          if (localStorage.books) {
            // console.log(JSON.parse(localStorage.books));
            localStorage.books = JSON.stringify(
              JSON.parse(localStorage.books).concat(this.item.id)
            );
            this.content = "已加书架";
          } else {
            localStorage.setItem("books", JSON.stringify([this.item.id]));
            this.content = "已加书架";
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.detail {
  padding: 0 1.6rem;
  margin-bottom: 7rem;
}
.top {
  display: flex;
  padding: 3.2rem 0 2.4rem;
}
.top .photo {
  width: 31.8%;
  margin-right: 1.6rem;
}
.top .photo img {
  display: block;
  width: 100%;
}
.top .info {
  flex: 1;
}
.info .title {
  margin: 0.5rem 0 0;
  font-size: 1.9rem;
  color: #333;
}
.info .author {
  margin: 0.8rem 0 0;
  font-size: 1.4rem;
  color: #999;
}
.info .desc {
  margin: 6.3rem 0 0;
  font-size: 1.2rem;
  color: #999;
}
.info,
.intro,
.comment,
.comment + .van-cell,
.bookwrap + .van-cell {
  text-align: left;
}
.intro h5 {
  font-size: 1.8rem;
  color: #000;
  margin: 3rem 0 1rem;
  font-weight: 400;
}
.intro p {
  margin: 0;
  font-size: 1.4rem;
  color: #999;
  max-height: 6.6rem;
  overflow: hidden;
  line-height: 2.2rem;
  white-space: pre-wrap;
  text-overflow: ellipsis;
}
.intro .van-cell {
  padding: 1.5rem 0;
}
.intro .van-cell__title {
  width: 10rem;
  flex: none;
  font-size: 1.7rem;
  color: #333;
  font-weight: bold;
}
.comment .van-cell {
  padding: 3rem 0 1.8rem;
}
.title1 {
  font-size: 1.8rem;
  color: #000;
}
.green {
  color: #23b383;
}
.comment .item {
  display: flex;
  padding: 0.8rem 0;
}
.comment .item .img {
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
}
.img img {
  display: block;
  width: 100%;
  height: 100%;
}
.content {
  padding-left: 0.8rem;
}
.content h4 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  font-weight: 400;
}
.content .word {
  margin: 1.2rem 0 0;
  font-size: 1.4rem;
  color: #999;
}
.content p:last-child {
  margin-bottom: 0;
}
.content p span {
  font-size: 1.2rem;
  color: #999;
}
.all {
  font-size: 1.4rem;
  color: #23b383;
  text-align: center;
}
.comment + .van-cell,
.bookwrap + .van-cell {
  padding: 3rem 0 1rem;
}

dl {
  display: flex;
  margin: 0.4rem 0;
}
dt {
  width: 6.4rem;
  flex-shrink: 0;
  font-size: 1.2rem;
  color: #999;
}
dd {
  font-size: 1.2rem;
  color: #333;
  margin-left: 0.2rem;
  text-align: left;
}
.operate {
  /* width: calc(100% - 3.2rem); */
  width: 100%;
  height: 4.8rem;
  line-height: 3.6rem;
  position: fixed;
  bottom: 0;
  /* left: 1.6rem; */
  left: 0;
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid #e5e5e5;
}

.operate .van-cell__title {
  font-weight: 600;
  color: #23b383;
}
.operate .add {
  color: #999;
}
.operate .van-cell__value {
  flex: none;
}
.operate .van-button {
  width: 16.85rem;
  height: 3.6rem;
  border-radius: 0.4rem;
  background-color: #23b383;
  color: #fff;
}
</style>