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
          <el-form-item label="用户名" prop="username" style="margin-bottom: 50px;width: 300px" class="input1">
            <el-input class="input1" v-model="formData.username" placeholder="邮箱"
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
          username: '',
          password: ''
        },
        rules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          username: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      linkto() {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            console.log(this.formData)
            this.$axios.post('login', this.formData).then(
              response => {
                if (response.data.status != 200){
                  console.log(response.data)
                }else{
                  this.$message({
                    message: "登陆成功,正在跳转至首页",
                    type: "success"
                  })
                  this.$router.push({path: '/'})
                  console.log(response.data)
                }
              }
            )
            this.loading = false
          } else {
            console.log('error submit!!');
            this.loading = false;
            return false;
          }
        });

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
