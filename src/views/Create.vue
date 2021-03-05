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
          <div class="pt-editor">
            <h6 class="pt-title">帖子内容</h6>
            <div class="pt-row">
              <div class="col-left">
                <ul class="pt-edit-btn">
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-quote"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-bold"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-italic"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-share_topic"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-blockquote"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-performatted"></use>
                      </svg>
                    </button>
                  </li>
                  <li class="hr"></li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-upload_files"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-bullet_list"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-heading"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-horizontal_line"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-emoticon"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-settings"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn-icon">
                      <svg class="tt-icon">
                        <use xlink:href="#icon-color_picker"></use>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="form-group">
              <textarea
                name="message"
                class="form-control"
                rows="5"
                placeholder="Lets get started"
              ></textarea>
            </div>
            <!-- <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="inputTopicTitle">Category</label>
                  <select class="form-control">
                    <option value="Select">Select</option>
                    <option value="Value 01">Value 01</option>
                    <option value="Value 02">Value 02</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <label for="inputTopicTags">Tags</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="inputTopicTags"
                    placeholder="Use comma to separate tags"
                  />
                </div>
              </div>
            </div> -->
            <div class="row">
              <div class="col-auto ml-md-auto">
                <a href="#" class="btn btn-secondary btn-width-lg">发布</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
};
</script>

<style>
</style>