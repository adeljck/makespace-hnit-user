<template>
  <div class="img4login">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>湖南工学院创客空间注册</span>
      </div>
      <el-form :rules="rules" :model="ruleForm" ref="ruleForm" :status-icon="true">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" clearable placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item prop="academy">
          <el-select v-model="ruleForm.academy" placeholder="院系" style="width: 100%" @change="handleChange">
            <el-option
              v-for="item in academys"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="major">
          <el-select v-model="ruleForm.major" placeholder="专业" style="width: 100%">
            <el-option
              v-for="item in majors"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="class">
          <el-input v-model="ruleForm.class" clearable placeholder="班级"></el-input>
        </el-form-item>
        <el-form-item prop="sid">
          <el-input v-model="ruleForm.sid" clearable placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item prop="date">
          <el-date-picker
            v-model="ruleForm.date"
            align="right"
            type="date"
            placeholder="入学年份"
            style="width: 100%">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" clearable placeholder="电话号码"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" clearable placeholder="邮箱"></el-input>
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
      <el-button style="float: right; padding: 3px 0" type="text" @click="toenregiste">企业用户?</el-button>
      <el-button style="float: right; padding: 3px 0" type="text" @click="login">已有账号?登陆</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.getaccademy()
    },
    name: "Registe",
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
          academy: '',
          major: '',
          class: '',
          date: '',
          sid: '',
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
          date: [{
            type: 'date',
            required: true,
            message: '请选择入学时间',
            trigger: 'change'
          }],
          academy: [{
            required: true,
            message: '请选择所在院系',
            trigger: 'change'
          }],
          major: [{
            required: true,
            message: '请填写你的专业',
            trigger: 'change'
          }],
          class: [{
            required: true,
            message: '请填写你的班级',
            trigger: 'change'
          }],
          sid: [{
            min: 11,
            max: 11,
            required: true,
            pattern: /^1\d{10}$/,//可以写正则表达式呦呦呦
            message: '请正确填写你的学号',
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
        academys: [],
        majors: [],
        loading: false,
        disabled: false,
        datas: ""
      }
    },

    methods: {
      handleChange() {
        var majors = []
        for (var i = 0, len = this.datas.length; i < len; i++) {
          if (this.datas[i].name == this.ruleForm.academy) {
            for (var k = 0, klen = this.datas[i].major.length; k < klen; k++) {
              majors.push(
                {
                  value: this.datas[i].major[k],
                  label: this.datas[i].major[k],
                }
              )
            }
          }
        }
        this.majors = majors
      },
      getaccademy() {
        this.$axios.get('academy').then(response => {
          if (response.data.status == 200) {
            this.datas = response.data.data.items
            for (var i = 0, len = this.datas.length; i < len; i++) {
              this.academys.push({
                value: this.datas[i].name,
                label: this.datas[i].name,
              })
            }
          }
        })
      },
      login() {
        this.$router.push({path: '/Login'})
      },
      toenregiste() {
        this.$router.push({path: '/EnRegiste'})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            this.disabled = true;
            this.$axios.post('registe', this.ruleForm).then(
              response => {
                if (response.data.status == 200) {
                  this.$message({
                    message: "注册成功,正在跳转至登陆页",
                    type: "success"
                  })
                  this.$router.push({path: '/Login'})
                }else{
                  this.$message({
                    message: response.data.msg,
                    type: "warning"
                  })
                }
              })
          } else {
            this.$message({
              message: "参数错误",
              type: "warning"
            })
            return false;
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
