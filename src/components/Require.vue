<template>
  <div class="nav">
    <el-container>
      <el-main>
        <el-card>
          <div slot="header" class="clearfix">
            <span>所有需求</span>
          </div>
          <el-card>hahahah</el-card>
          <el-card>hahahah</el-card>
          <el-card>hahahah</el-card>
          <el-card>hahahah</el-card>
          <el-card>hahahah</el-card><el-card>hahahah</el-card>
        </el-card>
        <el-card>
          <el-pagination
            background
            :current-page="currentPage"
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
    name: "Require",
    data() {
      return {
        total: 20,
        currentPage:1,
        pagesize:15,
        datas: [
          {
            name: "智能机器人",
            money: "100000",
            info: "做一个智能机器人",
            status: "1",
            start: "20200305",
            stop: "20200327",
            id: "",
          },
          {
            name: "智能机器人",
            money: "100000",
            info: "做一个智能机器人",
            status: "1",
            start: "20200305",
            stop: "20200327",
            id: "",
          },
          {
            name: "智能机器人",
            money: "100000",
            info: "做一个智能机器人",
            status: "1",
            start: "20200305",
            stop: "20200327",
            id: "",
          }, {
            name: "智能机器人",
            money: "100000",
            info: "做一个智能机器人",
            status: "1",
            start: "20200305",
            stop: "20200327",
            id: "",
          }
        ],
      }
    },
    methods: {
      load() {
        this.count += 2
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
.el-footer{
  height:60px;
  position:fixed;
  bottom:0;
  left:0px;
  width: 100%
}
  body > .el-container {
    margin-bottom: 40px;
    margin-top: 50px;
  }

</style>
