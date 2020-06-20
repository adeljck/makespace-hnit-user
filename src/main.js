// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/theme/index.css'
import VueParticles from 'vue-particles'
import intro from 'intro.js'
import axios from 'axios'
import animate from 'animate.css'
import '../src/assets/theme/index.css'
import state from "./store"
import VueWechatTitle from 'vue-wechat-title'
import Vuex from 'vuex'
import global from '../static/global/global.css'

Vue.use(VueWechatTitle)
Vue.use(VueParticles);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1/";
axios.defaults.timeout = 8000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
axios.interceptors.request.use(
  config => {
    if (localStorage.token) { //判断token是否存在
      config.headers.Authorization = localStorage.token;  //将token设置成请求头
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  response => {
    if (response.data.status === -1) {
      if (localStorage.token) {
        config.headers.Authorization = localStorage.token;
      } else {
        router.replace('/login');
        this.$message.error("请登录")
      }
    } else if (response.data.status === -3) {
      router.replace('/login');
      this.$message.error("身份过期请重新登录")
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
this.$router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.requiresAuth) {
    //这里判断用户是否登录，验证本地存储是否有token
    if (!localStorage.token) { // 判断当前的token是否存在
      next('/Login')
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
});
