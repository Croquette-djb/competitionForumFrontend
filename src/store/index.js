import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthorized: false,
    userInfo: {
      userId: null,
      userName: '',
      nickname: ''
    }
  },
  mutations: {
    userLogin(state, { user }) {
      state.isAuthorized = true;
      state.userInfo = user;
    },
    userLogout(state) {
      state.isAuthorized = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
