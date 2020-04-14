<template>
  <div class="img4login">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>找回密码</span>
      </div>
      <el-form :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-ruleForm" :status-icon="true">
        <el-form-item prop="count" label="输入需要找回密码的账号">
          <el-input v-model="ruleForm.count" v-if="active==0" placeholder="学号/手机号"></el-input>
        </el-form-item>
      </el-form>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="需要找回密码的账号"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next" :disabled="ok">下一步</el-button>

    </el-card>
  </div>
</template>

<script>
  export default {
    name: "forget.vue",
    data() {
      let inDatabase = (rule, value, callback) => {
        if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rules: {
          count: ""
        },
        ruleForm: {
          count: [
            {
              required: true,
              message: '请输入账号',
              trigger: 'blur',
            },
          ]
        },
        active: 0,
        ok: false,
      }
    },
      methods:{
        next()
        {
          if (this.active++ > 2) this.active = 0;
        }
      ,
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
