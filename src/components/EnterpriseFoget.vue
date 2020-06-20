<template>
  <div class="img4login">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>企业用户找回密码</span>
      </div>
      <el-form v-if="active==0" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-ruleForm"
               :status-icon="true">
        <el-form-item prop="sid" label="输入需要找回密码的企业用户身份证号码">
          <el-input v-model="ruleForm.id" placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="输入需要找回密码账号的邮箱">
          <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="输入需要找回密码账号的电话">
          <el-input v-model="ruleForm.phone" placeholder="电话"></el-input>
        </el-form-item>
      </el-form>
      <el-form v-if="active==1" :rules="pwdrules" :model="changedpwd" ref="changedpwd" class="demo-ruleForm"
               :status-icon="true">
        <el-form-item prop="password" label="输入新密码">
          <el-input v-model="changedpwd.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword" label="再次输入新密码">
          <el-input v-model="changedpwd.repassword" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <el-steps :active="active" finish-status="success" :align-center="true">
        <el-step title="密码找回基础信息"></el-step>
        <el-step title="重置密码"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      <br>
      <br>
      <el-button style="float: right; padding: 3px 0" type="text" @click="tohome">返回首页</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "EnterpriseForget",
    data() {
      let validatePass = (rule, value, callback) => {
        if (value !== this.changedpwd.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        active: 0,
        changedpwd: {
          password: "",
          repassword: "",
        },
        ruleForm: {
          id: "",
          email: "",
          phone: "",
        },
        pwdrules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 7, max: 16, message: '密码长度必须是3-8位', trigger: 'change'}
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validatePass, trigger: 'change'}
          ],
        },
        rules: {
          id: [
            {
              min: 10,
              max: 18,
              required: true,
              message: '请正确填写你的身份证号',
              trigger: 'blur'
            },
          ],
          phone: [{
            required: true,
            pattern: /^1[34578]\d{9}$/,//可以写正则表达式呦呦呦
            message: '请正确填写手机号',
            trigger: 'blur'
          }],
          email: [{
            required: true,//是否必填
            message: '请输入邮箱地址',//错误提示信息
            trigger: 'blur'//检验方式（blur为鼠标点击其他地方，）
          },
            {
              type: 'email',//要检验的类型（number，email，date等）
              message: '请输入正确的邮箱地址',
              trigger: ['change']
            }
          ]
        }
      }
    },
    methods: {
      tohome() {
        this.$router.push({path: '/'})
      },
      next() {
        if (this.active == 0) {
          this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
              this.$axios.post('enforget', this.ruleForm).then(response => {
                if (response.data.status == 200) {
                  localStorage.clear()
                  localStorage.setItem("token", response.data.data.token);
                  localStorage.setItem("user", response.data.data.name);
                  localStorage.setItem("_id", response.data.data._id);
                  this.active += 1;
                } else {
                  this.$message({
                    message: response.data.msg,
                    type: "warning"
                  })
                }
              }).catch(
                err => {
                  this.$message({
                    message: "服务器开了个小差",
                    type: "warning"
                  })
                }
              )
            }
          })
        } else if (this.active == 1) {
          this.$refs['changedpwd'].validate((valid) => {
            if (valid) {
              this.$axios.post('enforget/changepassword', this.changedpwd).then(response => {
                if (response.data.status == 200) {
                  this.$message({
                    message: "重置密码成功，跳转至登陆页",
                    type: "success"
                  })
                  localStorage.clear()
                  this.$router.push({path: '/Login'})
                  this.active += 1;
                } else {
                  this.$message({
                    message: response.data.msg,
                    type: "warning"
                  })
                }
              }).catch(
                err => {
                  this.$message({
                    message: "服务器开了个小差",
                    type: "warning"
                  })
                }
              )
            }
          })
        }
      },
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .img4login {
    background: url('../assets/images/registebg.jpg') center top no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    /*position:absolute;*/
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 30%;
    height: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
