<template>
  <div class="sort">
    <van-tabs v-model="active" color="#23b383" title-active-color="#23b383" swipeable animated border>
      <van-tab title="男生">
        <div class="main">
          <router-link class="module" v-for="(item,index) in list1" :key="index" :to="'/list/'+(index+1)">
            <div class="text">
              <h5 class="title">{{item.title}}</h5>
              <p class="desc">{{item.tag}}</p>
            </div>
            <div class="photo">
              <img :src="item.url" alt="">
            </div>
          </router-link>
        </div>
      </van-tab>
      <van-tab title="女生">
        <div class="main">
          <router-link class="module" v-for="(item,index) in list2" :key="index" :to="'/list/'+(index+12)">
            <div class="text">
              <h5 class="title">{{item.title}}</h5>
              <p class="desc">{{item.tag}}</p>
            </div>
            <div class="photo">
              <img :src="item.url" alt="">
            </div>
          </router-link>
        </div>
      </van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
export default {
  name: "Sort",
  components: {
    Tabbar
  },
  data() {
    return {
      active: 0,
      list:[],
      list1:[],
      list2:[]
    };
  },
  mounted(){
    this.axios.get('http://localhost:3000/sort').then(res=>{
      this.list=this.list.concat(res.data.data)
      this.list1=this.list.filter(val=>val.typeid==1)
      this.list2=this.list.filter(val=>val.typeid==2)
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>
<style scoped>
.main{
  padding: 2.5rem 1.6rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.module{
  width: 49%;
  height: 8.8rem;
  padding: 0 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f5f5f5;
  background-color: rgba(245,245,245,0.5);
  box-sizing: border-box;
}
.text{
  text-align: left;
}
.title{
  margin: 0;
  font-size: 1.6rem;
  color: #333;
}
.desc{
  margin: 1.5rem 0 0;
  font-size: 1.2rem;
  color: #999;
}
.photo{
  width: 6.3rem;
  height: 5.45rem;
}
.photo img{
  display: block;
  width: 100%;
  height: 100%;
}


</style>
