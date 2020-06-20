<template>
  <div class="nav">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="4" v-for="(data, index) in datas" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="data.avatar"
                   class="image">
              <div style="padding: 14px;">
                <div style="height: 20px;width: 100%;">
                  <h4 style="font-family: PingFang-SC-Heavy;font-size: 15px;color: #3a3a3a;height: 20px">
                    <a :href="'/Activity?id='+ data._id">{{data.activity_name}}</a>
                  </h4>
                </div>
                <div>
                  <span>开始时间</span>
                  <i class="el-icon-watch"></i>
                  <span style="padding-left: 10px">{{data.start_time}}</span>

                  <span>结束日期</span>
                  <i class="el-icon-watch"></i>
                  <span style="padding-left: 10px">{{data.stop_time}}</span>
                </div>
                <div>
                  <span>简介</span>
                  <p>{{data.short_info}}</p>
                </div>
                <div class="bottom clearfix">
                  <el-button type="primary" @click="getactivity(data._id)" v-if="data.status==0">
                    参加
                  </el-button>
                  <el-button type="primary" disabled v-if="data.status==-1">已结束</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card>
          <el-pagination
            background
            @current-change="get_activities"
            @prev-click="priv"
            @next-click="next"
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </el-card>
      </el-main>
    </el-container>

  </div>

</template>

<script>
  export default {
    created() {
      this.get_activities(this.currentPage)
    },
    name: "Requires",
    data() {
      return {
        total: -1,
        currentPage: 1,
        page_size: 10,
        datas: [],
      }
    },
    methods: {
      getactivity(_id) {
        if (!localStorage.token) {
          this.$message.warning("未登陆")
          this.$router.push({path: "/Login"})
          return
        }
        this.$axios.get('token/check').then(
          response => {
            if (response.data.status != 0) {
              this.$message.warning("登陆失效，请重新登录")
              this.$router.push({path: "/Login"})
              return
            }
          }
        )
        let form = {"id": _id}
        this.$axios.put("activity", form).then(
          response => {
            if (response.data.status==200){
              this.$message.success("参加成功")
            }else{
              this.$message.warning(response.data.msg)
            }
          }
        )
      },
      priv() {
        this.currentPage -= 1
      },
      next() {
        this.currentPage += 1
      },
      get_activities(current) {
        this.$axios.get('activities/' + current).then(
          response => {
            if (response.data.status != 200) {
              this.$message({
                message: "服务器开了点小差",
                type: "warning"
              })
            } else {
              this.datas = response.data.data.items
              this.total = response.data.data.total
              for (var i = 0, len = this.datas.length; i < len; i++) {
                this.datas[i].start_time = this.datas[i].start_time.split("T")[0]
                this.datas[i].stop_time = this.datas[i].stop_time.split("T")[0]
              }
            }
          }
        ).catch(
          err => {
            console.log(err)
            this.$message({
              message: "登陆失败,服务器开了个小差",
              type: "warning"
            })
          }
        )
      },
    }
  }
</script>

<style scoped>
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-footer {
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0px;
    width: 100%
  }

  body > .el-container {
    margin-bottom: 40px;
    margin-top: 50px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
