<template>
  <div class="img4login">

    <!--<div style="width:350px;height:350px;position:absolute;-->
    <!--margin:auto;left:400px;right:0;top:150px;bottom:0px;-->
    <!--border:2px solid darkgrey;-->
    <!--border-radius:20px;">-->
    <div class="ndaw">
      <el-card class="kkk3">
        <div slot="header" class="clearfix" style="height: 10px">
          <span>登陆到湖南工学院创客空间</span>
        </div>
        <el-form :model="formData" :rules="rules" label-width="100px" style="margin-top: 20px;width: 90%" ref="formData"
                 :status-icon="true">
          <el-form-item label="用户名" prop="userName" style="margin-bottom: 50px;width: 300px" class="input1">
            <el-input class="input1" v-model="formData.userName" placeholder="手机号/学号"
                      style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="margin-bottom: 50px;width: 300px;" class="input1">
            <el-input class="input2" type="password" v-model="formData.password" placeholder="密码"
                      style="width: 200px;background: rgba(255,255,255,0.8)"></el-input>
          </el-form-item>
          <el-button  style="width: 50%;margin-left: 10%;background-color: #6798d8;color: white;margin-top: -20px;" @click="linkto">
            登陆
          </el-button>
        </el-form>
        <br>
            <el-button type="text" style="color:green" @click="toregiste">还没有账号?注册</el-button>
            <el-button type="text" style="color: red" @click="toforget">忘记密码</el-button>
        <el-button type="text" style="color: gray" @click="back">返回首页</el-button>
      </el-card>
    </div>
  </div>
  <!--</div>-->
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        formData: {
          userName: '',
          password: ''
        },
        rules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      linkto() {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            let _this = this;
            // console.log(this.$data.formData);
            this.$axios({
              method: 'get',
              url: '/formalTeam/login',
              params: {
                account: this.$data.formData.userName,
                password: this.$data.formData.password
              }
            }).then(function (response) {
              if (response.data === true) {
                _this.$message({
                  type: 'success',
                  message: '登录成功！'
                })
                _this.$router.push({path: '/TeamInfo', query: {id: _this.$data.formData.userName}});
              } else {
                _this.$message({
                  type: 'error',
                  message: '登录失败！请检查密码和账号是否错误'
                })
              }
            })
          }
        })

      },
      toregiste() {
        this.$router.push({path:'/Registe'})
      },
      toforget() {
        alert("forget")
      },
      back(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>
<style>
  /*@import url("//unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css");*/

  .img4login {
    background: url('../assets/images/loginbg.jpg') center top ;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    /*position:absolute;*/
  }

  /*.input1 {*/
  /*  transition: all 0.8s;*/
  /*}*/

  /*.input1:hover {*/
  /*  transform: scale(1.05);*/
  /*}*/

  .kkk3 {
    float: right;
    margin-top: 150px;
    margin-right: 100px;
    width: 25%;
    height: 40%;
  }


</style>
