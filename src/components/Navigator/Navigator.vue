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
              <a href="index.html"><img src="../../assets/logo.png" alt="" /></a>
            </div>
            <!-- /logo -->
            <!-- desctop menu -->
            <div class="tt-desktop-menu">
              <nav>
                <ul>
                  <li>
                    <router-link to="/categories" tag="a" active-class="active"><span>Categories</span></router-link>
                  <li>
                    <router-link to="/tabs" tag="a" active-class="active"><span>Trending</span></router-link>
                  </li>
                  <li>
                    <router-link to="/new" tag="a" active-class="active"><span>New</span></router-link>
                  </li>
                  <li>
                    <router-link to="/pages" tag="a" active-class="active"><span>Pages</span></router-link>
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
                    placeholder="Search"
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
          <div class="col-auto ml-auto">
            <div class="tt-account-btn">
              <a href="page-login.html" class="btn btn-primary">Log in</a>
              <a href="page-signup.html" class="btn btn-secondary">Sign up</a>
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
};
</script>

<style lang="scss">
</style>