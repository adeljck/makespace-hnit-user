<template>
  <div class="img4login">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>企业用户注册</span>
      </div>
      <el-form :rules="rules" :model="ruleForm" ref="ruleForm" :status-icon="true">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" clearable placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item prop="sid">
          <el-input v-model="ruleForm.id" clearable placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" clearable placeholder="电话号码"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" clearable placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="academy">
          <el-select v-model="ruleForm.industry" placeholder="所属行业" style="width: 100%" @change="handleChange">
            <el-option
              v-for="item in industries"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="companycode">
          <el-input v-model="ruleForm.company" clearable placeholder="所在公司"></el-input>
        </el-form-item>
        <el-form-item prop="companycode">
          <el-input v-model="ruleForm.company_code" clearable placeholder="所在公司统一社会信用代码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" maxlength="16" auto-complete="new-password"
                    placeholder="创建密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="ruleForm.repassword" type="password" maxlength="16" auto-complete="new-password"
                    placeholder="重复密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 100%" @click="submitForm('ruleForm')" :loading="loading"
                 :disabled="disabled">点我注册
      </el-button>
      <el-button style="float: right; padding: 3px 0" type="text" @click="tohome">返回主页</el-button>
      <el-button style="float: right; padding: 3px 0" type="text" @click="login">已有账号?登陆</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.getindustry()
    },
    name: "EnterpriseRegiste",
    data() {
      let validatePass = (rule, value, callback) => {
        if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        active: 0,
        ruleForm: {
          name: '',
          industry: '',
          company_code: '',
          id: '',
          company: "",
          phone: '',
          email: '',
          password: '',
          repassword: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入你的姓名', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          company: [
            {required: true, message: '请输入你所在的企业的名称', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
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
          ],
          phone: [{
            required: true,
            pattern: /^1[34578]\d{9}$/,//可以写正则表达式呦呦呦
            message: '目前只支持中国大陆的手机号码',
            trigger: 'blur'
          }],
          industry: [{
            required: true,
            message: '请选择所在行业',
            trigger: 'change'
          }],
          company_code: [{required: true, message: '必填', trigger: 'blur'}, {
            min: 18,
            max: 18,
            message: '请输入18位统一性用代码',
            trigger: 'blur'
          }],
          id: [{
            min: 18,
            max: 18,
            required: true,
            message: '请正确填写你的身份证号码',
            trigger: 'blur'
          }],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 7, max: 16, message: '密码长度必须是3-8位', trigger: 'change'}
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validatePass, trigger: 'change'}
          ]
        },
        industries: [],
        loading: false,
        disabled: false,
      }
    },

    methods: {
      getindustry() {
        this.$axios.get('industry').then(response => {
          if (response.data.status == 200) {
            for (var i = 0, len = response.data.data.length; i < len; i++) {
              this.industries.push({
                value: response.data.data[i],
                label: response.data.data[i],
              })
            }
          }
        })
      },
      login() {
        this.$router.push({path: '/Login'})
      },
      tohome() {
        this.$router.push({path: '/'})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            this.disabled = true;
            this.$axios.post('enregiste', this.ruleForm,{timeout: 1000 *  4}).then(
              response => {
                if (response.data.status == 200) {
                  this.$message({
                    message: "注册成功,正在跳转至登陆页",
                    type: "success"
                  })
                  this.$router.push({path: '/Login'})
                } else if (response.data.status == 50001) {
                  for (var i = 0, len = response.data.data.length; i < len; i++) {
                    this.$message({
                      type: "warning",
                      message: response.data.data[i].error
                    })
                  }
                  this.loading = false
                  this.disabled = false
                } else {
                  this.$message({
                    message: "服务器开了个小差",
                    type: "warning"
                  })
                  this.loading = false
                  this.disabled = false
                }
              }).catch(
                err =>{
                  this.$message({
                    message: "服务器开了个小差",
                    type: "warning"
                  })
                  this.loading = false
                  this.disabled = false
                }
            )
          } else {
            this.$message({
              message: valid.error(),
              type: "warning"
            })
          }
        });
      }
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
    background: url('../assets/images/registebg.jpg') center top;
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
    top: 55%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
