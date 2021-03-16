import axios from 'axios';

const devAPIUrl = 'http://localhost:8081';
const prodAPIUrl = '';
const mockAPIUrl = '';
const baseAPIUrl = 
  Object.is(process.env.NODE_ENV, 'production') ? prodAPIUrl :
  Object.is(process.env.VUE_APP_IS_MOCK, 'true') ? mockAPIUrl : devAPIUrl;

axios.defaults.withCredentials = true;

const ax = axios.create({
  baseURL: baseAPIUrl,
});

export default {
  install(Vue, options) {
    Vue.prototype.$axios = ax;
  }
}