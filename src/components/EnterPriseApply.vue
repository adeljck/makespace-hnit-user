<template>
  <div class="img4login">
    <div class="title">
      <span style="font-size: 40px;font-weight: bold;">入驻申请表</span>
    </div>
    <div>
      <el-card style="background-color: transparent;">
        <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="80px"
                 :label-position="position" :status-icon="true">
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
              <el-form-item prop="buildtime">
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
    data() {
      return {
        activeName: 'first',
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
        industries: [{
          value: '计算机/互联网',
          label: '计算机/互联网'
        }, {
          value: '保险',
          label: '保险'
        }, {
          value: '金融',
          label: '金融'
        }, {
          value: '通讯',
          label: '通讯'
        }, {
          value: '军工',
          label: '军工'
        }],
        submitRules:{
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
          buildtime: [{
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          companycode: [{required: true, message: '必填', trigger: 'blur'},{min: 18, max: 18, message: '请输入18位统一性用代码', trigger: 'blur'}],
          legalid: [{required: true, message: '必填', trigger: 'blur'},{min: 18, max: 18, message: '请输入18位身份证号码', trigger: 'blur'}],
          site: [{required: true, message: '必填', trigger: 'blur'},],
          phone: [{required: true, message: '必填', trigger: 'blur'},{pattern: /^1[34578]\d{9}$/,message: '目前只支持中国大陆的手机号码',}],
          info: [{required: true, message: '必填', trigger: 'blur'},{ max: 150, message: '简介字数在150字以内', trigger: 'blur'}],
        }
      }
    },
    methods: {
      submit(formName) {
        this.loading = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.loading = false
          } else {
            console.log('error submit!!');
            this.loading = false;
            return false;
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
