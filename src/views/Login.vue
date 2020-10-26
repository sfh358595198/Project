<template>
  <div class="login">
    <van-cell :border="false">
      <template #title>
        <img src="https://img-tailor.11222.cn/cms/upload/img/1584005271938icon-shuqi.png" alt />
      </template>
      <p>
        <span @click="regis">注册</span> /
        <span @click="find">找回</span>
      </p>
    </van-cell>
    <div class="main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          type="tel"
          placeholder="请输入手机号"
          clearable
          clickable
          class="one"
          :rules="[{pattern,trigger:onChange,message: '请填写正确的手机号' }]"
          @input="change"
        />
        <van-field
          v-model="sms"
          type="number"
          placeholder="请输入验证码"
          center
          clearable
          clickable
          class="two"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              :disabled="disabled"
              @click="getCode"
              :text="text"
            ></van-button>
          </template>
        </van-field>
        <div class="protocol">
          <van-checkbox v-model="checked" checked-color="#07c160" icon-size="13" />同意
          <router-link to>《阿里文学说用户服务协议》</router-link>和
          <router-link to>《隐私服务协议》</router-link>
        </div>
        <van-button type="primary" block class="btn" :disabled="show" @click="login">登录</van-button>
      </van-form>
    </div>
    <van-divider :style="{ borderColor: '#a1a1b3' }">使用以下账号可免注册</van-divider>
    <router-link to>
      <img
        class="qq_link"
        src="https://img-tailor.11222.cn/cms/upload/img/1593312939476QQ.png"
        alt="QQ登录"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tel: "",
      sms: "",
      disabled: true,
      checked: false,
      pattern: /^1([3578][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
      num: 60,
      timer: null,
      text: "获取验证码",
      random: null
    };
  },
  computed: {
    show() {
      return this.tel && this.sms && !this.checked;
    }
  },
  methods: {
    regis() {
      this.$router.push("/register?rtu=" + this.$route.path);
    },
    find() {
      this.$router.push("/find?rtu=" + this.$route.path);
    },
    onSubmit() {},
    onChange() {},
    change(val) {
      if (this.pattern.test(val)) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    getCode() {
      this.random = parseInt(Math.random() * 10000);
      this.axios({
        method: "POST",
        url: "/api/sendsms",
        data: {
          sid: "f411f31bd091f5faf16e26db54105722",
          token: "600f9f8733911517fc107c89653a6f84",
          appid: "ffed793706ae453188f4def2b189400c",
          templateid: "569456",
          param: this.random,
          mobile: this.tel,
          uid: "2d92c6132139467b989d087c84a365d8"
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      this.timer = setInterval(() => {
        this.num--;
        this.text = "重新获取（" + this.num + ")";
        if (this.num == 0) {
          clearInterval(this.timer);
          this.text = "重新获取验证码";
        }
      }, 1000);
    },
    login() {
      console.log(this.random);
      console.log(this.sms);
      if (this.sms == this.random) {
        // this.axios({
        //   method: "PUT",
        //   url: "",
        //   data: {
        //     tel: this.tel
        //   }
        // }).catch(err => {
        //   console.log(err);
        // });
        clearInterval(this.timer);
        this.$router.push("/mall");
      } else {
        console.log(1111);
      }
    }
  }
};
</script>

<style scoped>
.login {
  padding: 2rem 2rem 2rem 0;
}
.van-cell {
  padding: 0;
  margin-bottom: 1.7rem;
}
.van-cell img {
  width: 14.5rem;
  height: 3.6rem;
}
.van-cell p {
  font-size: 12px;
  line-height: 17px;
  color: #a1a1b3;
  margin: 1rem 0 0;
}
.main {
  padding-left: 2rem;
}
.van-field {
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #1d1e1f;
  background-color: #f7f7fa;
}
.one {
  padding: 1.2rem 1.3rem;
}
.two {
  padding: 0.5rem 0.5rem 0.5rem 1.3rem;
}
.protocol {
  display: flex;
  font-size: 1.2rem;
  height: 2.8rem;
  color: #a1a1b3;
  position: relative;
  align-items: center;
  margin: 1rem 0;
}
.van-checkbox {
  padding: 0.5rem 1rem 0.5rem 0;
}
.btn {
  padding: 0 1rem;
  font-size: 1.4rem;
  line-height: 4.4rem;
  background-color: #23b383;
  color: #fff;
  border-radius: 0.8rem;
}
.van-divider {
  padding: 0;
  font-size: 12px;
  color: #a1a1b3;
  margin: 10rem 0 5rem 2rem;
}
.qq_link {
  width: 4.1rem;
  height: 4.1rem;
  /* display: block; */
}
</style>