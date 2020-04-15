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
import VueWechatTitle from 'vue-wechat-title'
import global from '../static/global/global.css'
Vue.use(VueWechatTitle)
Vue.use(VueParticles);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1/"
Vue.use(ElementUI);
// axios.defaults.withCredentials=true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
this.router.beforeEach((to, from, next) => {
  if (to.meta.fifle) {
    document.title = to.meta.title
  }
  nest()
})
