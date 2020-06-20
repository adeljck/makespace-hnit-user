<template>
  <div class="img4login">
    <div class="title">
      <span style="font-size: 40px;font-weight: bold;">发布活动</span>
    </div>
    <div>
      <el-dialog
        title="封面"
        :visible.sync="imageVisible"
        width="30%">
        <el-upload
          list-type="fileList"
          action
          :auto-upload="true"
          :disabled="imagesList.length==1"
          multiple
          :limit="1"
          accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
          :file-list="imagesList"
          :on-exceed="image_on_execed"
          :on-remove="image_on_remove"
          :before-remove="image_before_remove"
          :on-preview="image_on_preview"
          :on-success="image_on_success"
          :before-upload="image_before_upload"
          :http-request="image_handel_upload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5Mb,最多上传一张图片</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
    <el-button @click="imageVisible = false">取 消</el-button>
    <el-button type="primary" @click="imageVisible = false">确 定</el-button>
  </span>
      </el-dialog>
      <el-dialog
        title="附件"
        :visible.sync="attachVisible"
        width="30%">
        <el-upload
          list-type="fileList"
          action
          :auto-upload="true"
          :disabled="attachList.length===2"
          multiple
          :limit="2"
          accept=".doc,.docx,.xls,.xlsx,.pdf"
          :file-list="attachList"
          :on-exceed="attach_on_execed"
          :on-remove="attach_on_remove"
          :before-remove="attach_before_remove"
          :on-preview="attach_on_preview"
          :on-success="attach_on_success"
          :before-upload="attach_before_upload"
          :http-request="attach_handel_upload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传doc/docx/pdf/xls/xlsx文件，且不超过10Mb，最多上传两个附件</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
    <el-button @click="attachVisible = false">取 消</el-button>
    <el-button type="primary" @click="attachVisible = false">确 定</el-button>
  </span>
      </el-dialog>
      <el-card style="background-color: transparent;">
        <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="80px"
                 :status-icon="true">
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="activity_name">
                <el-input v-model="submitForm.activity_name" clearable placeholder="活动主题"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="activity_location">
                <el-input v-model="submitForm.activity_location" clearable placeholder="活动地点"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="start_time">
                <el-date-picker
                  style="width: 100%"
                  v-model="submitForm.start_time"
                  type="datetime"
                  placeholder="选择开始日期时间"
                  align="right"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="stop_time">
                <el-date-picker
                  style="width: 100%"
                  v-model="submitForm.stop_time"
                  type="datetime"
                  placeholder="选择结束日期时间"
                  align="right"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="activity_location">
                <el-button size="medium" type="primary" @click="attachVisible=true">上传活动附件</el-button>
                只能上传doc,docx,xls,xlsx,pdf后缀的文件
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="activity_location">
                <el-button size="medium" type="primary" @click="imageVisible=true">上传活动封面</el-button>
                只能上传jpg,png后缀的图片
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="activity_type">
                <el-select v-model="submitForm.activity_type" clearable placeholder="活动类型" style="width: 100%">
                  <el-option
                    v-for="item in activity_types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="email">
                <el-input v-model="submitForm.contact.email" clearable placeholder="联系方式/邮箱(必填)"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="phone">
                <el-input v-model="submitForm.contact.phone" clearable placeholder="联系方式/电话(必填)"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="date">
                <el-input v-model="submitForm.contact.wechat" clearable placeholder="联系方式/微信(选填)"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="qq">
                <el-input v-model="submitForm.contact.qq" clearable placeholder="联系方式/QQ(选填)"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :pull="1">
              <el-form-item prop="short_info">
                <el-input v-model="submitForm.short_info" show-word-limit
                          maxlength="1000" style="margin-right:80%;" :rows="3" type="textarea" clearable
                          placeholder="活动简介"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12" :pull="1">
              <el-form-item prop="info">
                <el-input type="textarea" v-model="submitForm.info"
                          :rows="10"
                          show-word-limit
                          maxlength="1000"
                          placeholder="详细内容"
                          style="margin-right:80%;">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-button type="primary" style="width: 100%" @click="submit('submitForm')" :loading="loading">点我发布
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {put, getFileNameUUID, signatureUrl} from '@/alioss/ali-oss'
  export default {
    name: "AddActivity",
    mounted() {
      this.check()
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
      let validateStop = (rule, value, callback) => {
        if (value < this.submitForm.start_time) {
          callback(new Error('结束日期不能在开始日期之前'));
        } else {
          callback();
        }
      };
      let validateStart = (rule, value, callback) => {
        if (value > this.submitForm.stop_time) {
          callback(new Error('开始日期不能在结束日期之后'));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        submitForm: {
          activity_name: "",
          activity_location: "",
          creator: localStorage._id,
          activity_type: "",
          contact: {
            phone: "",
            email: "",
            qq: "",
            wechat: ""
          },
          start_time: "",
          stop_time: "",
          avatar: "",
          short_info: "",
          info: "",
          attach: [],
        },
        submitRules: {
          activity_name: [
            {required: true, message: '必填', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          activity_type: [
            {required: true, message: '必填', trigger: 'blur'},
          ],
          start_time: [
            {required: true, message: '必填', trigger: 'blur'},
            {validator: validateStart, trigger: 'change'}
          ],
          stop_time: [
            {required: true, message: '必填', trigger: 'blur'},
            {validator: validateStop, trigger: 'change'}
          ],
          info: [
            {required: true, message: '必填', trigger: 'blur'},
          ],
          short_info: [
            {required: true, message: '必填', trigger: 'blur'},
          ],
        },
        activity_types: [{
          value: '工作坊',
          label: '工作坊'
        }, {
          value: '分享会',
          label: '分享会'
        }, {
          value: '创客培训',
          label: '创客培训'
        }, {
          value: '其他',
          label: '其他'
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        imageVisible: false,
        attachVisible: false,
        attachList: [],
        imagesList: [],
      }
    },
    methods: {
      image_handel_upload(option) {
        let objName = getFileNameUUID() + option.file.name.substring(option.file.name.lastIndexOf("."), option.file.name.length);
        put(objName, option.file).then(resp => {
          if (resp.res.status != 200) {
            this.$message.warning("上传失败")
          }
          this.imagesList.push({"name":option.file.name,"url":resp.url})
          this.$message.success("上传图片成功")
        })
      },
      image_before_upload(file) {
        const max5M = file.size / 1024 / 1024 < 5
        if (!max5M) {
          this.$message.warning('上传文件大小不能超过5Mb！')
          return false
        }
        return true
      },
      image_on_success(response, file, fileList) {
        this.imagesList = fileList,
          this.$emit('on-success', file, fileList)
      },
      image_on_preview(file) {
        this.$emit('on-preview', file)
      },
      image_on_execed(files, fileList) {
        this.$message.warning(`当前限制选择1个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
      },
      image_on_remove(file, fileList) {
        this.$emit('on-remove', file, fileList)
        this.$message.info(`已移除文件${file.name}`)
      },
      image_before_remove(file, fileList) {
        return this.$confirm(`确定移除${file.name}?`)
      },
      attach_handel_upload(option) {
        let objName = getFileNameUUID() + option.file.name.substring(option.file.name.lastIndexOf("."), option.file.name.length);
        put(objName, option.file).then(resp => {
          if (resp.res.status != 200) {
            this.$message.warning("上传失败")
          }
          this.attachList.push({"name":option.file.name,"url":resp.url})
          this.$message.success("上传附件成功")
        })
      },
      attach_before_upload(file) {
        const max5M = file.size / 1024 / 1024 < 10
        if (!max5M) {
          this.$message.warning('上传文件大小不能超过10Mb！')
          return false
        }
        return true
      },
      attach_on_success(response, file, fileList) {
        this.attachList = fileList,
          this.$emit('on-success', file, fileList)
      },
      attach_on_preview(file) {
        this.$emit('on-preview', file)
      },
      attach_on_execed(files, fileList) {
        this.$message.warning(`当前限制选择2个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
      },
      attach_on_remove(file, fileList) {
        this.$emit('on-remove', file, fileList)
        this.$message.info(`已移除文件${file.name}`)
      },
      attach_before_remove(file, fileList) {
        return this.$confirm(`确定移除${file.name}?`)
      },
      check() {
        this.$axios.get('token/check').then(
          response => {
            if (response.data.status == 0) {
              this.user = localStorage.user
              this.role = localStorage.role
            } else {
              this.$message.warning("登陆失效，请重新登录！")
              this.$router.push({path: '/Login'})
            }
          }
        )
      },
      submit(formName) {
        this.submitForm.avatar = this.imagesList[0].url
        for (var i = 0, len = this.attachList.length; i < len; i++) {
          this.submitForm.attach.push({"name": this.attachList[i].name, "url": this.attachList[i].url})
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$axios.post("activity", this.submitForm).then(response => {
              if (response.data.status == 200) {
                this.$alert(
                  '活动发布成功', '活动发布成功', {
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
  .el-icon-document{
    height: 10%;
  }

</style>
