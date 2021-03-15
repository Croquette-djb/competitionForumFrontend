<template>
  <main id="tt-pageContent">
    <div class="container">
      <div class="tt-wrapper-inner">
        <h1 class="tt-title-border">发布新帖子</h1>
        <form class="form-default form-create-topic">
          <div class="form-group">
            <label for="inputTopicTitle">标题</label>
            <div class="tt-value-wrapper">
              <input
                type="text"
                name="name"
                class="form-control"
                id="inputTopicTitle"
                placeholder="输入标题"
                v-model="postTitle"
              />
              <span class="tt-value-input">99</span>
            </div>
            <div class="tt-note">
              Describe your topic well, while keeping the subject as short as
              possible.
            </div>
          </div>
          <Editor
            title="帖子内容"
            submitText="发布"
            @submit="handleEditorSubmit"
            v-model="postContent"
          />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Editor from '@/components/Editor/Editor.vue'

export default {
  components: {
    Editor,
  },
  data() {
    return {
      postTitle: '',
      postContent: '',
    }
  },
  methods: {
    handleEditorSubmit() {
      if (this.postTitle === '') { alert('标题不能为空'); return; }
      if (this.postContent === '') { alert('内容不能为空'); return; }
      if (!this.$store.state.isAuthorized) { alert('请先登录'); return; }
      this.$axios.post('/api/post', {
        userId: this.$store.state.userInfo.userId,
        title: this.postTitle,
        content: this.postContent,
      }).then(res => {
        console.log('res: ', res);
        this.$router.push('/');
      }).catch(e => {
        console.error(e);
      })
    }
  }
};
</script>

<style>
</style>