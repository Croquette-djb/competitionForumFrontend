<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navigator />
    <router-view/>
    <a href="javascript:void(0)" class="tt-btn-create-topic" @click="onCreateBtnClick">
      <span class="tt-icon">
        <svg>
          <use xlink:href="#icon-create_new"></use>
        </svg>
      </span>
    </a>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator/Navigator.vue';

export default {
  components: {
    Navigator,
  },
  data: () => {
    return {

    };
  },
  methods: {
    onCreateBtnClick() {

    },
  }
}
</script>

<style>
</style>
