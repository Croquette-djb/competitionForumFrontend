<template>
  <div class="pt-editor" :class="wrapClassName">
    <h6 v-if="title" class="pt-title">{{ title }}</h6>
    <div class="pt-row" v-if="mode === 'rich'">
      <div class="col-left">
        <ul class="pt-edit-btn">
          <li v-for="(item, index) in toolbar" :key="index">
            <button type="button" class="btn-icon" @click="handleToolbar(item.name)">
              <svg class="tt-icon">
                <use :xlink:href="item.icon"></use>
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
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
    <div class="row">
      <div class="col-auto ml-md-auto">
        <a class="btn btn-secondary btn-width-lg" @click="onSubmitClick">{{ submitText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import toolbarMap from './index';

export default {
  name: 'Editor',
  props: {
    title: {
      type: String,
      default: '',
    },
    mode: { // text普通文本 rich富文本
      type: String,
      default: 'text',
    },
    value: String,
    toolbar: {
      type: Array,
      default() {
        return [];
      }
    },
    submitText: {
      type: String,
      default: '提交',
    },
    placeholder: {
      type: String,
      default: '',
    },
    wrapClassName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    }
  },
  methods: {
    handleToolbar(action) {
      console.log(action)
    },
    onSubmitClick() {
      this.$emit('submit');
    }
  }
}
</script>

<style>

</style>