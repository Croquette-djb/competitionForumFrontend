import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function getDefaultUserInfo() {
  return {
    userId: null,
    userName: '',
    nickname: '',
    avatar: '',
  };
}

export default new Vuex.Store({
  state: {
    isAuthorized: false,
    userInfo: getDefaultUserInfo(),
  },
  mutations: {
    userLogin(state, { userId, userName, nickname, avatar }) {
      state.isAuthorized = true;
      state.userInfo = {
        ...state.userInfo,
        userId,
        userName,
        nickname,
        avatar,
      };
    },
    userLogout(state) {
      state.isAuthorized = false;
      state.userInfo = getDefaultUserInfo();
    }
  },
  actions: {
  },
  modules: {
  }
})
