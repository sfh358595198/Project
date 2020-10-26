<template>
  <div class="shelf">
    <van-search placeholder="请输入书名或作者名" @focus="onfocus" />
    <div class="main" v-if="list.length">
      <router-link v-for="(item,index) in list" :key="index" class="item" :to="'/detail/'+item.id">
        <div class="photo">
          <img :src="item.url" alt />
        </div>
        <h5 class="van-multi-ellipsis--l2">{{item.bookname}}</h5>
      </router-link>
      <div class="item">
        <router-link class="photo add" to="/mall"></router-link>
      </div>
    </div>
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="把生命浪费在美好的事物上"
      v-else
    >
      <van-button to="/mall" class="bottom-button" color="#23b383" text="去书城"></van-button>
    </van-empty>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
export default {
  name: "Shelf",
  data() {
    return {
      list: []
    };
  },
  components: {
    Tabbar
  },
  methods: {
    onfocus() {
      this.$router.push("/search?rtu=" + this.$route.path);
    }
  },
  mounted() {
    var arr = JSON.parse(localStorage.books);
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      this.axios
        .get("http://localhost:3000/add?id=" + arr[i])
        .then(res => {
          console.log(res.data.data[0]);
          this.list.push(res.data.data[0]);
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.shelf {
  position: fixed;
  width: 100%;
  height: 100%;
}
.custom-image {
  height: 100%;
  justify-content: unset;
}
.bottom-button {
  height: 3.6rem;
  width: 18.7rem;
  padding: 0 1.3rem;
  border-radius: 4px;
}
.main {
  display: flex;
  padding: 0.9rem 2.5rem;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.item {
  width: 9.2rem;
  /* padding-top: 0.8rem; */
  text-align: left;
  margin-right: 2.4rem;
}
.item:nth-child(3n){
  margin-right: 0;
}
.photo {
  width: 100%;
  height: 12.3rem;
  margin: 0.8rem 0;
}
.add {
  display: block;
  background: rgba(0, 0, 0, 0.02);
  position: relative;
}
.add::before,
.add::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 2px;
  background: #d7dbde;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 2px;
}
.add::before{
  transform: translate(-50%, -50%);
}
.add::after{
  transform: translate(-50%, -50%) rotate(90deg);
}
.photo img {
  display: block;
  width: 100%;
  height: 100%;
}
.item h5 {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.8rem;
  color: #000;
}
</style>