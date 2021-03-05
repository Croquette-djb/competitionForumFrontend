<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navigator v-if="isNavigatorVisible" />
    <router-view/>
    <!-- <a href="javascript:void(0)" class="tt-btn-create-topic" @click="onCreateBtnClick"> -->
    <router-link
      v-if="isNavigatorVisible"
      to="/create" active-class="hide"
      class="tt-btn-create-topic"
    >
      <span class="tt-icon">
        <svg>
          <use xlink:href="#icon-create_new"></use>
        </svg>
      </span>
    </router-link>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator/Navigator.vue';
const hideNavRouteName = ['Login', 'Signup'];

export default {
  components: {
    Navigator,
  },
  data: () => {
    return {
      
    };
  },
  computed: {
    isNavigatorVisible() {
      return !hideNavRouteName.includes(this.$route.name);
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tt-btn-create-topic.hide {
  display: none;
}
</style>
