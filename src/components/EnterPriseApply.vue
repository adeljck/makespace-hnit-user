<template>
  <div class="img4login">
    <div class="title">
      <span style="font-size: 40px;font-weight: bold;">入驻申请表</span>
    </div>
    <div>
      <el-card style="background-color: transparent;">
        <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="80px"
                 :status-icon="true">
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.name" clearable placeholder="企业名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="site">
                <el-input v-model="submitForm.site" clearable placeholder="企业官网"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="legal">
                <el-input v-model="submitForm.legal" clearable placeholder="申请人姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="legalid">
                <el-input v-model="submitForm.legalid" clearable placeholder="申请人身份证"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="phone">
                <el-input v-model="submitForm.phone" clearable placeholder="公司电话"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="email">
                <el-input v-model="submitForm.email" clearable placeholder="公司邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">

            <el-col :span="12" :pull="1">
              <el-form-item prop="industry">
                <el-select v-model="submitForm.industry" placeholder="所属行业"
                           style="width: 100%">
                  <el-option
                    v-for="item in industries"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="date">
                <el-date-picker
                  v-model="submitForm.date"
                  type="date"
                  placeholder="创立日期"
                  style="width: 100%">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :pull="1">
              <el-form-item prop="companycode">
                <el-input v-model="submitForm.companycode" clearable placeholder="统一社会信用代码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="info">
                <el-input type="textarea" v-model="submitForm.info"
                          :rows="5"
                          show-word-limit
                          maxlength="150"
                          placeholder="企业简介"
                          style="margin-right:80%;">

                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-button type="primary" style="width: 100%" @click="submit('submitForm')" :loading="loading">点我申请入驻
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EnterPriseApply",
    mounted() {
      this.check()
      this.getindustry();
      if (localStorage.token) {
        if (localStorage.role == 1) {
          this.$alert('你没有权限操作', '', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push({path: '/'})
            }
          });
        }
      } else {
        this.$alert('登陆以使用本功能', '', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/Login'})
          }
        });
      }
    },
    data() {
      return {
        activeName: 'first',
        loading: false,
        submitForm: {
          name: "",
          site: "",
          legal: "",
          legalid: "",
          phone: "",
          email: "",
          industry: "",
          date: "",
          companycode: "",
          info: "",
        },
        industries: [],
        submitRules: {
          name: [
            {required: true, message: '必填', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          email: [{
            required: true,//是否必填
            message: '必填',//错误提示信息
            trigger: 'blur'//检验方式（blur为鼠标点击其他地方，）
          },
            {
              type: 'email',//要检验的类型（number，email，date等）
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          legal: [
            {required: true, message: '必填', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          industry: [{
            required: true,
            message: '请选择行业',
            trigger: 'change'
          }],
          date: [{
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          companycode: [{required: true, message: '必填', trigger: 'blur'}, {
            min: 18,
            max: 18,
            message: '请输入18位统一性用代码',
            trigger: 'blur'
          }],
          legalid: [{required: true, message: '必填', trigger: 'blur'}, {
            min: 18,
            max: 18,
            message: '请输入18位身份证号码',
            trigger: 'blur'
          }],
          site: [{required: true, message: '必填', trigger: 'blur'},],
          phone: [{required: true, message: '必填', trigger: 'blur'}, {
            pattern: /^1[34578]\d{9}$/,
            message: '目前只支持中国大陆的手机号码',
          }],
          info: [{required: true, message: '必填', trigger: 'blur'}, {max: 150, message: '简介字数在150字以内', trigger: 'blur'}],
        }
      }
    },
    methods: {
      check() {
        this.$axios.get('token/check').then(
          response => {
            if (response.data.status == 0) {
              this.user = localStorage.user
              this.role = localStorage.role
            } else {
              this.$message.warning("登陆失效，请重新登录！")
              this.$router.push({path:'/Login'})
            }
          }
        )
      },
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
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$axios.post("enterpriseapply", this.submitForm).then(response => {
              if (response.data.status == 200) {
                this.$alert(
                  '申请入驻成功，等待管理员审核', '申请入驻成功', {
                    confirmButtonText: "确定",
                    callback: action => {
                      this.$router.push({path: '/'})

                    }
                  })
              } else if (response.data.status == 40003) {
                for (var i = 0, len = response.data.data.length; i < len; i++) {
                  this.$message({
                    type: "warning",
                    message: response.data.data[i].error
                  })
                }
                this.loading = false
              } else if (response.data.status == 4003) {
                for (var i = 0, len = response.data.data.length; i < len; i++) {
                  this.$message({
                    type: "warning",
                    message: response.data.data[i].error
                  })
                }
                this.loading = false
              } else {
                this.$message({
                  type: "warning",
                  message: "服务器开了点小差"
                })
              }
            })
            this.loading = false
          } else {
            this.$message({
              type: "warning",
              message: valid.error()
            })
            this.loading = false
          }
        });
      },
    }
  }
</script>

<style scoped>

  .el-col {
    border-radius: 50px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .img4login {
    background: url('../assets/images/849322.jpg') center top;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    /*position:absolute;*/
  }

</style>
