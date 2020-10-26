<template>
  <div class="male">
    <div class="wrap">
      <van-cell
        title="主编力荐"
        title-class="title"
        icon="https://img-tailor.11222.cn/cms/upload/img/15828967887629649583ce3b22d5c488f4fa54a32a50a.png"
      >
        <template #right-icon>
          <span class="cut">换一换</span>
          <img class="new" src="https://img-tailor.11222.cn/cms/upload/img/15815778019306.png" alt />
        </template>
      </van-cell>
      <div class="content">
        <router-link
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :to="'/detail/'+item.id"
        >
          <img :src="item.url" alt />
          <h5 class="shadow">{{ item.bookname }}</h5>
          <p>{{ item.author }}</p>
        </router-link>
      </div>
    </div>

    <div class="wrap">
      <van-cell
        title="男生新书"
        title-class="title"
        icon="https://img-tailor.11222.cn/cms/upload/img/15828967887629649583ce3b22d5c488f4fa54a32a50a.png"
      >
        <template #right-icon>
          <span class="cut">换一换</span>
          <img class="new" src="https://img-tailor.11222.cn/cms/upload/img/15815778019306.png" alt />
        </template>
      </van-cell>
      <div class="content">
        <router-link
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :to="'/detail/'+item.id"
        >
          <img :src="item.url" alt />
          <h5 class="shadow">{{ item.bookname }}</h5>
          <p>{{ item.author }}</p>
        </router-link>
      </div>
    </div>
    <div class="wrap">
      <van-cell
        title="猜你喜欢"
        title-class="title"
        icon="https://img-tailor.11222.cn/cms/upload/img/15828967887629649583ce3b22d5c488f4fa54a32a50a.png"
      >
        <template #right-icon>
          <span class="cut">换一换</span>
          <img class="new" src="https://img-tailor.11222.cn/cms/upload/img/15815778019306.png" alt />
        </template>
      </van-cell>
      <div class="content">
        <router-link
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :to="'/detail/'+item.id"
        >
          <img :src="item.url" alt />
          <h5 class="shadow">{{ item.bookname }}</h5>
          <p>{{ item.author }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Male",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/list1?index=0")
      .then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.male {
  text-align: left;
}
.title {
  font-size: 1.6rem;
  color: #404047;
}
.cut {
  color: #404047;
}
.new {
  width: 1.8rem;
  height: 1.8rem;
  display: block;
  margin: 0.3rem 0 0.3rem 0.2rem;
}
.content {
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content .item,
.photo {
  width: 31.8%;
}

.item img {
  width: 100%;
  display: block;
}
.item h5 {
  margin: 0.8rem 0 0.4rem;
  font-size: 1.3rem;
  color: #000000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item p {
  margin: 0;
  font-size: 1.2rem;
  color: #999;
}
</style>