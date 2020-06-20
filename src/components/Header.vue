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
        <el-submenu index="1" style="float: right" v-if="loginStatus">
          <template slot="title">{{user}}</template>
          <el-menu-item index="5-1" class="el-icon-user-solid" @click="tome">个人中心</el-menu-item>
          <el-menu-item index="5-2" class="el-icon-plus" v-if="role==2">项目发布</el-menu-item>
          <el-menu-item index="5-3" class="el-icon-data-line">活动发布</el-menu-item>
          <el-menu-item index="5-4" class="el-icon-delete">退出登陆</el-menu-item>
        </el-submenu>
        <el-menu-item style="float: right;" index="2" v-if="!loginStatus">
          <div>
            <i class="el-icon-bell"></i>登录
          </div>
        </el-menu-item>
        <el-menu-item style="float: right;" index="3" v-if="!loginStatus">
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
            <i class="el-icon-edit-outline"></i>企业入驻
          </div>
        </el-menu-item>
        <el-menu-item style="float: right" index="8">
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
    created() {
      this.check()
    },
    data() {
      return {
        dialogVissable: false,
        activeIndex: '0',
        loginStatus: true,
        user: "",
        role: -1
      };

    },
    methods: {
      tome() {
        this.$router.push({path: '/me'})
      },
      check() {
        this.$axios.get('token/check').then(
          response => {
            if (response.data.status == 0) {
              this.user = localStorage.user
              this.role = localStorage.role
            } else {
              this.loginStatus = false
              localStorage.clear()
            }
          }
        )
      },
      handleSelect(index) {
        switch (index) {
          case '0':
            this.$router.push({path: '/'})
          case '8':
            this.$router.push({path: '/'});
            this.check()
            break;
          case '2':
            this.$router.push({path: '/Login'});
            break;
          case '3':
            this.$router.push({path: '/Registe'});
            break;
          case '4':
            this.$router.push({path: '/Requires'});
            this.check()
            break;
          case '6':
            this.$router.push({path: '/Activities'});
            this.check()
            break;
          case '7':
            this.$router.push({path: '/EnterPriseApply'});
            this.check()
            break;
          case "5-3":
            this.$router.push({path: '/AddActivity'})
            break;
          case "5-2":
            this.$router.push({path: '/AddRequire'})
            break;
          case "5-4":
            this.$confirm('是否退出登录？', '登出', {
              confirmButtonText: '登出',
              cancelButtonText: '点错了',
              type: 'warning'
            }).then(() => {
              this.loginStatus = false
              localStorage.clear()
              this.$message({
                type: 'success',
                message: '登出成功!'
              });
              this.$router.push({path: '/'})
            })
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
