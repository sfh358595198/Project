<template>
  <div class="mall">
    <van-search placeholder="请输入书名或作者名" @focus="onfocus" />
    <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="value in 3" :key="value">
        <img src="https://img95.699pic.com/photo/40084/0578.jpg_wh860.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid column-num="2" :border="false">
      <van-grid-item icon="failure" text="女生" to="/female" />
      <van-grid-item icon="completed" text="男生" to="/male" />
    </van-grid>
    <div class="main">
      <div class="module">
        <van-cell title="男频主编推荐" title-class="title" />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[0]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5 class="shadow">{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
      <div class="module">
        <van-cell title="女频主编推荐" title-class="title" />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[1]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5 class="shadow">{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
      <div class="module">
        <van-cell title="男生爽文" title-class="title" value="换一换" value-class="turn" @click="turn(3)" />
        <div class="content content1">
          <router-link
            class="item item1"
            v-for="(item, index) in arr[2]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <div class="photo">
              <img :src="item.url" alt />
            </div>
            <div class="info">
              <h5>{{ item.bookname }}</h5>
              <p class="desc">{{ item.desc }}</p>
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
        </div>
      </div>
      <div class="module">
        <van-cell title="女生畅销" title-class="title" value="换一换" value-class="turn" @click="turn(4)" />
        <div class="content content1">
          <router-link
            class="item item1"
            v-for="(item, index) in arr[3]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <div class="photo">
              <img :src="item.url" alt />
            </div>
            <div class="info">
              <h5>{{ item.bookname }}</h5>
              <p class="desc">{{ item.desc }}</p>
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
        </div>
      </div>
      <div class="module">
        <van-cell
          title="男频最新爆款"
          title-class="title"
          value="换一换"
          value-class="turn"
          @click="turn(5)"
        />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[4]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5>{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
      <div class="module">
        <van-cell
          title="女频最新红文"
          title-class="title"
          value="换一换"
          value-class="turn"
          @click="turn(6)"
        />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[5]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5>{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
      <div class="module">
        <van-cell
          title="男频完结精品"
          title-class="title"
          value="换一换"
          value-class="turn"
          @click="turn(7)"
        />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[6]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5>{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
      <div class="module">
        <van-cell title="女生精品完结" title-class="title" />
        <div class="content">
          <router-link
            class="item"
            v-for="(item, index) in arr[7]"
            :key="index"
            :to="'/detail/'+(index+1)"
          >
            <img :src="item.url" alt />
            <h5>{{ item.bookname }}</h5>
            <p>{{ item.author }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <van-divider>阿里文学出品</van-divider>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  name: "Mall",
  components: {
    Tabbar
  },
  data() {
    return {
      list: [],
      arr: []
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/mall")
      .then(res => {
        this.list = this.list.concat(res.data.data);
        for (var i = 1; i < 9; i++) {
          this.arr.push(this.random(i));
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onfocus() {
      this.$router.push("/search?rtu=" + this.$route.path);
    },
    random(num) {
      var arr = this.list.filter(val => val.typeid == num);
      var arr1 = [];
      var arr2 = [];
      for (var i = 0; i < 3; i++) {
        var num1 = Math.floor(Math.random() * arr.length);
        if (arr1.indexOf(num1) == -1) {
          arr1.push(num1);
          arr2.push(arr[arr1[i]]);
        } else {
          i--;
        }
      }
      return arr2;
    },
    turn(i) {
      if(event.target.localName=='span'){
        this.arr.splice(i - 1, 1, this.random(i));
      }
    }
  }
};
</script>

<style scoped>
.van-swipe-item img {
  width: 100%;
}
.van-grid {
  padding: 1rem 2.5rem 0;
}
.module {
  text-align: left;
}
.module .van-cell {
  margin: 2rem 0 0.8rem;
}
.module .van-cell::after {
  border: none;
}
.title {
  font-size: 1.8rem;
  color: #000;
  font-weight: 500;
}
.turn {
  font-size: 1.4rem;
  color: #23b383;
}
.content {
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
}
.content1 {
  flex-direction: column;
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
.item .shadow {
  text-shadow: 0.125px 0.125px 0 #333, -0.125px 0.125px 0 #333,
    0.125px -0.125px 0 #333, -0.125px -0.125px 0 #333;
}
.item p {
  margin: 0;
  font-size: 1.2rem;
  color: #999;
}
.content1 .item1 {
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  /* align-items: center; */
}
.info {
  flex: 1;
  padding-left: 1.2rem;
}
.info h5 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
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
}
.info .other {
  height: 2rem;
  line-height: 2rem;
  font-size: 1.4rem;
  padding-top: 2.5rem;
}
.van-tag {
  float: right;
}
</style>