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
          v-model="username"
          name="用户名"
          placeholder="请输入手机号"
          :rules="[{ required: true,pattern, message: '请填写手机号' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>

      <van-field
        v-model="tel"
        type="tel"
        placeholder="请输入手机号"
        clearable
        clickable
        @touchstart.native.stop="show = true"
        class="one"
        :key="'tel'"
      />
      <van-number-keyboard
        v-model="tel"
        :show="show"
        :maxlength="11"
        @blur="show = false"
        :key="1"
      />
      <van-field
        v-model="sms"
        type="number"
        placeholder="请输入验证码"
        center
        clearable
        clickable
        @touchstart.native.stop="show = true"
        class="two"
        :key="'code'"
      >
        <template #button>
          <van-button size="small" type="primary" disabled>获取验证码</van-button>
        </template>
      </van-field>
      <van-number-keyboard v-model="sms" :show="show" :maxlength="6" @blur="show = false" :key="2" />
      <div class="protocol">
        <van-checkbox v-model="checked" checked-color="#07c160" icon-size="13" />同意
        <router-link to>《阿里文学说用户服务协议》</router-link>和
        <router-link to>《隐私服务协议》</router-link>
      </div>
      <van-button type="primary" block class="btn" disabled>登录</van-button>
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
      text: "",
      sms: "",

      digit: "",
      number: "",
      password: "",
      checked: false,
      value: "",
      value1: "",
      show: false
    };
  },
  methods: {
    regis() {
      this.$router.push("/register?rtu=" + this.$route.path);
    },
    find() {
      this.$router.push("/find?rtu=" + this.$route.path);
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