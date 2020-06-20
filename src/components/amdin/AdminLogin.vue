<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">后台登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "AdminLogin",
    data() {
      return {
        ruleForm2: {
          username: '',
          password: ''
        },
        logining: false,
        rules2: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          username: [
            {required: true, message: '请输入账户名', trigger: 'blur'}
          ]
        }
      }

    },
    methods: {
      handleSubmit2() {
        this.$axios.post("admin/login", this.ruleForm2).then(
          response => {
            if (response.data.status == 200) {
              this.$message.success("登陆成功")
              localStorage.clear()
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("user", response.data.data.name);
              localStorage.setItem("_id", response.data.data._id);
              localStorage.setItem("role", response.data.data.role);
              this.$router.push({path:"/admin/home"})
            } else if (response.data.status == 4005)
              this.$message.warning(response.data.msg)
          }
        ).catch(
          err => {
            this.$message({
              message: "登陆失败,服务器开了个小差",
              type: "warning"
            })
          })
      },
    }
  }
</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

  }
</style>

