<template>
  <main id="tt-pageContent" class="tt-offset-none">
    <div class="container">
      <div class="tt-loginpages-wrapper">
        <div class="tt-loginpages">
          <router-link to="/" class="tt-block-title">
            <img src="../../assets/logo.png" alt="" />
            <div class="tt-title">欢迎嗷</div>
            <div class="tt-description">
              快加入我们
            </div>
          </router-link>
          <form class="form-default">
            <div class="form-group">
              <label for="loginUserName">用户名</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="loginUserName"
                placeholder="用户名"
              />
            </div>
            <div class="form-group">
              <label for="loginUserEmail">Email</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="loginUserEmail"
                placeholder="Sample@sample.com"
              />
            </div>
            <div class="form-group">
              <label for="loginUserPassword">密码</label>
              <input
                type="password"
                name="name"
                class="form-control"
                id="loginUserPassword"
                placeholder="密码"
              />
            </div>
            <div class="form-group">
              <label for="loginUserPassword">确认密码</label>
              <input
                type="password"
                name="name"
                class="form-control"
                id="loginUserPasswordConfirm"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <a href="#" class="btn btn-secondary btn-block">
                注册账号
              </a>
            </div>
            <p>
              已有账号？
              <router-link to="/login" class="tt-underline">登录</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>