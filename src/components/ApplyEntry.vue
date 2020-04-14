<template>
  <div class="sForm" style="width: 100%;" align="center">
    <div  class="title">
      <span style="font-size: 40px;font-weight: bold;">入驻申请表</span>
    </div>

    <div class="TablePart" style="width: 70%;min-width: 800px;margin-top: 30px;" align="left">
      <div class="rowBorder1" style="width:100%;height:40px;margin-top: 20px;">
        <div class="colBorder1"></div>
        <div class="colBorder1" style="background: #e5e9f2;"></div>
      </div>
      <el-form ref="submitForm" :model="submitForm"	 :rules="submitRules" label-width="80px" :label-position="position">
        <div>
          <!--表单头部信息-->
          <el-row type="flex" class="row-bg">
            <el-col :span="9">
              <el-form-item label="团队名称:" label-width="100px;" prop="teamName">
                <el-input placeholder="请输入团队名称" v-model="submitForm.teamName"  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">&emsp;&emsp;</el-col>
            <el-col :span="6">
              <el-form-item label="所属领域:"label-width="100px;" prop="belondField">
                <el-select v-model="submitForm.belondField">
                  <el-option v-for="item in belongFieldData" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
                <!--<el-input placeholder="选择所属领域" v-model="submitForm.belondField" ></el-input>-->
              </el-form-item>
            </el-col>
          </el-row>
          <br/>
          <el-row type="flex" class="row-bg">
            <el-col :span="9">
              <el-form-item label="项目名称:"label-width="120px;" prop="projectName">
                <el-input placeholder="请输入项目名称" v-model="submitForm.projectName" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">&emsp;&emsp; </el-col>
            <el-col :span="6">
              <el-form-item label="项目类型:" label-width="120px;" prop="projectType">
                <!--<el-input placeholder="选择项目类型" v-model="submitForm.projectType" ></el-input>-->
                <el-select v-model="submitForm.projectType">
                  <el-option v-for="item in projectTypes" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <!--边界-->
        <div class="rowBorder1" style="width:100%;height:40px;margin-top: 20px;">
          <div class="colBorder1"></div>
          <div class="colBorder1" style="background: #e5e9f2;"></div>
        </div>
        <!--成员信息表格-->
        <div style="border-radius: 6px;height:40px; margin-top: 10px;">
          <div style="display: inline-block;width:45%;"align="left">
            <p style="font-size:24px;margin-top: 20px;color:#409EFF;">成员（第一名为项目负责人）<i class="el-icon-arrow-down"/></p>
          </div>
          <div style="display: inline-block;width:45%;"align="right">
            <el-button  type="primary" size="medium" @click="newMember" plain>添加成员</el-button>
          </div>
        </div>
        <div style="margin-top: 30px;">
          <el-table  :data="submitMembers" border   style="width: 95%;margin-top: 20px;" max-height="200">
            <el-table-column prop="name" label="姓名" width="80"></el-table-column>
            <el-table-column prop="stuNumber" label="学号" width="115"></el-table-column>
            <el-table-column prop="academe" label="学院" width="80"></el-table-column>
            <el-table-column prop="eduBack" label="学历" width="80"></el-table-column>
            <el-table-column prop="phone" label="电话" width="115"></el-table-column>
            <el-table-column prop="Email" label="邮箱" width="130"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <div>
                  <!--编辑-->
                  <el-button @click.native.prevent="editMember(scope.$index, submitMembers)" type="success" icon="el-icon-edit" circle></el-button>
                  <!--删除-->
                  <el-button @click.native.prevent="deleteMember(scope.$index, submitMembers)" type="danger" icon="el-icon-delete" circle></el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div align="left">
          <!--修改表单页面-->
          <el-dialog :visible.sync="editMemberVisible" :close-on-click-modal="false"  :show-close="false" :modal="false" title="修改成员信息" @open="openCheck()" style="height: 800px;" >
            <el-form :model="dialogFormEdit" :rules="dialogRules" ref="dialogFormEdit" label-width="100px" class="demo-ruleForm" >
              <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
                <el-input v-model="dialogFormEdit.name" auto-complete="off" ></el-input>
              </el-form-item>
              <el-form-item label="学号" prop="stuNumber" :label-width="formLabelWidth">
                <el-input v-model="dialogFormEdit.stuNumber" placeholder="请输入您的学号"></el-input>
              </el-form-item>
              <el-form-item label="学院" prop="academe" :label-width="formLabelWidth">
                <el-select v-model="dialogFormEdit.academe " placeholder="请选择学院" style="width: 100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学历" prop="eduBack" :label-width="formLabelWidth">
                <el-select v-model="dialogFormEdit.eduBack" placeholder="请选择学历" style="width: 100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
                <!--<el-input v-model="dialogFormEdit.eduBack" auto-complete="off"></el-input>-->
              </el-form-item>
              <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
                <el-input v-model="dialogFormEdit.phone" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="Email" :label-width="formLabelWidth">
                <el-input v-model="dialogFormEdit.Email" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitEdit('dialogFormEdit')">提交修改</el-button>
              <el-button @click="resetEdit('dialogFormEdit')">取 消</el-button>
            </div>
          </el-dialog>
        </div>

        <!--<div align="left">-->
          <!--创建表单页面-->
          <el-dialog :visible.sync="newMemberVisible" :close-on-click-modal="false" :modal="false" :show-close="false" title="新增成员信息" style="height: 800px" >
            <el-form :model="dialogFormNew" :rules="dialogRules" ref="dialogFormNew" label-width="100px" class="demo-ruleForm" >
              <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
                <el-input v-model="dialogFormNew.name" auto-complete="off" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="学号" prop="stuNumber" :label-width="formLabelWidth">
                <el-input v-model="dialogFormNew.stuNumber" placeholder="请输入您的学号"></el-input>
              </el-form-item>
              <el-form-item label="学院" prop="academe"  >
                <el-select v-model="dialogFormNew.academe " placeholder="请选择学院" style="width: 100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <!--<el-form-item label="学院" prop="academe" :label-width="formLabelWidth">-->
                <!--<el-input v-model="dialogFormNew.academe" auto-complete="off" placeholder="请输入学院"></el-input>-->
              <!--</el-form-item>-->
              <el-form-item label="学历" prop="eduBack" :label-width="formLabelWidth">
                <!--<el-input v-model="dialogFormNew.eduBack" auto-complete="off" placeholder="请输入学历"></el-input>-->
                <el-select v-model="dialogFormNew.eduBack " placeholder="请选择学历" style="width: 100%">
                  <el-option
                    v-for="item in eduOptions"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
                <el-input v-model="dialogFormNew.phone" auto-complete="off" placeholder="请输入电话"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="Email" :label-width="formLabelWidth">
                <el-input v-model="dialogFormNew.Email" auto-complete="off" placeholder="请输入邮箱"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button id="create" type="primary" @click="submitNew('dialogFormNew')">立即创建</el-button>
              <el-button type="danger" @click="resetNew('dialogFormNew')">放 弃</el-button>
            </div>
          </el-dialog>
        <!--</div>-->
        <!--边界-->
        <div class="rowBorder2" style="width:100%;height:40px;margin-top: 50px;">
          <div class="colBorder2"></div>
          <div class="colBorder2" style="background: #e5e9f2;"></div>
          <div class="colBorder2"></div>
        </div>
        <!--尾部信息表单-->
        <div style="margin-top: 40px;width:95%;">
          <el-tabs tab-position="top" style="height: 250px;">
            <el-tab-pane label="项目简述" >
              <el-form-item prop="projectBrief" label-width="0px;">
                <el-input type="textarea" :rows="9" v-model="submitForm.projectBrief" ></el-input>
                <span class="num-of-input" v-if="numOfBrief>0">还可输入{{numOfBrief}}字</span>
              </el-form-item>

            </el-tab-pane>
            <el-tab-pane label="主营业务">
              <el-form-item prop="projectDirector" label-width="0px;">
                <el-input type="textarea" :rows="9"  v-model="submitForm.projectDirector"></el-input>
                <span class="num-of-input" v-if="numOfDirector>0">还可输入{{numOfDirector}}字</span>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="前期基础">
              <el-form-item prop="workFoundation" label-width="0px;">
                <el-input type="textarea":rows="9"  v-model="submitForm.workFoundation"></el-input>
                <span class="num-of-input" v-if="numOfFoundation>0">还可输入{{numOfFoundation}}字</span>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="项目计划">
              <el-form-item prop="plan" label-width="0px;">
                <el-input type="textarea":rows="9"  v-model="submitForm.plan" ></el-input>
                <span class="num-of-input" v-if="numOfPlan>0" >还可输入{{numOfPlan}}字</span>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!--上传文件-->
        <div style="width:97%;margin-top: 40px;">
          <!--<div style="color:#409EF0;margin-top: 10px;"><label style="color:red">*</label>请上传相关文件:-->

            <!--<el-upload-->
              <!--class="upload-demo"-->
              <!--:action="$axios.defaults.baseURL+'/downloadfile/uploadFile'"-->
              <!--multiple-->
              <!--:limit="1">-->
              <!--<br/>-->
              <!--<el-button type="primary" size="small" plain @click="alert('111')"><i class="el-icon-upload"/>  上传文件</el-button>-->
              <!--<div slot="tip" class="el-upload__tip">-->
                <!--请上传申请书，策划书及其他对项目情况审核有帮助的材料<br/>-->
                <!--支持zip格式<br/>-->
              <!--</div>-->
            <!--</el-upload>-->
          <!--</div>-->
        </div>
        <!--提交按钮-->
        <div align  ="center" style="margin-top: 80px;margin-bottom: 70px;">
          <el-tooltip class="item" effect="dark" content="服务器君反应较慢，请耐心等候哦~~" placement="top">
            <div>
              <el-button v-show="!isSubmit" type="primary" size="medium" @click="submitAll">提交（下一步可提交附件）</el-button>
              <el-button v-show="isSubmit" type="primary" size="medium" disabled icon="el-icon-loading">正在提交请耐心等待</el-button>
            </div>
          </el-tooltip>
        </div>
      </el-form>
      <!--上传文件-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "userSubmitForm",
    computed:{
      numOfBrief:function () {
        return 500-this.$data.submitForm.projectBrief.length;
      },
      numOfDirector:function () {
        return 500-this.$data.submitForm.projectDirector.length;
      },
      numOfFoundation:function () {
        return 500-this.$data.submitForm.workFoundation.length;
      },
      numOfPlan:function () {
        return 500-this.$data.submitForm.plan.length;
      }
    },
    data(){
      return {
        isSubmit:false,
        eduOptions:[
          {
            value:'本科'
          },
          {
            value:'硕士'
          },
          {
            value:'博士'
          },
          {
            value:'博士后'
          }
        ],
        options: [{
          value: '人文学院',
        },{
          value: '新闻传播学院',
        }, {
          value: '外文学院',
        },{
          value: '艺术学院',
        },{
          value: '海外教育学院',
        }, {
          value: '国际学院',
        }, {
          value: '经济学院',
        },{
          value: '管理学院',
        },{
          value: '法学院',
        }, {
          value: '公共事务学院',
        },{
          value: '马克思主义学院',
        }, {
          value: '国际关系学院',
        }, {
          value: '教育研究院',
        }, {
          value: '体育教学部',
        }, {
          value: '继续教育学院',
        }, {
          value: '数学科学学院',
        }, {
          value: '物理科学与技术学院',
        }, {
          value: '化学化工学院',
        }, {
          value: '信息科学与技术学院',
        }, {
          value: '软件学院',
        }, {
          value: '材料学院',
        }, {
          value: '建筑与土木工程学院',
        }, {
          value: '能源学院',
        }, {
          value: '航空航天学院',
        }, {
          value: '电子科学与技术学院',
        }, {
          value: '生命科学学院',
        }, {
          value: '公共卫生学院',
        }, {
          value: '药学院',
        }, {
          value: '医学院',
        }, {
          value: '其他学院',
        }, ],
        projectTypes:[
          {value:'金融'},
          {value:'医疗'},
          {value:'教育'},
          {value:'文化'},
          {value:'其他'}
        ],
        belongFieldData:[
          {value:'竞赛'},
          {value:'科研'},
          {value:'其他'}
        ],
        submitForm: {         //主表单数据
          teamName: '',
          belondField: '',
          projectName:'',
          projectType:'',
          projectBrief:'',
          projectDirector:'',
          workFoundation:'',
          plan:'',
        },
        submitRules:{        //主表单验证
          teamName:[
            { validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false){
                  callback(new Error("请输入您的团队名称"));
                }else{
                  callback();
                }
              },required: true, trigger: '' },
          ],
          belondField: [
            { validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false){
                  callback(new Error("选择所属领域"));
                }else{
                  callback();
                }
              },required: true, trigger: '' },
          ],
          projectName:[
            { validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false){
                  callback(new Error("请输入项目名称"));
                }else{
                  callback();
                }
              },required: true, trigger: '' },
          ],
          projectType:[
            { validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false){
                  callback(new Error("选择项目类型"));
                }else{
                  callback();
                }
              },required: true, trigger: '' },
          ],
          projectBrief:[
            {required: true, trigger: 'change',message:'输入不能为空' },
            {max:500,trigger:'change',message:'输入超过500字限制'}
          ],
          projectDirector:[
            { required: true, trigger: 'change',message:'输入不能为空' },
            {max:500,trigger:'change',message:'输入超过500字限制'}
          ],
          workFoundation:[
            {required: true, trigger: 'change',message:'输入不能为空' },
            {max:500,trigger:'change',message:'输入超过500字限制'}
          ],
          plan:[
            {required: true, trigger: 'change',message:'输入不能为空' },
            {max:500,trigger:'change',message:'输入超过500字限制'}
          ],
        },
        submitMembers:[           //成员信息列表
           ],
        dialogFormEdit:{          //弹出成员编辑表单
          name:'',
          academe:'',
          stuNumber:'',
          eduBack:'',
          phone:'',
          Email:'',
        },
        dialogFormNew:{          //弹出成员新增表单
          name:'',
          academe:'',
          stuNumber:'',
          eduBack:'',
          phone:'',
          Email:'',
        },
        memberModel:{
          name:'',
          student_id:'',
          college:'',
          education_background:'',
          phone:'',
          email:''
        },
        flag:{                 //验证结果
          name:false,
          academe:false,
          stuNumber:false,
          eduBack:false,
          phone:false,
          Email:false,
        } ,
        dialogRules:{       //弹出表单验证
          name:[{
            validator: (rule, value, callback) => {
              if (/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false) {
                this.$data.flag.name=false;
                callback(new Error("输入无效"));
              } else {
                this.$data.flag.name=true;
                callback();
              }
            },required:true,trigger:''}   ],
          academe:[{
            // validator: (rule, value, callback) => {
            //   if (/^[\u4e00-\u9fa5A-Za-z0-9-_]{1,}$/.test(value) == false) {
            //     this.$data.flag.academe=false;
            //     callback(new Error("输入无效"));
            //   } else {
            //     this.$data.flag.academe=true;
            //     callback();
            //   }
            // },required:true,trigger:''},{
            required:true,trigger:'change',message:'请选择学院'
          } ],
          stuNumber:[
            {required:true,min:14,max:14,message:'请输入正确位数的学号',trigger:'change'}],
          eduBack:[{required:true,message:'请选择学历',trigger:'blur'} ],
          phone:[{
            validator: (rule, value, callback) => {
              if(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value) == false){
                this.$data.flag.phone=false;
                callback(new Error("请输入有效电话"));
              } else {
                this.$data.flag.phone=true;
                callback();
              }
            },required:true,trigger:''} ],
          Email:[{
            validator: (rule, value, callback) => {
              if(/[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value) == false) {
                this.$data.flag.Email=false;
                callback(new Error("请输入有效邮箱"));
              } else {
                this.$data.flag.Email=true;
                callback();
              }
            },required:true,trigger:''} ],
        },
        position:'left',
        formLabelWidth:'100px',
        editMemberVisible:false,
        newMemberVisible:false,
        index:'',     //当前成员位置索引
        fileList: []
      }
    },
    methods:{
      deleteMember(index, rows) {                          //删除该记录
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      editMember(index,rows){                           //成员编辑
        this.$data.editMemberVisible=true;
        this.$data.index=index;

        this.$data.dialogFormEdit.name=rows[index].name;
        this.$data.dialogFormEdit.academe=rows[index].academe;
        this.$data.dialogFormEdit.eduBack=rows[index].eduBack;
        this.$data.dialogFormEdit.stuNumber=rows[index].stuNumber;
        this.$data.dialogFormEdit.phone=rows[index].phone;
        this.$data.dialogFormEdit.Email=rows[index].Email;

        this.$data.flag.name=true;
        this.$data.flag.eduBack=true;
        this.$data.flag.academe=true;
        this.$data.flag.stuNumber=true;
        this.$data.flag.phone=true;
        this.$data.flag.Email=true;

      },
      submitEdit(formName){                       //提交修改
        if(this.$data.flag.name&&this.$data.flag.academe&&this.$data.flag.stuNumber&&this.$data.flag.phone&&this.$data.flag.Email)
        {
          this.$data.submitMembers[this.$data.index].name=this.$data.dialogFormEdit.name;
          this.$data.submitMembers[this.$data.index].eduBack=this.$data.dialogFormEdit.eduBack;
          this.$data.submitMembers[this.$data.index].stuNumber=this.$data.dialogFormEdit.stuNumber;
          this.$data.submitMembers[this.$data.index].academe=this.$data.dialogFormEdit.academe;
          this.$data.submitMembers[this.$data.index].phone=this.$data.dialogFormEdit.phone;
          this.$data.submitMembers[this.$data.index].Email=this.$data.dialogFormEdit.Email;

          this.$data.dialogFormEdit.name='';
          this.$data.dialogFormEdit.eduBack='';
          this.$data.dialogFormEdit.stuNumber='';
          this.$data.dialogFormEdit.academe='';
          this.$data.dialogFormEdit.phone='';
          this.$data.dialogFormEdit.Email='';

          this.$data.flag.name=false;
          this.$data.flag.eduBack=false;
          this.$data.flag.academe=false;
          this.$data.flag.stuNumber=false;
          this.$data.flag.phone=false;
          this.$data.flag.Email=false;

          this.$data.editMemberVisible=false;
          this.$refs[formName].resetFields();
        }
        else{
          this.$notify.error({
            title: '错误',
            message: '创建输入无效，请修正输入'
          });
        }
      },
      resetEdit(formName){              //取消修改
        this.$data.dialogFormEdit.name='';
        this.$data.dialogFormEdit.eduBack='';
        this.$data.dialogFormEdit.stuNumber='';
        this.$data.dialogFormEdit.academe='';
        this.$data.dialogFormEdit.phone='';
        this.$data.dialogFormEdit.Email='';

        this.$data.flag.name=false;
        this.$data.flag.eduBack=false;
        this.$data.flag.academe=false;
        this.$data.flag.stuNumber=false;
        this.$data.flag.phone=false;
        this.$data.flag.Email=false;

        this.$data.editMemberVisible=false;
        this.$refs[formName].resetFields();
      },
      newMember(){
        this.$data.newMemberVisible=true;
      },
      submitAll(){
        let _this=this;

        this.$refs['submitForm'].validate((valid)=>{
          if(valid){
            let submit=[];
            for(let index=0;index<this.$data.submitMembers.length;index++){
              var memberModel=new Object();
              memberModel.name=this.$data.submitMembers[index].name;
              memberModel.student_id=this.$data.submitMembers[index].stuNumber;
              memberModel.college=this.$data.submitMembers[index].academe;
              memberModel.education_background=this.$data.submitMembers[index].eduBack;
              memberModel.phone=this.$data.submitMembers[index].phone;
              memberModel.email=this.$data.submitMembers[index].Email;
              submit.push(memberModel)
            }
            console.log(submit);

            /**
             * 在这里验证是否有重复的个人信息
             */
            let flag=true;
            for(let index=0;index<submit.length;index++){
              for(let i=index+1;i<submit.length;i++){
                if(submit[index].student_id===submit[i].student_id){
                  flag=false;
                }
              }
            }
            if(submit.length===0){
              flag=false;
            }

            if(flag===false){
              this.$message({
                type:'error',
                message:'组员信息有重复或未加入任何组员'
              })
            }else{
              this.$data.isSubmit=true;


            this.$axios({
              method:'post',
              url:'/TeamManagement/submitNewTeam',
              data:{
                team_name:this.$data.submitForm.teamName,
                project_name:this.$data.submitForm.projectName,
                belong_field:this.$data.submitForm.belondField,
                project_type:this.$data.submitForm.projectType,
                project_brief:this.$data.submitForm.projectBrief,
                project_derector:this.$data.submitForm.projectDirector,
                plan:this.$data.submitForm.plan,
                work_foundation:this.$data.submitForm.workFoundation,
                newStudents:submit
              }
            }).then(function (response) {
              if(response.data.ok==='true'){
                alert('申请成功！您的申请验证码为'+response.data.account);
                _this.$router.push({path:'/ApplyInformation',query:{account:response.data.account}});
              }else{
                _this.$message({
                  type:'error',
                  message:'申请失败！请查看是否在申请期内'
                })

              }
              _this.$data.isSubmit=false;
            }).catch(err=>{
              _this.message({
                type:'error',
                message:'服务器出了点问题...'
              })
              _this.$data.isSubmit=false;
            })
            }
          }else{
            this.$message({
              type:'error',
              message:'有些的地方没有填好哦，再检查检查'
            })
          }
        }
        )


      },
      submitNew(formName){              //新建
        this.$refs[formName].validate((valid)=>{
          if(valid){
         
          this.$data.submitMembers.push({
            name: this.$data.dialogFormNew.name,
            eduBack: this.$data.dialogFormNew.eduBack,
            academe: this.$data.dialogFormNew.academe,
            stuNumber: this.$data.dialogFormNew.stuNumber,
            phone: this.$data.dialogFormNew.phone,
            Email: this.$data.dialogFormNew.Email,
          });
          this.$data.flag.name=false;         //验证状态恢复
          this.$data.flag.eduBack=false;
          this.$data.flag.academe=false;
          this.$data.flag.stuNumber=false;
          this.$data.flag.phone=false;
          this.$data.flag.Email=false;
          this.$data.newMemberVisible = false;
          this.$refs[formName].resetFields();
        }
        else{
          this.$notify.error({
            title: '错误',
            message: '创建输入无效，请修正输入'
          });
        }})
      },
      resetNew(formName){                  //取消新建
        this.$data.flag.name=false;         //验证状态恢复
        this.$data.flag.eduBack=false;
        this.$data.flag.academe=false;
        this.$data.flag.stuNumber=false;
        this.$data.flag.phone=false;
        this.$data.flag.Email=false;

        this.$data.newMemberVisible=false;
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeAvatarUpload(){                 //限制文件大小

      }
    }
  }
</script>

<style scoped>

  .num-of-input{
    font-size: 12px;
  }

  .colBorder1{
    width:46%;
    height:40px;
    display: inline-block;
    border-radius: 6px;
    margin-right: 2%;
    background: #d3dce6;
  }
  .colBorder2{
    width:30%;
    display: inline-block;
    height:40px;
    border-radius: 6px;
    margin-right: 2%;
    background: #d3dce6;
  }
</style>
