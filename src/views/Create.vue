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
                placeholder="Subject of your topic"
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
    Editor
  },

};
</script>

<style>
</style>