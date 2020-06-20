<template>
  <el-card>
    <div>{{datas.project_name}}</div>
    <span>开始时间{{datas.start_time}}</span>
    <span>结束时间{{datas.stop_time}}</span>
    <div>
      {{datas.info}}
    </div>
    <div v-for="(i, index) in attach" :key="index">
      <a :href="i.url">附件{{index+1}}</a>
    </div>
    <div v-for="(i, index) in image" :key="index">
      <img :src="i.url">
    </div>

     </el-card>
</template>

<script>
  export default {
    mounted() {
      this.getdetail()
    },
    name: "Require",
    data() {
      return {
        id: this.$route.query.id,
        datas: "",
        image:"",
        attach:""
      }
    },
    methods: {
      getdetail() {
        this.$axios.get("/project?id=" + this.id).then(
          response => {
            this.datas = response.data.data
            this.image = response.data.data.image
            this.attach = response.data.data.attach
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
