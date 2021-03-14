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
        <div class="pt-editor form-default">
          <h6 class="pt-title">发表评论</h6>
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
            <!-- <div class="col-right tt-hidden-mobile">
              <a href="#" class="btn btn-primary">Preview</a>
            </div> -->
          </div>
          <div class="form-group">
            <textarea
              name="message"
              class="form-control"
              rows="5"
              placeholder="Lets get started"
            ></textarea>
          </div>
          <div class="pt-row">
            <div class="col-auto">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="checkBox21"
                  name="checkbox"
                  checked=""
                />
                <label for="checkBox21">
                  <span class="check"></span>
                  <span class="box"></span>
                  <span class="tt-text">Subscribe to this topic.</span>
                </label>
              </div>
            </div>
            <div class="col-auto">
              <a href="#" class="btn btn-secondary btn-width-lg">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Post',
  data: () => {
    return {
      post: {},
      author: {},
      commentList: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get(`/api/post/${this.$route.params.id}`).then(res => {
        this.post = res.data;
        this.author = this.post.author || {};
        if (JSON.stringify(this.author) === '{}') return;
        this.$axios.get(`/api/comments`).then(res => {
          this.commentList = res.data;
        });
      }).catch(e => {
        console.error(e);
      });
    }
  }
};
</script>

<style>
</style>