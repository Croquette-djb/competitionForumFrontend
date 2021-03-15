<template>
  <main id="tt-pageContent" class="tt-offset-none">
    <div class="container">
      <div class="tt-loginpages-wrapper">
        <div class="tt-loginpages">
          <router-link to="/" class="tt-block-title">
            <img src="../../assets/logo.png" alt="" />
            <div class="tt-title">欢迎嗷</div>
            <div class="tt-description">登录火速冲了</div>
          </router-link>
          <form class="form-default">
            <div class="form-group">
              <label for="loginUserName">用户名</label>
              <input
                v-model="loginUserName"
                type="text"
                name="name"
                class="form-control"
                id="loginUserName"
                placeholder="用户名"
              />
            </div>
            <div class="form-group">
              <label for="loginUserPassword">密码</label>
              <input
                v-model="loginPassword"
                type="password"
                name="name"
                class="form-control"
                id="loginUserPassword"
                placeholder="密码"
              />
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <div class="checkbox-group">
                    <input
                      type="checkbox"
                      id="settingsCheckBox01"
                      name="checkbox"
                    />
                    <label for="settingsCheckBox01">
                      <span class="check"></span>
                      <span class="box"></span>
                      <span class="tt-text">记住账号</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col ml-auto text-right">
                <a href="#" class="tt-underline">忘记密码？</a>
              </div>
            </div>
            <div class="form-group">
              <a class="btn btn-secondary btn-block" @click="loginMethod">登录</a>
            </div>
            <p>
              还没有账号？
              <router-link to="/signup" class="tt-underline">注册</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loginUserName: "",
      loginPassword: "",
    };
  },
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized;
    }
  },
  methods: {
    loginMethod: function () {
      if (this.loginUserName !== "" && this.loginPassword !== "" && !this.isAuthorized) {
        this.$axios
          .post("/api/login", {
            userName: this.loginUserName,
            password: this.loginPassword,
          }).then((response) => {
            if (response.data.success == true) {
              this.$store.commit('userLogin', response.data.data.user);
              this.$router.push("/");
            }
          }).catch((error) => {
            console.log(error);
          });
      } else alert("有未填信息");
    },
  },
};
</script>
<style>
</style>