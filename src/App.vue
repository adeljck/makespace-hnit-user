<template>
  <div id="app" >
    <div v-if="this.$route.meta.header">
      <Header/>
    </div>
    <transition name="fade">
      <router-view v-wechat-title='$route.meta.title'></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {Header},
    name: 'App',
    // mounted() {
    //   // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    //   window.onbeforeunload = function (e) {
    //     var storage = window.localStorage;
    //     storage.clear()
    //   }
    // }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  /* 为对应的路由跳转时设置动画效果 */
  .fade-enter-active, .fade-leave-avtive {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
