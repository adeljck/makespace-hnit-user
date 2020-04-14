<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">
          <svg style="height: 60px;width: 400px;">
            <!-- Symbol-->
            <symbol id="s-text">
              <text style="font-size:40px;" text-anchor="middle" x="50%" y="50%" dy=".35em">湖南工学院创客空间</text>
            </symbol>
            <!-- Duplicate symbols-->
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
          </svg>
        </el-menu-item>
        <el-submenu index="1" style="float: right" v-if="isLogin">
          <template slot="title">我的</template>
          <el-menu-item index="5-1" class="el-icon-user-solid">个人中心</el-menu-item>
          <el-menu-item index="5-2" class="el-icon-baseball">创建团队</el-menu-item>
          <el-menu-item index="5-3" class="el-icon-delete">退出登陆</el-menu-item>
        </el-submenu>
        <el-menu-item style="float: right;" index="2" v-if="!isLogin">
          <div>
            <i class="el-icon-bell"></i>登录
          </div>
        </el-menu-item>
        <el-menu-item style="float: right;" index="3" v-if="!isLogin">
          <div>
            <i class="el-icon-bell"></i>注册
          </div>
        </el-menu-item>
        <el-menu-item style="float: right;" index="4">
          <div>
            <i class="el-icon-bell"></i>需求大厅
          </div>
        </el-menu-item>
        <el-menu-item style="float: right" index="6">
          <div>
            <i class="el-icon-news"></i>活动
          </div>
        </el-menu-item>
        <el-menu-item style="float: right" index="7">
          <div>
            <i class="el-icon-edit-outline"></i>加入团队
          </div>
        </el-menu-item>
        <el-menu-item style="float: right" index="8">
          <div>
            <i class="el-icon-edit-outline"></i>企业入驻
          </div>
        </el-menu-item>
        <el-menu-item style="float: right" index="9">
          <div>
            <i class="el-icon-s-home"></i>首页
          </div>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
  export default {
    name: "Header",
    data() {
      return {
        isLogin: false,
        activeIndex: '0',
      };

    },
    methods: {
      back() {
        this.$router.push({path: '/'})
      },
      ApplyNow() {
        this.$router.push({path: '/NewApply'})
      },
      logout() {
        this.isLogin = false
      },
      handleSelect(index) {
        console.log(index)
        switch (index) {
          case '0':
          case '9':
            this.$router.push({path: '/'});
            break;
          case '2':
            this.$router.push({path: '/Login'});
            break;
          case '3':
            this.$router.push({path: '/Registe'});
            break;
          case '4':
            this.$router.push({path: '/Require'});
            break;
          case '6':
            this.$router.push({path: '/Activity'});
            break;
          case '8':
            this.$router.push({path: '/EnterPriseApply'});
            break;
          case '7':
            this.$data.visible = false;
            this.$router.push({path: '/JoinTeam'});
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #545E6A;
    color: #F6F6F6;
    line-height: 60px;

    justify-content: center;
    align-items: center;
  }

  html, body, .el-header {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }

  .text {
    fill: none;
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-dasharray: 70;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }

  .text:nth-child(5n + 1) {
    stroke: #2a5caa;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }

  .text:nth-child(5n + 2) {
    stroke: #5d76ba;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }

  .text:nth-child(5n + 3) {
    stroke: greenyellow;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }

  .text:nth-child(5n + 4) {
    stroke: #3d91cc;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }

  .text:nth-child(5n + 5) {
    stroke: cornflowerblue;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }


  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }


  svg {
    position: absolute;
    width: 600px;
    /*height: 100%;*/
  }
</style>
