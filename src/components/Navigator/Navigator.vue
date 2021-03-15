<template>
  <div>
    <!-- tt-mobile menu -->
    <nav class="panel-menu" id="mobile-menu">
      <ul></ul>
      <div class="mm-navbtn-names">
        <div class="mm-closebtn">
          Close
          <div class="tt-icon">
            <svg>
              <use xlink:href="#icon-cancel"></use>
            </svg>
          </div>
        </div>
        <div class="mm-backbtn">Back</div>
      </div>
    </nav>
    <header id="tt-header">
      <div class="container">
        <div class="row tt-row no-gutters">
          <div class="col-auto">
            <!-- toggle mobile menu -->
            <a class="toggle-mobile-menu" href="#">
              <svg class="tt-icon">
                <use xlink:href="#icon-menu_icon"></use>
              </svg>
            </a>
            <!-- /toggle mobile menu -->
            <!-- logo -->
            <div class="tt-logo">
              <router-link to="/"><img src="../../assets/logo.png" alt="" /></router-link>
            </div>
            <!-- /logo -->
            <!-- desctop menu -->
            <div class="tt-desktop-menu">
              <nav>
                <ul>
                  <!-- <li>
                    <router-link to="/categories" active-class="active"><span>Categories</span></router-link>
                  <li>
                    <router-link to="/tabs" active-class="active"><span>Trending</span></router-link>
                  </li>
                  <li>
                    <router-link to="/new" active-class="active"><span>New</span></router-link>
                  </li>
                  <li>
                    <router-link to="/pages" active-class="active"><span>Pages</span></router-link>
                  </li> -->
                  <li>
                    <router-link to="/" active-class="active" exact><span>首页</span></router-link>
                  </li>
                  <li>
                    <router-link to="/about" active-class="active" exact><span>关于</span></router-link>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- /desctop menu -->
            <!-- tt-search -->
            <div class="tt-search">
              <!-- toggle -->
              <button
                class="tt-search-toggle"
                data-toggle="modal"
                data-target="#modalAdvancedSearch"
              >
                <svg class="tt-icon">
                  <use xlink:href="#icon-search"></use>
                </svg>
              </button>
              <!-- /toggle -->
              <form class="search-wrapper">
                <div class="search-form">
                  <input
                    type="text"
                    class="tt-search__input"
                    placeholder="搜索"
                  />
                  <button class="tt-search__btn" type="submit">
                    <svg class="tt-icon">
                      <use xlink:href="#icon-search"></use>
                    </svg>
                  </button>
                  <button class="tt-search__close">
                    <svg class="tt-icon">
                      <use xlink:href="#cancel"></use>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <!-- /tt-search -->
          </div>
          <div class="col-auto ml-auto" @mouseover="onUserInfoHover" @mouseleave="onUserInfoLeave">
            <div v-if="!isAuthorized" class="tt-account-btn">
              <router-link to="/login" class="btn btn-primary">登录</router-link>
              <router-link to="/signup" class="btn btn-secondary">注册</router-link>
            </div>
            <div v-else class="tt-user-info d-flex justify-content-center">
              <div class="tt-avatar-icon tt-size-md">
                <i class="tt-icon"><svg><use :xlink:href="`#icon-ava-${userInfo.avatar}`"></use></svg></i>
              </div>
              <div class="tt-user-info-nickname">
                {{ userInfo.nickname }}
              </div>
            </div>
            <div v-if="isAuthorized" v-show="isPanelVisible" class="tt-user-info-panel">
              <a href="javascript:void(0);" @click="onLogoutClick">退出登录</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      isPanelVisible: false,
      panelVisibleTimer: null,
    }
  },
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    onLogoutClick() {
      this.$store.commit('userLogout');
    },
    onUserInfoHover() {
      clearTimeout(this.panelVisibleTimer);
      this.isPanelVisible = true;
    },
    onUserInfoLeave() {
      var _this = this;
      clearTimeout(this.panelVisibleTimer);
      this.panelVisibleTimer = setTimeout(function () {
        _this.isPanelVisible = false;
      }, 100);
    }
  }
};
</script>

<style lang="scss">
.tt-user-info {
  cursor: pointer;

  &-nickname {
    line-height: 40px;
    margin-left: 14px !important;
  }
  &:hover &-nickname {
    color: #2172cd;
  }
  &-panel {
    position: absolute;
    top: 70px;
    padding: 12px;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0,0,0,.2);

    a {
      color: black;
    }
  }
}
</style>