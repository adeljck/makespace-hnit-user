<template>
  <div style="" id="nice">
    <div>
      <div class="animated flipInX">
        <el-card style="width: 100vw;min-width:1000px;margin-left:auto;margin-right: auto" class="card1">
          <div style="width: 350px;height: 80px;margin-right: auto;margin-left: auto">
            <div class="ad" style="float: left" @click="toenterprise">
              <el-tooltip class="item" effect="dark" content="快点击加入吧" placement="top">
                <i style="font-size: 80px;color: white" class="el-icon-circle-plus-outline"></i>
              </el-tooltip>
            </div>
            <div><span style="font-size: 30px;color:white;font-weight: 600">企业用户加入湖南工<i class="el-icon-back"></i>学院创客空间</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="allTabs" style="height: 400px;width: 100%">
        <div class="animated bounceInLeft">
          <el-row>
            <el-col style="width: 70%">
              <div class="tab1">
                <div style="height: 50px;"></div>
                <div class="tab1-child">
                  <el-row style="width: 100%">
                    <el-col style="width: 50%">
                      <div style="width: 100%;height: 300px;">
                        <div style="height: 10px;"></div>
                        <div style="margin-left: 30px;height: 10px;width: 30px;background-color: darkslateblue"></div>
                        <div class="contents"
                             style="text-align: left;width: 80%;height: 260px;margin-left: auto;margin-right: auto;">
                          <div style="height: 40px;"></div>
                          <span style="font-size: 35px;font-family: 幼圆;font-weight: bold">湖南工学院创客空间</span>
                          <p>湖南工学院创客空间是由湖南工学院计算机与信息科学学院创建，为有想法有创意的同学们提供完成创意的创新孵化工厂，欢迎各位有创意的同学加入</p>
                        </div>
                        <div
                          style="float: right;margin-right:30px;height: 10px;width: 30px;background-color: darkslateblue"></div>
                      </div>
                    </el-col>
                    <el-col style="width: 50%">
                      <div class="backImg1">
                        <div style="height: 50px;"></div>
                        <span style="font-family: 幼圆;color: white;font-size: 60px;font-weight: bold">什么是</span><br/>
                        <span style="font-family: 幼圆;color: white;font-size: 60px;font-weight: bold">创客空间</span><br/>
                        <span style="font-family: 幼圆;color: white;font-size: 60px;font-weight: bold"><i
                          class="el-icon-back"></i></span>
                      </div>
                    </el-col>
                  </el-row>

                </div>
              </div>
            </el-col>
            <el-col style="width: 30%">
              <div class="tab2">
                <div style="height: 50px;"></div>
                <el-tooltip class="item" effect="dark" content="点击查看接手需求" placement="top">
                  <div class="backImg2" @click="toJoin">
                    <div style="height:50px;"></div>
                    <span style="font-family: 幼圆;color: white;font-size: 60px;font-weight: bold">查看<br/>所有需求</span><br/>
                    <span style="font-family: 幼圆;color: white;font-size: 60px;font-weight: bold"><i
                      class="el-icon-search"></i></span>
                  </div>
                </el-tooltip>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="News4home animated bounceInRight" style="text-align: left">
        <div style="height: 50px;width: 20px;background-color: yellow;float: left"></div>
        <div style="margin-left: 20px;">
          <span style="margin-left: 10px;font-size: 40px;">创客空间的优点</span></div>
        <div class="cards4Home" style="width: 100%;min-width:900px;margin-top: 40px;">
          <el-row style="width: 100%;">
            <el-col style="width: 25%;height: 200px;">
              <el-card class="cards" :body-style="{padding:'0px'}">
                <img src="../assets/images/首页1.png" class="back1"/>
                <div style="text-align: center">
                  <div style="height: 15px;"></div>
                  <span style="font-weight: bold;font-size: 25px;font-family: 幼圆">更多的沟通交流</span>
                </div>
                <div>
                  <p class="con">加入创客空间，将可以与更多的团队进行沟通交流，在沟通中学习进步</p>
                </div>
              </el-card>
            </el-col>
            <el-col style="width: 25%;height: 200px;">
              <el-card class="cards" :body-style="{padding:'0'}">
                <img class="back1" src="../assets/images/首页2.png"/>
                <div style="text-align: center">
                  <div style="height: 15px;"></div>
                  <span style="font-weight: bold;font-size: 25px;font-family: 幼圆">舒适的工作环境</span>
                </div>
                <div>
                  <p class="con">创客空间可以为您提供更加舒适的工作场所，让创客在工作时更加舒适</p>
                </div>
              </el-card>
            </el-col>
            <el-col style="width: 25%;height: 200px;">
              <el-card class="cards" :body-style="{padding:'0'}">
                <img src="../assets/images/首页3.png" class="back1"/>
                <div style="text-align: center">
                  <div style="height: 15px;"></div>
                  <span style="font-weight: bold;font-size: 25px;font-family: 幼圆">优秀的知识指导</span>
                </div>
                <div>
                  <p class="con">创客空间将定期举办知识讲座，并邀请知名导师前来指导讲授，为知识加油</p>
                </div>
              </el-card>
            </el-col>
            <el-col style="width: 25%;height: 200px;">
              <el-card class="cards" :body-style="{padding:'0'}">
                <img src="../assets/timg1.jpg" class="back1"/>
                <div style="text-align: center">
                  <div style="height: 15px;"></div>
                  <span style="font-weight: bold;font-size: 25px;font-family: 幼圆">先进的设备支持</span>
                </div>
                <div>
                  <p class="con">在创客空间中，您将可以申请使用会议室、路演室等一系列配备先进设备的工作场所，也可以申请新型设备</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "ok",
        // isLogin: false
      }
    },
    methods: {
      toJoin(){
        this.$router.push({path: '/Require'})
      },
      toenterprise(){
        this.$router.push({path: '/EnterPriseApply'})
      }
    }

  }

</script>

<style>

  .con {
    padding: 10px;
  }

  .back1 {
    padding: 0;
    margin: 0;
    width: 100%;
    border-color: darkslateblue;
    height: 180px;
  }

  .cols {

    width: 20%

  }

  .cards {
    width: 20vw;
    min-width: 200px;
    height: 350px;
    margin-left: 10px;
  }

  .cards4Home {
    width: 100%;
  }


  #nice {
    /*background-image: url("../assets/timg7.jpg");*/
    /*background-size: 100%;*/
    background-color: whitesmoke;
    width: 100%;
    height: 1100px;
  }

  .News4home {
    width: 90vw;
    min-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: 400px;

  }

  .backImg1 {
    /*background-color: cyan;*/
    background-image: url("../assets/timg7.jpg");
    background-size: 150%;
    height: 300px;
    width: 100%;
    float: left;
  }

  .backImg2 {
    background-image: url("../assets/timg4.jpg");
    background-size: 150%;
    height: 300px;
    width: 100%;
    float: left;
  }

  .tab2 {
    /*background-color: whitesmoke;*/
    width: 100%;
    float: right;
    height: 400px;

  }

  .tab1 {
    /*margin-top: 30px;*/
    background-color: whitesmoke;
    /*background-image: url("../assets/timg6.jpg");*/
    background-size: 100%;
    width: 100%;
    height: 400px;
    z-index: 1;
    transition: all 0.7s;
    /*margin-left: -550px;*/
  }

  /*.tab1:hover{*/
  /*margin-left: 0;*/
  /*}*/

  .tab1-child {
    background-color: white;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    height: 300px;
  }


  .card1 {
    background-image: url("../assets/appl.png");
  }


  .ad {
    transition: all 2s;
  }


  .ad:hover {
    transform: scale(1.5);;
    -webkit-transform: rotate(360deg);
  }


  #master {
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 60px;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 0;
    -webkit-font-smoothing: inherit
  }

  #master {
    text-rendering: optimizeLegibility
  }

  #master-container {
    background-color: #A2A3A2;
    -webkit-animation: master-container-bg 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    animation: master-container-bg 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100vmin;
    min-height: 0;
    max-height: 100%;
  }

  #master-container .content {
    height: 700px;
    width: 1400px;
  }

  @media screen and (max-width: 615px) {
    #master-container {
      -webkit-animation: master-container-bg-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      animation: master-container-bg-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite
    }
  }

  @media screen and (max-width: 615px) {
    #master {
      font-size: 40px;
      font-line: 1.2
    }
  }

  #master-container-scroller {
    height: 66px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative
  }

  #master-container-scroller .master-container-scroller_item {
    display: block;
    padding-bottom: 6px;
    -webkit-animation: scroll 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    animation: scroll 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite
  }

  #master-container-scroller .master-container-scroller_item[href]:hover {
    text-decoration: underline
  }

  #master-container-scroller .master-container-scroller_item:nth-child(1),
  #master-container-scroller .master-container-scroller_item:nth-child(1) a {
    color: #E65F48
  }

  #master-container-scroller .master-container-scroller_item:nth-child(2),
  #master-container-scroller .master-container-scroller_item:nth-child(2) a {
    color: #E65F48
  }

  #master-container-scroller .master-container-scroller_item:nth-child(3),
  #master-container-scroller .master-container-scroller_item:nth-child(3) a {
    color: #76BCAD
  }

  #master-container-scroller .master-container-scroller_item:nth-child(4),
  #master-container-scroller .master-container-scroller_item:nth-child(4) a {
    color: #84719f
  }

  #master-container-scroller .master-container-scroller_item:nth-child(5),
  #master-container-scroller .master-container-scroller_item:nth-child(5) a {
    color: #d47787
  }

  #master-container-scroller .master-container-scroller_item:nth-child(6),
  #master-container-scroller .master-container-scroller_item:nth-child(6) a {
    color: #F09551
  }

  #master-container-scroller .master-container-scroller_item:nth-child(7),
  #master-container-scroller .master-container-scroller_item:nth-child(7) a {
    color: #349AB5
  }

  #master-container-scroller .master-container-scroller_item:nth-child(8),
  #master-container-scroller .master-container-scroller_item:nth-child(8) a {
    color: #e86042
  }

  #master-container-scroller .master-container-scroller_item:nth-child(9),
  #master-container-scroller .master-container-scroller_item:nth-child(9) a {
    color: #74bcae
  }

  #master-container-scroller .master-container-scroller_item:nth-child(10),
  #master-container-scroller .master-container-scroller_item:nth-child(10) a {
    color: #E65F48
  }

  @media screen and (max-width: 615px) {
    #master-container-scroller {
      height: 48px;
      line-height: 1.2;
      margin-bottom: 0
    }

    #master-container-scroller .master-container-scroller_item {
      padding-bottom: 0;
      -webkit-animation: scroll-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      animation: scroll-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(1) .grid_item-overlay {
    background-color: rgba(230, 95, 72, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(1) .grid_item-overlay .link:hover {
      color: #E65F48
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(2) .grid_item-overlay {
    background-color: rgba(230, 95, 72, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(2) .grid_item-overlay .link:hover {
      color: #E65F48
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(3) .grid_item-overlay {
    background-color: rgba(118, 188, 173, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(3) .grid_item-overlay .link:hover {
      color: #76BCAD
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(4) .grid_item-overlay {
    background-color: rgba(132, 113, 159, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(4) .grid_item-overlay .link:hover {
      color: #84719f
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(5) .grid_item-overlay {
    background-color: rgba(212, 119, 135, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(5) .grid_item-overlay .link:hover {
      color: #d47787
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(6) .grid_item-overlay {
    background-color: rgba(240, 149, 81, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(6) .grid_item-overlay .link:hover {
      color: #F09551
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(7) .grid_item-overlay {
    background-color: rgba(52, 154, 181, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(7) .grid_item-overlay .link:hover {
      color: #349AB5
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(8) .grid_item-overlay {
    background-color: rgba(232, 96, 66, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(8) .grid_item-overlay .link:hover {
      color: #e86042
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(9) .grid_item-overlay {
    background-color: rgba(116, 188, 174, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(9) .grid_item-overlay .link:hover {
      color: #74bcae
    }
  }

  #master-container-grid .master-container-grid_item:nth-child(10) .grid_item-overlay {
    background-color: rgba(230, 95, 72, 0.9)
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item:nth-child(10) .grid_item-overlay .link:hover {
      color: #E65F48
    }
  }

  #master-container-grid .master-container-grid_item .img {
    position: relative
  }

  #master-container-grid .master-container-grid_item .grid_item-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    text-decoration: none
  }

  #master-container-grid .master-container-grid_item .grid_item-overlay:hover {
    opacity: 1
  }

  #master-container-grid .master-container-grid_item .grid_item-overlay .link {
    display: inline-block;
    box-shadow: 0 1px 0 0 #fff, inset 0 0 0 #fff;
    transition: box-shadow .2s ease
  }

  #master-container-grid .master-container-grid_item .grid_item-overlay .link:hover {
    box-shadow: 0 2px 0 0 #fff, inset 0 -1px 0 0 #fff
  }

  @media screen and (max-width: 520px) {
    #master-container-grid .master-container-grid_item {
      margin-bottom: 18px
    }

    #master-container-grid .master-container-grid_item .grid_item-overlay {
      position: relative;
      background: none !important;
      color: #3a3a3a;
      opacity: 1;
      display: block;
      margin-top: 18px;
      text-align: left
    }

    #master-container-grid .master-container-grid_item .grid_item-overlay .link {
      box-shadow: none
    }

    #master-container-grid .master-container-grid_item .grid_item-overlay .link:hover {
      text-decoration: underline
    }
  }

  @-webkit-keyframes master-container-bg {
    0.0% {
      background-color: #F5C59C
    }
    3.7037037037037037% {
      background-color: #F5C59C
    }
    11.11111111111111% {
      background-color: #ECC9CB
    }
    14.814814814814815% {
      background-color: #ECC9CB
    }
    22.22222222222222% {
      background-color: #D9E2CB
    }
    25.925925925925927% {
      background-color: #D9E2CB
    }
    33.333333333333336% {
      background-color: #f6c599
    }
    37.03703703703704% {
      background-color: #f6c599
    }
    44.44444444444444% {
      background-color: #c4bbd3
    }
    48.148148148148145% {
      background-color: #c4bbd3
    }
    55.55555555555556% {
      background-color: #F9E7AF
    }
    59.25925925925926% {
      background-color: #F9E7AF
    }
    66.66666666666667% {
      background-color: #B4E2EE
    }
    70.37037037037037% {
      background-color: #B4E2EE
    }
    77.77777777777777% {
      background-color: #cbe5f4
    }
    81.48148148148148% {
      background-color: #cbe5f4
    }
    88.88888888888889% {
      background-color: #d2e7e2
    }
    92.5925925925926% {
      background-color: #d2e7e2
    }
    100.0% {
      background-color: #F5C59C
    }
  }

  @keyframes master-container-bg {
    0.0% {
      background-color: #F5C59C
    }
    3.7037037037037037% {
      background-color: #F5C59C
    }
    11.11111111111111% {
      background-color: #ECC9CB
    }
    14.814814814814815% {
      background-color: #ECC9CB
    }
    22.22222222222222% {
      background-color: #D9E2CB
    }
    25.925925925925927% {
      background-color: #D9E2CB
    }
    33.333333333333336% {
      background-color: #f6c599
    }
    37.03703703703704% {
      background-color: #f6c599
    }
    44.44444444444444% {
      background-color: #c4bbd3
    }
    48.148148148148145% {
      background-color: #c4bbd3
    }
    55.55555555555556% {
      background-color: #F9E7AF
    }
    59.25925925925926% {
      background-color: #F9E7AF
    }
    66.66666666666667% {
      background-color: #B4E2EE
    }
    70.37037037037037% {
      background-color: #B4E2EE
    }
    77.77777777777777% {
      background-color: #cbe5f4
    }
    81.48148148148148% {
      background-color: #cbe5f4
    }
    88.88888888888889% {
      background-color: #d2e7e2
    }
    92.5925925925926% {
      background-color: #d2e7e2
    }
    100.0% {
      background-color: #F5C59C
    }
  }

  @-webkit-keyframes master-container-bg-mobile {
    0.0% {
      background-color: #F5C59C
    }
    3.7037037037037037% {
      background-color: #F5C59C
    }
    11.11111111111111% {
      background-color: #ECC9CB
    }
    14.814814814814815% {
      background-color: #ECC9CB
    }
    22.22222222222222% {
      background-color: #D9E2CB
    }
    25.925925925925927% {
      background-color: #D9E2CB
    }
    33.333333333333336% {
      background-color: #f6c599
    }
    37.03703703703704% {
      background-color: #f6c599
    }
    44.44444444444444% {
      background-color: #c4bbd3
    }
    48.148148148148145% {
      background-color: #c4bbd3
    }
    55.55555555555556% {
      background-color: #F9E7AF
    }
    59.25925925925926% {
      background-color: #F9E7AF
    }
    66.66666666666667% {
      background-color: #B4E2EE
    }
    70.37037037037037% {
      background-color: #B4E2EE
    }
    77.77777777777777% {
      background-color: #cbe5f4
    }
    81.48148148148148% {
      background-color: #cbe5f4
    }
    88.88888888888889% {
      background-color: #d2e7e2
    }
    92.5925925925926% {
      background-color: #d2e7e2
    }
    100.0% {
      background-color: #F5C59C
    }
  }

  @keyframes master-container-bg-mobile {
    0.0% {
      background-color: #F5C59C
    }
    3.7037037037037037% {
      background-color: #F5C59C
    }
    11.11111111111111% {
      background-color: #ECC9CB
    }
    14.814814814814815% {
      background-color: #ECC9CB
    }
    22.22222222222222% {
      background-color: #D9E2CB
    }
    25.925925925925927% {
      background-color: #D9E2CB
    }
    33.333333333333336% {
      background-color: #f6c599
    }
    37.03703703703704% {
      background-color: #f6c599
    }
    44.44444444444444% {
      background-color: #c4bbd3
    }
    48.148148148148145% {
      background-color: #c4bbd3
    }
    55.55555555555556% {
      background-color: #F9E7AF
    }
    59.25925925925926% {
      background-color: #F9E7AF
    }
    66.66666666666667% {
      background-color: #B4E2EE
    }
    70.37037037037037% {
      background-color: #B4E2EE
    }
    77.77777777777777% {
      background-color: #cbe5f4
    }
    81.48148148148148% {
      background-color: #cbe5f4
    }
    88.88888888888889% {
      background-color: #d2e7e2
    }
    92.5925925925926% {
      background-color: #d2e7e2
    }
    100.0% {
      background-color: #F5C59C
    }
  }

  @-webkit-keyframes scroll {
    0.0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    3.7037037037037037% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    11.11111111111111% {
      -webkit-transform: translateY(-66px);
      transform: translateY(-66px)
    }
    14.814814814814815% {
      -webkit-transform: translateY(-66px);
      transform: translateY(-66px)
    }
    22.22222222222222% {
      -webkit-transform: translateY(-132px);
      transform: translateY(-132px)
    }
    25.925925925925927% {
      -webkit-transform: translateY(-132px);
      transform: translateY(-132px)
    }
    33.333333333333336% {
      -webkit-transform: translateY(-198px);
      transform: translateY(-198px)
    }
    37.03703703703704% {
      -webkit-transform: translateY(-198px);
      transform: translateY(-198px)
    }
    44.44444444444444% {
      -webkit-transform: translateY(-264px);
      transform: translateY(-264px)
    }
    48.148148148148145% {
      -webkit-transform: translateY(-264px);
      transform: translateY(-264px)
    }
    55.55555555555556% {
      -webkit-transform: translateY(-330px);
      transform: translateY(-330px)
    }
    59.25925925925926% {
      -webkit-transform: translateY(-330px);
      transform: translateY(-330px)
    }
    66.66666666666667% {
      -webkit-transform: translateY(-396px);
      transform: translateY(-396px)
    }
    70.37037037037037% {
      -webkit-transform: translateY(-396px);
      transform: translateY(-396px)
    }
    77.77777777777777% {
      -webkit-transform: translateY(-462px);
      transform: translateY(-462px)
    }
    81.48148148148148% {
      -webkit-transform: translateY(-462px);
      transform: translateY(-462px)
    }
    88.88888888888889% {
      -webkit-transform: translateY(-528px);
      transform: translateY(-528px)
    }
    92.5925925925926% {
      -webkit-transform: translateY(-528px);
      transform: translateY(-528px)
    }
    100.0% {
      -webkit-transform: translateY(-594px);
      transform: translateY(-594px)
    }
  }

  @keyframes scroll {
    0.0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    3.7037037037037037% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    11.11111111111111% {
      -webkit-transform: translateY(-66px);
      transform: translateY(-66px)
    }
    14.814814814814815% {
      -webkit-transform: translateY(-66px);
      transform: translateY(-66px)
    }
    22.22222222222222% {
      -webkit-transform: translateY(-132px);
      transform: translateY(-132px)
    }
    25.925925925925927% {
      -webkit-transform: translateY(-132px);
      transform: translateY(-132px)
    }
    33.333333333333336% {
      -webkit-transform: translateY(-198px);
      transform: translateY(-198px)
    }
    37.03703703703704% {
      -webkit-transform: translateY(-198px);
      transform: translateY(-198px)
    }
    44.44444444444444% {
      -webkit-transform: translateY(-264px);
      transform: translateY(-264px)
    }
    48.148148148148145% {
      -webkit-transform: translateY(-264px);
      transform: translateY(-264px)
    }
    55.55555555555556% {
      -webkit-transform: translateY(-330px);
      transform: translateY(-330px)
    }
    59.25925925925926% {
      -webkit-transform: translateY(-330px);
      transform: translateY(-330px)
    }
    66.66666666666667% {
      -webkit-transform: translateY(-396px);
      transform: translateY(-396px)
    }
    70.37037037037037% {
      -webkit-transform: translateY(-396px);
      transform: translateY(-396px)
    }
    77.77777777777777% {
      -webkit-transform: translateY(-462px);
      transform: translateY(-462px)
    }
    81.48148148148148% {
      -webkit-transform: translateY(-462px);
      transform: translateY(-462px)
    }
    88.88888888888889% {
      -webkit-transform: translateY(-528px);
      transform: translateY(-528px)
    }
    92.5925925925926% {
      -webkit-transform: translateY(-528px);
      transform: translateY(-528px)
    }
    100.0% {
      -webkit-transform: translateY(-594px);
      transform: translateY(-594px)
    }
  }

  @-webkit-keyframes scroll-mobile {
    0.0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    3.7037037037037037% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    11.11111111111111% {
      -webkit-transform: translateY(-48px);
      transform: translateY(-48px)
    }
    14.814814814814815% {
      -webkit-transform: translateY(-48px);
      transform: translateY(-48px)
    }
    22.22222222222222% {
      -webkit-transform: translateY(-96px);
      transform: translateY(-96px)
    }
    25.925925925925927% {
      -webkit-transform: translateY(-96px);
      transform: translateY(-96px)
    }
    33.333333333333336% {
      -webkit-transform: translateY(-144px);
      transform: translateY(-144px)
    }
    37.03703703703704% {
      -webkit-transform: translateY(-144px);
      transform: translateY(-144px)
    }
    44.44444444444444% {
      -webkit-transform: translateY(-192px);
      transform: translateY(-192px)
    }
    48.148148148148145% {
      -webkit-transform: translateY(-192px);
      transform: translateY(-192px)
    }
    55.55555555555556% {
      -webkit-transform: translateY(-240px);
      transform: translateY(-240px)
    }
    59.25925925925926% {
      -webkit-transform: translateY(-240px);
      transform: translateY(-240px)
    }
    66.66666666666667% {
      -webkit-transform: translateY(-288px);
      transform: translateY(-288px)
    }
    70.37037037037037% {
      -webkit-transform: translateY(-288px);
      transform: translateY(-288px)
    }
    77.77777777777777% {
      -webkit-transform: translateY(-336px);
      transform: translateY(-336px)
    }
    81.48148148148148% {
      -webkit-transform: translateY(-336px);
      transform: translateY(-336px)
    }
    88.88888888888889% {
      -webkit-transform: translateY(-384px);
      transform: translateY(-384px)
    }
    92.5925925925926% {
      -webkit-transform: translateY(-384px);
      transform: translateY(-384px)
    }
    100.0% {
      -webkit-transform: translateY(-432px);
      transform: translateY(-432px)
    }
  }

  @keyframes scroll-mobile {
    0.0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    3.7037037037037037% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px)
    }
    11.11111111111111% {
      -webkit-transform: translateY(-48px);
      transform: translateY(-48px)
    }
    14.814814814814815% {
      -webkit-transform: translateY(-48px);
      transform: translateY(-48px)
    }
    22.22222222222222% {
      -webkit-transform: translateY(-96px);
      transform: translateY(-96px)
    }
    25.925925925925927% {
      -webkit-transform: translateY(-96px);
      transform: translateY(-96px)
    }
    33.333333333333336% {
      -webkit-transform: translateY(-144px);
      transform: translateY(-144px)
    }
    37.03703703703704% {
      -webkit-transform: translateY(-144px);
      transform: translateY(-144px)
    }
    44.44444444444444% {
      -webkit-transform: translateY(-192px);
      transform: translateY(-192px)
    }
    48.148148148148145% {
      -webkit-transform: translateY(-192px);
      transform: translateY(-192px)
    }
    55.55555555555556% {
      -webkit-transform: translateY(-240px);
      transform: translateY(-240px)
    }
    59.25925925925926% {
      -webkit-transform: translateY(-240px);
      transform: translateY(-240px)
    }
    66.66666666666667% {
      -webkit-transform: translateY(-288px);
      transform: translateY(-288px)
    }
    70.37037037037037% {
      -webkit-transform: translateY(-288px);
      transform: translateY(-288px)
    }
    77.77777777777777% {
      -webkit-transform: translateY(-336px);
      transform: translateY(-336px)
    }
    81.48148148148148% {
      -webkit-transform: translateY(-336px);
      transform: translateY(-336px)
    }
    88.88888888888889% {
      -webkit-transform: translateY(-384px);
      transform: translateY(-384px)
    }
    92.5925925925926% {
      -webkit-transform: translateY(-384px);
      transform: translateY(-384px)
    }
    100.0% {
      -webkit-transform: translateY(-432px);
      transform: translateY(-432px)
    }
  }
</style>
