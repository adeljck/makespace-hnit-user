<template>
  <div>
    <div class="title">
      <span style="font-size: 40px;font-weight: bold;">入驻申请表</span>
    </div>
    <div>
      <el-card>
        <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="80px"
                 :label-position="position">
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.name" clearable placeholder="企业名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.user" clearable placeholder="企业官网"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.name" clearable placeholder="申请人姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.user" clearable placeholder="申请人身份证"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.name" clearable placeholder="公司电话"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="name">
                <el-input v-model="submitForm.user" clearable placeholder="公司邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-select v-model="submitForm.industry" placeholder="所属行业"
                         style="width: 88%;margin-left: 12%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-form-item prop="name">
              <el-col :span="12" :pull="1">
                <el-date-picker
                  v-model="submitForm.buildtime"
                  type="date"
                  placeholder="创立日期"
                  :size="large"
                  style="width: 93%;margin-left: 13%">
                </el-date-picker>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row :span="12">
            <el-col>

            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EnterPriseApply",
    data() {
      return {
        submitForm: {
          name: "",
          industry: "",
          buildtime: "",
        },
        submitRules: {},
        options: [{
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
      }
    },
    methods: {}
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
