<template>
  <main id="tt-pageContent" class="tt-offset-small">
    <div class="container">
      <div class="tt-topic-list">
        <div class="tt-list-header">
          <div class="tt-col-topic">帖子</div>
          <div class="tt-col-category">标签</div>
          <div class="tt-col-value hide-mobile">喜欢</div>
          <div class="tt-col-value hide-mobile">评论</div>
          <div class="tt-col-value hide-mobile">浏览数</div>
          <div class="tt-col-value"></div>
        </div>
        <!-- <div class="tt-topic-alert tt-alert-default" role="alert">
          <a href="#" target="_blank">4 new posts</a> are added recently, click here to load them.
        </div> -->
        <div
          class="tt-item"
          v-for="(item, index) in postList" :key="index"
        >
          <div class="tt-col-avatar">
            <svg class="tt-icon">
              <use :xlink:href="`#icon-ava-${item.author.avatar}`"></use>
            </svg>
          </div>
          <div class="tt-col-description">
            <h6 class="tt-title">
              <router-link :to="{ name: 'Post', params: { id: item.postId }}">
                <!-- <svg class="tt-icon">
                  <use xlink:href="#icon-pinned"></use>
                </svg>
                <svg class="tt-icon">
                  <use xlink:href="#icon-locked"></use>
                </svg> -->
                {{ item.title }}
              </router-link>
            </h6>
            <div class="row align-items-center no-gutters">
              <div class="col-11">
                <ul class="tt-list-badge">
                  <!-- <li class="show-mobile">
                    <a href="#"><span class="tt-color01 tt-badge">politics</span></a>
                  </li>
                  <li>
                    <a href="#"><span class="tt-badge">contests</span></a>
                  </li>
                  <li>
                    <a href="#"><span class="tt-badge">authors</span></a>
                  </li> -->
                </ul>
              </div>
              <div class="col-1 ml-auto show-mobile">
                <div class="tt-value">{{ item.activity }}</div>
              </div>
            </div>
          </div>
          <div class="tt-col-category">
            <span class="tt-badge">--</span>
          </div>
          <div class="tt-col-value hide-mobile">{{ item.likes }}</div>
          <div class="tt-col-value tt-color-select hide-mobile">{{ item.comments }}</div>
          <div class="tt-col-value hide-mobile">{{ item.views }}</div>
          <div class="tt-col-value hide-mobile">{{ item.activity }}</div>
        </div>
        <!-- <div class="tt-item tt-item-popup">
          <div class="tt-col-avatar">
            <svg class="tt-icon">
              <use xlink:href="#icon-ava-f"></use>
            </svg>
          </div>
          <div class="tt-col-message">
            Looks like you are new here. Register for free, learn and
            contribute.
          </div>
          <div class="tt-col-btn">
            <button type="button" class="btn btn-primary">Log in</button>
            <button type="button" class="btn btn-secondary">Sign up</button>
            <button type="button" class="btn-icon">
              <svg class="tt-icon">
                <use xlink:href="#icon-cancel"></use>
              </svg>
            </button>
          </div>
        </div> -->
        <div class="tt-row-btn">
          <button type="button" class="btn-icon js-topiclist-showmore">
            <svg class="tt-icon">
              <use xlink:href="#icon-load_lore_icon"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () =>{
    return {
      postList: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios.get('/post/getAllPosts').then(res => {
        console.log(res);
        this.postList = res.data.data.postList;
      }).catch(e => {
        console.error(e);
      });
    }
  }
};
</script>
