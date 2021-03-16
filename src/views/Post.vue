<template>
  <main id="tt-pageContent">
    <div class="container">
      <div class="tt-single-topic-list">
        <div class="tt-item">
          <div class="tt-single-topic">
            <div class="tt-item-header">
              <div class="tt-item-info info-top">
                <div class="tt-avatar-icon">
                  <i class="tt-icon"><svg><use :xlink:href="`#icon-ava-${author.avatar}`"></use></svg></i>
                </div>
                <div class="tt-avatar-title">
                  <a href="#">{{ author.nickname }}</a>
                </div>
                <a href="#" class="tt-info-time">
                  <i class="tt-icon"><svg><use xlink:href="#icon-time"></use></svg></i>
                  {{ post.time }}
                </a>
              </div>
              <h3 class="tt-item-title">
                <a href="#">{{ post.title }}</a>
              </h3>
              <!-- <div class="tt-item-tag">
                <ul class="tt-list-badge">
                  <li>
                    <a href="#"><span class="tt-color03 tt-badge">exchange</span></a>
                  </li>
                  <li>
                    <a href="#"><span class="tt-badge">themeforest</span></a>
                  </li>
                  <li>
                    <a href="#"><span class="tt-badge">elements</span></a>
                  </li>
                </ul>
              </div> -->
            </div>
            <div class="tt-item-description">
              {{ post.text }}
            </div>
            <div class="tt-item-info info-bottom">
              <a href="#" class="tt-icon-btn">
                <i class="tt-icon"
                  ><svg><use xlink:href="#icon-like"></use></svg
                ></i>
                <span class="tt-text">{{ post.likes }}</span>
              </a>
              <a href="#" class="tt-icon-btn">
                <i class="tt-icon"
                  ><svg><use xlink:href="#icon-dislike"></use></svg
                ></i>
                <span class="tt-text">{{ post.dislikes }}</span>
              </a>
            </div>
          </div>
        </div>

        <h1 class="tt-title-border tt-offset-top-30">评论</h1>
        <div
          class="tt-item"
          v-for="(item, index) in commentList" :key="index"
        >
          <div class="tt-single-topic">
            <div class="tt-item-header pt-noborder">
              <div class="tt-item-info info-top">
                <div class="tt-avatar-icon">
                  <i class="tt-icon"><svg><use :xlink:href="`#icon-ava-${item.author.avatar}`"></use></svg></i>
                </div>
                <div class="tt-avatar-title">
                  <a href="#">{{ item.author.nickname }}</a>
                </div>
                <a href="#" class="tt-info-time">
                  <i class="tt-icon"><svg><use xlink:href="#icon-time"></use></svg></i>
                  {{ item.time }}
                </a>
              </div>
            </div>
            <div class="tt-item-description">
              <p>{{ item.text }}</p>
            </div>
            <div class="tt-item-info info-bottom">
              <a href="#" class="tt-icon-btn">
                <i class="tt-icon"><svg><use xlink:href="#icon-like"></use></svg></i>
                <span class="tt-text">{{ item.likes }}</span>
              </a>
              <a href="#" class="tt-icon-btn">
                <i class="tt-icon"><svg><use xlink:href="#icon-dislike"></use></svg></i>
                <span class="tt-text">{{ item.dislikes }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tt-wrapper-inner">
        <h4 class="tt-title-separator">
          <span>到底了</span>
        </h4>
      </div>
      <div class="tt-wrapper-inner">
        <Editor
          title="帖子内容"
          submitText="评论"
          wrapClassName="form-default"
          v-model="commentContent"
          @submit="handleEditorSubmit"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Editor from '@/components/Editor/Editor.vue';

export default {
  name: 'Post',
  components: {
    Editor,
  },
  data: () => {
    return {
      post: {},
      author: {},
      commentList: [],
      commentContent: '',
    }
  },
  computed: {
    postId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.getPostData();
  },
  methods: {
    getPostData() {
      this.$axios.get(`/api/post/${this.postId}`).then(res => {
        this.post = res.data;
        this.author = this.post.author || {};
        if (JSON.stringify(this.author) === '{}') return;
        if (this.postId === this.post.id) this.getCommentList();
      }).catch(e => {
        console.error(e);
      });
    },
    getCommentList() {
      this.commentList = [];
      this.$axios
        .get(`/api/comments`, { params: { postId: this.post.id } })
        .then(res => {
          this.commentList = res.data;
          window.scrollTo(0, 0);
        }).catch(e => {
          console.error(e);
        });
    },
    handleEditorSubmit() {
      if (this.commentContent === '') { alert('内容不能为空'); return; }
      if (!this.$store.state.isAuthorized) { alert('请先登录'); return; }
      this.$axios.post('/api/comment', {
        userId: this.$store.state.userInfo.userId,
        postId: this.post.id,
        content: this.commentContent,
      }).then(res => {
        if (res.data.data.success === true) {
          this.clearEditor();
          this.getCommentList();
        }
      }).catch(e => {
        console.error(e);
      });
    },
    clearEditor() {
      this.commentContent = '';
    }
  }
};
</script>

<style>
</style>