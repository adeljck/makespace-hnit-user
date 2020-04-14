<template>
  <div>
    <div class="title">
      <span style="font-size: 40px;font-weight: bold;">入驻申请表</span>
    </div>
    <div>
      <el-card>
        <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="80px"
                 :label-position="position">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item prop="name">
                <el-input v-model="submitForm.name" clearable placeholder="企业名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple"></div>
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
          name:""
        },
        submitRules: {},
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
